import { NextResponse } from "next/server";

export async function GET() {
  // In production: query real counts from Supabase
  return NextResponse.json({
    applications: {
      total: 0,
      interest_submitted: 0,
      shortlisted: 0,
      assessment_completed: 0,
      accepted: 0,
      enrolled: 0,
    },
    cohorts: {
      active: 1,
      total_seats: 30,
      filled: 0,
    },
    revenue: {
      total_ngn: 0,
      paid_count: 0,
    },
  });
}
