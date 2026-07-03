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
  { label: "Our Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Become a REP", href: "#become-a-rep" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  eyebrow: "Empower Rural Growth",
  title: "Building scalable, climate-smart farms that strengthen local economies.",
  subtitle:
    "We give rural entrepreneurs and farmers the tools to turn conventional farming into high-yield operations, creating stable income and stronger rural economies.",
  primaryCta: { label: "Work with us", href: "#contact" },
  secondaryCta: { label: "scroll to read more", href: "#solution" },
};

export const thesis = {
  eyebrow: "The model",
  title: "Capital, technology, and local entrepreneurs, combined.",
  body: "We bring capital, technology, and structured management to rural communities, turning underperforming farmland into productive farms led by local entrepreneurs.",
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
      title: "Entrepreneurship",
      body: "We back local leaders with the models, guidance, and infrastructure to run farms at scale.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How It Works",
  title: "How Finagra works with both farmers and entrepreneurs.",
  intro:
    "We support the two groups who drive rural agriculture: entrepreneurs who run modern farms, and farmers who provide the land and local knowledge.",
  steps: [
    {
      step: "01",
      title: "Build Productive Foundations",
      body: "Landowners get guaranteed income and healthier soil. REPs get the equipment, seeds, and irrigation to farm efficiently.",
    },
    {
      step: "02",
      title: "Guide Modern Practices",
      body: "REPs get expert agronomy, precision tools, and training. Farmers get better, more climate-resilient harvests.",
    },
    {
      step: "03",
      title: "Share Long-Term Benefits",
      body: "At harvest, REPs earn from management, landowners receive guaranteed returns, and the community gains from local investment.",
    },
  ],
  closing: "Everyone shares in the upside, not just one group.",
};

export const whoWeServe = {
  eyebrow: "Who We Serve",
  title: "The people at the center of Finagra's model.",
  groups: [
    {
      title: "Entrepreneurs (REPs)",
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
  eyebrow: "Become a REP",
  title: "We invest 100% of production costs. You manage the fields. We share the profit.",
  body: "Local leaders who manage Finagra-financed farms. We look for ambition, integrity, and readiness to lead, not just farming experience.",
  stats: [
    { value: "100%", label: "of production costs financed" },
    { value: "$0", label: "upfront investment required" },
    { value: "25%", label: "net profit share, every season" },
    { value: "500", label: "REPs targeted by 2028" },
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
    headline: "Become a Finagra REP in Kenya",
    definition:
      "Experienced farmers with 5+ years in high-value crops, managing Finagra-financed operations.",
    model: "We invest 100% of production costs. You manage the fields. We share the profit.",
    stats: [
      { value: "0 KES", label: "capital required from you" },
      { value: "100%", label: "of production costs financed" },
      { value: "25%", label: "net profit share, every season" },
      { value: "500", label: "REPs targeted by 2028" },
    ],
  },
  india: {
    slug: "india",
    country: "India",
    flag: "🇮🇳",
    image: "/images/rep-india.jpg",
    headline: "Become a Finagra REP in India",
    definition:
      "Experienced farmers and emerging leaders managing Finagra-financed operations at scale.",
    model: "We invest 100% of production costs. You manage the fields. We share the profit.",
    stats: [
      { value: "₹0", label: "capital required from you" },
      { value: "100%", label: "of production costs financed" },
      { value: "25%", label: "net profit share, every season" },
      { value: "500", label: "REPs targeted by 2028" },
    ],
  },
} as const;

export type RepRegionSlug = keyof typeof repRegions;

export const faqs = [
  {
    q: "What does Finagra actually do?",
    a: "We bring capital, technology, and structured management to rural communities, turning underperforming farmland into productive farms led by local entrepreneurs.",
  },
  {
    q: "Who are the REPs?",
    a: "Rural Entrepreneur Partners are trusted local leaders we support to run modern farms at scale with our tools and guidance.",
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
    q: "Do REPs need farming experience?",
    a: "Not necessarily. We provide full training, agronomy support, and technology. Many REPs are farmers scaling up or young people returning home.",
  },
  {
    q: "Does Finagra give cash to REPs?",
    a: "No. We provide inputs, not cash: land access, seeds, fertilizers, irrigation, machinery, and agronomy support.",
  },
  {
    q: "Who benefits from Finagra's model?",
    a: "Local farmers, REPs, rural communities, buyers, and governments supporting agricultural development.",
  },
  {
    q: "Can someone apply to become a REP?",
    a: "Yes. Reach out through the contact form. We look for ambition, integrity, and readiness to lead, not just farming experience.",
  },
];

export const contact = {
  eyebrow: "Get in touch",
  title: "Work with us.",
  body: "Joining our network or partnering with us? Reach out, or sign up for news and updates.",
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
    { title: "Field Operations Lead", location: "Kenya", type: "Full-time" },
    { title: "Agronomist", location: "India", type: "Full-time" },
    { title: "REP Program Manager", location: "Remote / Field", type: "Full-time" },
  ],
};

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
        { label: "Become a REP · Kenya", href: "/become-a-rep/kenya" },
        { label: "Become a REP · India", href: "/become-a-rep/india" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ],
};
