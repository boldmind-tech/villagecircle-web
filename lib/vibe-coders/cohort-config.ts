export interface CohortConfig {
  id: string;
  name: string;
  status: "open" | "closed" | "upcoming" | "active" | "completed";
  startDate: string;
  endDate: string;
  capacity: number;
  enrolledCount: number;
  applicationDeadline: string;
  price: { min: number; max: number };
  currency: "NGN";
}

export const COHORTS: CohortConfig[] = [
  {
    id: "cohort-1",
    name: "Cohort 1 — The Founding Circle",
    status: "open",
    startDate: "2026-07-07",
    endDate: "2027-01-07",
    capacity: 30,
    enrolledCount: 0,
    applicationDeadline: "2026-06-15",
    price: { min: 35000, max: 60000 },
    currency: "NGN",
  },
];

export const CURRENT_COHORT = COHORTS[0];

export function getCohortStatus(cohort: CohortConfig): CohortConfig["status"] {
  const now = new Date();
  const deadline = new Date(cohort.applicationDeadline);
  const start = new Date(cohort.startDate);
  if (now > start) return "active";
  if (now > deadline) return "closed";
  if (cohort.enrolledCount >= cohort.capacity) return "closed";
  return "open";
}
