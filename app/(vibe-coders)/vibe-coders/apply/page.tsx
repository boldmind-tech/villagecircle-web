"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { STEP_1_QUESTIONS } from "@/lib/vibe-coders/psychology-questions";

type FormData = {
  q1_name: string;
  q2_archetype: string;
  q3_idea: string;
  q4_obstacle: string;
  q5_commitment: string;
  email: string;
  whatsapp_number: string;
};

const EMPTY: FormData = { q1_name: "", q2_archetype: "", q3_idea: "", q4_obstacle: "", q5_commitment: "", email: "", whatsapp_number: "" };

export default function ApplyStep1() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const q = STEP_1_QUESTIONS[step];
  const total = STEP_1_QUESTIONS.length;

  function getValue(id: string): string {
    if (id === "q6_contact") return form.email;
    return (form as Record<string, string>)[id] ?? "";
  }

  function isStepValid(): boolean {
    if (q.id === "q1_name") return form.q1_name.trim().length > 0;
    if (q.id === "q2_archetype") return form.q2_archetype !== "";
    if (q.id === "q3_idea") return form.q3_idea.trim().length >= 20;
    if (q.id === "q4_obstacle") return form.q4_obstacle !== "";
    if (q.id === "q5_commitment") return form.q5_commitment !== "";
    if (q.id === "q6_contact") return form.email.includes("@") && form.whatsapp_number.trim().length >= 10;
    return true;
  }

  async function handleNext() {
    if (!isStepValid()) { setError("Please answer this question before continuing."); return; }
    setError("");
    if (step < total - 1) { setStep(step + 1); return; }
    // Final submit
    setSubmitting(true);
    try {
      const res = await fetch("/api/vibe-coders/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Submission failed");
      router.push("/vibe-coders/apply/confirmation");
    } catch (e: unknown) {
      setError((e as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", fontFamily: "'Georgia',serif", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", top: "-10%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle,rgba(201,146,42,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "rgba(237,232,220,0.08)", zIndex: 300 }}>
        <div style={{ height: "100%", background: "#C9922A", width: `${((step + 1) / total) * 100}%`, transition: "width 0.4s ease" }} />
      </div>

      {/* Nav */}
      <nav style={{ position: "fixed", top: 3, left: 0, right: 0, zIndex: 200, padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(14px)", background: "rgba(10,11,7,0.85)", borderBottom: "1px solid rgba(237,232,220,0.06)" }}>
        <Link href="/vibe-coders" style={{ textDecoration: "none" }}>
          <span className="lo" style={{ color: "rgba(237,232,220,0.4)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>← Vibe Coders</span>
        </Link>
        <span className="lo" style={{ color: "rgba(237,232,220,0.35)", fontSize: 12 }}>{step + 1} of {total}</span>
      </nav>

      {/* Question */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 24px 60px" }}>
        <div style={{ width: "100%", maxWidth: 600 }}>
          {/* Step indicator */}
          <p className="lo" style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 20 }}>
            Question {step + 1} of {total}
          </p>

          <h1 className="pf" style={{ fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>{q.question}</h1>
          {q.note && <p className="lo" style={{ fontSize: 13, color: "rgba(237,232,220,0.4)", fontStyle: "italic", marginBottom: 28, lineHeight: 1.7 }}>{q.note}</p>}

          {/* Input rendering */}
          <div style={{ marginBottom: 32 }}>
            {q.type === "text" && (
              <input
                type="text"
                value={form.q1_name}
                onChange={(e) => setForm({ ...form, q1_name: e.target.value })}
                placeholder={q.placeholder}
                autoFocus
                style={{ width: "100%", padding: "16px 18px", background: "rgba(237,232,220,0.05)", border: "1px solid rgba(237,232,220,0.15)", borderRadius: 10, color: "#EDE8DC", fontSize: 17, outline: "none", fontFamily: "'Lora',serif" }}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
              />
            )}

            {q.type === "textarea" && (
              <div>
                <textarea
                  value={(form as Record<string, string>)[q.id] ?? ""}
                  onChange={(e) => setForm({ ...form, [q.id]: e.target.value })}
                  placeholder={q.placeholder}
                  rows={5}
                  maxLength={q.maxLength}
                  style={{ width: "100%", padding: "16px 18px", background: "rgba(237,232,220,0.05)", border: "1px solid rgba(237,232,220,0.15)", borderRadius: 10, color: "#EDE8DC", fontSize: 15, outline: "none", fontFamily: "'Lora',serif", resize: "vertical" }}
                />
                {q.maxLength && (
                  <div className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.3)", textAlign: "right", marginTop: 4 }}>
                    {((form as Record<string, string>)[q.id] ?? "").length}/{q.maxLength}
                  </div>
                )}
              </div>
            )}

            {q.type === "single_choice" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {q.options?.map((opt) => {
                  const selected = (form as Record<string, string>)[q.id] === opt.value;
                  return (
                    <button key={opt.value}
                      onClick={() => { setForm({ ...form, [q.id]: opt.value }); setError(""); }}
                      style={{ padding: "16px 20px", background: selected ? "rgba(201,146,42,0.12)" : "rgba(237,232,220,0.03)", border: `1px solid ${selected ? "rgba(201,146,42,0.5)" : "rgba(237,232,220,0.1)"}`, borderRadius: 10, color: selected ? "#EDE8DC" : "rgba(237,232,220,0.65)", textAlign: "left", cursor: "pointer", fontSize: 14, fontFamily: "'Lora',serif", lineHeight: 1.5, transition: "all 0.18s" }}>
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}

            {q.type === "contact" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label className="lo" style={{ fontSize: 12, color: "rgba(237,232,220,0.4)", display: "block", marginBottom: 6, letterSpacing: "0.12em", textTransform: "uppercase" }}>Email address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    style={{ width: "100%", padding: "14px 18px", background: "rgba(237,232,220,0.05)", border: "1px solid rgba(237,232,220,0.15)", borderRadius: 10, color: "#EDE8DC", fontSize: 15, outline: "none", fontFamily: "'Lora',serif" }} />
                </div>
                <div>
                  <label className="lo" style={{ fontSize: 12, color: "rgba(237,232,220,0.4)", display: "block", marginBottom: 6, letterSpacing: "0.12em", textTransform: "uppercase" }}>WhatsApp number</label>
                  <input type="tel" value={form.whatsapp_number} onChange={(e) => setForm({ ...form, whatsapp_number: e.target.value })}
                    placeholder="+234 801 234 5678"
                    style={{ width: "100%", padding: "14px 18px", background: "rgba(237,232,220,0.05)", border: "1px solid rgba(237,232,220,0.15)", borderRadius: 10, color: "#EDE8DC", fontSize: 15, outline: "none", fontFamily: "'Lora',serif" }} />
                </div>
              </div>
            )}
          </div>

          {error && (
            <p className="lo" style={{ color: "#E57373", fontSize: 13, marginBottom: 16, fontStyle: "italic" }}>{error}</p>
          )}

          {/* Navigation buttons */}
          <div style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
            {step > 0 ? (
              <button onClick={() => { setStep(step - 1); setError(""); }}
                style={{ padding: "14px 28px", border: "1px solid rgba(237,232,220,0.15)", borderRadius: 8, color: "rgba(237,232,220,0.5)", background: "none", cursor: "pointer", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Lora',serif" }}>
                ← Back
              </button>
            ) : <div />}

            <button onClick={handleNext} disabled={submitting}
              style={{ padding: "14px 32px", background: "#C9922A", border: "none", color: "#0A0B07", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", cursor: submitting ? "wait" : "pointer", borderRadius: 8, fontFamily: "'Lora',serif", opacity: submitting ? 0.7 : 1 }}>
              {submitting ? "Sending..." : step === total - 1 ? "Submit Application →" : "Next →"}
            </button>
          </div>
        </div>
      </main>

      <footer style={{ padding: "20px 40px", textAlign: "center" }}>
        <p className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.18)", fontStyle: "italic" }}>
          Your answers are stored securely. No spam. No hustle theatre.
        </p>
      </footer>
    </div>
  );
}
