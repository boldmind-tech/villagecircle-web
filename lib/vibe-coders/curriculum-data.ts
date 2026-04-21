export interface CurriculumWeek {
  week: number;
  phase: "learn" | "build";
  title: string;
  description: string;
  topics: string[];
  deliverable?: string;
}

export interface CurriculumModule {
  id: string;
  phase: "learn" | "build";
  title: string;
  subtitle: string;
  weeks: CurriculumWeek[];
  color: string;
}

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: "module-1",
    phase: "learn",
    title: "Foundation",
    subtitle: "Weeks 1–3: Environment, mindset, and first code",
    color: "#C9922A",
    weeks: [
      { week: 1, phase: "learn", title: "Setup & Orientation", description: "Install your tools, meet your cohort, understand the mission.", topics: ["VS Code + Cursor AI setup", "GitHub basics", "What is Next.js and why", "VillageCircle philosophy as product doctrine"], deliverable: "Working dev environment + GitHub profile live" },
      { week: 2, phase: "learn", title: "HTML, CSS & Tailwind", description: "Learn to speak the web's visual language.", topics: ["HTML structure", "CSS fundamentals", "Tailwind CSS utility classes", "Mobile-first design thinking"], deliverable: "A styled landing page for your product idea" },
      { week: 3, phase: "learn", title: "JavaScript & React Basics", description: "Add interactivity. Make things respond.", topics: ["JavaScript fundamentals", "React components", "State and props", "Event handling"], deliverable: "Interactive component for your landing page" },
    ],
  },
  {
    id: "module-2",
    phase: "learn",
    title: "Product Thinking",
    subtitle: "Weeks 4–5: Build the right thing, not just a thing",
    color: "#2A6B4F",
    weeks: [
      { week: 4, phase: "learn", title: "User Research & Problem Definition", description: "Talk to real people. Validate before you build.", topics: ["User interviews (5-question method)", "Problem statement framework", "Persona creation", "Nigerian market nuances"], deliverable: "3 user interviews completed + validated problem statement" },
      { week: 5, phase: "learn", title: "Product Design & Wireframing", description: "Sketch your product before writing a line of code.", topics: ["Wireframing with Figma (basics)", "User flow mapping", "MVP scoping", "v0 for rapid UI generation"], deliverable: "Wireframes for your MVP — 5 core screens" },
    ],
  },
  {
    id: "module-3",
    phase: "learn",
    title: "Full-Stack Foundations",
    subtitle: "Weeks 6–8: Database, backend, and deployment",
    color: "#5B3080",
    weeks: [
      { week: 6, phase: "learn", title: "Next.js Deep Dive", description: "App Router, Server Components, and routing.", topics: ["Next.js App Router", "Server vs Client components", "API routes", "TypeScript basics"], deliverable: "Multi-page Next.js app with routing" },
      { week: 7, phase: "learn", title: "Supabase & Database", description: "Store data. Build authentication. Make it real.", topics: ["Supabase setup", "PostgreSQL basics", "Authentication (email + OAuth)", "Row Level Security"], deliverable: "App with user auth and database integration" },
      { week: 8, phase: "learn", title: "Deployment & AI Workflow", description: "Ship your first real product. Then add AI.", topics: ["Vercel deployment", "Environment variables", "Claude Code workflow", "Cursor AI pair programming"], deliverable: "MVP v0.1 live on Vercel — share the URL with cohort" },
    ],
  },
  {
    id: "module-4",
    phase: "build",
    title: "Build Sprint 1",
    subtitle: "Weeks 9–14: Core product development",
    color: "#C0470E",
    weeks: [
      { week: 9, phase: "build", title: "Core Feature Development", description: "Build the 3 features that define your product.", topics: ["Feature prioritisation", "Pair programming sessions", "Code reviews"], deliverable: "3 core features live" },
      { week: 10, phase: "build", title: "Payments & Monetisation", description: "Integrate Paystack. Make your product earn.", topics: ["Paystack integration", "Subscription flows", "Receipt generation"], deliverable: "Payment flow working end-to-end" },
      { week: 11, phase: "build", title: "First Real Users", description: "Acquire your first 10 users. Listen and adapt.", topics: ["User acquisition basics", "Feedback collection", "Iteration cycles"], deliverable: "10 real users on your product" },
      { week: 12, phase: "build", title: "Mid-Program Demo", description: "Present your progress to the cohort and mentors.", topics: ["Demo preparation", "Metrics storytelling", "Peer feedback"], deliverable: "Live demo to cohort + written progress report" },
      { week: 13, phase: "build", title: "Analytics & Decisions", description: "Measure what matters. Cut what doesn't.", topics: ["Basic analytics setup", "Key metrics for your product", "Data-informed decisions"], deliverable: "Analytics dashboard configured" },
      { week: 14, phase: "build", title: "Scale or Pivot", description: "Based on real data — double down or change direction.", topics: ["Pivot frameworks", "Feature roadmap", "User retention basics"], deliverable: "Revised roadmap based on user data" },
    ],
  },
  {
    id: "module-5",
    phase: "build",
    title: "Build Sprint 2",
    subtitle: "Weeks 15–22: Growth and polish",
    color: "#2B4D87",
    weeks: [
      { week: 15, phase: "build", title: "Mobile Optimisation", description: "Make it work for everyone, including smartphone-first users.", topics: ["PWA basics", "Mobile UX patterns", "Performance optimisation"], deliverable: "Mobile score 90+ on Lighthouse" },
      { week: 16, phase: "build", title: "WhatsApp Integration", description: "Meet your users where they already are.", topics: ["WhatsApp Business API", "Notification flows", "Automated messages"], deliverable: "WhatsApp notification live for key user actions" },
      { week: 17, phase: "build", title: "AI Feature Integration", description: "Add one AI-powered feature to your product.", topics: ["Claude API basics", "AI prompt engineering", "Cost management for AI features"], deliverable: "One AI feature shipped to users" },
      { week: 18, phase: "build", title: "Security & Reliability", description: "Build something people can trust.", topics: ["Input validation", "Rate limiting", "Error handling", "Backup strategies"], deliverable: "Security checklist completed" },
      { week: 19, phase: "build", title: "Content & SEO", description: "Make your product findable.", topics: ["Next.js metadata", "SEO basics for Nigerian market", "Social sharing"], deliverable: "Product indexed on Google" },
      { week: 20, phase: "build", title: "Business Model Clarity", description: "Understand exactly how your product makes money.", topics: ["Unit economics", "Nigerian payment culture", "Pricing strategy"], deliverable: "Revenue model documented and tested" },
      { week: 21, phase: "build", title: "Team & Collaboration", description: "Build with others without breaking things.", topics: ["Git collaboration workflows", "Code review culture", "Remote async work"], deliverable: "Collaborative project with a cohort member" },
      { week: 22, phase: "build", title: "Pre-Demo Prep", description: "Prepare for the final showcase.", topics: ["Product positioning", "Demo script", "Portfolio write-up"], deliverable: "Demo-ready product + portfolio entry written" },
    ],
  },
  {
    id: "module-6",
    phase: "build",
    title: "Final Showcase",
    subtitle: "Weeks 23–24: Ship, showcase, graduate",
    color: "#C9922A",
    weeks: [
      { week: 23, phase: "build", title: "Final Polish & Launch", description: "Last refinements before the public showcase.", topics: ["Bug fixes", "Performance", "Launch checklist"], deliverable: "Product at v1.0 — launch-ready" },
      { week: 24, phase: "build", title: "Cohort Demo Day", description: "Present to the Village Circle. Graduate.", topics: ["Public demo", "Peer recognition", "Next steps planning"], deliverable: "Graduated. Portfolio live. Next cohort or product growth path chosen." },
    ],
  },
];

export const CURRICULUM_SUMMARY = {
  totalWeeks: 24,
  learnPhaseWeeks: 8,
  buildPhaseWeeks: 16,
};
