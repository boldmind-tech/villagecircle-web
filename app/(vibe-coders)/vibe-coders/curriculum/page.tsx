"use client";

import Link from "next/link";
import { CURRICULUM_MODULES, CURRICULUM_SUMMARY } from "@/lib/vibe-coders/curriculum-data";


export default function CurriculumPage() {
  return (
    <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", fontFamily: "'Georgia',serif", overflowX: "hidden" }}>
      <div style={{ position: "fixed", top: "-10%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle,rgba(91,48,128,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(14px)", background: "rgba(10,11,7,0.85)", borderBottom: "1px solid rgba(237,232,220,0.06)" }}>
        <Link href="/vibe-coders" style={{ textDecoration: "none" }}>
          <span className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>← Vibe Coders</span>
        </Link>
        <Link href="/vibe-coders/apply" style={{ padding: "9px 20px", background: "#C9922A", color: "#0A0B07", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif", fontWeight: 700, borderRadius: 6 }}>Apply Now</Link>
      </nav>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "140px 40px 100px" }}>
        <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Lora',serif" }}>The Full Arc</p>
        <h1 className="pf" style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, lineHeight: 1.04, marginBottom: 20 }}>
          {CURRICULUM_SUMMARY.totalWeeks} Weeks.<br />
          <em style={{ color: "#C9922A" }}>One Real Product.</em>
        </h1>
        <p className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 16, fontStyle: "italic", lineHeight: 1.8, marginBottom: 16, maxWidth: 560 }}>
          {CURRICULUM_SUMMARY.learnPhaseWeeks} weeks learning the stack. {CURRICULUM_SUMMARY.buildPhaseWeeks} weeks building your product. Every week has a deliverable — something real, not a homework exercise.
        </p>

        {/* Phase bar */}
        <div style={{ display: "flex", gap: 0, marginBottom: 64, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(237,232,220,0.08)" }}>
          <div style={{ flex: CURRICULUM_SUMMARY.learnPhaseWeeks, padding: "14px 20px", background: "rgba(201,146,42,0.1)", borderRight: "1px solid rgba(237,232,220,0.08)" }}>
            <div className="pf" style={{ fontSize: 13, fontWeight: 700, color: "#C9922A" }}>Phase 1: Learn</div>
            <div className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.4)", fontStyle: "italic" }}>Weeks 1–{CURRICULUM_SUMMARY.learnPhaseWeeks}</div>
          </div>
          <div style={{ flex: CURRICULUM_SUMMARY.buildPhaseWeeks, padding: "14px 20px", background: "rgba(42,107,79,0.08)" }}>
            <div className="pf" style={{ fontSize: 13, fontWeight: 700, color: "#2A6B4F" }}>Phase 2: Build</div>
            <div className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.4)", fontStyle: "italic" }}>Weeks {CURRICULUM_SUMMARY.learnPhaseWeeks + 1}–{CURRICULUM_SUMMARY.totalWeeks}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {CURRICULUM_MODULES.map((module) => (
            <div key={module.id}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 4, height: 40, background: module.color, borderRadius: 4, flexShrink: 0 }} />
                <div>
                  <h2 className="pf" style={{ fontSize: 20, fontWeight: 900, color: "#EDE8DC" }}>{module.title}</h2>
                  <p className="lo" style={{ fontSize: 13, color: "rgba(237,232,220,0.4)", fontStyle: "italic" }}>{module.subtitle}</p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginLeft: 18 }}>
                {module.weeks.map((week) => (
                  <div key={week.week} style={{ padding: "18px 20px", background: "rgba(237,232,220,0.025)", border: "1px solid rgba(237,232,220,0.06)", borderRadius: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span className="lo" style={{ fontSize: 10, color: module.color, letterSpacing: "0.2em", textTransform: "uppercase" }}>Week {week.week}</span>
                        <h3 className="pf" style={{ fontSize: 15, fontWeight: 700 }}>{week.title}</h3>
                      </div>
                    </div>
                    <p className="lo" style={{ fontSize: 13, color: "rgba(237,232,220,0.4)", lineHeight: 1.7, marginBottom: 10, fontStyle: "italic" }}>{week.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: week.deliverable ? 10 : 0 }}>
                      {week.topics.map((t) => (
                        <span key={t} className="lo" style={{ fontSize: 11, padding: "3px 10px", background: `${module.color}12`, border: `1px solid ${module.color}25`, borderRadius: 20, color: "rgba(237,232,220,0.55)" }}>{t}</span>
                      ))}
                    </div>
                    {week.deliverable && (
                      <div style={{ fontSize: 12, color: module.color, fontFamily: "'Lora',serif", fontStyle: "italic", display: "flex", alignItems: "center", gap: 6 }}>
                        <span>→</span> <span>{week.deliverable}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 72, textAlign: "center" }}>
          <h3 className="pf" style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 900, marginBottom: 14 }}>Ready to start Week 1?</h3>
          <p className="lo" style={{ color: "rgba(237,232,220,0.4)", fontSize: 15, fontStyle: "italic", marginBottom: 32 }}>Applications are free. Takes 5 minutes.</p>
          <Link href="/vibe-coders/apply" style={{ display: "inline-block", padding: "16px 40px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, fontFamily: "'Lora',serif" }}>
            Apply for Cohort 1 →
          </Link>
        </div>
      </div>
    </div>
  );
}
