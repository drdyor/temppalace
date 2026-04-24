# Content Audits

This directory contains dated audit reports for our language-learning content.

## Why we audit

Our app teaches real language. Every piece of Italian text — dialogues, vocabulary, grammar tips, cultural notes — is reviewed for:

- **Naturalness** — Does it sound like a native speaker?
- **Register** — Is tu/Lei used consistently and appropriately?
- **Level** — Is the grammar right for A1-A2 learners?
- **Accuracy** — Any grammar, spelling, or vocabulary errors?
- **Anglicisms** — Are there awkward English-to-Italian translations?

## How audits work

1. `scripts/audit-italian.py --batch --model <model>` sends every content item to a local LLM (via Ollama)
2. Results are saved to `audit-results-italian.json`
3. `scripts/generate-audit-report.py` converts the JSON to a human-readable Markdown report here

## Files

| File | Description |
|------|-------------|
| `LATEST.md` | Pointer to the most recent audit |
| `audit-YYYY-MM-DD-<model>.md` | Individual audit report |

## Human review

The model is a tool, not the final word. Every report includes a **Human Review Notes** section where we record:

- Items we fixed after the audit
- Cases where we disagreed with the model
- General observations about content quality trends

Edit these sections directly in the Markdown files — they are part of the permanent record.
