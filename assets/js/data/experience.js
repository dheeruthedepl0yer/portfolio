/* Experience timeline. Push a new object to add an entry. `period` is optional —
   omit it rather than guess at dates. Set `current: true` on exactly one entry
   (the present employer) to get the "Current" highlight/color-coding. */
const EXPERIENCE = [
  {
    org: "Publicis Sapient",
    role: "Senior Associate Infrastructure Engineer L2",
    current: true,
    summary: ".NET release automation for a banking client, plus a LangChain-based RAG platform for document Q&A.",
    tags: ["UrbanCode Deploy", "PowerShell", "TFS", "LangChain", "RAG", "Python"]
  },
  {
    org: "Ollion",
    role: "MLOps / DevOps Engineer",
    summary: "Delivered GCP & AWS landing zones, cross-cloud migrations, and MLOps pipelines for clients spanning banking, fintech, retail and research — see Projects below for the full engagement list.",
    tags: ["GCP", "AWS", "Azure", "Terraform", "Landing Zones", "GKE/Anthos", "AWS Control Tower", "Airflow", "SageMaker", "Cloud Armor", "OPA/Rego", "AKS", "Docker", "CI/CD", "Gcrane"]
  },
  {
    org: "Sopra Steria",
    role: "DevOps / Cloud Engineer",
    summary: "Built AWS Control Tower account-vending, GPU-ready AMIs for ML workloads, and Composer/Dataflow ETL pipelines on GCP.",
    tags: ["AWS Control Tower", "AFT", "Red Hat", "Azure", "NVIDIA CUDA", "GPU AMIs", "TensorFlow", "PyTorch", "GCP Composer", "Dataflow", "BigQuery", "Datadog", "Splunk"]
  }
];
