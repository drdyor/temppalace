#!/usr/bin/env python3
"""
Generate a human-readable Markdown audit report from JSON results.

Usage:
    python scripts/generate-audit-report.py audit-results-italian.json

Appends to or creates a dated report in audits/.
"""

import json
import re
import sys
from pathlib import Path
from datetime import datetime

PROJECT_ROOT = Path(__file__).parent.parent
AUDITS_DIR = PROJECT_ROOT / "audits"

def parse_status(audit_text: str) -> str:
    """Extract STATUS from audit response."""
    m = re.search(r'STATUS:\s*(PASS|NEEDS_FIX|MAJOR_ISSUE)', audit_text)
    if m:
        return m.group(1)
    # Fallback: if no explicit status but 10/10 naturalness + no issues
    if '10/10' in audit_text and ('None' in audit_text or 'No changes needed' in audit_text):
        return 'PASS'
    if 'MAJOR_ISSUE' in audit_text:
        return 'MAJOR_ISSUE'
    if 'NEEDS_FIX' in audit_text:
        return 'NEEDS_FIX'
    return 'UNCLEAR'

def parse_score(audit_text: str) -> str:
    """Extract naturalness score."""
    m = re.search(r'NATURALNESS:\s*(\d+/\d+)', audit_text)
    return m.group(1) if m else '?'

def parse_notes(audit_text: str) -> str:
    """Extract NOTES section."""
    m = re.search(r'NOTES:\s*(.+?)(?:\n\n|\Z)', audit_text, re.DOTALL)
    if m:
        return m.group(1).strip().replace('\n', ' ')
    return ''

def parse_issues(audit_text: str) -> str:
    """Extract ISSUES section."""
    m = re.search(r'ISSUES:\s*(.+?)(?:\nSUGGESTED_FIX:|\Z)', audit_text, re.DOTALL)
    if m:
        issues = m.group(1).strip()
        if issues and issues.lower() not in ('none', 'no issues', '-'):
            return issues.replace('\n', ' ')
    return ''

def generate_report(json_path: Path, model_name: str = 'unknown') -> str:
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    date_str = datetime.now().strftime('%Y-%m-%d')
    time_str = datetime.now().strftime('%H:%M')

    # Categorize
    passed = []
    needs_fix = []
    major = []
    unclear = []

    for item in data:
        status = parse_status(item.get('audit', ''))
        item['_status'] = status
        item['_score'] = parse_score(item.get('audit', ''))
        item['_notes'] = parse_notes(item.get('audit', ''))
        item['_issues'] = parse_issues(item.get('audit', ''))

        if status == 'PASS':
            passed.append(item)
        elif status == 'NEEDS_FIX':
            needs_fix.append(item)
        elif status == 'MAJOR_ISSUE':
            major.append(item)
        else:
            unclear.append(item)

    total = len(data)
    pass_pct = len(passed) / total * 100 if total else 0

    lines = []
    lines.append(f"# Italian Content Audit — {date_str}")
    lines.append("")
    lines.append(f"**Date:** {date_str} @ {time_str}  ")
    lines.append(f"**Model:** {model_name}  ")
    lines.append(f"**Items audited:** {total}  ")
    lines.append(f"**Pass rate:** {len(passed)}/{total} ({pass_pct:.1f}%)  ")
    lines.append("")
    lines.append("| Status | Count |")
    lines.append("|--------|-------|")
    lines.append(f"| PASS | {len(passed)} |")
    lines.append(f"| NEEDS_FIX | {len(needs_fix)} |")
    lines.append(f"| MAJOR_ISSUE | {len(major)} |")
    lines.append(f"| UNCLEAR | {len(unclear)} |")
    lines.append("")

    # --- Flagged items (anything not clean PASS) ---
    flagged = needs_fix + major + unclear
    if flagged:
        lines.append("## Flagged Items (Require Review)")
        lines.append("")
        for item in flagged:
            lines.append(f"### `{item['id']}` ({item['type']}) — {item['_status']}")
            lines.append(f"- **Naturalness:** {item['_score']}")
            if item['_issues']:
                lines.append(f"- **Issues:** {item['_issues']}")
            if item['_notes']:
                lines.append(f"- **Notes:** {item['_notes']}")
            lines.append("")
            lines.append("<details>")
            lines.append("<summary>Raw audit response</summary>")
            lines.append("")
            lines.append("```")
            lines.append(item.get('audit', '').strip())
            lines.append("```")
            lines.append("</details>")
            lines.append("")
        lines.append("---")
        lines.append("")

    # --- Full inventory ---
    lines.append("## Full Inventory")
    lines.append("")
    lines.append("| # | ID | Type | Status | Score | Notes |")
    lines.append("|---|----|------|--------|-------|-------|")
    for i, item in enumerate(data, 1):
        notes_short = item['_notes'][:60] + '...' if len(item['_notes']) > 60 else item['_notes']
        notes_escaped = notes_short.replace('|', '\\|').replace('\n', ' ')
        lines.append(f"| {i} | `{item['id']}` | {item['type']} | {item['_status']} | {item['_score']} | {notes_escaped} |")
    lines.append("")
    lines.append("---")
    lines.append("")

    # --- Human review section ---
    lines.append("## Human Review Notes")
    lines.append("")
    lines.append("_Use this section to record manual review decisions, fixes applied, or disagreements with the model's assessment._")
    lines.append("")
    lines.append("### Items we fixed")
    lines.append("| ID | Issue | Fix applied | Date |")
    lines.append("|----|-------|-------------|------|")
    lines.append("| | | | |")
    lines.append("")
    lines.append("### Items we disagreed with the model on")
    lines.append("| ID | Model said | Our assessment | Reason |")
    lines.append("|----|------------|----------------|--------|")
    lines.append("| | | | |")
    lines.append("")
    lines.append("### General observations")
    lines.append("- ")
    lines.append("")

    return '\n'.join(lines)


def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/generate-audit-report.py <audit-results.json> [--model MODEL_NAME]")
        sys.exit(1)

    json_path = Path(sys.argv[1])
    if not json_path.is_absolute():
        json_path = PROJECT_ROOT / json_path

    model = 'unknown'
    if '--model' in sys.argv:
        idx = sys.argv.index('--model')
        if idx + 1 < len(sys.argv):
            model = sys.argv[idx + 1]

    report = generate_report(json_path, model)

    # Also try to extract model from run log
    log_path = PROJECT_ROOT / 'audit-run.log'
    if log_path.exists() and model == 'unknown':
        log_text = log_path.read_text(encoding='utf-8', errors='ignore')
        m = re.search(r'via\s+(\S+)', log_text)
        if m:
            model = m.group(1)

    date_str = datetime.now().strftime('%Y-%m-%d')
    out_name = f"audit-{date_str}-{model.replace(':', '-')}.md"
    out_path = AUDITS_DIR / out_name

    # If file exists, append a revision
    if out_path.exists():
        rev = 2
        while True:
            rev_name = f"audit-{date_str}-{model.replace(':', '-')}-rev{rev}.md"
            rev_path = AUDITS_DIR / rev_name
            if not rev_path.exists():
                out_path = rev_path
                break
            rev += 1

    AUDITS_DIR.mkdir(exist_ok=True)
    out_path.write_text(report, encoding='utf-8')
    print(f"Report written to: {out_path}")

    # Also update latest symlink/reference
    latest_path = AUDITS_DIR / "LATEST.md"
    if latest_path.exists() or not latest_path.exists():
        # Write a small pointer file
        latest_path.write_text(
            f"# Latest Audit Report\n\nSee: [{out_path.name}]({out_path.name})\n",
            encoding='utf-8'
        )


if __name__ == '__main__':
    main()
