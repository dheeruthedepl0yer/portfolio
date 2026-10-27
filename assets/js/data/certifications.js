/* Certifications. Push a new { name, issuer, icon, color, level } object to add one.
   `color` drives the badge's accent ring/glow; `level` is a short label like "Professional". */
const CERTIFICATIONS = [
  // Google Cloud Platform
  { name: "Professional Cloud Architect", issuer: "Google Cloud", icon: "fa-brands fa-google", color: "#4285F4", level: "Professional" },
  { name: "Professional Machine Learning Engineer", issuer: "Google Cloud", icon: "fa-brands fa-google", color: "#4285F4", level: "Professional" },
  { name: "Professional Cloud Security Engineer", issuer: "Google Cloud", icon: "fa-brands fa-google", color: "#4285F4", level: "Professional" },
  { name: "Associate Cloud Engineer", issuer: "Google Cloud", icon: "fa-brands fa-google", color: "#4285F4", level: "Associate" },
  { name: "Agent Development Kit (ADK)", issuer: "Google Cloud", icon: "fa-solid fa-robot", color: "#34A853", level: "Specialization" },

  // Amazon Web Services
  { name: "Generative AI Developer Professional", issuer: "Amazon Web Services", icon: "fa-brands fa-aws", color: "#FF9900", level: "Professional" },
  { name: "Machine Learning Specialty", issuer: "Amazon Web Services", icon: "fa-brands fa-aws", color: "#FF9900", level: "Specialty" },

  // VMware
  { name: "VMware vSphere 7.x — 2V0-21.20", issuer: "VMware", icon: "fa-solid fa-server", color: "#00A0DA", level: "Professional" },
  { name: "VMware Cloud on AWS — 5V0-11.21", issuer: "VMware", icon: "fa-solid fa-cloud", color: "#00A0DA", level: "Master Specialist" },

  // ICSI
  { name: "Network Security Specialist", issuer: "ICSI", icon: "fa-solid fa-shield-halved", color: "#8B5CF6", level: "Specialist" }
];
