export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceSubtext: string;
  highlight: boolean;
  features: string[];
  cta: string;
  ctaHref: string;
  badge?: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "free",
    name: "Free Community",
    price: "₦0",
    priceSubtext: "forever",
    highlight: false,
    features: [
      "WhatsApp community group",
      "VillageCircle daily drops",
      "Free resource library",
      "Access to public workshops",
      "Concept Hub updates",
    ],
    cta: "Join for Free",
    ctaHref: "/vibe-coders/apply",
  },
  {
    id: "cohort",
    name: "Vibe Coders Cohort",
    price: "₦35,000–₦60,000",
    priceSubtext: "one-time · multiple payment options",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Full 6-month structured program",
      "Weekly mentor sessions",
      "Cohort community access",
      "Real product co-built with you",
      "Portfolio page on graduation",
      "WhatsApp group priority access",
      "Pay options: One-time / 3-month / ISA / Scholarship",
    ],
    cta: "Apply for Cohort 1",
    ctaHref: "/vibe-coders/apply",
  },
  {
    id: "premium",
    name: "Premium Member",
    price: "₦10,000/month",
    priceSubtext: "billed monthly",
    highlight: false,
    features: [
      "Everything in Cohort",
      "1-on-1 mentor sessions (2×/month)",
      "Priority code reviews",
      "Advanced resources & case studies",
      "Early access to new modules",
      "Revenue share eligibility",
    ],
    cta: "Become Premium",
    ctaHref: "/vibe-coders/apply",
  },
  {
    id: "revenue_share",
    name: "Revenue Share Partner",
    price: "5–15%",
    priceSubtext: "of product revenue · after launch",
    highlight: false,
    features: [
      "We co-build your product with you",
      "Full technical partnership",
      "BoldMind ecosystem integration",
      "Marketing & launch support",
      "Shared in product revenue after users",
      "Graduation to boldmind.ng",
    ],
    cta: "Apply to Partner",
    ctaHref: "/vibe-coders/apply",
  },
];

export const PAYMENT_OPTIONS = [
  { id: "one_time", label: "One-time payment", description: "Pay ₦35k–₦60k upfront based on cohort tier", badge: "Best value" },
  { id: "installment", label: "3-month installment", description: "Split into 3 equal payments. First before start, rest monthly.", badge: null },
  { id: "isa", label: "Income Share Agreement", description: "Pay nothing upfront. Share 10% of income for 12 months after landing a job or launching a paying product.", badge: "Limited slots" },
  { id: "scholarship", label: "Scholarship", description: "Full fee coverage for exceptional applicants who demonstrate vision and cannot afford fees.", badge: "Apply with essay" },
];
