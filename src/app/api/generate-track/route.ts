import { NextResponse } from "next/server";
import { generateTrack } from "@/lib/track-generator/generate";
import { validateSurvey } from "@/lib/track-generator/validate";
import type { SurveyAnswers } from "@/lib/track-generator/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const error = validateSurvey(body);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const track = await generateTrack(body as SurveyAnswers);
  return NextResponse.json(track);
}
