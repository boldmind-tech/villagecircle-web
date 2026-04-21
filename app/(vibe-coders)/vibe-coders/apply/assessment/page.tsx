"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { STEP_2_QUESTIONS } from "@/lib/vibe-coders/psychology-questions";
import { Suspense } from "react";

const DIMENSIONS: Record<string, { label: string; color: string }> = {
  mindset: { label: "Mindset & Resilience", color: "#C9922A" },
  clarity: { label: "Clarity & Vision", color: "#2A6B4F" },
  learning: { label: "Learning Style", color: "#5B3080" },
  community: { label: "Community & Accountability", color: "#2B4D87" },
};

function AssessmentContent() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token");

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [error, setError] = useState("");
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const total = STEP_2_QUESTIONS.length;
  const q = STEP_2_QUESTIONS[step];

  useEffect(() => {
    if (!token) { setTokenValid(false); return; }
    fetch(`/api/vibe-coders/assessment?token=${token}`)
      .then((r) => r.ok ? setTokenValid(true) : setTokenValid(false))
      .catch(() => setTokenValid(false));
  }, [token]);

  function isStepValid() {
    const val = answers[q.id];
    if (q.required === false) return true;
    if (q.type === "scale") return typeof val === "number";
    if (q.type === "single_choice") return typeof val === "string" && val !== "";
    if (q.type === "textarea") {
      const min = q.minLength ?? 0;
      return typeof val === "string" && val.trim().length >= min;
    }
    return true;
  }

  async function handleNext() {
    if (!isStepValid()) { setError("Please answer this question before continuing."); return; }
    setError("");
    if (step < total - 1) { setStep(step + 1); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/vibe-coders/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, answers }),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Submission failed");
      router.push("/vibe-coders/apply/confirmation?step=2");
    } catch (e: unknown) {
      setError((e as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  if (tokenValid === null) {
    return (
      <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="lo" style={{ color: "rgba(237,232,220,0.4)", fontStyle: "italic" }}>Verifying your invitation...</p>
      </div>
    );
  }

  if (!tokenValid) {
    return (
      <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px" }}>
        <h1 className="pf" style={{ fontSize: 32, fontWeight: 900, marginBottom: 14 }}>This link has expired or is invalid.</h1>
        <p className="lo" style={{ color: "rgba(237,232,220,0.4)", fontStyle: "italic", marginBottom: 32 }}>Assessment links are valid for 72 hours. If yours has expired, apply again and we will send a fresh one.</p>
        <Link href="/vibe-coders/apply" style={{ padding: "14px 32px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, fontFamily: "'Lora',serif" }}>
          Start a New Application →
        </Link>
      </div>
    );
  }

  const dim = DIMENSIONS[q.dimension ?? "mindset"];

  return (
    <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", fontFamily: "'Georgia',serif", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "rgba(237,232,220,0.08)", zIndex: 300 }}>
        <div style={{ height: "100%", background: dim.color, width: `${((step + 1) / total) * 100}%`, transition: "width 0.4s ease" }} />
      </div>

      <nav style={{ position: "fixed", top: 3, left: 0, right: 0, zIndex: 200, padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(14px)", background: "rgba(10,11,7,0.85)", borderBottom: "1px solid rgba(237,232,220,0.06)" }}>
        <span className="lo" style={{ color: "rgba(237,232,220,0.4)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Deep Assessment</span>
        <span className="lo" style={{ color: "rgba(237,232,220,0.35)", fontSize: 12 }}>{step + 1} of {total}</span>
      </nav>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 24px 60px" }}>
        <div style={{ width: "100%", maxWidth: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: dim.color, display: "inline-block" }} />
            <span className="lo" style={{ fontSize: 10, color: dim.color, letterSpacing: "0.22em", textTransform: "uppercase" }}>{dim.label}</span>
          </div>

          <h1 className="pf" style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 700, lineHeight: 1.4, marginBottom: 10 }}>{q.question}</h1>
          {q.subtext && <p className="lo" style={{ fontSize: 13, color: "rgba(237,232,220,0.38)", fontStyle: "italic", marginBottom: 28, lineHeight: 1.7 }}>{q.subtext}</p>}

          <div style={{ marginBottom: 32 }}>
            {q.type === "textarea" && (
              <div>
                <textarea
                  value={(answers[q.id] as string) ?? ""}
                  onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                  placeholder={q.placeholder}
                  rows={6}
                  maxLength={q.maxLength}
                  style={{ width: "100%", padding: "16px 18px", background: "rgba(237,232,220,0.05)", border: "1px solid rgba(237,232,220,0.15)", borderRadius: 10, color: "#EDE8DC", fontSize: 15, outline: "none", fontFamily: "'Lora',serif", resize: "vertical", lineHeight: 1.7 }}
                />
                {q.minLength && (
                  <div className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.28)", marginTop: 4, display: "flex", justifyContent: "space-between" }}>
                    <span>{((answers[q.id] as string) ?? "").trim().length < q.minLength ? `At least ${q.minLength} characters` : "✓ Good"}</span>
                    <span>{((answers[q.id] as string) ?? "").length}{q.maxLength ? `/${q.maxLength}` : ""}</span>
                  </div>
                )}
              </div>
            )}

            {q.type === "single_choice" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {q.options?.map((opt) => {
                  const selected = answers[q.id] === opt.value;
                  return (
                    <button key={opt.value}
                      onClick={() => { setAnswers({ ...answers, [q.id]: opt.value }); setError(""); }}
                      style={{ padding: "16px 20px", background: selected ? `${dim.color}18` : "rgba(237,232,220,0.03)", border: `1px solid ${selected ? dim.color + "55" : "rgba(237,232,220,0.1)"}`, borderRadius: 10, color: selected ? "#EDE8DC" : "rgba(237,232,220,0.6)", textAlign: "left", cursor: "pointer", fontSize: 14, fontFamily: "'Lora',serif", lineHeight: 1.5, transition: "all 0.18s" }}>
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}

            {q.type === "scale" && (
              <div>
                <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                  {Array.from({ length: q.scale ?? 7 }, (_, i) => i + 1).map((n) => {
                    const selected = answers[q.id] === n;
                    return (
                      <button key={n}
                        onClick={() => { setAnswers({ ...answers, [q.id]: n }); setError(""); }}
                        style={{ width: 44, height: 44, borderRadius: "50%", background: selected ? dim.color : "rgba(237,232,220,0.05)", border: `1px solid ${selected ? dim.color : "rgba(237,232,220,0.15)"}`, color: selected ? "#0A0B07" : "rgba(237,232,220,0.6)", fontWeight: selected ? 700 : 400, fontSize: 14, cursor: "pointer", transition: "all 0.18s" }}>
                        {n}
                      </button>
                    );
                  })}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {q.scaleLabels && Object.entries(q.scaleLabels).map(([k, v]) => (
                    <span key={k} className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.35)", fontStyle: "italic", maxWidth: "28%", textAlign: parseInt(k) === 1 ? "left" : parseInt(k) > 4 ? "right" : "center" }}>{v}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {error && <p className="lo" style={{ color: "#E57373", fontSize: 13, marginBottom: 16, fontStyle: "italic" }}>{error}</p>}

          <div style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
            {step > 0 ? (
              <button onClick={() => { setStep(step - 1); setError(""); }}
                style={{ padding: "14px 28px", border: "1px solid rgba(237,232,220,0.15)", borderRadius: 8, color: "rgba(237,232,220,0.5)", background: "none", cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Lora',serif" }}>
                ← Back
              </button>
            ) : <div />}
            <button onClick={handleNext} disabled={submitting}
              style={{ padding: "14px 32px", background: dim.color, border: "none", color: "#0A0B07", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", cursor: submitting ? "wait" : "pointer", borderRadius: 8, fontFamily: "'Lora',serif", opacity: submitting ? 0.7 : 1 }}>
              {submitting ? "Submitting..." : step === total - 1 ? "Complete Assessment →" : "Next →"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function AssessmentPage() {
  return (
    <Suspense fallback={<div style={{ background: "#0A0B07", minHeight: "100vh" }} />}>
      <AssessmentContent />
    </Suspense>
  );
}
