/**
 * All Finagra site copy, drawn from finagra.com.
 * Edit here — layout components read from this file.
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
    "Finagra empowers rural entrepreneurs and farmers with the tools and systems to turn conventional farming into efficient, high-yield operations — generating stable income and robust rural economies.",
  primaryCta: { label: "Work with us", href: "#contact" },
  secondaryCta: { label: "See how it works ↓", href: "#solution" },
};

export const thesis = {
  eyebrow: "The model",
  title: "Capital, technology, and local entrepreneurs — combined.",
  body: "Finagra brings capital, technology, and structured farm management into rural communities, turning underperforming farmland into productive, high-yield operations led by local entrepreneurs.",
};

export const solution = {
  eyebrow: "Our Solution",
  title: "Everything a modern farm needs to thrive.",
  pillars: [
    {
      icon: "sprout",
      title: "Capital & Essential Inputs",
      body: "Land access support, quality seeds, fertilizers, irrigation systems, and modern machinery for productive farm operations.",
    },
    {
      icon: "cpu",
      title: "Technology & Agronomy",
      body: "Best-in-class agronomy, precision tools, and climate-smart practices for risk prediction, yield improvement, and long-term soil and water protection.",
    },
    {
      icon: "users",
      title: "Entrepreneurship",
      body: "We identify and support rural entrepreneurial leaders with operating models, guidance, and infrastructure for large-scale farm management.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How It Works",
  title: "How Finagra works with both farmers and entrepreneurs.",
  intro:
    "Finagra exists to support two groups who drive rural agriculture forward: entrepreneurs who operate modern farms, and farmers who provide the land, experience, and community connection that make those farms possible.",
  steps: [
    {
      step: "01",
      title: "Building Productive Farm Foundations",
      body: "Farmers and landowners receive guaranteed income and improved soil productivity. REPs receive the right equipment, seeds, fertilizers, and irrigation to farm efficiently.",
    },
    {
      step: "02",
      title: "Guiding Modern Farming Practices",
      body: "REPs get best-practice agronomy, precision farming tools, and modern training. Farmers benefit from better outcomes, climate-resilient practices, and stable production.",
    },
    {
      step: "03",
      title: "Ensuring Shared, Long-Term Benefits",
      body: "When harvest is sold, REPs earn from farm management, farmers and landowners receive guaranteed returns, and the community gains through local development investment.",
    },
  ],
  closing: "Everyone participates in the upside — not just one group.",
};

export const whoWeServe = {
  eyebrow: "Who We Serve",
  title: "The people at the center of Finagra's model.",
  groups: [
    {
      title: "Entrepreneurs (REPs)",
      body: "Rural Entrepreneur Partners are trusted local leaders we incubate and support. They manage modern farms at scale using Finagra's tools, technology, and operational guidance.",
    },
    {
      title: "Farmers & Landowners",
      body: "Farmers and landowners keep full ownership and control of their land. Finagra guarantees at least the income they earn today — usually higher — while improving soil health, productivity, and long-term value.",
    },
    {
      title: "Communities",
      body: "We focus on regions where agriculture is the main livelihood but limited by small plots, low productivity, and lack of capital — so the entire community benefits, not just a single large farmer.",
    },
  ],
};

export const becomeRep = {
  eyebrow: "Become a REP",
  title: "We invest 100% of production costs. You manage the fields. We share the profit.",
  body: "Rural Entrepreneur Partners are local leaders who manage Finagra-financed agricultural operations. We look for ambition, integrity, community understanding, and readiness to lead — not just farming experience.",
  stats: [
    { value: "100%", label: "of production costs financed" },
    { value: "$0", label: "upfront investment required" },
    { value: "25%", label: "net profit share, every season" },
    { value: "500", label: "REPs targeted by 2028" },
  ],
  receives: [
    {
      title: "Financing",
      body: "Finagra covers seeds, fertilizers, mechanization, and agrochemicals. REPs provide land and on-ground management.",
    },
    {
      title: "Support",
      body: "Digital agronomist tools, production guidelines, and field-officer guidance throughout the season.",
    },
    {
      title: "Market Access",
      body: "Finagra manages produce offtake and sales through established buyer networks.",
    },
    {
      title: "Transparent Compensation",
      body: "25% net profit after input costs are deducted, calculated transparently every season.",
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
    headline: "Become a Finagra REP in Kenya",
    definition:
      "Rural Entrepreneur Partners are farmers with 5+ years of hands-on experience in high-value crops who manage Finagra-financed agricultural operations.",
    model: "Finagra invests 100% of production costs. You manage the fields. We share the profit.",
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
    headline: "Become a Finagra REP in India",
    definition:
      "Rural Entrepreneur Partners are experienced local farmers and emerging leaders who manage Finagra-financed agricultural operations at scale.",
    model: "Finagra invests 100% of production costs. You manage the fields. We share the profit.",
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
    a: "Finagra brings capital, technology, and structured farm management into rural communities — turning underperforming farmland into productive, high-yield operations led by local entrepreneurs.",
  },
  {
    q: "Who are the REPs?",
    a: "REPs (Rural Entrepreneur Partners) are trusted local leaders we incubate and support. They manage modern farms at scale using Finagra's tools, technology, and operational guidance.",
  },
  {
    q: "What happens to the farmers and landowners?",
    a: "Farmers and landowners keep full ownership and control of their land. Finagra guarantees at least the same income they earn today — usually higher — while improving soil health, productivity, and long-term value.",
  },
  {
    q: "Why would a farmer lease their land?",
    a: "Finagra offers modern equipment, quality seeds and inputs, reliable markets, stable income, and improved soil productivity — allowing farmers to reduce risk while increasing returns.",
  },
  {
    q: "How does Finagra choose where to operate?",
    a: "We focus on regions where agriculture is the main livelihood but still limited by small plots, low productivity, and lack of capital. Our goal is to ensure the entire community benefits — not just a single large farmer.",
  },
  {
    q: "Do REPs need farming experience?",
    a: "Not necessarily. Candidates include local farmers scaling up or educated young people returning home. Finagra provides comprehensive training, agronomy support, and technology.",
  },
  {
    q: "Does Finagra give cash to REPs?",
    a: "No. We provide the inputs needed to operate at scale: land access, seeds, fertilizers, irrigation, machinery, technology, and agronomy support — not cash transfers.",
  },
  {
    q: "Who benefits from Finagra's model?",
    a: "Local farmers, REPs, rural communities, buyers, and governments supporting agricultural development.",
  },
  {
    q: "Can someone apply to become a REP?",
    a: "Yes. Candidates can express interest through the contact form. We look for ambition, integrity, community understanding, and readiness to lead — not just farming experience.",
  },
];

export const contact = {
  eyebrow: "Get in touch",
  title: "Work with us.",
  body: "If you're interested in joining our network or partnering with us, reach out. Sign up with your email to receive news and updates.",
};

export const careers = {
  hero: {
    eyebrow: "Careers",
    title: "Build the future of rural agriculture.",
    subtitle:
      "Work that matters, in places that matter. We're looking for people who want to work on real problems — in the field, in the data, and in the communities we serve.",
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
        { label: "Become a REP — Kenya", href: "/become-a-rep/kenya" },
        { label: "Become a REP — India", href: "/become-a-rep/india" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/#contact" },
      ],
    },
  ],
};
