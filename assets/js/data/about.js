/* About-section content. `highlights` are the top cards; `expertise` is the expandable
   "full technical summary" — kept as short scannable items, not one paragraph. */
const ABOUT = {
  highlights: [
    { icon: "fa-solid fa-cloud", title: "Multi-Cloud Infrastructure", text: "Managing GCP, AWS and Azure environments, optimizing for scalability, performance, monitoring and security.", color: "#00d4ff" },
    { icon: "fa-solid fa-robot", title: "Generative & Agentic AI", text: "Hands-on building RAG-based LLM applications with Transformer models, OpenAI, LangChain and vector databases — autonomous agents, tool-calling, intelligent automation.", color: "#7c4dff" },
    { icon: "fa-solid fa-gears", title: "Automation & Infra Optimization", text: "Automating infrastructure provisioning and CI/CD pipeline setup to streamline development cycles.", color: "#22e07a" },
    { icon: "fa-solid fa-shield-halved", title: "Security & Compliance", text: "Implementing security policy-as-code with AWS Config, Microsoft Sentinel, GCP Service Parameters and OPA — DevSecOps governance end to end.", color: "#ef4444" },
    { icon: "fa-solid fa-right-left", title: "Cloud Migrations", text: "On-premise data center experience paired with cloud migrations and robust, scalable architecture design.", color: "#38bdf8" },
    { icon: "fa-brands fa-docker", title: "Containerization & Microservices", text: "Transforming monoliths into microservices, managing containerized deployments on on-prem and managed EKS.", color: "#2496ed" },
    { icon: "fa-solid fa-city", title: "Landing Zones", text: "Setting up and managing GCP & AWS Landing Zones from scratch — secure, scalable cloud foundations.", color: "#ffd166" }
  ],
  expertise: [
    { icon: "fa-solid fa-robot", title: "MLOps", text: "Built ML and blockchain deployment pipelines on self-hosted GitLab, AI agents with Google ADK and Vertex AI Studio, and custom CUDA-enabled AWS AMIs for GPU-accelerated deep learning." },
    { icon: "fa-solid fa-city", title: "Landing Zone Setup", text: "End-to-end architecture and deployment of AWS and GCP Landing Zones from scratch for secure, scalable multi-account environments." },
    { icon: "fa-solid fa-diagram-project", title: "Infrastructure as Code", text: "Automated provisioning with Terraform, Ansible, Helm, CloudFormation and ArgoCD for repeatable, auditable deployments." },
    { icon: "fa-solid fa-infinity", title: "CI/CD & DevOps Tooling", text: "GitLab and Jenkins administration, automating pipelines, release processes and deployments across diverse tech stacks." },
    { icon: "fa-solid fa-user-shield", title: "Security & IAM", text: "Active Directory administration, SSO integrations, SCP policies and AWS GuardDuty, plus DevSecOps scanning (SAST, DAST, OSS, OWASP) with Cortex XDR, Twistlock, Wazuh and Rapid7 on Kubernetes." },
    { icon: "fa-solid fa-network-wired", title: "Cloud & Network Expertise", text: "Secure VPN connectivity and interconnects between GCP, AWS and Azure, with scalable load-balancer configurations and backup." },
    { icon: "fa-solid fa-chart-line", title: "Monitoring & Observability", text: "Real-time alerting and visibility with Datadog, Grafana, Prometheus, Thanos, the ELK stack and VictoriaMetrics." },
    { icon: "fa-solid fa-triangle-exclamation", title: "Incident Response & RCA", text: "Root-cause analysis, production debugging and network troubleshooting for rapid resolution of critical issues." },
    { icon: "fa-solid fa-terminal", title: "Automation & Scripting", text: "Automation scripts and runbooks for auto-deploy solutions, cutting manual effort and human error." },
    { icon: "fa-brands fa-docker", title: "Microservices & Containerization", text: "Migrated monolithic applications to containerized microservices with Docker and Kubernetes for modularity and scale." },
    { icon: "fa-solid fa-sitemap", title: "Architecture & DR Planning", text: "HA/DR strategies aligned to SLAs, RTOs and RPOs, with detailed architecture and system-flow diagrams." },
    { icon: "fa-solid fa-rocket", title: "Application Deployment", text: "Full-stack deployment across Node.js, Python, Java, Go, React and Angular in containerized, cloud-native environments." }
  ]
};
