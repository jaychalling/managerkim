import { NextRequest, NextResponse } from "next/server";

const VPS_URL = process.env.SURVEY_API_URL!;
const VPS_TOKEN = process.env.SURVEY_API_TOKEN!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.rating || body.rating < 1 || body.rating > 5) {
      return NextResponse.json({ error: "rating required (1-5)" }, { status: 400 });
    }

    const res = await fetch(`${VPS_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${VPS_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("VPS error:", err);
      return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    console.error("Survey API error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
