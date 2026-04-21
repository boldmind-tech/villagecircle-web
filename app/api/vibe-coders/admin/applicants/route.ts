import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const status = req.nextUrl.searchParams.get("status");
  const cohort = req.nextUrl.searchParams.get("cohort");

  // In production: query vc_applications with filters, require admin auth
  // const supabase = await createClient();
  // let query = supabase.from("vc_applications").select("*").order("created_at", { ascending: false });
  // if (status) query = query.eq("status", status);
  // if (cohort) query = query.eq("cohort_id", cohort);
  // const { data, error } = await query;

  // Stub response
  return NextResponse.json({
    applicants: [],
    total: 0,
    filters: { status, cohort },
  });
}
