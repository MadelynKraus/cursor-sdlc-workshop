# Cursor-Man — Base MVP

Pac-Man style game: move the Cursor logo through a maze, collect dots (Claude code icon), avoid ghosts, and win by eating all dots.

## Run locally

1. **From this folder** (`projects/caroscalercio/base_mvp/`), start a local server (so paths and optional images load correctly):
   ```bash
   python3 -m http.server 8000
   ```
2. Open in a browser: **http://localhost:8000/pacman.html**

## Controls

- Click the game canvas to focus, then use **Arrow keys** or **WASD** to move.
- Collect all yellow dots to win. Avoid the pink ghosts or it’s Game Over.

## Optional assets

For the full PRD look (Cursor logo as Pac-Man, Claude code icon as dots), add these in this folder:

- `cursor-logo.png` — Cursor logo (dark pixels are made transparent).
- `dot-icon.png` — Claude code icon (light/gray background made transparent).

If the images are missing, the game uses fallbacks: a yellow Pac-Man shape and yellow circles for dots. No assets are required to play.

## What’s included

- Single-file game: `pacman.html` (HTML, CSS, JS).
- Maze, score (10 pts per dot), two ghosts, win/lose screens.
- Matches the [PRD](../prd.md) in the project folder.
