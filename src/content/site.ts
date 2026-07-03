/**
 * All Finagra site copy, drawn from finagra.com.
 * Edit here; layout components read from this file.
 */

export const site = {
  name: "Finagra",
  tagline: "Empower Rural Growth",
  email: "hello@finagra.com", // TODO: confirm real contact address
} as const;

export const nav = [
  { label: "Our Solution", href: "/#solution" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Who We Serve", href: "/#who-we-serve" },
  { label: "Become a Representative", href: "/#become-a-rep" },
  { label: "FAQ", href: "/#faq" },
] as const;

/** Contextual nav for the /become-a-rep/[region] pages. */
export const repNav = {
  links: [
    { label: "The Model", href: "#model" },
    { label: "What You Receive", href: "#receive" },
    { label: "FAQ", href: "/#faq" },
  ],
  cta: { label: "Apply now", href: "#contact" },
} as const;

export const hero = {
  title: "Building the future of",
  titleAccent: "rural agriculture.",
  subtitle:
    "We give rural representatives and farmers the tools to turn conventional farming into high-yield operations, creating stable income and stronger rural economies.",
  primaryCta: { label: "Join Us", href: "#contact" },
  secondaryCta: { label: "scroll to read more", href: "#model" },
};

export const thesis = {
  eyebrow: "The model",
  paragraphs: [
    "We bring capital, technology, and structured management to rural communities.",
    "Turning underperforming farmland into productive farms, led by local representatives.",
  ],
};

export const solution = {
  eyebrow: "Our Solution",
  title: "Everything a modern farm needs to thrive.",
  pillars: [
    {
      icon: "sprout",
      title: "Capital & Essential Inputs",
      body: "Land access, quality seeds, fertilizers, irrigation, and modern machinery.",
    },
    {
      icon: "cpu",
      title: "Technology & Agronomy",
      body: "Precision tools and climate-smart practices that raise yields and protect soil and water.",
    },
    {
      icon: "users",
      title: "Representatives",
      body: "We back local leaders with the models, guidance, and infrastructure to run farms at scale.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How It Works",
  title: "We support both farmers and representatives.",
  intro:
    "We support the two groups who drive rural agriculture: representatives who run modern farms, and farmers who provide the land and local knowledge.",
  steps: [
    {
      step: "01",
      title: "Build Productive Foundations",
      body: "Landowners get guaranteed income and healthier soil. Representatives get the equipment, seeds, and irrigation to farm efficiently.",
    },
    {
      step: "02",
      title: "Guide Modern Practices",
      body: "Representatives get expert agronomy, precision tools, and training. Farmers get better, more climate-resilient harvests.",
    },
    {
      step: "03",
      title: "Share Long-Term Benefits",
      body: "At harvest, representatives earn from management, landowners receive guaranteed returns, and the community gains from local investment.",
    },
  ],
  closing: "Everyone shares in the upside, not just one group.",
};

export const whoWeServe = {
  eyebrow: "Who We Serve",
  title: "The people at the center of Finagra's model.",
  groups: [
    {
      title: "Representatives",
      body: "Trusted local leaders we incubate and support to run modern farms at scale with our tools and guidance.",
    },
    {
      title: "Farmers & Landowners",
      body: "Owners keep full control of their land. We guarantee at least their current income, usually more, while improving soil health and long-term value.",
    },
    {
      title: "Communities",
      body: "We work where farming is the main livelihood, so the whole community benefits, not just one large farmer.",
    },
  ],
};

export const becomeRep = {
  eyebrow: "Become a Representative",
  title: "A partnership built to share the upside.",
  body: "Local leaders who manage Finagra-financed farms. We look for ambition, integrity, and readiness to lead, not just farming experience.",
  model: [
    {
      icon: "coins",
      title: "We invest 100%",
      body: "of production costs, with zero upfront from you.",
    },
    {
      icon: "sprout",
      title: "You manage the fields",
      body: "running day-to-day operations on the ground.",
    },
    {
      icon: "handshake",
      title: "We share the profit",
      body: "25% of net profit to you, every season.",
    },
  ],
  stats: [
    { value: "100%", label: "of production costs financed" },
    { value: "$0", label: "upfront investment required" },
    { value: "25%", label: "net profit share, every season" },
    { value: "500", label: "representatives targeted by 2028" },
  ],
  receives: [
    {
      title: "Financing",
      body: "We cover seeds, fertilizers, machinery, and agrochemicals. You provide land and management.",
    },
    {
      title: "Support",
      body: "Digital agronomy tools, guidelines, and field-officer support all season.",
    },
    {
      title: "Market Access",
      body: "We handle offtake and sales through established buyer networks.",
    },
    {
      title: "Transparent Compensation",
      body: "25% of net profit after input costs, calculated openly each season.",
    },
  ],
  regions: [
    { label: "Kenya", href: "/become-a-rep/kenya" },
    { label: "India", href: "/become-a-rep/india" },
  ],
};

export const repRegions = {
  kenya: {
    slug: "kenya",
    country: "Kenya",
    flag: "🇰🇪",
    image: "/images/rep-kenya.jpg",
    headline: "Become a Finagra Representative in Kenya",
    definition:
      "Experienced farmers with 5+ years in high-value crops, managing Finagra-financed operations.",
    model: "We invest 100% of production costs. You manage the fields. We share the profit.",
    stats: [
      { value: "0 KES", label: "capital required from you" },
      { value: "100%", label: "of production costs financed" },
      { value: "25%", label: "net profit share, every season" },
      { value: "500", label: "representatives targeted by 2028" },
    ],
  },
  india: {
    slug: "india",
    country: "India",
    flag: "🇮🇳",
    image: "/images/rep-india.jpg",
    headline: "Become a Finagra Representative in India",
    definition:
      "Experienced farmers and emerging leaders managing Finagra-financed operations at scale.",
    model: "We invest 100% of production costs. You manage the fields. We share the profit.",
    stats: [
      { value: "₹0", label: "capital required from you" },
      { value: "100%", label: "of production costs financed" },
      { value: "25%", label: "net profit share, every season" },
      { value: "500", label: "representatives targeted by 2028" },
    ],
  },
} as const;

export type RepRegionSlug = keyof typeof repRegions;

export const faqs = [
  {
    q: "What does Finagra actually do?",
    a: "We bring capital, technology, and structured management to rural communities, turning underperforming farmland into productive farms led by local representatives.",
  },
  {
    q: "Who are the representatives?",
    a: "Representatives are trusted local leaders we support to run modern farms at scale with our tools and guidance.",
  },
  {
    q: "What happens to the farmers and landowners?",
    a: "They keep full ownership and control of their land. We guarantee at least their current income, usually more, while improving soil health and long-term value.",
  },
  {
    q: "Why would a farmer lease their land?",
    a: "We provide modern equipment, quality inputs, reliable markets, and stable income, so farmers cut risk while earning more.",
  },
  {
    q: "How does Finagra choose where to operate?",
    a: "We focus on regions where farming is the main livelihood but held back by small plots and lack of capital, so the whole community benefits.",
  },
  {
    q: "Do representatives need farming experience?",
    a: "Not necessarily. We provide full training, agronomy support, and technology. Many representatives are farmers scaling up or young people returning home.",
  },
  {
    q: "Does Finagra give cash to representatives?",
    a: "No. We provide inputs, not cash: land access, seeds, fertilizers, irrigation, machinery, and agronomy support.",
  },
  {
    q: "Who benefits from Finagra's model?",
    a: "Local farmers, representatives, rural communities, buyers, and governments supporting agricultural development.",
  },
  {
    q: "Can someone apply to become a representative?",
    a: "Yes. Reach out through the contact form. We look for ambition, integrity, and readiness to lead, not just farming experience.",
  },
];

export const contact = {
  eyebrow: "Get in touch",
  title: "Work with us.",
  body: "Joining our network or partnering with us? Reach out, or sign up for news and updates.",
  interests: [
    "Become a Representative",
    "Partner with us",
    "Farmer or Landowner",
    "Careers",
    "General inquiry",
  ],
};

export const careers = {
  hero: {
    eyebrow: "Careers",
    title: "Build the future of rural agriculture.",
    subtitle:
      "Work that matters, in places that matter. We want people who love solving real problems in the field, in the data, and in the communities we serve.",
  },
  roles: [
    // TODO: replace with real open roles
    {
      slug: "field-operations-lead",
      title: "Field Operations Lead",
      location: "Kenya",
      type: "Full-time",
      summary:
        "Own day-to-day operations across a growing portfolio of representative-run farms in western Kenya.",
      about:
        "You will be the operational backbone of our Kenyan portfolio: planning seasons with representatives, coordinating input deliveries, and making sure every farm has what it needs, when it needs it. You will spend most of your week in the field, not behind a desk.",
      responsibilities: [
        "Plan and track the season calendar across 20+ farms",
        "Coordinate seed, fertilizer, and machinery logistics with suppliers",
        "Coach representatives on operational best practices",
        "Report field progress and risks to the country team every week",
      ],
      lookingFor: [
        "3+ years in agricultural operations, logistics, or field management",
        "Comfort working across rural sites and travelling most of the week",
        "Fluent English and Swahili",
        "A bias for practical problem-solving over process",
      ],
    },
    {
      slug: "agronomist",
      title: "Agronomist",
      location: "India",
      type: "Full-time",
      summary:
        "Set the agronomic playbook for high-value crops and coach representatives through every season.",
      about:
        "You will define how we farm: crop selection, input plans, irrigation schedules, and climate-smart practices. Your guidance flows through our digital tools and field officers to every representative we back, so your decisions compound across thousands of acres.",
      responsibilities: [
        "Build crop production guidelines for our priority regions",
        "Run field trials and turn results into practice",
        "Train field officers and representatives on modern agronomy",
        "Feed learnings back into our digital agronomist tools",
      ],
      lookingFor: [
        "Degree in agronomy or crop science, 4+ years applied experience",
        "Hands-on knowledge of high-value crops and irrigation",
        "Experience training farmers or field teams",
        "Willingness to travel to rural sites regularly",
      ],
    },
    {
      slug: "representative-program-manager",
      title: "Representative Program Manager",
      location: "Remote / Field",
      type: "Full-time",
      summary:
        "Build and run the program that finds, trains, and grows our representatives.",
      about:
        "Representatives are the heart of Finagra's model. You will own the pipeline end to end: sourcing candidates in new regions, running selection, designing training, and tracking performance season over season, so that we reach 500 representatives by 2028 without lowering the bar.",
      responsibilities: [
        "Design and run the representative selection process",
        "Build the training curriculum with our agronomy team",
        "Track representative performance and retention",
        "Open new regions with the expansion team",
      ],
      lookingFor: [
        "5+ years in program or partner management",
        "Experience in emerging markets or rural development",
        "Strong written communication and data literacy",
        "Empathy for the people at the center of the model",
      ],
    },
  ],
};

export type CareerRole = (typeof careers.roles)[number];

export const footer = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "Our Solution", href: "/#solution" },
        { label: "Who We Serve", href: "/#who-we-serve" },
        { label: "How It Works", href: "/#how-it-works" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Join us",
      links: [
        { label: "Become a Representative · Kenya", href: "/become-a-rep/kenya" },
        { label: "Become a Representative · India", href: "/become-a-rep/india" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ],
};
