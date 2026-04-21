import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("x-paystack-signature");
  const secret = process.env.PAYSTACK_SECRET_KEY!;

  const hash = crypto.createHmac("sha512", secret).update(body).digest("hex");
  if (hash !== signature) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  const event = JSON.parse(body);

  if (event.event === "charge.success") {
    const { reference, metadata, customer } = event.data;
    const { payment_type, application_id } = metadata ?? {};

    // In production: update vc_payments table, update application/student payment status
    // const { createClient } = await import("@/lib/supabase/server");
    // const supabase = await createClient();
    // await supabase.from("vc_payments").update({ status: "success" }).eq("paystack_reference", reference);

    console.log(`[webhook] Payment success: ${reference} · type: ${payment_type} · email: ${customer?.email}`);
  }

  return NextResponse.json({ received: true });
}
