import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { application_id, cohort_id, payment_tier } = await req.json();

  if (!application_id || !cohort_id) {
    return NextResponse.json({ error: "application_id and cohort_id are required." }, { status: 400 });
  }

  // In production:
  // 1. Update application status to "enrolled"
  // 2. Create record in vc_students
  // 3. Send enrollment confirmation email with portal link
  // 4. Add to WhatsApp group (via integration)

  return NextResponse.json({
    success: true,
    message: `Application ${application_id} enrolled in ${cohort_id}.`,
  });
}
