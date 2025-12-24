import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    title: "Cloud & Data Platforms",
    items: [
      "Microsoft Azure: Databricks, Data Factory (ADF), Data Lake Storage (ADLS), Synapse, Fabric",
      "Amazon AWS: S3, Glue, Kinesis, Lambda, Redshift",
      "Data Warehouses: Teradata, Snowflake, SQL Server, PostgreSQL, MySQL",
      "Big Data: Apache Spark, Hadoop, Kafka"
    ]
  },
  {
    title: "Data Engineering & ETL",
    items: [
      "ETL/ELT Tools: Informatica PowerCenter, Apache Airflow, Azure Data Factory, SSIS",
      "Processing: PySpark, Pandas, SQL optimization, data modeling (Kimball, Data Vault)",
      "Patterns: Lambda/Kappa architectures, medallion architecture, dimensional modeling",
      "Quality: Data validation, profiling, observability, alerting, SLA management"
    ]
  },
  {
    title: "Programming & Analytics",
    items: [
      "Languages: Python, SQL (T-SQL, PL/SQL), Java, Bash/PowerShell",
      "Analytics: PySpark, Pandas, NumPy, scikit-learn, statistical modeling",
      "BI Tools: Power BI, Tableau, Plotly, Flask dashboards",
      "ML/AI: Machine learning pipelines, LLM integration, predictive analytics"
    ]
  },
  {
    title: "DevOps & Governance",
    items: [
      "IaC & CI/CD: Terraform, Azure DevOps, Jenkins, GitLab CI, GitHub Actions",
      "Version Control: Git, branching strategies, code reviews",
      "Governance: RBAC, data lineage, metadata management, GDPR compliance",
      "Monitoring: Application Insights, Datadog, PagerDuty, runbook automation"
    ]
  }
];
