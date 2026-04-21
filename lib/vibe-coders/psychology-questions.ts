export type QuestionType = "text" | "textarea" | "single_choice" | "scale" | "contact";

export interface Choice {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  step?: number;
  dimension?: string;
  type: QuestionType;
  question: string;
  placeholder?: string;
  subtext?: string;
  options?: Choice[];
  fields?: string[];
  note?: string;
  maxLength?: number;
  minLength?: number;
  scale?: number;
  scaleLabels?: Record<number, string>;
  required?: boolean;
}

export const STEP_1_QUESTIONS: Question[] = [
  {
    id: "q1_name",
    step: 1,
    type: "text",
    question: "What do people call you?",
    placeholder: "Your name or the name you go by",
    required: true,
  },
  {
    id: "q2_archetype",
    step: 1,
    type: "single_choice",
    question: "Which of these sounds most like you right now?",
    options: [
      { value: "dreamer", label: "I have a business idea but no technical skills to build it" },
      { value: "professionaliser", label: "I already have a business and want to digitize or scale it" },
      { value: "rural_builder", label: "I have limited resources but a clear hunger to earn from tech" },
      { value: "career_switcher", label: "I want to switch into tech or product work professionally" },
    ],
    required: true,
  },
  {
    id: "q3_idea",
    step: 1,
    type: "textarea",
    question: "What is the one thing you want to build or change in the next 6 months?",
    placeholder:
      'Be specific. "An app" is not enough. "A booking system for my tailoring business in Oshodi" is.',
    maxLength: 500,
    required: true,
  },
  {
    id: "q4_obstacle",
    step: 1,
    type: "single_choice",
    question: "What has stopped you from building it so far?",
    options: [
      { value: "no_skills", label: "I don't know how to code or where to start" },
      { value: "no_time", label: "I don't have structured time or accountability" },
      { value: "no_money", label: "I don't have money to pay developers" },
      { value: "no_clarity", label: "I have the skills but not the clarity or confidence" },
      { value: "tried_failed", label: "I've tried before and got stuck or gave up" },
    ],
    required: true,
  },
  {
    id: "q5_commitment",
    step: 1,
    type: "single_choice",
    question: "How many hours per week can you realistically commit to this program?",
    options: [
      { value: "less_5", label: "Less than 5 hours — I'm very busy" },
      { value: "5_10", label: "5–10 hours — manageable alongside other responsibilities" },
      { value: "10_20", label: "10–20 hours — I'm making this a real priority" },
      { value: "more_20", label: "More than 20 hours — I'm going all in" },
    ],
    required: true,
  },
  {
    id: "q6_contact",
    step: 1,
    type: "contact",
    question: "Where can we reach you?",
    fields: ["email", "whatsapp_number"],
    required: true,
    note: "Your WhatsApp number gets you into the free community immediately. Your email is where we send the next steps.",
  },
];

export const STEP_2_QUESTIONS: Question[] = [
  // DIMENSION 1: MINDSET & RESILIENCE
  {
    id: "p1_failure",
    dimension: "mindset",
    type: "textarea",
    question:
      "Tell us about a time you started something and did not finish it. What happened, and what did you learn from it — if anything?",
    subtext: "There is no right answer. We want to understand how you think, not what you achieved.",
    minLength: 100,
    maxLength: 800,
  },
  {
    id: "p2_feedback",
    dimension: "mindset",
    type: "scale",
    question: "How do you typically respond when someone tells you your idea is not good?",
    scaleLabels: {
      1: "I withdraw and feel discouraged",
      3: "I listen but it depends on who is saying it",
      5: "I ask questions to understand what they mean",
      7: "I see it as useful data to improve",
    },
    scale: 7,
  },
  {
    id: "p3_patience",
    dimension: "mindset",
    type: "textarea",
    question:
      "Six months from now, what does success in this program look like for you specifically? Be as concrete as possible.",
    placeholder:
      'Not "become a developer." Something like: "Have a working version of my booking app with at least 10 paying customers."',
    minLength: 80,
    maxLength: 600,
  },
  {
    id: "p4_identity",
    dimension: "mindset",
    type: "single_choice",
    question: "Which statement feels most true about you right now?",
    options: [
      { value: "a", label: "I believe I can build anything if I have the right support and time" },
      { value: "b", label: "I believe I can build things but I need to see evidence that I'm capable first" },
      { value: "c", label: "I'm not sure I can build things but I want to prove myself wrong" },
      { value: "d", label: "I've built things before and I'm here to go further" },
    ],
  },
  {
    id: "p5_grit",
    dimension: "mindset",
    type: "textarea",
    question: "What is the hardest thing you have ever done, and how did you get through it?",
    subtext:
      "This can be personal, professional, or anything that tested you. There is no wrong answer.",
    minLength: 80,
    maxLength: 800,
  },
  // DIMENSION 2: CLARITY & VISION
  {
    id: "p6_problem",
    dimension: "clarity",
    type: "textarea",
    question:
      "Describe the problem you want to solve in one sentence. Then explain why it matters to the people experiencing it.",
    placeholder: "The problem: ... | Why it matters: ...",
    minLength: 80,
    maxLength: 600,
  },
  {
    id: "p7_user",
    dimension: "clarity",
    type: "textarea",
    question:
      "Who is the first person who would use what you build? Describe them specifically — not a category, a person.",
    placeholder:
      "e.g. Amaka, 28, runs a small fabric store in Alaba market, has no website, gets all her orders via WhatsApp...",
    minLength: 60,
    maxLength: 500,
  },
  {
    id: "p8_existing",
    dimension: "clarity",
    type: "textarea",
    question:
      "What are people doing today to solve this problem without your product? Why is that not good enough?",
    minLength: 60,
    maxLength: 500,
  },
  {
    id: "p9_urgency",
    dimension: "clarity",
    type: "single_choice",
    question: "How urgent is this problem for the people experiencing it?",
    options: [
      { value: "critical", label: "They are actively losing money or opportunities because of it today" },
      { value: "important", label: "It causes significant frustration but they manage somehow" },
      { value: "nice_to_have", label: "It would be nice to solve but life goes on without it" },
      { value: "unknown", label: "I honestly don't know yet — I need to talk to more people" },
    ],
  },
  // DIMENSION 3: LEARNING STYLE & CAPACITY
  {
    id: "p10_learn",
    dimension: "learning",
    type: "single_choice",
    question: "When you don't understand something new, what do you do first?",
    options: [
      { value: "search", label: "Search for it online until I find a clear explanation" },
      { value: "ask", label: "Ask someone who knows more than me" },
      { value: "try", label: "Try things until something works, then figure out why" },
      { value: "step_back", label: "Step back and think about it until it clicks" },
      { value: "give_up", label: "I get frustrated and sometimes give up" },
    ],
  },
  {
    id: "p11_device",
    dimension: "learning",
    type: "single_choice",
    question: "What device will you primarily use for this program?",
    options: [
      { value: "laptop_own", label: "My own laptop (Windows or Mac)" },
      { value: "laptop_shared", label: "A shared or borrowed laptop" },
      { value: "phone_android", label: "Android smartphone — I don't have regular laptop access" },
      { value: "phone_iphone", label: "iPhone — I don't have regular laptop access" },
      { value: "cafe", label: "I'll work from a cyber café or co-working space" },
    ],
  },
  {
    id: "p12_internet",
    dimension: "learning",
    type: "single_choice",
    question: "How reliable is your internet connection?",
    options: [
      { value: "stable", label: "Stable broadband at home or work — not a concern" },
      { value: "mobile_data", label: "Mobile data only — I manage but it's a cost" },
      { value: "intermittent", label: "Intermittent — sometimes good, sometimes frustrating" },
      { value: "very_limited", label: "Very limited — I'd need support to access online resources" },
    ],
  },
  {
    id: "p13_schedule",
    dimension: "learning",
    type: "textarea",
    question:
      "Describe a typical week for you. What does your schedule look like, and when would you realistically work on this program?",
    placeholder:
      "e.g. Mon-Fri I work 9-5 at a market. Evenings from 8-10 PM are usually free. Weekends I have about 4 hours total...",
    minLength: 60,
    maxLength: 500,
  },
  // DIMENSION 4: COMMUNITY & ACCOUNTABILITY
  {
    id: "p14_support",
    dimension: "community",
    type: "single_choice",
    question: "Who in your life supports you in wanting to build something?",
    options: [
      { value: "strong_support", label: "Strong support — family/friends believe in me and will back me" },
      { value: "neutral", label: "Neutral — they neither encourage nor discourage me" },
      { value: "skeptical", label: "Skeptical — they think it's a distraction or won't work" },
      { value: "alone", label: "I'm doing this mostly alone — no one around me gets it" },
    ],
  },
  {
    id: "p15_accountability",
    dimension: "community",
    type: "scale",
    question:
      "How well do you perform when you have to report your progress to someone else regularly?",
    scaleLabels: {
      1: "It doesn't change anything for me",
      4: "It helps somewhat",
      7: "It's one of the main things that keeps me going",
    },
    scale: 7,
  },
  {
    id: "p16_contribute",
    dimension: "community",
    type: "textarea",
    question:
      "If you were part of a cohort of 30 people building alongside you, what would you bring to the group? Not your skills — your energy, your story, your perspective.",
    minLength: 60,
    maxLength: 500,
  },
  {
    id: "p17_payment",
    dimension: "community",
    type: "single_choice",
    question: "Which payment path fits your situation?",
    options: [
      { value: "one_time", label: "I can pay the full amount upfront (₦35k–₦60k)" },
      { value: "installment", label: "I can manage a 3-month installment plan" },
      { value: "isa", label: "I'd need an Income Share Agreement — pay after I'm earning" },
      { value: "scholarship", label: "I need a scholarship — I genuinely cannot afford the fees right now" },
    ],
  },
  {
    id: "p18_final",
    dimension: "community",
    type: "textarea",
    question:
      "Is there anything you want us to know about you that the questions above didn't capture?",
    placeholder: "Optional. But this is where the unexpected things live.",
    maxLength: 800,
    required: false,
  },
];
