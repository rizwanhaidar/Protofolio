import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    title: "Volvo Cars - Connected Vehicle Platform",
    role: "Data Engineer",
    timeframe: "2023-2024 • Fortune 500 Automotive",
    stack: ["Azure ADF", "Databricks", "PySpark", "Fabric"],
    bullets: [
      "⚡ Reduced pipeline latency by 40% through ADF scheduling optimization and parallel ingestion patterns",
      "🚀 Improved query performance by 35% using PySpark optimization techniques",
      "🔧 Unified telemetry and service datasets supporting predictive maintenance analytics",
      "📊 Built analytics dashboards for supply-chain visibility and vehicle diagnostics"
    ]
  },
  {
    title: "Federated Co-operatives - Enterprise Data Warehouse",
    role: "ETL Developer",
    timeframe: "2023 • Fortune 500 Retail",
    stack: ["Informatica", "Teradata", "SQL", "SSIS"],
    bullets: [
      "📦 Developed 30+ ETL workflows processing 500GB+ daily data across Finance, Logistics, and Marketing domains",
      "⚡ Optimized 15+ SQL queries reducing runtime by 30% for operational dashboards",
      "🛡️ Maintained data quality and monitoring practices supporting 99.9% SLA",
      "🔐 Participated in incident response and data recovery procedures"
    ]
  },
  {
    title: "Uniklinikum Köln - Clinical Data & Analytics",
    role: "Data Management Assistant",
    timeframe: "2025 • Healthcare/Research",
    stack: ["Python", "Flask", "Plotly", "ML/LLM"],
    bullets: [
      "🏥 Processed and validated large-scale clinical datasets ensuring research compliance",
      "📊 Built 3 interactive dashboards using Flask and Plotly for data visualization",
      "🤖 Experimented with 5+ ML/LLM models for pattern analysis and insights generation",
      "📈 Automated data reporting workflows for biomedical research team"
    ]
  },
  {
    title: "GIZ - Energy Program Data Infrastructure",
    role: "Digital Infrastructure Working Student",
    timeframe: "2025 • Public Sector",
    stack: ["Airtable", "Power BI", "Cloud", "RBAC"],
    bullets: [
      "☁️ Migrated legacy databases to Airtable cloud platform with structured data governance",
      "📊 Built KPI dashboards in Power BI tracking international energy program metrics",
      "🔐 Configured role-based access control for secure multi-stakeholder collaboration",
      "🌍 Supporting climate and energy transformation initiatives with data infrastructure"
    ]
  }
];
