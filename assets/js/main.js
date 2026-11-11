function safeInit(fn) {
  try { fn(); } catch (err) { console.error(`init failed: ${fn.name}`, err); }
}

document.addEventListener("DOMContentLoaded", () => {
  safeInit(initTheme);
  safeInit(renderAll);
  safeInit(() => initParticles(getCurrentTheme()));
  safeInit(initTypedText);
  safeInit(initFloatIcons);
  safeInit(initSearch);
  safeInit(initScrollReveal);
  safeInit(initGame);

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Profile picture click-spin
  const profilePic = document.getElementById("hero-photo");
  if (profilePic) {
    profilePic.addEventListener("click", () => {
      profilePic.classList.add("click-anim");
      profilePic.addEventListener("animationend", () => {
        profilePic.classList.remove("click-anim");
      }, { once: true });
    });
  }

  safeInit(initRobotAvatar);
});

/* Robot avatar: cursor-follow tilt, a speech bubble that's always on and cycles random
   "commands" every 2s, and a click toggle to dismiss/bring back the bubble. */
function initRobotAvatar() {
  const avatar = document.getElementById("robotAvatar");
  const tilt = document.getElementById("robotTilt");
  const speech = document.getElementById("robotSpeech");
  if (!avatar || !tilt) return;

  const MAX_TILT = 16;
  avatar.addEventListener("mousemove", (e) => {
    const rect = avatar.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tilt.style.transform = `perspective(600px) rotateY(${px * MAX_TILT * 2}deg) rotateX(${-py * MAX_TILT * 2}deg)`;
  });
  avatar.addEventListener("mouseleave", () => {
    tilt.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
  });

  if (speech) {
    const LINES = [
      "Beep boop 🤖", "Deploying myself...", "99.9% uptime, mostly.",
      "kubectl get me", "Running in prod, don't ask.", "git commit -m \"hi\"",
      "terraform apply --auto-approve", "docker ps -a", "systemctl restart me",
      "kubectl get pods -A", "helm upgrade --install me", "curl -I self"
    ];
    const POSITIONS = ["left", "right", "top", "bottom"];
    const pickPosition = () => {
      // Narrow screens only get top/bottom so the bubble can't run off-screen sideways.
      const pool = window.innerWidth < 500 ? ["top", "bottom"] : POSITIONS;
      return pool[(Math.random() * pool.length) | 0];
    };
    const nextLine = () => {
      speech.textContent = LINES[(Math.random() * LINES.length) | 0];
      speech.dataset.pos = pickPosition();
    };
    nextLine();
    setInterval(nextLine, 2000);

    avatar.addEventListener("click", () => speech.classList.toggle("hidden-by-click"));
  }

  // Every 5s, a sharp shake — punctuates the constant subtle motion elsewhere on the page.
  const photo = document.getElementById("hero-photo");
  if (photo) {
    setInterval(() => {
      photo.classList.add("sharp-shake");
      photo.addEventListener("animationend", () => photo.classList.remove("sharp-shake"), { once: true });
    }, 5000);
  }
}

/* ================= Theme Switching Logic ================= */
const THEMES = {
  dark: { label: "Dark", icon: "fa-solid fa-moon" },
  light: { label: "Light", icon: "fa-solid fa-sun" },
  cyberpunk: { label: "Cyberpunk", icon: "fa-solid fa-bolt" },
  matrix: { label: "Matrix", icon: "fa-solid fa-terminal" }
};

function getCurrentTheme() {
  return localStorage.getItem("dheeru_theme") || "dark";
}

function applyTheme(themeKey, persist = true) {
  if (!THEMES[themeKey]) themeKey = "dark";
  const theme = THEMES[themeKey];

  if (themeKey === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", themeKey);
  }

  if (persist) {
    try { localStorage.setItem("dheeru_theme", themeKey); } catch (_) {}
  }

  // Update button label and icon
  const iconEl = document.getElementById("themeActiveIcon");
  const labelEl = document.getElementById("themeActiveLabel");
  if (iconEl) iconEl.className = `${theme.icon} theme-active-icon`;
  if (labelEl) labelEl.textContent = theme.label;

  // Update active state in menu
  document.querySelectorAll(".theme-option").forEach(btn => {
    const isActive = btn.dataset.theme === themeKey;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });

  // Re-init particles with theme colors if already loaded
  if (window.particlesJS && window.pJSDom && window.pJSDom.length > 0) {
    try {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    } catch (_) {}
    safeInit(() => initParticles(themeKey));
  }
}

function initTheme() {
  const switchWrap = document.getElementById("themeSwitch");
  const toggleBtn = document.getElementById("themeToggleBtn");
  const menu = document.getElementById("themeMenu");
  const current = getCurrentTheme();

  applyTheme(current, false);

  if (!switchWrap || !toggleBtn || !menu) return;

  const toggleMenu = (open) => {
    const isExpanded = open !== undefined ? open : !switchWrap.classList.contains("open");
    switchWrap.classList.toggle("open", isExpanded);
    toggleBtn.setAttribute("aria-expanded", String(isExpanded));
  };

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  menu.querySelectorAll(".theme-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const theme = btn.dataset.theme;
      applyTheme(theme, true);
      toggleMenu(false);
    });
  });

  // Close dropdown on outside click or Esc
  document.addEventListener("click", (e) => {
    if (!switchWrap.contains(e.target)) toggleMenu(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleMenu(false);
  });
}
