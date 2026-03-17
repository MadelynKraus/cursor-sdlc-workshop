import json
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_PATH = BASE_DIR / "data" / "listings.json"
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

app = FastAPI(title="Phoebe Philo Mock Review")
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")

REFERENCE_IMAGE_URLS = [
    "/static/images/phoebe-01.jpg",
    "/static/images/phoebe-02.jpg",
    "/static/images/phoebe-03.jpg",
    "/static/images/phoebe-04.jpg",
    "/static/images/phoebe-05.jpg",
    "/static/images/phoebe-06.jpg",
]


def load_payload() -> dict:
    with DATA_PATH.open("r", encoding="utf-8") as fh:
        payload = json.load(fh)

    listings = payload.get("listings", [])
    for index, item in enumerate(listings):
        item["image_url"] = REFERENCE_IMAGE_URLS[index % len(REFERENCE_IMAGE_URLS)]
        item["image_credit"] = "Reference image from Vogue Runway"
    stats = {
        "total": len(listings),
        "new_count": sum(1 for item in listings if item.get("is_new")),
        "buy_count": sum(1 for item in listings if item.get("review_status") == "Buy"),
        "maybe_count": sum(1 for item in listings if item.get("review_status") == "Maybe"),
        "pass_count": sum(1 for item in listings if item.get("review_status") == "Pass"),
    }
    payload["stats"] = stats
    payload["categories"] = sorted({item["category"] for item in listings})
    payload["statuses"] = ["Buy", "Maybe", "Pass"]
    return payload


@app.get("/", response_class=HTMLResponse)
def home() -> RedirectResponse:
    return RedirectResponse(url="/live", status_code=302)


@app.get("/live", response_class=HTMLResponse)
def live(request: Request) -> HTMLResponse:
    return templates.TemplateResponse("live.html", {"request": request})


@app.get("/api/live")
def api_live() -> JSONResponse:
    return JSONResponse(load_payload())
