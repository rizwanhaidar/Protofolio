export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export type Study = { slug:string; title:string; org:string; relationship:string; mode:'professional'|'academic'; domains:string[]; stack:string[]; intro:string; metric:string; logo?:string; sections:{title:string; text:string}[]; flow?:string[]; related?:string; source:string };
export const employers = [
  {
    "name": "Toyota Financial Services",
    "sub": "Toyota Kreditbank · Financial services",
    "role": "Working Student — Business Intelligence & DWH",
    "dates": "March 2026 – Present",
    "location": "Cologne, Germany · Part-time · Hybrid",
    "mark": "TFS",
    "logo": "",
    "stack": "Snowflake / Python / SQL / ETL / Reconciliation",
    "text": "Legacy-system migration and validation in a Snowflake data warehouse environment. Supporting monthly and quarterly audit-critical reporting across nine markets.",
    "slug": "toyota",
    "metric": "5+ ETL pipelines · 9 markets"
  },
  {
    "name": "Teradata",
    "sub": "Consulting practice · Enterprise data engineering",
    "role": "Data Engineer",
    "dates": "September 2022 – May 2025",
    "location": "Remote · North American and European client engagements",
    "mark": "TD",
    "logo": "Teradata.png",
    "stack": "Azure / AWS / Informatica / Teradata / PySpark / Terraform",
    "text": "End-to-end ETL/ELT delivery, data modeling and platform operations. Client engagements included Volvo Cars and Federated Co-operatives; both are featured separately below.",
    "slug": "volvo",
    "metric": "15+ data pipelines · ~40% fewer deployment errors"
  },
  {
    "name": "GIZ",
    "sub": "Deutsche Gesellschaft für Internationale Zusammenarbeit",
    "role": "Digital Infrastructure Intern",
    "dates": "September 2025 – Present",
    "location": "Bonn, Germany · On-site",
    "mark": "GIZ",
    "logo": "giz.png",
    "stack": "Airtable / Power BI / Relational databases / RBAC",
    "text": "Centralized data foundations and KPI reporting for Global Energy Transformation programs, connecting international development with energy-sector data infrastructure.",
    "slug": "giz",
    "metric": "International energy programs"
  },
  {
    "name": "Uniklinikum Köln",
    "sub": "Institute of Biomedical Informatics",
    "role": "Data Management Assistant",
    "dates": "August 2025 – Present",
    "location": "Germany · Biomedical informatics research team",
    "mark": "UK",
    "logo": "uniklinik.png",
    "stack": "Python / Flask / Plotly / ML / LLMs",
    "text": "Clinical dataset curation, statistical validation and interactive analytics, alongside applied research into predictive models and explainability.",
    "slug": "clinical",
    "metric": "~3 dashboards · 5+ ML/LLM models explored"
  }
];
export const studies: Study[] = [
  {
    "slug": "toyota",
    "title": "A reliable foundation for audit-critical reporting.",
    "org": "Toyota Financial Services",
    "relationship": "Employer · Toyota Kreditbank",
    "mode": "professional",
    "domains": [
      "Data Engineering",
      "Analytics"
    ],
    "stack": [
      "Snowflake",
      "Python",
      "SQL",
      "ETL",
      "Data quality"
    ],
    "intro": "Migrating legacy data and validating BI and DWH workflows across nine markets.",
    "metric": "9 markets",
    "flow": [
      "Legacy systems",
      "ETL migration",
      "Snowflake DWH",
      "Quality & reconciliation",
      "Monthly / quarterly reporting"
    ],
    "source": "Owner-confirmed experience and metrics, October 2026.",
    "sections": [
      {
        "title": "Engineering context",
        "text": "Monthly and quarterly audit-critical reporting depends on data moving reliably from legacy systems into a Snowflake data warehouse. The work spans nine markets and finance-adjacent BI reporting workflows."
      },
      {
        "title": "My contribution",
        "text": "Developed 5+ ETL pipelines for legacy-system migration to Snowflake. Built Python- and Snowflake-based data-quality and reconciliation pipelines for BI and DWH validation."
      },
      {
        "title": "Validation & outcome",
        "text": "The pipelines support traceability and accuracy across reporting workflows. The verified scope is 5+ ETL pipelines and nine markets; no unmeasured percentage improvement is claimed."
      },
      {
        "title": "Technical perspective",
        "text": "Migration and validation belong in the same delivery process: a loaded table is only useful when its data can be reconciled and traced. The diagram is a high-level summary of the documented workflow, not an internal system specification."
      }
    ]
  },
  {
    "slug": "volvo",
    "title": "From vehicle telemetry to dependable analytics.",
    "org": "Volvo Cars",
    "relationship": "Client engagement through Teradata · Cloud Data Engineer",
    "mode": "professional",
    "domains": [
      "Data Engineering",
      "Analytics"
    ],
    "stack": [
      "Azure Data Factory",
      "Databricks",
      "Microsoft Fabric",
      "PySpark"
    ],
    "logo": "Volvo.png",
    "intro": "Scheduled ingestion and tuned processing for connected-vehicle and service data.",
    "metric": "~40% lower latency",
    "flow": [
      "Telemetry & service data",
      "Scheduled ADF ingestion",
      "Lakehouse datasets",
      "PySpark processing",
      "Analytics"
    ],
    "source": "Public CV, Consulting Assignments: Volvo Cars. Metrics are self-reported approximate outcomes.",
    "sections": [
      {
        "title": "Engineering context",
        "text": "The engagement supported connected-car safety, predictive maintenance and global supply-chain intelligence. Vehicle telemetry and service datasets needed to become consistently available for analytics."
      },
      {
        "title": "My contribution",
        "text": "Replaced pilot-phase manual telemetry ingestion with scheduled Azure Data Factory pipelines. Unified telemetry and service datasets for an analytics layer supporting predictive-maintenance alerts and vendor dashboards."
      },
      {
        "title": "Implementation",
        "text": "Tuned PySpark jobs using caching and partitioning in Microsoft Fabric and Databricks. The work combined ingestion scheduling with downstream processing improvements."
      },
      {
        "title": "Evaluation & outcome",
        "text": "The CV reports approximately 40% lower ingestion latency and approximately 35% improved query speed. These are project-specific, self-reported comparisons; workload definitions and benchmark logs are not publicly available."
      },
      {
        "title": "Technical perspective",
        "text": "Freshness and query performance are separate concerns. Scheduling addresses the consistency of ingestion; caching and partitioning address the cost of processing. Client source data and implementation details are not distributed."
      }
    ]
  },
  {
    "slug": "fcl",
    "title": "An enterprise warehouse built for operational reporting.",
    "org": "Federated Co-operatives",
    "relationship": "Client engagement through Teradata · Informatica Developer",
    "mode": "professional",
    "domains": [
      "Data Engineering",
      "Analytics"
    ],
    "stack": [
      "Informatica",
      "Teradata",
      "SQL"
    ],
    "logo": "fcl.png",
    "intro": "ETL delivery and SQL optimization across finance, logistics and marketing.",
    "metric": "30+ ETL workflows",
    "source": "Public CV, Consulting Assignments: Federated Co-operatives Limited. Approximate performance metrics are self-reported.",
    "sections": [
      {
        "title": "Engineering context",
        "text": "The retail enterprise data warehouse serves multiple operational domains. Reporting-ready datasets and reliable pipeline operations supported finance, logistics and marketing analytics."
      },
      {
        "title": "My contribution",
        "text": "Designed and delivered 30+ ETL workflows using Teradata and Informatica. Optimized 15+ SQL reports and supported ad-hoc analytical requirements with business teams."
      },
      {
        "title": "Reliability & implementation",
        "text": "Triaged high-priority pipeline incidents, validated sales data and supported data recovery during a cyber event. The public summary excludes client-sensitive operational details."
      },
      {
        "title": "Evaluation & outcome",
        "text": "The CV reports approximately 30% shorter execution times for the optimized reporting work. No daily data volume or numerical availability SLA is asserted because those figures are not substantiated by the CV."
      },
      {
        "title": "Technical perspective",
        "text": "Warehouse engineering extends beyond transformations: incident triage and validation are part of making reporting datasets dependable."
      }
    ]
  },
  {
    "slug": "giz",
    "title": "Data infrastructure for international energy programs.",
    "org": "GIZ",
    "relationship": "Employer · Digital Infrastructure Intern",
    "mode": "professional",
    "domains": [
      "Data Engineering",
      "Analytics"
    ],
    "stack": [
      "Airtable",
      "Power BI",
      "RBAC"
    ],
    "logo": "giz.png",
    "intro": "Bringing program data, access controls and performance reporting into a common foundation.",
    "metric": "Global Energy Transformation",
    "source": "Public CV, GIZ experience.",
    "sections": [
      {
        "title": "Program context",
        "text": "International development and energy transformation programs need shared data foundations and consistent performance reporting across stakeholders."
      },
      {
        "title": "My contribution",
        "text": "Migrating on-premises relational databases into Airtable, including interfaces and role-based access controls. Designing KPI systems and reporting cadences in Power BI."
      },
      {
        "title": "Approach & outcome",
        "text": "The documented work combines data centralization, controlled access and recurring program monitoring. It is described as ongoing work; no numerical efficiency gain or completed migration total is claimed."
      },
      {
        "title": "Technical perspective",
        "text": "Reporting infrastructure must account for both the structure of program data and the people who maintain and consume it."
      }
    ]
  },
  {
    "slug": "clinical",
    "title": "Clinical data, interactive analytics and applied research.",
    "org": "Uniklinikum Köln",
    "relationship": "Employer · Data Management Assistant",
    "mode": "professional",
    "domains": [
      "Analytics"
    ],
    "stack": [
      "Python",
      "Flask",
      "Plotly",
      "ML / LLMs"
    ],
    "logo": "uniklinik.png",
    "intro": "Curating clinical datasets and exploring predictive analytics with a biomedical informatics team.",
    "metric": "~3 interactive dashboards",
    "related": "clinical-research",
    "source": "Public CV, Institut für Biomedizinische Informatik experience.",
    "sections": [
      {
        "title": "Clinical data context",
        "text": "Clinical research requires curated datasets with statistical soundness and reporting-ready quality. This work bridges data management and analytical exploration."
      },
      {
        "title": "My contribution",
        "text": "Processed and curated clinical datasets. Designed and deployed approximately three interactive dashboards using Flask and Plotly, integrating predictive analytics for clinician decision-support workflows."
      },
      {
        "title": "Applied research",
        "text": "Experimented with 5+ ML/LLM models for classification and regression and benchmarked explainability techniques. These are exploratory research activities, not claims of validated clinical efficacy."
      },
      {
        "title": "Outcome & boundaries",
        "text": "The public CV establishes dashboard delivery and model exploration. It does not provide cohort sizes, model names, evaluation scores or evidence of clinical deployment. Patient data and internal research materials are not published."
      }
    ]
  },
  {
    "slug": "xaihate",
    "title": "XAIHate: explainable hate-speech detection for Urdu.",
    "org": "FAST NUCES",
    "relationship": "Bachelor’s thesis · Team: Maria Yasir, Maaz Asad & Rizwan Haidar",
    "mode": "academic",
    "domains": [
      "NLP"
    ],
    "stack": [
      "TF-IDF",
      "Naive Bayes",
      "Random Forest",
      "BERT",
      "DistilBERT",
      "LIME",
      "Flask"
    ],
    "intro": "A bachelor’s thesis combining multilingual classification with word-level explanations.",
    "metric": "87.7% Urdu accuracy",
    "source": "XAIHate FYP-2 Final Report, sections 4–7; team-authored bachelor’s thesis, FAST NUCES.",
    "sections": [
      {
        "title": "Research question",
        "text": "How can hate-speech detection in Urdu, Roman Urdu and English be paired with explanations that communicate why a text received its label?"
      },
      {
        "title": "Approach & models",
        "text": "The team compared TF-IDF-based Naive Bayes, logistic regression and random forests with BERT, DistilBERT and RoBERTa. A perturbation-based explainer estimated word contributions and compared important features against LIME. A Flask application presented highlighted text, interactive contribution plots and word clouds."
      },
      {
        "title": "Evaluation & results",
        "text": "The report evaluates classification with accuracy and, for deep learning, precision, recall and F1. DistilBERT reached 87.7% accuracy and 0.81 F1 on Urdu, and 88.05% accuracy on Roman Urdu. BERT reached 96.11% accuracy and 0.94 F1 on English. These are team-reported results on separate language datasets, not directly comparable language benchmarks."
      },
      {
        "title": "Limitations",
        "text": "Explanation validation was carried out for the classical machine-learning models; deep-learning explanations were constrained by computation. Agreement with LIME is a comparison against another explanation method, not proof of causal faithfulness. The report also discusses the trade-off between inference speed and predictive performance."
      },
      {
        "title": "Attribution & next questions",
        "text": "Co-authored by Maria Yasir, Maaz Asad and Rizwan Haidar, supervised by Umair Arshad with Omer Beg as co-supervisor. The report does not provide an individual task breakdown. Future work includes extending explainability to deep-learning models and improving annotation and preprocessing."
      }
    ],
    "flow": [
      "Urdu / Roman Urdu / English",
      "Text preprocessing",
      "Classification",
      "Word contributions",
      "Flask explanation interface"
    ]
  },
  {
    "slug": "nli",
    "title": "Natural language inference beyond benchmark accuracy.",
    "org": "University of Bonn",
    "relationship": "Master’s project · Mining Media Data 2 · Team 3",
    "mode": "academic",
    "domains": [
      "NLP"
    ],
    "stack": [
      "SNLI",
      "MultiNLI",
      "GloVe",
      "BERT",
      "DeBERTa",
      "Transformer"
    ],
    "intro": "Comparing pretraining, shortcut learning and cross-genre generalization on SNLI and MultiNLI.",
    "metric": "91.04% SNLI test accuracy",
    "source": "Mining Media Data 2, Project 1: NLI, Team 3 report, sections 2–6 and appendix.",
    "sections": [
      {
        "title": "Research question",
        "text": "How much does large-scale pretraining contribute to natural language inference, and do high benchmark scores survive domain shift and shortcut-focused diagnostics?"
      },
      {
        "title": "Team & approach",
        "text": "Collaborative work by Maaz Asad, Maria Yasir and Rizwan Haidar. The team compared a three-layer, six-head Transformer initialized with 300-dimensional GloVe vectors against BERT-base-uncased and DeBERTa-v3-base. The report does not assign individual implementation ownership."
      },
      {
        "title": "Data & evaluation",
        "text": "After cleaning SNLI, the study used 549,361 training, 9,842 validation and 9,824 test pairs. Models classify entailment, contradiction and neutral. Evaluation includes held-out accuracy, per-class recall, MultiNLI transfer and diagnostic subsets for overlap, negation and length mismatch."
      },
      {
        "title": "Results",
        "text": "SNLI test accuracy was 91.04% for BERT, 90.30% for DeBERTa and 80.84% for the custom Transformer. On combined MultiNLI validation data, accuracy fell to 74.31%, 70.83% and 44.91%, respectively. High in-domain performance therefore did not establish robust cross-genre reasoning."
      },
      {
        "title": "Limitations & future work",
        "text": "Training used one image-caption domain. The custom model had not converged at epoch 25, and small diagnostic subsets limit strong conclusions. Future evaluation on HANS or SNLI-hard, MultiNLI fine-tuning and adversarial augmentation would better test generalization."
      }
    ],
    "flow": [
      "SNLI sentence pairs",
      "Shared preprocessing",
      "Three model families",
      "Test accuracy",
      "MultiNLI & shortcut diagnostics"
    ]
  },
  {
    "slug": "polarization",
    "title": "Polarization detection across English and Urdu.",
    "org": "University of Bonn",
    "relationship": "Master’s project · University of Bonn, CAISA Lab · Team 25",
    "mode": "academic",
    "domains": [
      "NLP"
    ],
    "stack": [
      "POLAR",
      "RemBERT",
      "XLM-RoBERTa",
      "LLMs",
      "Macro-F1"
    ],
    "intro": "Supervised multilingual models and in-context learning under linguistic and label-distribution shift.",
    "metric": "0.7630 Urdu macro-F1",
    "source": "Team 25 NLP project report, dated February 9, 2026, sections 3–9 and Tables 2–3.",
    "sections": [
      {
        "title": "Research question",
        "text": "How do supervised multilingual transformers and prompted LLMs compare for multilabel polarization classification when English and Urdu differ strongly in language and label distributions?"
      },
      {
        "title": "Team & methods",
        "text": "Collaborative report by Maaz Asad, Maria Yasir, Aqib Amir Khan and Rizwan Haidar (spelled “haider” on the report cover). RemBERT and XLM-RoBERTa were evaluated in monolingual, joint multilingual and cross-lingual settings, with per-label threshold tuning. GPT-OSS, LLaMA and Qwen variants were tested through zero- and few-shot prompting."
      },
      {
        "title": "Data & evaluation",
        "text": "POLAR@SemEval-2026 Task 9, Subtask 2 assigns five polarization categories: political, racial/ethnic, religious, gender/sexual and other. Macro-F1 is the primary metric because label frequencies are imbalanced. English has sparse labels; Urdu has denser, frequently overlapping labels."
      },
      {
        "title": "Results",
        "text": "Table 2 reports monolingual RemBERT macro-F1 of 0.4615 for English and 0.7630 for Urdu, compared with 0.3608 and 0.7400 for XLM-RoBERTa. XLM-R cross-lingual zero-shot scores fell to 0.2018 and 0.2991. Joint training reduced English performance. Prompting benefits varied across models and languages."
      },
      {
        "title": "Limitations & future work",
        "text": "Language, culture and label distribution are entangled, limiting cross-lingual conclusions. Model and prompt coverage is limited; the report does not establish a competition ranking. Future work includes English data augmentation and more robust cross-lingual adaptation. Individual task ownership is not specified in the report."
      }
    ]
  },
  {
    "slug": "graph-aml",
    "title": "Graph learning for anti-money laundering.",
    "org": "University of Bonn",
    "relationship": "Master’s lab · Information Retrieval in Practice · Collaborative research",
    "mode": "academic",
    "domains": [
      "Graph ML"
    ],
    "stack": [
      "AMLworld",
      "Multi-GIN + EU",
      "FRAD-B",
      "Graph neural networks",
      "Minority-class F1"
    ],
    "intro": "A controlled comparison of graph approaches for rare illicit-transaction detection.",
    "metric": "Reproduction & feature ablation",
    "source": "A Comparative Study of Graph Neural Network Approaches for Anti-Money Laundering Detection, sections 6–7 and Individual Contributions.",
    "sections": [
      {
        "title": "Research question",
        "text": "Which graph architectural choices improve edge-level money-laundering detection under extreme class imbalance, and how reproducible are the gains?"
      },
      {
        "title": "My contribution",
        "text": "Reproduced Multi-GIN + EU experiments and implemented the FRAD-B edge-feature variant on that baseline. Wrote the introduction and problem statement and contributed the Multi-GNN / FRAD-DM theory, experimental setup and results sections. The FRAD-DM-inspired reconstruction is a controlled partial variant, not a reproduction of the full original pipeline."
      },
      {
        "title": "Team & evaluation",
        "text": "Team: Avin Safari Shirzi, Mohamed Abouelella, Rizwan Haidar and Haofan Wen. The study uses the synthetic AMLworld benchmark, treating transactions as directed multigraph edges. Evaluation selects the best-validation checkpoint and reports minority-class F1 across random seeds. Other team members implemented D-EMAML, FraudGT and C2GAT."
      },
      {
        "title": "Results & interpretation",
        "text": "On Small-HI, Table 3 reports minority-class F1 of 59.9 ± 7.1 for reproduced Multi-GIN + EU and 54.07 ± 10.7 for FRAD-B. The variant did not establish an improvement; the gap is smaller than the seed-wise variability. The team’s strongest FraudGT extension reached 77.6 ± 1.5, versus 76.4 ± 1.5 for its reproduced baseline; this result belongs to the collaborative study, not my individual implementation."
      },
      {
        "title": "Limitations & future work",
        "text": "Approaches differ in preprocessing, graph coverage and training setup, so a simple cross-model ranking would overstate comparability. Data is synthetic; D-EMAML uses pruned coverage. Further controlled ablations and more consistent preprocessing are needed before drawing broader conclusions."
      }
    ],
    "flow": [
      "Transaction multigraph",
      "Chronological data splits",
      "Edge features & message passing",
      "Transaction classification",
      "Minority-class F1"
    ]
  },
  {
    "slug": "ai-safety",
    "title": "Does chain-of-thought monitorability survive quantization?",
    "org": "University of Bonn",
    "relationship": "Master’s-level AI Safety research proposal · Sole author: Rizwan Haidar",
    "mode": "academic",
    "domains": [
      "AI Safety"
    ],
    "stack": [
      "Qwen3-8B",
      "GPTQ",
      "MMLU",
      "Equivalence testing",
      "CoT monitoring"
    ],
    "intro": "A research proposal on cue acknowledgment across matched Qwen3 model artifacts.",
    "metric": "Proposed study · no results yet",
    "source": "AI Safety seminar thesis proposal, Rizwan Haidar, University of Bonn; methodology, risks and six-month plan.",
    "sections": [
      {
        "title": "Research question",
        "text": "Does weight quantization change how often an injected cue alters an answer without being acknowledged in the model’s reasoning?"
      },
      {
        "title": "Proposed method",
        "text": "Compare BF16 against a matched GPTQ W4A16 artifact from a fixed Qwen3-8B checkpoint. W8A16 and W3A16 are exploratory branches. Use MMLU questions and six cue families while holding prompts, cue targets, decoding and judging procedures fixed across artifacts."
      },
      {
        "title": "Proposed evaluation",
        "text": "Measure unacknowledged cue susceptibility and total cue susceptibility over all questions, avoiding conditioning only on successful cues. The confirmatory contrast requires equivalence within five percentage points on both outcomes. The plan includes pilot power checks, paired analysis, judge validation and token-budget sensitivity checks."
      },
      {
        "title": "Status & expected output",
        "text": "This is a proposal, not a completed experiment or peer-reviewed publication. It specifies a six-month research plan and a reproducible evaluation design. No observed preservation or degradation of monitorability is claimed."
      },
      {
        "title": "Limitations & fallbacks",
        "text": "Conclusions would apply to the tested artifacts and inference paths, not bit width in general. Cue acknowledgment is a narrow proxy for monitorability. Low power, judge failures or budget confounding can produce an inconclusive result; the proposal retains fixed equivalence margins rather than relaxing them to force a finding."
      }
    ],
    "flow": [
      "Fixed Qwen3-8B checkpoint",
      "Matched precision artifacts",
      "MMLU + six cue families",
      "Cue influence & acknowledgment",
      "Paired equivalence analysis"
    ]
  },
  {
    "slug": "clinical-research",
    "title": "Applied research in biomedical informatics.",
    "org": "Uniklinikum Köln",
    "relationship": "Research activity within employment · Data Management Assistant",
    "mode": "academic",
    "domains": [
      "Analytics"
    ],
    "stack": [
      "Classification",
      "Regression",
      "Explainability",
      "Python"
    ],
    "logo": "uniklinik.png",
    "intro": "Exploratory ML/LLM modeling and explainability alongside clinical data management.",
    "metric": "5+ models explored",
    "related": "clinical",
    "source": "Public CV, Uniklinikum Köln experience.",
    "sections": [
      {
        "title": "Research motivation",
        "text": "Explore patterns in patient data and interpretable analytical outputs within a biomedical informatics research team."
      },
      {
        "title": "Approach & models",
        "text": "Experimented with 5+ ML/LLM models for classification and regression and benchmarked explainability techniques. Statistical validation and dataset curation supported the wider analytical work."
      },
      {
        "title": "Evaluation & results",
        "text": "The available CV confirms model experimentation and explainability benchmarking, but does not identify individual models, datasets or scores. No publication or clinical efficacy claim is made."
      },
      {
        "title": "Limitations",
        "text": "Cohort details, study design and quantitative results are not available for public presentation. This is applied research within employment, not a separately attributed university project."
      }
    ]
  }
];
