export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export type Study = { slug:string; title:string; org:string; relationship:string; mode:'professional'|'academic'; domains:string[]; stack:string[]; intro:string; metric:string; logo?:string; sections:{title:string; text:string}[]; flow?:string[]; related?:string };

export type Employer = { name:string; sub:string; role:string; dates:string; location:string; logo:string; stack:string; text:string; metric:string; links:{label:string; slug:string}[]; engagements?:{period:string; client:string; role:string; highlight:string}[] };

// Reverse-chronological. Titles, dates and locations follow the employer documents.
export const employers: Employer[] = [
  {
    name: 'Toyota Financial Services',
    sub: 'Toyota Kreditbank GmbH · Financial services',
    role: 'Working Student — Business Intelligence & DWH',
    dates: 'March 2026 – Present',
    location: 'Cologne, Germany · Hybrid',
    logo: '',
    stack: 'Snowflake / SQL / Python / ETL / Reconciliation / Dashboards',
    text: 'I automate the monthly and quarterly audit-critical reporting extracts (CO2 and portfolio figures per market) that governance, risk and compliance managers use across 9 markets, and integrated macroeconomic factors into risk reporting. I also migrate legacy data into the Snowflake warehouse with reconciliation checks, and built a cost-analysis dashboard for the data tools the team uses.',
    metric: '9 markets · monthly & quarterly reporting',
    links: [{label:'Read the case study', slug:'toyota'}]
  },
  {
    name: 'Uniklinik Köln',
    sub: 'Institute for Biomedical Informatics',
    role: 'Data Management Assistant',
    dates: 'September 2025 – March 2026',
    location: 'Cologne, Germany · On-site · Part-time',
    logo: 'uniklinik.png',
    stack: 'Python / Flask / Plotly / ML / Data validation',
    text: 'I curated and validated research datasets for clinical analytics, built a patient-survey dashboard on a tight deadline, and created Python pipelines that preprocess and classify research data with lightweight ML models and prompt-based classifiers.',
    metric: '3 interactive dashboards',
    links: [{label:'Read the case study', slug:'clinical'}]
  },
  {
    name: 'GIZ',
    sub: 'Deutsche Gesellschaft für Internationale Zusammenarbeit · GET.transform',
    role: 'Digital Infrastructure Intern',
    dates: 'September 2025 – March 2026',
    location: 'Bonn, Germany · Hybrid',
    logo: 'giz.png',
    stack: 'Microsoft Lists / SharePoint / Teams / Process mapping',
    text: 'I migrated the programme’s project-management data from Excel to Microsoft Lists, built SharePoint and Teams structures, mapped process flows for a new project-management system, and trained colleagues through workshops and a user manual.',
    metric: 'Team across Europe, Latin America and Africa',
    links: [{label:'Read the case study', slug:'giz'}]
  },
  {
    name: 'Teradata',
    sub: 'Teradata Global Consulting Pakistan · Enterprise data engineering',
    role: 'Associate Data Engineer',
    dates: 'September 2022 – May 2025',
    location: 'Islamabad, Pakistan · Remote · Full-time',
    logo: 'Teradata.png',
    stack: 'Teradata (BTEQ, TPT, GCFR) / Informatica PowerCenter / Azure / AWS / PySpark / Terraform / Jenkins / Control-M',
    text: 'I delivered ETL/ELT pipelines, data-quality fixes and platform operations for retail and automotive clients, and ran Python and PySpark training for engineers across delivery centres. Git, Terraform and the CI/CD pipelines I managed cut deployment errors by ~40%.',
    metric: '30+ ETL workflows · 5 Teradata awards',
    engagements: [
      {period:'Jan – May 2025', client:'Volvo Cars (Sweden)', role:'Cloud Data Engineer', highlight:'~40% lower ingestion latency'},
      {period:'Sep 2023 – Jan 2025', client:'Federated Co-operatives (Canada)', role:'Informatica Developer', highlight:'30+ ETL workflows, ~30% faster reports'},
      {period:'Dec 2022 – Aug 2023', client:'Legacy-to-Teradata migration', role:'Data Engineer', highlight:'500+ GB migrated, ~45% less manual effort'},
      {period:'Sep – Dec 2022', client:'L.E.A.P. graduate program', role:'Associate Data Engineer', highlight:'Teradata, Azure and AWS certifications'}
    ],
    links: [{label:'Volvo Cars', slug:'volvo'},{label:'Federated Co-operatives', slug:'fcl'},{label:'Legacy migration', slug:'migration'}]
  }
];

// One combined view of the markets and regions worked with, across all roles.
export const markets = [
  {region:'Europe', countries:'Germany, Sweden, Belgium and 9 Toyota Financial Services markets', via:'Toyota Financial Services, Volvo Cars, GIZ, Uniklinik Köln'},
  {region:'North America', countries:'Canada', via:'Federated Co-operatives'},
  {region:'Latin America', countries:'Chile, Peru, Central America', via:'GIZ GET.transform team'},
  {region:'Africa', countries:'Eswatini, Lesotho, Mozambique, Uganda', via:'GIZ GET.transform team'},
  {region:'Asia', countries:'Pakistan', via:'Teradata delivery centre'}
];

export const awards = [
  {award:'Spot Award', date:'2025', reason:''},
  {award:'Spot Award', date:'March 2024', reason:'Python and PySpark enablement content and two training sessions, one at delivery-centre level'},
  {award:'Quarterly Excellence Award', date:'Q1 2024', reason:'Back end of a MicroStrategy dashboard for the Federated Co-operatives Energy team'},
  {award:'Spot Award', date:'September 2023', reason:'Coordinating onboarding for the 2023 L.E.A.P. graduate cohort'},
  {award:'Spot Award', date:'May 2023', reason:'Workshop coordinator and Python instructor for the Data Engineering workshop'}
];

export const studies: Study[] = [
  {
    slug: 'toyota',
    title: 'Audit-critical reporting, automated.',
    org: 'Toyota Financial Services',
    relationship: 'Employer · Working Student, BI & DWH',
    mode: 'professional',
    domains: ['Data Engineering', 'Analytics'],
    stack: ['Snowflake', 'SQL', 'Python', 'Data quality'],
    intro: 'Monthly and quarterly CO2 and portfolio extracts for governance, risk and compliance managers across 9 markets, plus macroeconomic factors in risk reporting.',
    metric: '9 markets · monthly & quarterly',
    flow: ['Legacy sources', 'ETL into Snowflake', 'Reconciliation checks', 'Automated extracts', 'GRC reporting'],
    sections: [
      {title:'Context', text:'Toyota Financial Services reports CO2 and portfolio figures per market to its governance, risk and compliance (GRC) managers every month and quarter, and its risk reporting draws on macroeconomic factors. These outputs feed audit-critical reporting, so every figure has to trace back to source.'},
      {title:'My work', text:'I automated the monthly and quarterly reporting extracts for 9 markets, replacing manual preparation, and integrated macroeconomic factors into the risk reporting data. I built reconciliation checks that compare counts and balances between legacy sources and the Snowflake warehouse, and migrated legacy data into Snowflake through 5+ ETL pipelines. I also built a cost-analysis dashboard that shows what the team’s data tools cost and where usage concentrates.'},
      {title:'Result', text:'Repeatable, traceable extracts on a fixed reporting cadence, macroeconomic factors available in risk reporting, and one view of tool costs for the team.'}
    ]
  },
  {
    slug: 'migration',
    title: 'Legacy migration, automated.',
    org: 'Teradata',
    relationship: 'Client engagement through Teradata · Data Engineer',
    mode: 'professional',
    domains: ['Data Engineering'],
    stack: ['Python', 'SQL', 'PL/SQL', 'Teradata (BTEQ, TPT)', 'Shell'],
    intro: 'Tooling that moved 500+ GB from legacy systems into Teradata and cut manual migration effort.',
    metric: '~45% less manual effort',
    flow: ['Legacy warehouse', 'SQL & PL/SQL analysis', 'Automated conversion', 'Load into Teradata', 'Validation'],
    sections: [
      {title:'Context', text:'A client was moving its legacy warehouse into Teradata. Over a thousand SQL and PL/SQL artifacts had to be analysed and converted, and the loaded data checked.'},
      {title:'My work', text:'I co-developed a migration framework that moved 500+ GB from legacy systems into Teradata. I built Python tooling that analysed 1,000+ SQL and PL/SQL artifacts, cutting migration analysis time by ~40%, and automated repetitive migration steps, reducing manual effort by ~45% (50+ hours a week). I also contributed to dbt and Databricks proofs of concept.'},
      {title:'Result', text:'A faster, more repeatable migration path, with analysis and loading steps that no longer depended on manual work.'}
    ]
  },
  {
    slug: 'fcl',
    title: 'An enterprise warehouse built for operational reporting.',
    org: 'Federated Co-operatives',
    relationship: 'Client engagement through Teradata · Informatica Developer',
    mode: 'professional',
    domains: ['Data Engineering', 'Analytics'],
    stack: ['Informatica PowerCenter', 'Teradata', 'SQL', 'MicroStrategy', 'Jenkins', 'Control-M'],
    logo: 'fcl.png',
    intro: '30+ Informatica workflows and faster reports for finance, logistics, marketing and energy teams.',
    metric: '~30% faster reports',
    flow: ['Landing', 'Staging', 'Core', 'Semantic', 'Reports & dashboards'],
    sections: [
      {title:'Context', text:'A Canadian retail co-operative runs its operational reporting on a Teradata enterprise warehouse with landing, staging, core and semantic layers.'},
      {title:'My work', text:'I designed and delivered 30+ ETL workflows in Informatica PowerCenter across all four layers and optimized 15+ SQL reports, cutting run times by ~30%. I built the back end of a MicroStrategy dashboard for the Energy team, which earned a Quarterly Excellence Award (Q1 2024). I triaged P1/P2 incidents against SLAs, provided 24/7 support during a cyber incident to validate sales data during recovery, automated releases with Jenkins and GitHub, and scheduled jobs with Control-M.'},
      {title:'Result', text:'Faster, reporting-ready datasets for four business domains and an award-winning dashboard.'}
    ]
  },
  {
    slug: 'volvo',
    title: 'From vehicle telemetry to dependable analytics.',
    org: 'Volvo Cars',
    relationship: 'Client engagement through Teradata · Cloud Data Engineer',
    mode: 'professional',
    domains: ['Data Engineering', 'Analytics'],
    stack: ['Azure Data Factory', 'Databricks', 'ADLS', 'PySpark', 'Terraform'],
    logo: 'Volvo.png',
    intro: 'Scheduled ingestion and tuned Spark jobs for connected-vehicle and service data.',
    metric: '~40% lower ingestion latency',
    flow: ['Telemetry & service data', 'Scheduled ADF ingestion', 'Lakehouse tables', 'PySpark processing', 'Alerts & dashboards'],
    sections: [
      {title:'Context', text:'A five-month engagement on the data platform behind connected-car safety, predictive maintenance and supply-chain analytics.'},
      {title:'My work', text:'I replaced manual pilot-phase telemetry ingestion with scheduled Azure Data Factory pipelines, cutting ingestion latency by ~40%. I unified telemetry and service datasets into lakehouse tables feeding predictive-maintenance alerts and vendor dashboards, and tuned PySpark jobs on Databricks with caching and partitioning, improving query speed by ~35%.'},
      {title:'Result', text:'Consistent, faster access to vehicle data for maintenance and vendor analytics.'}
    ]
  },
  {
    slug: 'giz',
    title: 'Digital infrastructure for an international energy programme.',
    org: 'GIZ',
    relationship: 'Employer · Digital Infrastructure Intern',
    mode: 'professional',
    domains: ['Digital infrastructure'],
    stack: ['Microsoft Lists', 'SharePoint', 'Teams', 'Excel', 'Process mapping'],
    logo: 'giz.png',
    intro: 'Moved the programme’s project data into Microsoft Lists and onboarded a team spread over three continents.',
    metric: 'Team across Europe, Latin America and Africa',
    sections: [
      {title:'Context', text:'GET.transform is a European multi-donor programme, implemented by GIZ, that helps public-sector partners transform their power sectors. Its team works across Belgium, Chile, Central America, Germany, Eswatini, Lesotho, Mozambique, Peru and Uganda.'},
      {title:'My work', text:'I migrated project-management data from Excel to Microsoft Lists and assessed process flows to define requirements for a new project-management system. I built folder structures, landing pages and synchronized SharePoint–Teams connections, and maintained the project’s SharePoint pages. I trained colleagues through virtual and in-person sessions, wrote the user manual, and presented project status overviews in team meetings.'},
      {title:'Result', text:'One shared project-data environment that the team adopted.'}
    ]
  },
  {
    slug: 'clinical',
    title: 'Clinical research data, curated and visualized.',
    org: 'Uniklinik Köln',
    relationship: 'Employer · Data Management Assistant',
    mode: 'professional',
    domains: ['Analytics'],
    stack: ['Python', 'Flask', 'Plotly', 'scikit-learn', 'LLM prompting'],
    logo: 'uniklinik.png',
    intro: 'Dataset curation, a patient-survey dashboard and ML-assisted data classification for a biomedical informatics team.',
    metric: '3 interactive dashboards',
    sections: [
      {title:'Context', text:'A biomedical informatics research team needed reporting-ready datasets and fast ways to explore them.'},
      {title:'My work', text:'I curated and validated research datasets for clinical analytics and reporting. I built a patient-survey dashboard on a tight deadline, plus Flask and Plotly dashboards for the research team. I built Python pipelines that preprocess and classify research data with lightweight ML models and prompt-based classifiers, and benchmarked explainability techniques across 5+ models.'},
      {title:'Result', text:'Researchers could analyse survey and research data from several angles without manual preparation.'}
    ]
  },
  {
    slug: 'nli',
    title: 'Natural language inference beyond benchmark accuracy.',
    org: 'University of Bonn',
    relationship: 'Team project · Mining Media Data II · with Maaz Asad and Maria Yasir',
    mode: 'academic',
    domains: ['NLP'],
    stack: ['SNLI', 'MultiNLI', 'GloVe', 'BERT', 'DeBERTa', 'Transformer'],
    intro: 'Can a model trained to infer relationships between sentences generalize to unfamiliar genres? We compared three architectures on SNLI and MultiNLI.',
    metric: '91.04% → 74.31% BERT accuracy',
    flow: ['SNLI sentence pairs', 'Shared preprocessing', 'Three model families', 'Test accuracy', 'MultiNLI & shortcut diagnostics'],
    sections: [
      {title:'Question', text:'How much does large-scale pretraining contribute to natural language inference, and do high benchmark scores survive domain shift and shortcut-focused diagnostics?'},
      {title:'Approach', text:'We compared a three-layer, six-head Transformer initialized with 300-dimensional GloVe vectors against BERT-base-uncased and DeBERTa-v3-base. After cleaning SNLI, we used 549,361 training, 9,842 validation and 9,824 test pairs, and evaluated held-out accuracy, per-class recall, MultiNLI transfer and diagnostic subsets for overlap, negation and length mismatch.'},
      {title:'Result', text:'SNLI test accuracy was 91.04% for BERT, 90.30% for DeBERTa and 80.84% for the custom Transformer. On combined MultiNLI validation data, accuracy fell to 74.31%, 70.83% and 44.91%. High in-domain accuracy did not carry across genres.'},
      {title:'Next steps', text:'Evaluation on HANS or SNLI-hard, MultiNLI fine-tuning and adversarial augmentation would test generalization further.'}
    ]
  },
  {
    slug: 'graph-aml',
    title: 'Graph learning for anti-money laundering.',
    org: 'University of Bonn',
    relationship: 'Team lab · Information Retrieval in Practice · with Avin Safari Shirzi, Mohamed Abouelella and Haofan Wen',
    mode: 'academic',
    domains: ['Graph ML'],
    stack: ['AMLworld', 'Graph neural networks', 'Graph transformers', 'PyTorch Geometric', 'Minority-class F1'],
    intro: 'Which graph-learning choices detect rare illicit transactions best? We compared five approaches on one benchmark under one protocol.',
    metric: 'Best F1 77.6% across 5 approaches',
    flow: ['Transaction multigraph', 'Chronological splits', 'Five graph approaches', 'Edge classification', 'Minority-class F1'],
    sections: [
      {title:'Question', text:'Which architectural choices improve edge-level money-laundering detection under extreme class imbalance, and how reproducible are published results?'},
      {title:'Approach', text:'We modelled AMLworld transactions as a directed multigraph and compared Multi-GNN, a FRAD-DM-inspired feature reconstruction, FraudGT, D-EMAML and C2GAT. Every approach used the same chronological split and reported minority-class F1 at the best-validation checkpoint, averaged over five seeds.'},
      {title:'Result', text:'The reproduced FraudGT baseline matched its published score (76.4%). Adding flow-conservation attention and temporal edge features raised minority-class F1 to 77.6% without adding parameters. Hand-derived edge features alone did not improve the Multi-GNN baseline.'},
      {title:'Next steps', text:'Controlled ablations of each design choice, and hybrid models combining causal temporal context with transformer-style neighbourhood encoders.'}
    ]
  },
  {
    slug: 'polarization',
    title: 'Polarization detection across English and Urdu.',
    org: 'University of Bonn',
    relationship: 'Team project · Introduction to NLP, CAISA Lab · with Maaz Asad, Maria Yasir and Aqib Amir Khan',
    mode: 'academic',
    domains: ['NLP'],
    stack: ['POLAR', 'RemBERT', 'XLM-RoBERTa', 'Llama 3.1', 'Qwen3', 'Macro-F1'],
    intro: 'How well can models identify polarization in English and Urdu when language and label frequencies differ? We compared fine-tuned encoders with prompted LLMs.',
    metric: 'Urdu macro-F1 0.763',
    sections: [
      {title:'Question', text:'How do fine-tuned multilingual transformers and prompted LLMs compare for multilabel polarization classification when English and Urdu differ strongly in language and label distribution?'},
      {title:'Approach', text:'Using the POLAR dataset (SemEval-2026 Task 9, Subtask 2), we classified posts into five polarization categories. We fine-tuned RemBERT and XLM-RoBERTa in monolingual, joint and cross-lingual settings with per-label threshold tuning, and prompted GPT-OSS, Llama 3.1 and Qwen3 with six zero- and few-shot templates. Macro-F1 was the primary metric.'},
      {title:'Result', text:'Monolingual RemBERT performed best, with macro-F1 of 0.763 on Urdu and 0.462 on English. Fine-tuned models outperformed prompting in both languages, and cross-lingual zero-shot transfer fell to 0.20–0.30.'},
      {title:'Next steps', text:'English data augmentation, retrieval-based few-shot selection and lightweight adapters for cross-lingual transfer.'}
    ]
  },
  {
    slug: 'xaihate',
    title: 'XAIHate: explainable hate-speech detection for Urdu.',
    org: 'FAST NUCES',
    relationship: 'Final Year Project · team of three, supervised by Umair Arshad and Dr. Omer Beg',
    mode: 'academic',
    domains: ['NLP'],
    stack: ['TF-IDF', 'Naive Bayes', 'Random Forest', 'BERT', 'DistilBERT', 'LIME', 'Flask'],
    intro: 'Hate-speech classification for Urdu, Roman Urdu and English, with word-level explanations that a non-expert can read.',
    metric: '87.7% Urdu accuracy',
    flow: ['Urdu / Roman Urdu / English', 'Text preprocessing', 'Classification', 'Word contributions', 'Flask explanation interface'],
    sections: [
      {title:'Question', text:'How can hate-speech detection in Urdu, Roman Urdu and English be paired with explanations that show why a text received its label?'},
      {title:'Approach', text:'We compared TF-IDF models (Naive Bayes, logistic regression, random forest) with BERT, DistilBERT and RoBERTa. Because LIME did not handle Urdu script, we built a word-removal explainer that measures each word’s contribution and validated it against LIME. A Flask web app showed highlighted text, contribution charts and Twitter word clouds.'},
      {title:'Result', text:'DistilBERT reached 87.7% accuracy on Urdu and 88.05% on Roman Urdu; BERT reached 96.11% on English. On Urdu, 81.9% of our explainer’s top-ranked words matched LIME’s.'},
      {title:'Next steps', text:'Extending the explainer to deep-learning models and growing the Urdu and Roman Urdu datasets.'}
    ]
  },
  {
    slug: 'ai-safety',
    title: 'Does chain-of-thought monitorability survive quantization?',
    org: 'University of Bonn',
    relationship: 'Seminar paper · Seminar AI Safety · sole author · grade 1.0',
    mode: 'academic',
    domains: ['AI Safety'],
    stack: ['Qwen3-8B', 'GPTQ', 'MMLU', 'Equivalence testing', 'CoT monitoring'],
    intro: 'A study design testing whether a reasoning model still admits the cues that change its answers after 4-bit quantization.',
    metric: 'Seminar grade 1.0',
    flow: ['Fixed Qwen3-8B checkpoint', 'Matched precision artifacts', 'MMLU + six cue families', 'Cue influence & acknowledgment', 'Paired equivalence analysis'],
    sections: [
      {title:'Question', text:'Does weight quantization change how often an injected cue alters an answer without being acknowledged in the model’s reasoning?'},
      {title:'Design', text:'Compare BF16 with matched GPTQ W4A16 artifacts of one Qwen3-8B checkpoint, holding prompts, cue targets, decoding and judging fixed. W8A16 and W3A16 are exploratory branches. MMLU questions are combined with six cue families.'},
      {title:'Evaluation', text:'Measure unacknowledged cue susceptibility and total cue susceptibility over all questions. Equivalence requires both differences to stay within five percentage points, tested with a 10,000-replicate question-clustered bootstrap, a validated LLM judge and token-budget sensitivity checks.'},
      {title:'Why it matters', text:'Open-weight reasoning models are often deployed as 4-bit builds. If quantization changes cue acknowledgment, monitoring results measured on full-precision weights would not describe the deployed model.'}
    ]
  }
];
