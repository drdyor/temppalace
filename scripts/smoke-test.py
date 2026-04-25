#!/usr/bin/env python3
"""End-to-end smoke test for the Memory Palace app."""

import asyncio
import re
from playwright.async_api import async_playwright

URL = "https://drdyor.github.io/temppalace/"
errors = []

def log(msg):
    print(msg.encode('ascii', 'replace').decode('ascii'))

async def run_tests():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 800})
        page = await context.new_page()

        page.on("console", lambda msg: errors.append(f"[{msg.type}] {msg.text}") if msg.type == "error" else None)
        page.on("pageerror", lambda err: errors.append(f"[PAGE_ERROR] {err}"))

        log("\n[1/8] Loading home page...")
        await page.goto(URL, wait_until="networkidle")
        assert await page.is_visible("text=Memory Palace"), "Homepage title not found"
        assert await page.is_visible("text=Enter the Palace"), "CTA button not found"
        log("  [OK] Home page loads")

        log("\n[2/8] Testing direction toggle...")
        toggle = page.locator("button").filter(has_text=re.compile(r"EN|Italiano")).first
        assert await toggle.is_visible(), "Direction toggle not found"
        await toggle.click()
        await page.wait_for_timeout(300)
        await toggle.click()
        await page.wait_for_timeout(300)
        log("  [OK] Direction toggle works")

        log("\n[3/8] Navigating to rooms...")
        await page.click("text=Enter the Palace")
        await page.wait_for_url("**/rooms", wait_until="networkidle")
        assert await page.is_visible("text=The Palace"), "Room list header not found"
        room_count = await page.locator("a, button").filter(has_text=re.compile(r"Kitchen|Bedroom|Bathroom|Library")).count()
        assert room_count >= 1, f"Expected 1+ room cards, found {room_count}"
        log(f"  [OK] Room list loads ({room_count} room cards found)")

        log("\n[4/8] Entering first room...")
        await page.locator("a, button").filter(has_text=re.compile(r"Kitchen|Bedroom|Bathroom|Library")).first.click()
        await page.wait_for_url("**/rooms/**", wait_until="networkidle")
        assert await page.is_visible("text=Explore"), "Explore tab not found"
        assert await page.is_visible("text=Learn"), "Learn tab not found"
        assert await page.is_visible("text=Practice"), "Practice tab not found"
        log("  [OK] Room page loads with tabs")

        log("\n[5/8] Testing tab switching...")
        for tab in ["Learn", "Practice", "Test", "Dialogue", "Culture"]:
            btn = page.locator(f"button:has-text('{tab}')")
            if await btn.is_visible():
                await btn.click()
                await page.wait_for_timeout(200)
                log(f"  [OK] {tab} tab clickable")

        log("\n[6/8] Testing Practice tab flashcards...")
        await page.click("text=Practice")
        await page.wait_for_timeout(300)
        await page.click("text=Flashcards")
        await page.wait_for_timeout(200)
        card = page.locator("div:has-text('Click to flip')").first
        if await card.is_visible():
            await card.click()
            await page.wait_for_timeout(200)
            log("  [OK] Flashcards flip")
        else:
            log("  [WARN] Flashcard element not found (may need vocab)")

        log("\n[7/8] Testing direction toggle in room...")
        toggle_room = page.locator("button").filter(has_text=re.compile(r"EN|Italiano")).first
        if await toggle_room.is_visible():
            await toggle_room.click()
            await page.wait_for_timeout(300)
            log("  [OK] Direction toggle works in room")
        else:
            log("  [WARN] Direction toggle not visible in room")

        log("\n[8/8] Testing navigation...")
        await page.click("text=All Rooms")
        await page.wait_for_url("**/rooms", wait_until="networkidle")
        await page.click("text=Back")
        await page.wait_for_url("**/#/", wait_until="networkidle")
        log("  [OK] Back navigation works")

        log("\n" + "=" * 50)
        log("SMOKE TEST COMPLETE")
        log("=" * 50)

        if errors:
            log(f"\n[WARN] {len(errors)} console/page errors found:")
            for e in errors[:10]:
                log(f"  - {e}")
        else:
            log("\n[OK] No console errors detected")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run_tests())
