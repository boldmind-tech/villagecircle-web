import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { q1_name, q2_archetype, q3_idea, q4_obstacle, q5_commitment, email, whatsapp_number } = body;

    if (!q1_name || !q2_archetype || !q3_idea || !q4_obstacle || !q5_commitment || !email || !whatsapp_number) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // In production: save to Supabase vc_applications table
    // const { createClient } = await import("@/lib/supabase/server");
    // const supabase = await createClient();
    // const { error } = await supabase.from("vc_applications").insert({ ... });

    // Send confirmation email via Resend
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    return NextResponse.json({ success: true, message: "Application received." });
  } catch (err) {
    console.error("[apply] error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
