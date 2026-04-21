import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, amount, payment_type, application_id } = await req.json();

    if (!email || !amount || !payment_type) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const paystackSecret = process.env.PAYSTACK_SECRET_KEY;
    if (!paystackSecret) {
      return NextResponse.json({ error: "Payment service not configured." }, { status: 500 });
    }

    const reference = `vc-${payment_type}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

    const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${paystackSecret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack uses kobo
        reference,
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/vibe-coders/portal/settings?payment=success`,
        metadata: { payment_type, application_id },
      }),
    });

    const data = await paystackRes.json();
    if (!data.status) return NextResponse.json({ error: data.message }, { status: 400 });

    return NextResponse.json({ authorization_url: data.data.authorization_url, reference });
  } catch (err) {
    console.error("[payment/initialize] error:", err);
    return NextResponse.json({ error: "Payment initialization failed." }, { status: 500 });
  }
}
