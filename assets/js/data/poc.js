/* Proof of Concepts. Push objects shaped like PROJECTS entries
   (org/title/icon/category/summary/bullets/tags, `link` optional) to add one.
   The 4 below are placeholders — swap them out for your real POCs whenever. */
const POCS = [
  {
    org: "Personal POC",
    title: "Self-Healing Kubernetes Operator",
    icon: "fa-solid fa-heart-pulse",
    category: "CI/CD & Automation",
    summary: "A custom operator that watches for common pod failure patterns and auto-remediates before paging anyone.",
    bullets: [
      "Watches CrashLoopBackOff and OOMKilled events across namespaces.",
      "Applies a small rules engine to decide restart vs. rollback vs. scale-up.",
      "Posts a summary to Slack so the fix is visible even though no one got paged."
    ],
    tags: ["Kubernetes", "Go", "Operators", "Automation"]
  },
  {
    org: "Personal POC",
    title: "Slack-Ops Runbook Bot",
    icon: "fa-solid fa-comments",
    category: "AI / ML",
    summary: "A LangChain-based Slack bot that answers on-call questions by retrieving from the team's actual runbooks.",
    bullets: [
      "Ingests runbook markdown into a vector store on every merge to main.",
      "Answers on-call questions in-thread with citations back to the source doc.",
      "Falls back to 'I don't know, page a human' instead of guessing."
    ],
    tags: ["LangChain", "Slack API", "RAG", "Python"]
  },
  {
    org: "Personal POC",
    title: "Cloud Cost Anomaly Detector",
    icon: "fa-solid fa-chart-line",
    category: "Data & ETL",
    summary: "A lightweight pipeline that flags unusual day-over-day cloud spend before it shows up on the monthly bill.",
    bullets: [
      "Pulls daily billing exports from AWS/GCP into BigQuery.",
      "Runs a simple rolling-average + z-score check per service/account.",
      "Sends a same-day alert instead of waiting for the invoice."
    ],
    tags: ["BigQuery", "FinOps", "Python", "Alerting"]
  },
  {
    org: "Personal POC",
    title: "One-Click Multi-Cloud Sandbox",
    icon: "fa-solid fa-flask",
    category: "Cloud & Landing Zones",
    summary: "A Terraform module that spins up a throwaway AWS+GCP sandbox pair for testing cross-cloud networking.",
    bullets: [
      "Stands up a minimal VPC/VPN pair on both clouds in under 10 minutes.",
      "Auto-destroys after a configurable TTL so sandboxes don't linger.",
      "Used to prototype the VPN-tunnel setup covered in the blog post."
    ],
    tags: ["Terraform", "AWS", "GCP", "VPN"]
  }
];
