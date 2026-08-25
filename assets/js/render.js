/* Turns the data/*.js arrays into DOM. Each render* function owns one section
   and is called once from main.js on DOMContentLoaded. */

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderSocials(container, socials) {
  socials.forEach(s => {
    const a = el("a", "", `<i class="${s.icon}"></i>${s.label}`);
    a.href = s.href;
    if (s.href.startsWith("http")) a.target = "_blank";
    container.appendChild(a);
  });
}

function renderHero() {
  const pic = document.getElementById("hero-photo");
  if (pic) {
    pic.src = PROFILE.photo;
    pic.alt = PROFILE.name;
  }
  const title = document.getElementById("hero-title");
  if (title) {
    const text = `Hi, I'm ${PROFILE.handle}`;
    title.innerHTML = [...text].map((ch, i) =>
      `<span class="hero-letter" style="--i:${i}">${ch === " " ? "&nbsp;" : ch}</span>`).join("");
  }

  renderSocials(document.getElementById("hero-socials"), PROFILE.socials);
  renderSocials(document.getElementById("contact-socials"), PROFILE.socials);
}

function renderAbout() {
  const grid = document.getElementById("about-highlights");
  ABOUT.highlights.forEach(h => {
    const card = el("div", "highlight-card",
      `<i class="${h.icon}"></i><h3>${h.title}</h3><p>${h.text}</p>`);
    card.style.setProperty("--hl-color", h.color);
    grid.appendChild(card);
  });

  const prev = document.getElementById("aboutPrev");
  const next = document.getElementById("aboutNext");
  if (prev && next) {
    const scrollBy = () => grid.clientWidth * 0.8;
    prev.addEventListener("click", () => grid.scrollBy({ left: -scrollBy(), behavior: "smooth" }));
    next.addEventListener("click", () => grid.scrollBy({ left: scrollBy(), behavior: "smooth" }));
  }

  const expertiseBox = document.getElementById("about-expertise");
  const expertiseGrid = el("div", "expertise-grid");
  ABOUT.expertise.forEach(item => {
    expertiseGrid.appendChild(el("div", "expertise-item",
      `<strong><i class="${item.icon}"></i>${item.title}</strong><span>${item.text}</span>`));
  });
  expertiseBox.prepend(expertiseGrid);
  const toggle = document.getElementById("expertise-toggle");
  toggle.addEventListener("click", () => {
    expertiseBox.classList.toggle("expanded");
    toggle.textContent = expertiseBox.classList.contains("expanded") ? "Show less" : "Read full technical summary";
  });
}

function tagPills(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join("");
}

/* One accent color per project category, so the grid reads as color-coded groups. */
const CATEGORY_COLORS = {
  "Cloud & Landing Zones": "#00d4ff",
  "AI / ML": "#7c4dff",
  "CI/CD & Automation": "#ff9900",
  "Data & ETL": "#22e07a"
};

/* Shared by Projects and POCs — a flip card: front is the summary, back is the bullet
   list. Clicking "View details" flips the card instead of expanding it inline. */
function buildFlipCard(p, idPrefix, i) {
  const card = el("div", "card project-card searchable-item");
  if (p.category) card.dataset.category = p.category;
  card.style.setProperty("--proj-color", CATEGORY_COLORS[p.category] || "var(--accent)");
  const detailsId = `${idPrefix}-details-${i}`;

  card.innerHTML = `
    <div class="flip-inner">
      <div class="flip-face flip-front">
        <div class="project-card-head">
          <div class="project-icon"><i class="${p.icon}"></i></div>
          <span class="project-org">${p.org}</span>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          ${p.client ? `<p class="project-client"><i class="fa-solid fa-handshake"></i> ${p.client}</p>` : ""}
          <p class="project-summary">${p.summary}</p>
          <div class="tags">${tagPills(p.tags || [])}</div>
          <div class="project-footer">
            <button class="project-toggle" aria-expanded="false" aria-controls="${detailsId}">View details</button>
            ${p.link ? `<a class="project-link" href="${p.link}" target="_blank">${p.linkLabel || "Read more"} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
          </div>
        </div>
      </div>
      <div class="flip-face flip-back" id="${detailsId}">
        <div class="project-body">
          <h3><i class="fa-solid fa-list-check"></i> ${p.title}</h3>
          <ul class="project-details">
            ${(p.bullets || []).map(b => `<li>${b}</li>`).join("")}
          </ul>
          <div class="project-footer">
            <button class="project-toggle project-toggle-back">Back</button>
          </div>
        </div>
      </div>
    </div>`;

  const flipTo = (open) => {
    card.classList.toggle("flipped", open);
    const frontBtn = card.querySelector(".project-toggle:not(.project-toggle-back)");
    frontBtn.setAttribute("aria-expanded", String(open));
  };
  card.querySelector(".project-toggle:not(.project-toggle-back)").addEventListener("click", () => flipTo(true));
  card.querySelector(".project-toggle-back").addEventListener("click", () => flipTo(false));

  return card;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  PROJECTS.forEach((p, i) => grid.appendChild(buildFlipCard(p, "proj", i)));
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  SKILLS.forEach(cat => {
    const card = el("div", "skill-card searchable-item");
    card.style.setProperty("--cat-color", cat.color);
    card.innerHTML = `<h3><i class="${cat.icon}"></i>${cat.title}</h3>` +
      cat.items.map(s => `<span class="skill-badge">${s}</span>`).join("");
    grid.appendChild(card);
  });
}

function renderBrands() {
  const grid = document.getElementById("brands-grid");
  BRANDS.forEach(b => {
    const badge = el("div", `brand-badge type-${b.type}${b.current ? " current" : ""}`);
    badge.style.setProperty("--brand-color", b.color);
    badge.innerHTML = `
      <div class="brand-logo-wrap">
        <img class="brand-logo" src="https://logo.clearbit.com/${b.domain}?size=96" alt="${b.name} logo" loading="lazy" />
        <i class="${b.icon} brand-icon-fallback" aria-hidden="true"></i>
      </div>
      <div><strong>${b.name}${b.current ? ' <span class="current-tag">Current</span>' : ""}</strong><span>${b.note}</span></div>`;
    badge.querySelector("img.brand-logo").addEventListener("error", () => {
      badge.classList.add("logo-failed");
    }, { once: true });
    grid.appendChild(badge);
  });
}

function renderIndustries() {
  const grid = document.getElementById("industries-grid");
  INDUSTRIES.forEach(x => {
    const bubble = el("div", "industry-bubble",
      `<div class="industry-bubble-icon"><i class="${x.icon}"></i></div><h3>${x.name}</h3><p>${x.note}</p>`);
    bubble.style.setProperty("--ind-color", x.color);
    grid.appendChild(bubble);
  });
}

function renderPOCs() {
  const grid = document.getElementById("poc-grid");
  if (!POCS.length) {
    grid.appendChild(el("div", "card poc-empty",
      `<i class="fa-solid fa-flask"></i><h3>Coming soon</h3><p>New proof-of-concepts land here as they ship — check back soon.</p>`));
    return;
  }
  POCS.forEach((p, i) => grid.appendChild(buildFlipCard(p, "poc", i)));
}

function renderExperience() {
  const grid = document.getElementById("experience-grid");
  EXPERIENCE.forEach(x => {
    const card = el("div", `card searchable-item${x.current ? " current-role" : ""}`,
      `<h3>${x.role} — ${x.org}${x.current ? ' <span class="current-tag">Current</span>' : ""}</h3><p>${x.summary}</p><div class="tags">${tagPills(x.tags)}</div>`);
    grid.appendChild(card);
  });
}

function renderBlogs() {
  const grid = document.getElementById("blogs-grid");
  BLOGS.forEach(b => {
    const a = el("a", "blog-card searchable-item",
      `<span class="blog-card-bar" style="background:${b.color}"></span>
       <div class="blog-card-body">
         <h3>${b.title}</h3>
         <p>${b.summary}</p>
         <span class="blog-card-tags">${b.tags.slice(0, 2).join(" · ")}</span>
         <span class="blog-card-cta" style="color:${b.color}">Read <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
       </div>`);
    a.href = b.href;
    a.target = "_blank";
    a.style.setProperty("--blog-color", b.color);
    grid.appendChild(a);
  });

  const moreCard = el("a", "blog-card blog-card-more",
    `<div class="blog-card-body">
       <i class="fa-solid fa-arrow-up-right-from-square"></i>
       <h3>Explore more posts</h3>
       <p>See the full archive on Medium</p>
     </div>`);
  moreCard.href = "https://dheeruthedeployer.medium.com";
  moreCard.target = "_blank";
  grid.appendChild(moreCard);

  const wrap = document.querySelector(".blog-carousel-wrap");
  const prev = document.getElementById("blogPrev");
  const next = document.getElementById("blogNext");
  if (wrap && prev && next) {
    const scrollBy = () => grid.clientWidth * 0.8;
    prev.addEventListener("click", () => grid.scrollBy({ left: -scrollBy(), behavior: "smooth" }));
    next.addEventListener("click", () => grid.scrollBy({ left: scrollBy(), behavior: "smooth" }));
  }
}

function renderCertifications() {
  const grid = document.getElementById("certifications-grid");
  CERTIFICATIONS.forEach(c => {
    const card = el("div", "card cert-card searchable-item");
    card.style.setProperty("--cert-color", c.color);
    card.innerHTML = `
      <i class="fa-solid fa-certificate cert-seal"></i>
      <div class="cert-icon"><i class="${c.icon}"></i></div>
      <div class="cert-info">
        <span class="cert-level">${c.level}</span>
        <strong>${c.name}</strong>
        <span class="cert-issuer">${c.issuer}</span>
      </div>`;
    grid.appendChild(card);
  });
}

function renderAll() {
  // Each section renders in isolation — one broken data file shouldn't blank the whole page.
  const sections = [
    renderHero, renderAbout, renderProjects, renderPOCs, renderSkills,
    renderBrands, renderIndustries, renderExperience, renderBlogs,
    renderCertifications
  ];
  sections.forEach(fn => {
    try { fn(); } catch (err) { console.error(`renderAll: ${fn.name} failed`, err); }
  });
}
