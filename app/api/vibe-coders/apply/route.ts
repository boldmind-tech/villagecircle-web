import { NextResponse } from "next/server";

const MOVED = NextResponse.json(
  { error: "Service moved to boldmind-service.", service: "boldmind-service" },
  { status: 503 },
);

export async function POST() { return MOVED; }
