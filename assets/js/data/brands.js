/* Brands / clients worked with. Push a new { name, icon, domain, note, type, color } object to add one.
   `domain` is used to fetch a real logo (via Clearbit's logo API); if it fails to load,
   the badge falls back to `icon` automatically — no broken images either way.
   `color` is that badge's own accent (ring/glow) so the grid reads as colorful, not uniform.
   type controls the badge shape/label: "employer" | "client". Set `current: true` on the
   present employer to get the green "Current" color-coding, which overrides `color`. */
const BRANDS = [
  { name: "Publicis Sapient", domain: "publicissapient.com", icon: "fa-solid fa-lightbulb", note: "Digital Consulting", type: "employer", current: true, color: "#7c4dff" },
  { name: "Ollion", domain: "ollion.com", icon: "fa-solid fa-cloud", note: "Cloud & MLOps Partner", type: "employer", color: "#00d4ff" },
  { name: "Sopra Steria", domain: "soprasteria.com", icon: "fa-solid fa-building-columns", note: "IT Consulting", type: "employer", color: "#22e07a" },
  { name: "Lloyds Banking Group", domain: "lloydsbankinggroup.com", icon: "fa-solid fa-sterling-sign", note: "Banking Client", type: "client", color: "#ffd166" },
  { name: "Axis Bank", domain: "axisbank.com", icon: "fa-solid fa-landmark", note: "Banking / UPI Client", type: "client", color: "#ff6b6b" },
  { name: "Tata Digital", domain: "tatadigital.com", icon: "fa-solid fa-bullhorn", note: "Digital Platform Client", type: "client", color: "#ec4899" },
  { name: "Google", domain: "google.com", icon: "fa-brands fa-google", note: "Cloud & AI Partner", type: "client", color: "#4285F4" },
  { name: "Inmobi", domain: "inmobi.com", icon: "fa-solid fa-mobile-screen-button", note: "AdTech Client", type: "client", color: "#f43f5e" },
  { name: "Juspay", domain: "juspay.in", icon: "fa-solid fa-credit-card", note: "FinTech / Payments Client", type: "client", color: "#a855f7" },
  { name: "Superbank", domain: "superbank.co.id", icon: "fa-solid fa-piggy-bank", note: "Digital Banking Client", type: "client", color: "#14b8a6" },
  { name: "Nissan Motor", domain: "nissan.com", icon: "fa-solid fa-car", note: "Automotive Client", type: "client", color: "#c8102e" }
];
