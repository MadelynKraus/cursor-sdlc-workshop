# Phoebe Philo Mock Review Board

Small FastAPI MVP for reviewing mock fashion listings locally.

## Includes
- Local JSON data
- Editorial-style listing cards
- Filters for category, review status, and new items
- Summary stats
- Curator's Pick highlight based on the current filters

## Setup
```bash
cd /Users/ranikubersky/cursor-sdlc-workshop/projects/ranikubersky/base_mvp
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run
```bash
cd /Users/ranikubersky/cursor-sdlc-workshop/projects/ranikubersky/base_mvp
source .venv/bin/activate
uvicorn app.main:app --host 127.0.0.1 --port 8787
```

Open `http://127.0.0.1:8787/live`
