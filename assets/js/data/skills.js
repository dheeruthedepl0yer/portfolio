/* Skills grid. To add a category: push a new { title, icon, color, items[] } object.
   To add a skill: push a string onto an existing items[] array. `color` drives that
   category's whole visual identity (header, bubble badges). */
const SKILLS = [
  {
    title: "Languages",
    icon: "fa-solid fa-code",
    color: "#00d4ff",
    items: ["Bash", "Python", "Node.js", "Go", "Java", "YAML"]
  },
  {
    title: "IAM",
    icon: "fa-solid fa-fingerprint",
    color: "#a855f7",
    items: ["GCP Cloud Identity", "AWS SSO", "Microsoft AD", "Keycloak", "SAML", "Okta", "JumpCloud"]
  },
  {
    title: "Cloud Platforms",
    icon: "fa-solid fa-cloud",
    color: "#38bdf8",
    items: ["AWS", "GCP", "Azure", "Oracle Cloud", "Confluent", "VMware"]
  },
  {
    title: "AI / ML",
    icon: "fa-solid fa-robot",
    color: "#7c4dff",
    items: ["SageMaker", "Vertex AI", "Agent Development Kit (ADK)", "Gemini Enterprise", "MLflow", "Kubeflow", "LangChain", "OpenAI", "Vector DBs"]
  },
  {
    title: "CI/CD Tools",
    icon: "fa-solid fa-code-branch",
    color: "#22e07a",
    items: ["Jenkins", "GitLab", "CodePipeline", "CloudBuild", "Azure DevOps", "Harness", "Bitbucket", "Tekton", "Rio", "GitHub Actions", "ArgoCD", "Spinnaker", "FluxCD", "CircleCI"]
  },
  {
    title: "Monitoring & Observability",
    icon: "fa-solid fa-chart-line",
    color: "#f43f5e",
    items: ["CloudWatch", "Stackdriver", "Prometheus", "AlertManager", "Grafana", "Datadog", "PagerDuty", "QRadar", "Thanos", "OpenSearch", "Elasticsearch", "VictoriaMetrics", "Dynatrace", "Splunk"]
  },
  {
    title: "Database",
    icon: "fa-solid fa-database",
    color: "#ffd166",
    items: ["Azure SQL DB", "MongoDB", "Azure PostgreSQL", "Cosmos DB", "Redis/Memcache", "Elastic", "Kafka", "BigQuery"]
  },
  {
    title: "CDK / SDK",
    icon: "fa-solid fa-cubes",
    color: "#14b8a6",
    items: ["AWS CDK", "Azure SDK", "GCP SDK", "Keycloak", "OpenShift"]
  },
  {
    title: "Containerization",
    icon: "fa-brands fa-docker",
    color: "#2496ed",
    items: ["Docker", "Kubernetes", "OpenShift", "EKS", "ECS", "AKS", "ACS", "GKE", "Karpenter", "Istio"]
  },
  {
    title: "Config Mgmt / IaC",
    icon: "fa-solid fa-diagram-project",
    color: "#ff9900",
    items: ["Ansible", "CloudFormation", "Helm", "Packer", "Puppet", "Terraform"]
  },
  {
    title: "Security",
    icon: "fa-solid fa-shield-halved",
    color: "#ef4444",
    items: ["Cloud Armor", "Checkpoint", "F5", "AWS WAF & SCP", "Azure Sentinel", "Keycloak", "WSUS", "Red Hat Satellite", "QRadar", "Cortex XDR", "Rapid7"]
  },
  {
    title: "VPN & Networking",
    icon: "fa-solid fa-network-wired",
    color: "#ec4899",
    items: ["GCP HA VPN", "AWS S2S", "Azure S2S VPN", "Azure vWAN", "Pritunl"]
  },
  {
    title: "Other DevOps Tools",
    icon: "fa-solid fa-toolbox",
    color: "#84cc16",
    items: ["Git", "Maven", "JFrog", "Airflow", "Dataflow", "ETL Pipelines", "SonarQube", "Twistlock", "Artifactory", "Nexus", "HashiCorp Vault"]
  }
];
