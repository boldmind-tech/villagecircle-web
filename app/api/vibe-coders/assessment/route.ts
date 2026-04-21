import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) return NextResponse.json({ valid: false }, { status: 400 });

  // In production: validate token against vc_applications table
  // const { createClient } = await import("@/lib/supabase/server");
  // const supabase = await createClient();
  // const { data } = await supabase.from("vc_applications")
  //   .select("id, assessment_token_expires_at")
  //   .eq("assessment_token", token)
  //   .eq("status", "assessment_sent")
  //   .single();
  // if (!data || new Date(data.assessment_token_expires_at) < new Date()) {
  //   return NextResponse.json({ valid: false }, { status: 401 });
  // }

  // For development: accept any token
  return NextResponse.json({ valid: true });
}

export async function POST(req: NextRequest) {
  try {
    const { token, answers } = await req.json();
    if (!token || !answers) return NextResponse.json({ error: "Missing token or answers." }, { status: 400 });

    // In production:
    // 1. Validate token
    // 2. Find application by token
    // 3. Insert into vc_assessments
    // 4. Update application status to 'assessment_completed'
    // 5. Send notification to admin

    return NextResponse.json({ success: true, message: "Assessment submitted." });
  } catch (err) {
    console.error("[assessment] error:", err);
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }
}
