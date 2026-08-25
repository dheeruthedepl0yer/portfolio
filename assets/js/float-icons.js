/* Ambient floating tech-icon background. Purely decorative; edit ICONS to change the set. */
function initFloatIcons() {
  const host = document.querySelector(".float-icons");
  if (!host) return;

  const ICONS = [
    "fab fa-aws", "fab fa-google", "fab fa-microsoft", "fab fa-docker", "fab fa-github", "fab fa-gitlab",
    "fas fa-cloud", "fas fa-cloud-arrow-up", "fas fa-cloud-arrow-down", "fas fa-cloud-bolt",
    "fas fa-server", "fas fa-database", "fas fa-microchip", "fas fa-network-wired",
    "fas fa-diagram-project", "fas fa-circle-nodes", "fas fa-code-branch", "fas fa-terminal",
    "fas fa-code", "fas fa-lock", "fas fa-shield-halved", "fas fa-gears", "fas fa-robot",
    "fas fa-sitemap", "fas fa-cubes"
  ];

  const MAX_ICONS = 90;
  const SPAWN_EVERY_MS = 1600;
  const TTL_MIN = 30000, TTL_MAX = 90000;

  const objs = [];
  const rand = (a, b) => a + Math.random() * (b - a);

  function spawn(n = 3) {
    const W = window.innerWidth, H = window.innerHeight;
    for (let i = 0; i < n; i++) {
      const iClass = ICONS[(Math.random() * ICONS.length) | 0];
      const elm = document.createElement("i");
      elm.className = iClass + " dyn";

      const size = rand(12, 26);
      elm.style.fontSize = size + "px";

      const x = rand(0, W), y = rand(0, H);
      const vx = (Math.random() < .5 ? -1 : 1) * rand(0.15, 0.75);
      const vy = (Math.random() < .5 ? -1 : 1) * rand(0.15, 0.75);

      host.appendChild(elm);
      objs.push({ el: elm, x, y, vx, vy, r: size * 0.55, ttl: rand(TTL_MIN, TTL_MAX) });
    }
  }

  spawn(40);
  setInterval(() => { if (objs.length < MAX_ICONS) spawn(2); }, SPAWN_EVERY_MS);

  let last = performance.now();
  function tick(now) {
    const dt = now - last; last = now;
    const W = window.innerWidth, H = window.innerHeight;

    for (let i = 0; i < objs.length; i++) {
      const o = objs[i];
      o.x += o.vx * dt * 0.06;
      o.y += o.vy * dt * 0.06;

      if (o.x < 0) { o.x = 0; o.vx *= -1; }
      if (o.y < 0) { o.y = 0; o.vy *= -1; }
      if (o.x > W - o.r) { o.x = W - o.r; o.vx *= -1; }
      if (o.y > H - o.r) { o.y = H - o.r; o.vy *= -1; }

      o.el.style.transform = `translate(${o.x}px, ${o.y}px)`;

      o.ttl -= dt;
      if (o.ttl <= 0) { o.el.remove(); objs.splice(i, 1); i--; }
    }

    for (let i = 0; i < objs.length; i++) {
      for (let j = i + 1; j < objs.length; j++) {
        const a = objs[i], b = objs[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const minD = a.r + b.r;
        const d2 = dx * dx + dy * dy;
        if (d2 < minD * minD) {
          const d = Math.sqrt(d2) || 1;
          const ux = dx / d, uy = dy / d;
          const overlap = (minD - d) * 0.5;
          a.x -= ux * overlap; a.y -= uy * overlap;
          b.x += ux * overlap; b.y += uy * overlap;

          const avn = a.vx * ux + a.vy * uy;
          const bvn = b.vx * ux + b.vy * uy;
          const dvn = bvn - avn;
          a.vx += dvn * ux; a.vy += dvn * uy;
          b.vx -= dvn * ux; b.vy -= dvn * uy;
        }
      }
    }

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
