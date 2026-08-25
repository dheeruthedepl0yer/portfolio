/* Latest posts, pulled from https://dheeruthedeployer.medium.com/feed and individual posts.
   Push a new { title, summary, href, tags[], color } object to the FRONT to feature
   a new post — the carousel always shows them in this array's order, followed by a
   fixed "Explore more on Medium" card (added in render.js, not here). `color` is the
   card's accent (any CSS color). Re-sync periodically since this isn't auto-fetched. */
const BLOGS = [
  {
    title: "How VPN Tunnels Work",
    summary: "A deep dive into encryption, the handshake process, algorithms and routing behind secure site-to-site VPN tunnels.",
    href: "https://dheeruthedeployer.medium.com/how-vpn-tunnels-work-a-deep-dive-into-encryption-handshake-process-algorithms-routing-and-c0c8db32504c",
    tags: ["VPN", "AWS", "GCP"],
    color: "#00d4ff"
  },
  {
    title: "Cross-Account IAM for GitHub Actions on EKS",
    summary: "Letting GitHub Actions runners inside EKS pods in one AWS account assume an IAM role in another to deploy safely.",
    href: "https://dheeruthedeployer.medium.com/technology-infrastructure-eks-github-actions-runners-in-eks-pods-in-account-a-assume-an-iam-98f9e3cd373b",
    tags: ["GitHub Actions", "AWS", "EKS"],
    color: "#ff6b6b"
  },
  {
    title: "Gcrane — A Migration Bird",
    summary: "Migrating container images between Google Container Registry, Artifact Registry and Azure Container Registry with gcrane.",
    href: "https://dheeruthedeployer.medium.com/technology-infrastructure-migration-gcrane-a-migration-bird-f9f10e223772",
    tags: ["GCP", "Azure", "Gcrane"],
    color: "#ffd166"
  },
  {
    title: "Generating Synthetic Data for Streaming Apps",
    summary: "Practical approaches to generating synthetic data for testing Kafka-based streaming applications.",
    href: "https://dheeruthedeployer.medium.com/technology-application-data-generating-synthetic-data-for-streaming-applications-3737012ca4a0",
    tags: ["Kafka", "Testing"],
    color: "#7c4dff"
  },
  {
    title: "GCP Serverless VPC Connector, Explained",
    summary: "How the Serverless VPC Access connector lets serverless components talk privately to VPC-internal services.",
    href: "https://dheeruthedeployer.medium.com/technology-gcp-vpc-serverless-vpc-connector-f49702042104",
    tags: ["GCP", "VPC", "Security"],
    color: "#22e07a"
  },
  {
    title: "Effortless Auth with AWS Cognito & ALB",
    summary: "Using AWS Cognito with an Application Load Balancer to add authentication in front of your apps without custom auth code.",
    href: "https://dheeruthedeployer.medium.com/authenticate-users-using-an-application-load-balancer-6d74163e2d32",
    tags: ["AWS", "Cognito", "ALB"],
    color: "#ff9900"
  },
  {
    title: "Thanos & Prometheus Tuning",
    summary: "Practical tuning tips for Thanos and Prometheus to improve query performance and long-term metrics storage.",
    href: "https://dheeruthedeployer.medium.com/thanos-prometheus-tuning-58a2b62f245d",
    tags: ["Thanos", "Prometheus"],
    color: "#f43f5e"
  },
  {
    title: "Azure AD — AWS SSO Integration",
    summary: "Federating AWS SSO with Azure Active Directory so users sync straight from AD to AWS.",
    href: "https://dheeruthedeployer.medium.com/azure-ad-aws-sso-integration-c60e2f9bac48",
    tags: ["Azure AD", "AWS SSO", "SAML"],
    color: "#38bdf8"
  },
  {
    title: "GitLab Integration with Keycloak",
    summary: "Integrating a self-hosted GitLab server with Keycloak for centralized SSO authentication.",
    href: "https://dheeruthedeployer.medium.com/gitlab-integration-with-keycloak-e1b2ff11a177",
    tags: ["GitLab", "Keycloak", "SSO"],
    color: "#14b8a6"
  },
  {
    title: "Docker & Its Command Line",
    summary: "A practical rundown of essential Docker CLI commands for building, running and managing containers.",
    href: "https://dheeruthedeployer.medium.com/docker-its-command-line-49b26c040b8d",
    tags: ["Docker", "CLI"],
    color: "#2496ed"
  },
  {
    title: "SSH Tunneling: Remote Forwarding",
    summary: "How SSH remote-forwarding tunnels let you reach an internal server through a public jump host.",
    href: "https://dheeruthedeployer.medium.com/ssh-tunneling-remote-forwarding-a70cc12e4ea2",
    tags: ["SSH", "Networking"],
    color: "#a855f7"
  }
];
