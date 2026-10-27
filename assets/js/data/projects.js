/* Delivered projects. To add one: push a new object onto PROJECTS.
   `link` is optional — leave it out for client work with no public repo/case-study;
   the card will show a "Details" expand instead of a dead link. */
const PROJECTS = [
  {
    org: "Open Source",
    title: "GCP Artifact Registry Migration Engine",
    icon: "fa-solid fa-boxes-stacked",
    category: "Cloud & Landing Zones",
    summary: "Production-grade, distributed migration tool moving multi-terabyte OCI repositories between GCP Artifact Registries with zero disk footprint and 100% digest integrity.",
    bullets: [
      "Engineered a distributed migration engine using Cloud Run Jobs and Google's crane to stream container layer blobs directly registry-to-registry over Google's internal network.",
      "Designed a distributed state ledger on Cloud Datastore with atomic lease claims, sharded inventory batches, and checkpoint recovery for crash resilience.",
      "Benchmarked in production migrating ~22.4 TB (24,180 images / 31,450 tags) at ~1.1 GB/s aggregate throughput across 50 concurrent tasks in under 6 hours with 100% digest verification.",
      "Achieved ~38% transfer savings via cross-image layer deduplication with zero local storage requirements."
    ],
    tags: ["GCP", "Cloud Run Jobs", "Datastore", "Artifact Registry", "crane", "Docker", "OCI"],
    link: "https://github.com/dheeruthedepl0yer/gcp-gar-migration",
    linkLabel: "View on GitHub"
  },
  {
    org: "Publicis Sapient",
    client: "Lloyds Banking Group",
    title: "One-Click .NET Deploy Framework",
    icon: "fa-solid fa-bolt",
    category: "CI/CD & Automation",
    summary: "One-click automated framework for the LBG Insurance App .NET build on Windows Servers using UrbanCode Deploy & PowerShell.",
    bullets: [
      "Customised the automation framework to drive deployments through UrbanCode Deploy.",
      "Packaged Insurance app artifacts into UrbanCode components and wired the pipeline through TFS.",
      "Wrote PowerShell scripts to install Windows libraries and enable required features automatically."
    ],
    tags: ["UrbanCode Deploy", "PowerShell", "TFS", ".NET", "Windows Server"]
  },
  {
    org: "Publicis Sapient",
    title: "RAG Platform for Document Q&A",
    icon: "fa-solid fa-brain",
    category: "AI / ML",
    summary: "Python + LangChain RAG system ingesting PDF/DOCX/PPT into embeddings for semantic retrieval and context-aware LLM answers.",
    bullets: [
      "Built ingestion pipelines for PDF, DOCX and PPT sources into a vector store.",
      "Implemented semantic retrieval and prompt orchestration with LangChain.",
      "Delivered accurate, context-aware responses grounded in the ingested corpus via LLMs."
    ],
    tags: ["Python", "LangChain", "RAG", "Embeddings", "Vector DB", "LLM"]
  },
  {
    org: "Ollion",
    client: "Axis Bank",
    title: "GCP Landing Zone for UPI (PSP App)",
    icon: "fa-solid fa-landmark",
    category: "Cloud & Landing Zones",
    summary: "End-to-end GCP landing zone to migrate the UPI stack for the Axis–GCP PSP app, connecting Google Pay, NPCI and Axis Bank.",
    bullets: [
      "Implemented the GCP landing zone infra with Terraform.",
      "Stood up the merchant stack for UPI transactions, integrating Google Pay, NPCI and Axis Bank through the PSP stack.",
      "Hardened security with F5 and Google Cloud Armor against DDoS, plus Check Point security rules.",
      "Automated app deployment to Google Kubernetes Engine via Anthos.",
      "Built and tested the disaster-recovery setup.",
      "Wrote GCP-specific Rego/OPA policies and wired GitHub Actions to validate them, auto-updating PR status comments."
    ],
    tags: ["GCP", "Terraform", "GKE", "Anthos", "Cloud Armor", "F5", "OPA/Rego", "GitHub Actions"]
  },
  {
    org: "Ollion",
    client: "Tata Digital",
    title: "Campaigning Platform Infrastructure",
    icon: "fa-solid fa-bullhorn",
    category: "Cloud & Landing Zones",
    summary: "GCP landing zone and secure networking for Tata Digital's campaigning platform, with monitoring and centralized log ingestion.",
    bullets: [
      "Set up the GCP landing zone through Terraform and Cloud Identity to onboard users from the client's Active Directory.",
      "Configured VPN tunnels between GCP and Azure, and private runners for GitLab CI.",
      "Integrated Active Directory into the web application and the Looker instance.",
      "Set up Locust instances for performance/load testing of the web application.",
      "Configured monitoring tools with centralized log ingestion and alerting.",
      "Deployed Microsoft Defender for Cloud alongside Sentinel on GCP."
    ],
    tags: ["GCP", "Terraform", "Cloud Identity", "VPN", "GitLab CI", "Looker", "Locust", "Microsoft Sentinel"]
  },
  {
    org: "Ollion",
    title: "AWS S3 → GCP ETL Migration (Airflow)",
    icon: "fa-solid fa-arrows-turn-to-dots",
    category: "Data & ETL",
    summary: "Cross-cloud ETL pipeline moving data from AWS S3 to GCP buckets, orchestrated with Airflow and Spark.",
    bullets: [
      "Set up an AWS–GCP VPN for data transfer and private API calls.",
      "Built and maintained Airflow (Composer) and Apache Spark with Terraform.",
      "Configured private endpoints and pipelines for the ETL process.",
      "Set up proxies for accessing private GCP Postgres instances."
    ],
    tags: ["GCP", "AWS", "Airflow", "Composer", "Apache Spark", "Terraform", "PostgreSQL"]
  },
  {
    org: "Ollion",
    title: "AWS Control Tower + Data Lake for Research",
    icon: "fa-solid fa-warehouse",
    category: "Cloud & Landing Zones",
    summary: "AWS Control Tower with a data lake and AD-integrated SSO for college researchers running data science workloads.",
    bullets: [
      "Set up an AWS Backup Vault for S3 bucket backups and integrated Azure AD with AWS SSO.",
      "Built Lambda functions for user lifecycle management (delete/disable on inactivity) with CodePipeline auto-updating the function code.",
      "Used the Tableau API to create/delete users on the Tableau server."
    ],
    tags: ["AWS Control Tower", "AWS SSO", "Lambda", "CodePipeline", "Azure AD", "Tableau API"]
  },
  {
    org: "Ollion",
    title: "Dockerized Microservices CI/CD on AKS",
    icon: "fa-brands fa-docker",
    category: "CI/CD & Automation",
    summary: "CI/CD and dockerized microservices for AKS deployment, with Twistlock vulnerability scanning wired into GitLab CI.",
    bullets: [
      "Dockerized microservices and authored deployment configs for Azure Kubernetes Service.",
      "Set up Artifactory for images and integrated Twistlock for vulnerability scanning and error reporting on GitLab CI."
    ],
    tags: ["Azure", "AKS", "Docker", "GitLab CI", "Artifactory", "Twistlock"]
  },
  {
    org: "Ollion",
    title: "SageMaker Pipelines for ML Lifecycle",
    icon: "fa-solid fa-diagram-successor",
    category: "AI / ML",
    summary: "Automated the ML lifecycle with AWS SageMaker Pipelines, cutting manual release effort and enabling continuous model updates.",
    bullets: [
      "Implemented AWS SageMaker Pipelines end-to-end for training and release automation.",
      "Reduced manual effort for releases and ensured continuous model updates."
    ],
    tags: ["AWS", "SageMaker", "MLOps", "Pipelines"]
  },
  {
    org: "Ollion",
    title: "25TB Registry Migration (ACR → Artifact Registry)",
    icon: "fa-solid fa-plane-departure",
    category: "Cloud & Landing Zones",
    summary: "Migrated 25TB of Azure Container Registry images and Helm artifacts into Google Artifact Registry using Gcrane, Cloud Functions and Pub/Sub.",
    bullets: [
      "Built a serverless migration pipeline with Cloud Functions triggered via Pub/Sub.",
      "Used Gcrane for efficient, low-downtime image copying between registries.",
      "Migrated both container images and Helm chart artifacts at scale."
    ],
    tags: ["GCP", "Azure", "Gcrane", "Cloud Functions", "Pub/Sub", "Artifact Registry"],
    link: "https://medium.com/@dheeruthedeployer/technology-infrastructure-migration-gcrane-a-migration-bird-f9f10e223772",
    linkLabel: "Read the write-up"
  },
  {
    org: "Sopra Steria",
    title: "Backup Solution for ML Applications",
    icon: "fa-solid fa-box-archive",
    category: "AI / ML",
    summary: "Robust backup solution on Red Hat/Azure to safeguard processed data for machine learning applications.",
    bullets: [
      "Designed and implemented a backup solution covering processed ML datasets.",
      "Ran on Red Hat infrastructure integrated with Azure."
    ],
    tags: ["Red Hat", "Azure", "Backup", "MLOps"]
  },
  {
    org: "Sopra Steria",
    title: "AWS Control Tower with Account Factory",
    icon: "fa-solid fa-building-shield",
    category: "Cloud & Landing Zones",
    summary: "AWS Control Tower implementation with Account Factory for Terraform (AFT) and third-party observability integrations.",
    bullets: [
      "Implemented AWS Control Tower with Account Factory for Terraform (AFT) for repeatable account vending.",
      "Integrated third-party tooling including Datadog and Splunk."
    ],
    tags: ["AWS Control Tower", "AFT", "Datadog", "Splunk"]
  },
  {
    org: "Sopra Steria",
    title: "GPU-Ready AMIs for Deep Learning",
    icon: "fa-solid fa-microchip",
    category: "AI / ML",
    summary: "Customized and optimized NVIDIA GPU drivers with the CUDA Toolkit into boilerplate AWS AMIs for TensorFlow and PyTorch workloads.",
    bullets: [
      "Built boilerplate AMIs with NVIDIA CUDA Toolkit pre-configured for GPU-accelerated compute.",
      "Tuned driver/toolkit compatibility for TensorFlow and PyTorch performance."
    ],
    tags: ["NVIDIA CUDA", "AWS AMI", "TensorFlow", "PyTorch", "GPU"]
  },
  {
    org: "Sopra Steria",
    title: "Composer ETL Pipelines with Dataflow & BigQuery",
    icon: "fa-solid fa-table-cells",
    category: "Data & ETL",
    summary: "Designed and implemented Cloud Composer pipelines with Dataflow and BigQuery to automate data ingestion and transformation.",
    bullets: [
      "Built Composer (Airflow) DAGs orchestrating Dataflow jobs.",
      "Automated data ingestion and transformation into BigQuery for analytics."
    ],
    tags: ["GCP", "Composer", "Dataflow", "BigQuery", "ETL"]
  }
];
