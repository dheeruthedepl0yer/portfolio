/* Deploy Runner — an endless side-scroller. Press Space / tap / click to jump the
   deployment over incoming outage icons. Score is time survived; one hit ends the run.
   Self-contained; only touches #game-* elements. */
function initGame() {
  const stage = document.getElementById("game-stage");
  const overlay = document.getElementById("game-overlay");
  const startBtn = document.getElementById("game-start");
  const scoreEl = document.getElementById("game-score");
  const highEl = document.getElementById("game-high");
  if (!stage || !overlay || !startBtn) return;

  const OBSTACLE_ICONS = ["fa-solid fa-bug", "fa-solid fa-fire", "fa-solid fa-triangle-exclamation", "fa-solid fa-skull-crossbones", "fa-solid fa-bomb"];
  const HIGH_SCORE_KEY = "deployRunnerHighScore";

  const GROUND = 56;      // px reserved at the bottom for the ground line
  const PLAYER_LEFT = 46;
  const PLAYER_SIZE = 42;
  const OBST_SIZE = 36;
  const GRAVITY = 0.0022; // px/ms^2
  const JUMP_V = 0.85;    // px/ms

  let running = false;
  let score = 0;
  let elapsed = 0;
  let lastTs = 0;
  let spawnTimer = null;
  let rafId = null;

  let player, playerY = 0, playerVy = 0;
  let obstacles = [];

  function getHighScore() {
    return Number(localStorage.getItem(HIGH_SCORE_KEY) || 0);
  }

  function setHud() {
    scoreEl.textContent = score;
    highEl.textContent = getHighScore();
  }

  function jump() {
    if (!running || playerY > 0) return;
    playerVy = JUMP_V;
  }

  function spawnObstacle() {
    const icon = OBSTACLE_ICONS[(Math.random() * OBSTACLE_ICONS.length) | 0];
    const el = document.createElement("div");
    el.className = "runner-obstacle";
    el.innerHTML = `<i class="${icon}"></i>`;
    el.style.bottom = GROUND + "px";
    stage.appendChild(el);
    obstacles.push({ el, x: stage.clientWidth });
  }

  function rectsOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
  }

  function tick(ts) {
    if (!running) return;
    const dt = lastTs ? Math.min(ts - lastTs, 40) : 16;
    lastTs = ts;
    elapsed += dt;
    score = Math.floor(elapsed / 100);
    scoreEl.textContent = score;

    // Player physics
    playerVy -= GRAVITY * dt;
    playerY = Math.max(0, playerY + playerVy * dt);
    if (playerY <= 0) { playerY = 0; playerVy = 0; }
    player.style.bottom = (GROUND + playerY) + "px";

    // Obstacles
    const speed = 0.32 + Math.min(elapsed / 25000, 0.3); // px/ms, ramps up
    obstacles = obstacles.filter(o => {
      o.x -= speed * dt;
      o.el.style.left = o.x + "px";
      if (o.x < -OBST_SIZE) { o.el.remove(); return false; }

      const hit = rectsOverlap(
        PLAYER_LEFT, GROUND + playerY, PLAYER_SIZE, PLAYER_SIZE,
        o.x, GROUND, OBST_SIZE, OBST_SIZE
      );
      if (hit) endGame();
      return true;
    });

    rafId = requestAnimationFrame(tick);
  }

  function startSpawning() {
    const spawn = () => {
      if (!running) return;
      spawnObstacle();
      const nextDelay = Math.max(650, 1500 - elapsed / 40) + Math.random() * 300;
      spawnTimer = setTimeout(spawn, nextDelay);
    };
    spawn();
  }

  function startGame() {
    obstacles.forEach(o => o.el.remove());
    obstacles = [];
    score = 0;
    elapsed = 0;
    lastTs = 0;
    playerY = 0;
    playerVy = 0;

    overlay.classList.add("hidden");

    if (!player) {
      player = document.createElement("div");
      player.className = "runner-player";
      player.innerHTML = `<img src="${PROFILE.photo}" alt="" class="runner-player-img" />`;
      stage.appendChild(player);
    }
    player.style.bottom = GROUND + "px";

    running = true;
    setHud();
    startSpawning();
    rafId = requestAnimationFrame(tick);
  }

  function endGame() {
    running = false;
    clearTimeout(spawnTimer);
    cancelAnimationFrame(rafId);

    const best = getHighScore();
    if (score > best) localStorage.setItem(HIGH_SCORE_KEY, String(score));
    setHud();

    overlay.classList.remove("hidden");
    overlay.innerHTML = `
      <h3>Deployment failed</h3>
      <p>Score: <strong>${score}</strong> &nbsp;·&nbsp; Best: <strong>${getHighScore()}</strong></p>
      <button class="game-btn" id="game-start"><i class="fa-solid fa-rotate-right"></i> Redeploy</button>`;
    document.getElementById("game-start").addEventListener("click", startGame);
  }

  setHud();
  startBtn.addEventListener("click", startGame);

  stage.addEventListener("pointerdown", () => { if (running) jump(); });
  document.addEventListener("keydown", (e) => {
    if ((e.code === "Space" || e.code === "ArrowUp") && running) {
      e.preventDefault();
      jump();
    }
  });
}
