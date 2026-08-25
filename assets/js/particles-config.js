function initParticles() {
  if (!window.particlesJS) return;
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      size: { value: 3 },
      color: { value: "#ffffff" },
      line_linked: { enable: true, distance: 140, color: "#6be0ff", opacity: 0.5, width: 1 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: ["repulse", "grab"] },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        grab: { distance: 180, line_linked: { opacity: 1 } },
        push: { particles_nb: 3 }
      }
    }
  });
}

function initTypedText() {
  if (!window.Typed) return;
  new Typed(".typed-text", { strings: PROFILE.titles, typeSpeed: 50, backSpeed: 28, loop: true });

  new Typed(".ask-dheerubot .ask-text", {
    strings: PROFILE.askPhrases,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1400,
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: "▌"
  });
}
