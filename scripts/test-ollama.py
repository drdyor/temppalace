import requests, json, sys

url = "http://localhost:11434/api/generate"
prompt = "Is 'Ciao! Mi chiamo Marco.' natural Italian? Answer PASS or NEEDS_FIX in one word."

for model in ["phi4", "qwen3:8b", "minerva:7b"]:
    try:
        print(f"Testing {model}...")
        resp = requests.post(url, json={"model": model, "prompt": prompt, "stream": False}, timeout=30)
        data = resp.json()
        print(f"  {model}: {data.get('response', 'NO RESPONSE')[:100]}")
    except Exception as e:
        print(f"  {model}: ERROR - {e}")
