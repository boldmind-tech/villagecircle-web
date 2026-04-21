import { NextResponse } from "next/server";
import { CURRENT_COHORT, getCohortStatus } from "@/lib/vibe-coders/cohort-config";

export async function GET() {
  return NextResponse.json({
    ...CURRENT_COHORT,
    computedStatus: getCohortStatus(CURRENT_COHORT),
  });
}
