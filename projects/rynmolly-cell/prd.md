# Product Requirements Document (PRD)

> **Instructions:** This is your project specification. Fill in the sections below to define what you're building.

---

## Project Overview

**Project Name:** _Flappy Cursor_

**One-line Description:** _A simple Flappy Bird-style game where you tap/press to flap and avoid scrolling pipes._

**Type:** _Web App (single page, HTML5 Canvas + JavaScript)_

---

## Guidelines

### Keep It Small!
- Your MVP should be buildable in **10 minutes**
- Think "proof of concept" not "production ready"
- If it sounds ambitious, make it simpler
- **Use Cursor to help you plan this!**
- This exercise is about learning the git flow and understanding where Cursor's features fit into the SDLC

### Good Project Ideas

**Pong** — classic paddle-and-ball game
- _Example features:_ scoreboard, sound effects, difficulty/speed settings

**Memory Card Match** — flip cards to find matching pairs
- _Example features:_ move counter, timer, win animation/confetti

**Drawing Pad** — simple canvas you can sketch on
- _Example features:_ color picker, brush size slider, eraser tool

**Typing Speed Game** — type a passage and measure your words per minute
- _Example features:_ WPM display, accuracy tracker, difficulty levels

**Trivia Quiz** — multiple choice questions with score tracking
- _Example features:_ timer per question, category selector, results summary screen

### Bad Project Ideas (Too Big!)
- Anything with a database — tell Cursor to avoid this
- Anything requiring authentication
- Anything with multiple pages/screens
- Anything that "needs" an API

---

## Base MVP

> Build the minimal working version of your project first.

**What the MVP includes:**
- A single HTML page with a canvas
- Bird/player physics (gravity + upward flap) controlled by `click` and `Space`
- Scrolling pipes with a single configurable gap size per pipe
- Collision detection (bird vs. pipes + ground) and a simple game-over state
- Score that increments when you pass through a pipe
- Restart control (e.g., `R` key or click) that resets the game to the start state

**What it does NOT include (stretch goals):**
- Sound effects/music
- High score persistence (no localStorage)
- Difficulty menus or multiple difficulty modes
- Touch-specific controls beyond basic click/tap
- Multiple levels, multiple screens/pages, or routing
- Any database, auth, or external APIs

---

## Features

> Plan out the features you want to add after the MVP is working. Each feature should be in its own component file to keep things organized.

### Feature 1: _[Name]_
- **Description:** Manage the game "mode" (not started, running, game over) and handle restart transitions without using multiple pages.
- **Files to create:** `src/state/gameState.js`, `src/state/inputHandlers.js` (or similar, matching your folder structure)

### Feature 2: _[Name]_
- **Description:** Centralize all canvas drawing so the same render loop draws the bird, pipes, gap, ground, and score (plus minimal "Press Space to Start" and "Game Over" text).
- **Files to create:** `src/render/renderCanvas.js`, `src/render/drawBird.js`, `src/render/drawPipes.js`

### Feature 3: _[Name]_
- **Description:** Implement the data + update logic for: bird physics (position/velocity/flap), pipes spawning/movement (gap placement), collision detection, and score increment when the bird passes a pipe.
- **Files to create:** `src/entities/bird.js`, `src/entities/pipeSystem.js`, `src/game/collisions.js`, `src/game/score.js`

---

## Success Criteria

- [ ] MVP runs locally
- [ ] At least one PR merged to the original repo
- [ ] Features work without breaking the base app
