/* "Ask DheeruBot" search: builds its index straight from data/*.js (not the DOM),
   so it stays correct automatically as content is added. */

function buildSearchIndex() {
  const items = [];

  PROJECTS.forEach(p => {
    items.push({ text: p.title, section: "#projects", cat: "Project" });
    items.push({ text: p.summary, section: "#projects", cat: "Project" });
    p.tags.forEach(t => items.push({ text: t, section: "#projects", cat: "Skill" }));
  });

  SKILLS.forEach(cat => {
    cat.items.forEach(s => items.push({ text: s, section: "#skills", cat: "Skill" }));
  });

  EXPERIENCE.forEach(x => {
    items.push({ text: `${x.role} — ${x.org}`, section: "#experience", cat: "Experience" });
  });

  BLOGS.forEach(b => {
    items.push({ text: b.title, section: "#blogs", cat: "Blog" });
    b.tags.forEach(t => items.push({ text: t, section: "#blogs", cat: "Skill" }));
  });

  CERTIFICATIONS.forEach(c => {
    items.push({ text: c.name, section: "#certifications", cat: "Certification" });
    items.push({ text: `${c.issuer} — ${c.name}`, section: "#certifications", cat: "Certification" });
    if (c.name.includes("ADK")) {
      items.push({ text: "Google ADK", section: "#certifications", cat: "Certification" });
    }
  });

  BRANDS.forEach(b => {
    items.push({ text: b.name, section: "#brands", cat: "Brand" });
  });

  INDUSTRIES.forEach(x => {
    items.push({ text: x.name, section: "#industries", cat: "Industry" });
  });

  POCS.forEach(p => {
    items.push({ text: p.title, section: "#poc", cat: "POC" });
    (p.tags || []).forEach(t => items.push({ text: t, section: "#poc", cat: "Skill" }));
  });

  return items;
}

function initSearch() {
  const items = buildSearchIndex();
  const searchBar = document.getElementById("searchBar");
  const suggestions = document.getElementById("suggestions");
  if (!searchBar || !suggestions) return;

  function score(itemText, q) {
    const t = itemText.toLowerCase();
    if (t === q) return 100;
    let s = 0;
    if (t.startsWith(q)) s += 5;
    if (t.includes(q)) s += 2;
    const words = t.split(/[^a-z0-9+.#-]+/);
    if (words.includes(q)) s += 3;
    return s;
  }

  let selIndex = -1;

  function updateActive(itemsEl) {
    itemsEl.forEach(elm => { elm.style.background = ""; elm.style.color = ""; });
    if (selIndex >= 0) {
      itemsEl[selIndex].style.background = "var(--accent)";
      itemsEl[selIndex].style.color = "#000";
    }
  }

  function renderSuggestions(q) {
    suggestions.innerHTML = "";
    suggestions.classList.add("hidden");
    if (!q) return;
    const ql = q.toLowerCase();
    const ranked = items.map(it => ({ ...it, _s: score(it.text, ql) })).filter(it => it._s > 0);

    const seen = new Set();
    const unique = [];
    for (const r of ranked) {
      const key = (r.cat + "|" + r.text).toLowerCase();
      if (!seen.has(key)) { seen.add(key); unique.push(r); }
    }
    unique.sort((a, b) => b._s - a._s || a.cat.localeCompare(b.cat) || a.text.localeCompare(b.text));
    const top = unique.slice(0, 10);
    if (!top.length) return;

    top.forEach(m => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="cat">${m.cat}:</span><span class="match">${m.text}</span>`;
      li.addEventListener("mousedown", e => {
        e.preventDefault();
        window.location = m.section;
        suggestions.classList.add("hidden");
      });
      suggestions.appendChild(li);
    });
    suggestions.classList.remove("hidden");
    selIndex = -1;
  }

  function filterCards(q) {
    document.querySelectorAll(".searchable-item").forEach(elm => {
      if (!q) { elm.style.display = ""; return; }
      elm.style.display = elm.innerText.toLowerCase().includes(q) ? "" : "none";
    });
  }
  window.filterCards = filterCards;

  searchBar.addEventListener("keydown", e => {
    const itemsEl = suggestions.querySelectorAll("li");
    if (!itemsEl.length) return;
    if (e.key === "ArrowDown") { selIndex = (selIndex + 1) % itemsEl.length; updateActive(itemsEl); e.preventDefault(); }
    else if (e.key === "ArrowUp") { selIndex = (selIndex - 1 + itemsEl.length) % itemsEl.length; updateActive(itemsEl); e.preventDefault(); }
    else if (e.key === "Enter") {
      if (selIndex >= 0) itemsEl[selIndex].dispatchEvent(new Event("mousedown"));
      else { filterCards(searchBar.value.trim().toLowerCase()); suggestions.classList.add("hidden"); }
    } else if (e.key === "Escape") { suggestions.classList.add("hidden"); }
  });

  let tmr = null;
  searchBar.addEventListener("input", function () {
    const q = this.value.trim();
    if (tmr) clearTimeout(tmr);
    tmr = setTimeout(() => renderSuggestions(q), 120);
    filterCards(q.toLowerCase());
  });
  searchBar.addEventListener("blur", () => setTimeout(() => suggestions.classList.add("hidden"), 150));

  document.addEventListener("click", e => {
    const tagEl = e.target.closest(".tag, .skill-badge");
    if (!tagEl) return;
    e.preventDefault();
    e.stopPropagation();
    const q = tagEl.textContent.trim();
    searchBar.value = q;
    renderSuggestions(q.toLowerCase());
    filterCards(q.toLowerCase());

    if (tagEl.classList.contains("skill-badge")) {
      // Bubble "pops" for feedback, then the page jumps to the filtered Projects.
      tagEl.classList.add("burst");
      tagEl.addEventListener("animationend", () => tagEl.classList.remove("burst"), { once: true });
      const projects = document.getElementById("projects");
      if (projects) setTimeout(() => projects.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
    } else {
      searchBar.focus();
    }
  });
}
