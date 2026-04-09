export type CaseStudy = {
  protagonist: string;
  context: string;
  dilemma: string;
  options: string[];
  recommendation: string;
  discussionQuestions: string[];
};

export type Module = {
  slug: string;
  title: string;
  duration: string;
  outcomes: string[];
  theory: string[];
  practical: string[];
  tools: string[];
  caseStudy: CaseStudy;
};

export const modules: Module[] = [
  {
    slug: "industry-map",
    title: "Module 1: MarTech + AdTech Industry Map",
    duration: "90 min",
    outcomes: [
      "Differentiate MarTech vs AdTech responsibilities",
      "Map stack layers from data to activation",
      "Define your operating model and ownership boundaries",
    ],
    theory: [
      "Ecosystem structure and value chain",
      "Platform vs composable architecture tradeoffs",
      "Org design: marketing ops, data, performance, product marketing",
    ],
    practical: [
      "Create a current-state stack inventory",
      "Label tools as core, edge, or legacy",
      "Draft an owner matrix by function",
    ],
    tools: ["Miro", "Notion", "Lucidchart"],
    caseStudy: {
      protagonist: "New VP Growth at a Series B SaaS company",
      context: "CAC is rising while the team uses 27 disconnected tools.",
      dilemma: "Consolidate immediately or keep specialist tools for speed?",
      options: [
        "Buy one all-in-one cloud and migrate in 90 days",
        "Keep best-of-breed and standardize data contracts first",
        "Pause spend and redesign measurement before architecture changes",
      ],
      recommendation:
        "Standardize data contracts + reporting layer first, then phase consolidation by lowest switching-risk domains.",
      discussionQuestions: [
        "It is your day-30 exec review. Do you consolidate tools now or standardize data contracts first, and why?",
        "Name the one 90-day KPI that would prove your decision worked.",
      ],
    },
  },
  {
    slug: "customer-data",
    title: "Module 2: Customer Data Foundations",
    duration: "120 min",
    outcomes: [
      "Design a reliable event taxonomy",
      "Define identity resolution across touchpoints",
      "Implement quality and governance guardrails",
    ],
    theory: [
      "First-party data architecture",
      "Identity graph basics",
      "Data contracts, QA, and observability",
    ],
    practical: [
      "Draft event schema for lead to revenue lifecycle",
      "Map anonymous to known user transitions",
      "Create a data quality checklist",
    ],
    tools: ["Segment", "RudderStack", "dbt", "BigQuery", "Snowflake"],
    caseStudy: {
      protagonist: "Head of Marketing Ops",
      context: "Web and app teams send conflicting conversion events.",
      dilemma: "Ship faster with partial fixes or halt launch to refactor tracking?",
      options: [
        "Patch in GTM only",
        "Enforce cross-team event naming contract",
        "Move all tracking to server-side immediately",
      ],
      recommendation:
        "Enforce naming contract + QA gates first, then phase server-side migration for critical events.",
      discussionQuestions: [
        "You launch in 7 days with conflicting event definitions. What do you ship now and what do you block?",
        "Who has final authority over schema changes, and how will you enforce it?",
      ],
    },
  },
  {
    slug: "crm-map-cdp",
    title: "Module 3: CRM, MAP, and CDP Architecture",
    duration: "120 min",
    outcomes: [
      "Separate CRM, MAP, and CDP concerns",
      "Design activation and orchestration flows",
      "Evaluate composable vs packaged CDP models",
    ],
    theory: [
      "System responsibilities and integration boundaries",
      "Warehouse-native activation patterns",
      "Latency and personalization tradeoffs",
    ],
    practical: [
      "Build reference architecture diagram",
      "Define activation SLA targets",
      "Choose canonical profile source",
    ],
    tools: ["Salesforce", "HubSpot", "Braze", "mParticle", "Tealium", "Snowplow"],
    caseStudy: {
      protagonist: "CTO + CMO steering committee",
      context: "Board asks for one platform to reduce cost and complexity.",
      dilemma: "Single suite purchase vs composable data-first stack.",
      options: [
        "Standardize on one suite vendor",
        "Keep warehouse as source of truth and use light orchestration layer",
        "Hybrid: suite for CRM workflows + composable activation",
      ],
      recommendation:
        "Hybrid architecture with explicit contracts gives speed now and flexibility later.",
      discussionQuestions: [
        "Choose one architecture today: suite, composable, or hybrid. Defend your choice in one sentence.",
        "Which lock-in risk are you willing to accept this year, and which is unacceptable?",
      ],
    },
  },
  {
    slug: "programmatic-pipes",
    title: "Module 4: Programmatic and Ad Delivery Mechanics",
    duration: "110 min",
    outcomes: [
      "Understand bidstream fundamentals",
      "Identify supply chain risk and fraud vectors",
      "Improve media quality controls",
    ],
    theory: [
      "DSP/SSP/exchange/ad server roles",
      "OpenRTB, supply chain object, and sellers transparency",
      "Auction mechanics and pacing",
    ],
    practical: [
      "Trace one impression through supply path",
      "Audit for ads.txt and sellers transparency",
      "Design quality scoring rubric",
    ],
    tools: ["DV360", "The Trade Desk", "IAS", "DoubleVerify"],
    caseStudy: {
      protagonist: "Performance marketing lead",
      context: "CPA worsened after scaling open exchange inventory.",
      dilemma: "Keep scale or cut unknown supply paths and lose volume?",
      options: [
        "Optimize bids only",
        "Move budget to curated PMPs",
        "Implement strict supply path optimization and quality floor",
      ],
      recommendation:
        "Implement supply path optimization with quality floor, then selectively reintroduce scale inventory.",
      discussionQuestions: [
        "CPA is up after exchange expansion. Do you cut volume now or keep spend while tightening supply paths?",
        "State the hard quality threshold that would force an immediate budget shift.",
      ],
    },
  },
  {
    slug: "privacy-consent",
    title: "Module 5: Privacy, Consent, and Signal Resilience",
    duration: "100 min",
    outcomes: [
      "Implement consent-aware measurement",
      "Design resilient signal pipelines",
      "Map compliance obligations into system design",
    ],
    theory: [
      "Consent mode patterns",
      "Client-side vs server-side collection",
      "Data minimization and retention strategy",
    ],
    practical: [
      "Build consent-state matrix",
      "Classify events by legal basis and purpose",
      "Define fallback measurement strategy",
    ],
    tools: ["GTM Server-Side", "OneTrust", "Didomi", "Meta CAPI"],
    caseStudy: {
      protagonist: "Regional marketing director (EU launch)",
      context: "Legal requires strict consent implementation before expansion.",
      dilemma: "Comply quickly and lose attribution quality, or delay launch?",
      options: [
        "Ship with minimal tracking",
        "Build consent mode + server-side implementation",
        "Delay market launch until full stack rebuild",
      ],
      recommendation:
        "Launch with consent mode + server-side critical events and model-based measurement fallback.",
      discussionQuestions: [
        "Legal says consent controls must go live before launch. What is your minimum viable compliant measurement stack?",
        "What performance loss will you explicitly accept to stay compliant in quarter one?",
      ],
    },
  },
  {
    slug: "measurement",
    title: "Module 6: Attribution, MMM, and Experimentation",
    duration: "130 min",
    outcomes: [
      "Build a triangulated measurement system",
      "Design incrementality tests",
      "Use measurement for budget reallocation",
    ],
    theory: [
      "MTA limitations and bias",
      "MMM design basics",
      "Experiment hierarchy and causal inference",
    ],
    practical: [
      "Draft channel-level test plan",
      "Create MMM input data checklist",
      "Build a budget decision tree",
    ],
    tools: ["GA4", "Amplitude", "Statsig", "Northbeam", "Lightweight MMM scripts"],
    caseStudy: {
      protagonist: "CFO and CMO",
      context: "Platform ROAS says up, finance says payback period worsened.",
      dilemma: "Trust platform dashboards or cut spend aggressively?",
      options: [
        "Use last-click only",
        "Run geo holdout + blend with MMM",
        "Freeze acquisition until reconciliation complete",
      ],
      recommendation:
        "Run holdout tests and triangulate with MMM before major budget cuts.",
      discussionQuestions: [
        "ROAS and payback disagree. Which source governs budget this quarter, and why?",
        "What is the first experiment you run to resolve the conflict, and what result changes spend?",
      ],
    },
  },
  {
    slug: "lifecycle",
    title: "Module 7: Lifecycle and Journey Orchestration",
    duration: "100 min",
    outcomes: [
      "Design lifecycle funnels",
      "Build trigger-based journeys",
      "Reduce churn and message fatigue",
    ],
    theory: [
      "Lifecycle stages and intent signals",
      "Journey triggers and suppression logic",
      "Messaging frequency governance",
    ],
    practical: [
      "Draft 3 lifecycle journeys",
      "Add suppression and conflict rules",
      "Define success metrics per journey",
    ],
    tools: ["Braze", "Iterable", "Customer.io", "HubSpot Workflows"],
    caseStudy: {
      protagonist: "Lifecycle manager",
      context: "Strong top-of-funnel growth but flat activation and retention.",
      dilemma: "Add acquisition budget or fix post-signup journey first?",
      options: [
        "Scale acquisition first",
        "Pause growth spend and rework onboarding",
        "Balanced: maintain spend while fixing activation bottlenecks",
      ],
      recommendation:
        "Balanced approach with activation metrics as primary guardrail.",
      discussionQuestions: [
        "Trials are strong but activation is weak. Do you pause acquisition, maintain spend, or split the approach?",
        "Which activation signal in the next 14 days determines whether your decision was right?",
      ],
    },
  },
  {
    slug: "creative-ai",
    title: "Module 8: Creative Intelligence and AI Ops",
    duration: "90 min",
    outcomes: [
      "Run structured creative testing",
      "Use AI for asset generation with controls",
      "Operationalize winner promotion",
    ],
    theory: [
      "Creative strategy frameworks",
      "Testing matrix design",
      "AI content operations and governance",
    ],
    practical: [
      "Create a creative hypothesis backlog",
      "Define test cell and holdout logic",
      "Implement winner-promotion policy",
    ],
    tools: ["Meta Ads Creative Hub", "Google Ads Asset Groups", "Canva", "Runway", "Midjourney"],
    caseStudy: {
      protagonist: "Creative lead",
      context: "Creative output increased 5x but CPAs worsened.",
      dilemma: "Scale volume further or tighten quality controls?",
      options: [
        "Maximize creative volume",
        "Reduce variants and increase strategic rigor",
        "Keep volume but enforce strict test governance",
      ],
      recommendation:
        "Keep volume, introduce strict hypothesis and promotion criteria.",
      discussionQuestions: [
        "Volume is up 5x and CPA is worse. What do you cut first: channels, variants, or hypotheses?",
        "Define the promotion rule a creative must meet before it gets scaled.",
      ],
    },
  },
  {
    slug: "vendor-evaluation",
    title: "Module 9: Vendor Evaluation and Stack Governance",
    duration: "80 min",
    outcomes: [
      "Score vendors with defensible criteria",
      "Model cost and lock-in risk",
      "Create governance for tool sprawl",
    ],
    theory: [
      "TCO and switching cost analysis",
      "Security and procurement review",
      "Capability maturity aligned buying",
    ],
    practical: [
      "Build weighted vendor scorecard",
      "Create sunset plan for low-value tools",
      "Draft governance charter",
    ],
    tools: ["Airtable", "Notion", "Procurement templates"],
    caseStudy: {
      protagonist: "COO",
      context: "Board wants 30% SaaS cost reduction in 2 quarters.",
      dilemma: "Cut tools quickly or preserve experimentation velocity?",
      options: [
        "Immediate blanket reductions",
        "Capability-based consolidation",
        "Defer cuts pending revenue growth",
      ],
      recommendation:
        "Capability-based consolidation with protected innovation budget.",
      discussionQuestions: [
        "You must cut 30% tooling cost in two quarters. Which capabilities are protected from cuts and why?",
        "Which vendor do you sunset first, and what decision criteria make that defensible to the board?",
      ],
    },
  },
  {
    slug: "capstone",
    title: "Module 10: Capstone Revenue Engine Plan",
    duration: "150 min",
    outcomes: [
      "Create a full-funnel operating plan",
      "Define KPI tree with owners and cadences",
      "Produce a 90-day implementation roadmap",
    ],
    theory: [
      "Operating cadences",
      "Revenue systems design",
      "Cross-functional execution rhythms",
    ],
    practical: [
      "Assemble final stack blueprint",
      "Create KPI tree and reporting cadence",
      "Build a 90-day plan with milestones",
    ],
    tools: ["Notion", "Looker Studio", "BigQuery", "Slack/Asana"],
    caseStudy: {
      protagonist: "New CMO",
      context: "One quarter to show both growth and efficiency gains.",
      dilemma: "Prioritize rapid wins or foundational fixes?",
      options: [
        "Rapid campaign wins only",
        "Foundation rebuild only",
        "Dual-track: quick wins + architecture hardening",
      ],
      recommendation:
        "Dual-track execution with hard milestone gates and explicit risk control.",
      discussionQuestions: [
        "You have 90 days as new CMO. What are your first three week-one decisions?",
        "What KPI tree aligns finance and growth, and which node is reviewed weekly at exec level?",
      ],
    },
  },
];

export const moduleBySlug = (slug: string) => modules.find((m) => m.slug === slug);
