export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // ── Services ───────────────────────────────────────────────────────────────
  {
    category: 'Services',
    question: 'What types of construction projects does Maspejo handle?',
    answer:
      `Maspejo handles the full spectrum — residential homes, commercial office towers, hospitals, schools, national highways, bridges, water treatment plants, and everything in between. Our six core service lines are: Building Construction, Civil Engineering, Road & Infrastructure, Project Management, Renovation & Retrofit, and Structural Consulting.`,
  },
  {
    category: 'Services',
    question: 'Do you take on small residential projects or only large ones?',
    answer:
      `We work across all scales. While we are best known for large-scale commercial and infrastructure contracts (GHS 10M+), our renovation and retrofit division regularly handles residential projects from GHS 1M upwards. Contact us and we'll advise on the right engagement model for your budget.`,
  },
  {
    category: 'Services',
    question: 'Can Maspejo handle design as well as construction?',
    answer:
      `Yes. Our in-house Architecture & Design division handles full architectural design and coordination. We also offer structural consulting services independently if you already have an architect in place.`,
  },
  {
    category: 'Services',
    question: 'Do you work outside Ghana?',
    answer:
      `Yes. We have active operations in Nigeria and Côte d'Ivoire, and have completed projects across 8 Ghanaian regions. We are open to project enquiries from across West Africa.`,
  },

  // ── Pricing & Quotes ────────────────────────────────────────────────────────
  {
    category: 'Pricing & Quotes',
    question: 'How do I get a price estimate for my project?',
    answer:
      `Fill in our Contact form or call either of our offices. A senior consultant will respond within 24 hours to arrange a free initial consultation. After a brief scope review and, where relevant, a site visit, we'll provide a detailed estimate at no charge.`,
  },
  {
    category: 'Pricing & Quotes',
    question: 'What is the typical cost per square metre for construction in Ghana?',
    answer:
      `Costs vary significantly based on specification, location, and materials. As a general guide: standard residential construction runs GHS 3,500–6,000/m²; mid-range commercial is GHS 5,500–10,000/m²; high-specification commercial or institutional can exceed GHS 12,000/m². These are indicative — we'll give you a project-specific figure after consultation.`,
  },
  {
    category: 'Pricing & Quotes',
    question: 'Do you require a deposit before starting work?',
    answer:
      `Standard practice for most contracts is a mobilisation advance of 10–15% of the contract value, paid against a bank guarantee. This covers site setup, equipment mobilisation, and initial material procurement. Full payment terms are agreed in the contract.`,
  },
  {
    category: 'Pricing & Quotes',
    question: 'Can Maspejo work within a fixed budget?',
    answer:
      `Absolutely. We offer Value Engineering as part of our design process — identifying areas where specification adjustments can reduce cost without compromising structural integrity or quality. Many of our clients achieve 10–20% cost savings through this process.`,
  },

  // ── Process & Timeline ──────────────────────────────────────────────────────
  {
    category: 'Process & Timeline',
    question: 'How long does a typical building project take?',
    answer:
      `Timelines depend on scale and complexity. Indicative durations: a 3-bedroom residential home typically takes 8–14 months; a mid-rise commercial complex (5–8 floors) 18–28 months; road rehabilitation projects vary from 6 to 30 months depending on length. We build detailed CPM schedules for every project and track milestones weekly.`,
  },
  {
    category: 'Process & Timeline',
    question: "What is Maspejo's project delivery process?",
    answer:
      `We follow a six-stage process: (1) Consultation — understanding your requirements and site; (2) Design & Planning — detailed drawings and schedule; (3) Procurement — sourcing quality materials; (4) Construction — daily supervised execution; (5) Quality Control — hold-point inspections at critical stages; (6) Handover — full documentation, warranties, and post-handover support.`,
  },
  {
    category: 'Process & Timeline',
    question: 'How do you handle project delays?',
    answer:
      `Our risk registers and schedule float buffers anticipate common delay causes. If unforeseen events occur (adverse weather, utility conflicts, design changes), we issue an Early Warning Notice, revise the programme, and accelerate where possible. We have a 94% on-time delivery record across our 200+ projects.`,
  },
  {
    category: 'Process & Timeline',
    question: 'Will I have a dedicated point of contact during my project?',
    answer:
      `Yes. Every project is assigned a dedicated Project Manager who is your single point of contact. You'll also receive weekly written progress reports, monthly cost reports, and access to our project management dashboard for real-time updates.`,
  },

  // ── Quality & Safety ────────────────────────────────────────────────────────
  {
    category: 'Quality & Safety',
    question: 'What quality certifications does Maspejo hold?',
    answer:
      `We are certified to ISO 9001:2015 (Quality Management, by Bureau Veritas), ISO 45001:2018 (Health & Safety), GRC Class A (Ghana's highest government contractor tier), and our engineers hold corporate membership of the Ghana Institution of Engineers (GhIE).`,
  },
  {
    category: 'Quality & Safety',
    question: 'How does Maspejo ensure safety on construction sites?',
    answer:
      `Safety is non-negotiable at Maspejo. Our zero-LTI (Lost-Time Incident) programme has achieved over 2.1 million man-hours without a lost-time incident. Every site has a dedicated HSE officer, daily toolbox talks, mandatory PPE, weekly safety audits, and a near-miss reporting culture.`,
  },
  {
    category: 'Quality & Safety',
    question: 'Do you use local materials and Ghanaian suppliers?',
    answer:
      `Yes — we actively prioritise Ghanaian suppliers and local labour. Over 70% of our material spend goes to pre-qualified local suppliers. This supports the local economy, reduces lead times, and we know the supply chain intimately after 15+ years in the market.`,
  },

  // ── Company ─────────────────────────────────────────────────────────────────
  {
    category: 'About Maspejo',
    question: 'When was Maspejo founded and who owns it?',
    answer:
      `Maspejo was founded in 2008 by Emmanuel Asante-Mensah alongside three fellow Ghanaian engineers. It remains a proudly Ghanaian-owned business. Emmanuel serves as CEO to this day, and the founding leadership team continues to steer the company's strategic direction.`,
  },
  {
    category: 'About Maspejo',
    question: 'How many projects has Maspejo completed?',
    answer:
      `We have completed over 200 projects since 2008, with a total delivered value exceeding GHS 2.1 billion. Our portfolio spans commercial towers, public hospitals, national highways, bridges, water treatment plants, and residential estates across Ghana and West Africa.`,
  },
  {
    category: 'About Maspejo',
    question: 'Is Maspejo pre-qualified for government contracts?',
    answer:
      `Yes. Maspejo holds GRC Class A status — Ghana's highest pre-qualification tier for government construction contracts. We have successfully delivered projects for Ghana Highway Authority, Ghana Health Service, Ghana Water Company, and various regional authorities.`,
  },
];

export const faqCategories = [...new Set(faqs.map(f => f.category))];
