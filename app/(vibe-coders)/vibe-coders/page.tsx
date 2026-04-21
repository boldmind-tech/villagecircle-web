"use client";

import Link from "next/link";
import { PRICING_TIERS } from "@/lib/vibe-coders/pricing-config";
import { CURRICULUM_MODULES } from "@/lib/vibe-coders/curriculum-data";
import { CURRENT_COHORT } from "@/lib/vibe-coders/cohort-config";


const TOOLS = [
  { name: "Next.js 15", desc: "The React framework for production" },
  { name: "Tailwind CSS", desc: "Utility-first styling at speed" },
  { name: "Supabase", desc: "Open-source Firebase alternative" },
  { name: "Cursor AI", desc: "AI-first code editor" },
  { name: "Claude Code", desc: "AI coding assistant by Anthropic" },
  { name: "v0 by Vercel", desc: "Generate UI from plain English" },
  { name: "Paystack", desc: "Nigerian-first payment infrastructure" },
  { name: "Vercel", desc: "Deploy in seconds, scale globally" },
];

const ARCHETYPES = [
  {
    title: "The Dreamer",
    age: "18–25",
    desc: "You have a business idea — maybe a booking platform for Ankara fabric sellers in Yaba, or an app to help caterers manage Owambe season orders. You have no coding background. You have everything else.",
    color: "#C9922A",
  },
  {
    title: "The Professionaliser",
    age: "26–35",
    desc: "You already run a business — fashion, food, services, consulting. You are doing everything on WhatsApp and Excel. You know there is a better way. You want to build it yourself.",
    color: "#2A6B4F",
  },
  {
    title: "The Rural Builder",
    age: "All ages",
    desc: "You have a smartphone. You have hustle. You have limited access to a laptop and expensive data. You are not less capable — you are differently equipped. This program meets you where you are.",
    color: "#5B3080",
  },
];

export default function VibeCodersLanding() {
  const learnModules = CURRICULUM_MODULES.filter((m) => m.phase === "learn");
  const buildModules = CURRICULUM_MODULES.filter((m) => m.phase === "build");

  return (
    <div
      style={{
        background: "#0A0B07",
        color: "#EDE8DC",
        minHeight: "100vh",
        fontFamily: "'Georgia','Palatino Linotype',serif",
        overflowX: "hidden",
      }}
    >
      {/* Ambient glows */}
      <div style={{ position: "fixed", top: "-10%", right: "10%", width: 600, height: 600, background: "radial-gradient(circle,rgba(201,146,42,0.06) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-5%", left: "5%", width: 500, height: 500, background: "radial-gradient(circle,rgba(42,107,79,0.06) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── Nav ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(14px)", background: "rgba(10,11,7,0.85)", borderBottom: "1px solid rgba(237,232,220,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <span style={{ fontSize: 18 }}>🌱</span>
            <span className="pf" style={{ color: "rgba(237,232,220,0.6)", fontWeight: 700, fontSize: 13 }}>VillageCircle</span>
          </Link>
          <span style={{ color: "rgba(237,232,220,0.2)", margin: "0 6px", fontSize: 12 }}>/</span>
          <span className="lo" style={{ color: "#C9922A", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontStyle: "italic" }}>Vibe Coders</span>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <Link href="/vibe-coders/about" style={{ color: "rgba(237,232,220,0.4)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(237,232,220,0.4)")}>About</Link>
          <Link href="/vibe-coders/curriculum" style={{ color: "rgba(237,232,220,0.4)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(237,232,220,0.4)")}>Curriculum</Link>
          <Link href="/vibe-coders/pricing" style={{ color: "rgba(237,232,220,0.4)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(237,232,220,0.4)")}>Pricing</Link>
          <Link href="/vibe-coders/apply" style={{ padding: "9px 20px", background: "#C9922A", color: "#0A0B07", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif", fontWeight: 700, borderRadius: 6 }}>Apply Now</Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "130px 40px 80px", textAlign: "center", position: "relative" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

        {/* Adinkra ring */}
        <div className="drift" style={{ position: "absolute", top: "12%", right: "8%", width: 80, height: 80, opacity: 0.1, pointerEvents: "none", animationDelay: "2s" }}>
          <svg viewBox="0 0 60 60" width={80} height={80} style={{ color: "#C9922A" }}>
            <circle cx="30" cy="30" r="27" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="30" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <line x1="30" y1="3" x2="30" y2="57" stroke="currentColor" strokeWidth="0.5" />
            <line x1="3" y1="30" x2="57" y2="30" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Eyebrow */}
        <div className="fadein" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 16px", border: "1px solid rgba(201,146,42,0.25)", borderRadius: 30, background: "rgba(201,146,42,0.05)" }}>
          <span className="breathe" style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9922A", display: "inline-block" }} />
          <span className="lo" style={{ color: "#C9922A", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            VillageCircle × Vibe Coders · Cohort 1 Open
          </span>
        </div>

        <h1 className="pf fadein" style={{ fontSize: "clamp(44px,8vw,100px)", fontWeight: 900, lineHeight: 1.02, marginBottom: 28, maxWidth: 900, animationDelay: "0.1s" }}>
          Build What<br />
          <em style={{ color: "#C9922A" }}>Nigeria Needs</em>
        </h1>

        <p className="lo fadein" style={{ color: "rgba(237,232,220,0.6)", fontSize: "clamp(16px,1.8vw,20px)", maxWidth: 620, lineHeight: 1.8, marginBottom: 48, fontStyle: "italic", animationDelay: "0.2s" }}>
          A 6-month mentorship for Nigerian youth who are done scrolling and ready to build.<br />
          AI-assisted. Project-based. Rooted in who we are.
        </p>

        {/* CTAs */}
        <div className="fadein" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 64, animationDelay: "0.3s" }}>
          <Link href="/vibe-coders/apply" style={{ padding: "16px 36px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, fontFamily: "'Lora',serif" }}>
            Apply for Cohort 1 — Free to Apply
          </Link>
          <Link href="#how-it-works" style={{ padding: "16px 32px", border: "1px solid rgba(237,232,220,0.2)", color: "#EDE8DC", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, fontFamily: "'Lora',serif" }}>
            How it works
          </Link>
        </div>

        {/* Stat cards */}
        <div className="fadein" style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", animationDelay: "0.45s" }}>
          {[["6 months","Real products built"],["₦35k–₦60k","Less than one month's petrol"],["AI-first","Cursor · Claude Code · v0"]].map(([val, label]) => (
            <div key={label} style={{ padding: "18px 24px", background: "rgba(237,232,220,0.04)", border: "1px solid rgba(237,232,220,0.08)", borderRadius: 12, textAlign: "center", minWidth: 160 }}>
              <div className="pf" style={{ fontSize: 20, fontWeight: 900, color: "#C9922A", marginBottom: 5 }}>{val}</div>
              <div className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.4)", fontStyle: "italic" }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(237,232,220,0.18)", fontFamily: "'Lora',serif" }}>scroll to learn more</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom,rgba(201,146,42,0.5),transparent)" }} />
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section style={{ padding: "80px 40px", borderTop: "1px solid rgba(237,232,220,0.06)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Lora',serif" }}>Who We Build With</p>
          <h2 className="pf" style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 14, maxWidth: 560 }}>
            You don&apos;t need a CS degree.<br />You need a clear vision.
          </h2>
          <p className="lo" style={{ color: "rgba(237,232,220,0.45)", fontSize: 16, fontStyle: "italic", marginBottom: 52, maxWidth: 520, lineHeight: 1.75 }}>
            Whether you are designing Ankara patterns or running a catering business from Surulere — if you have a problem worth solving, we have a program worth taking.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {ARCHETYPES.map((a) => (
              <div key={a.title} style={{ padding: "32px 28px", background: "rgba(237,232,220,0.025)", border: "1px solid rgba(237,232,220,0.07)", borderTop: `3px solid ${a.color}`, borderRadius: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <h3 className="pf" style={{ fontSize: 20, fontWeight: 700 }}>{a.title}</h3>
                  <span className="lo" style={{ fontSize: 11, color: a.color, padding: "2px 8px", border: `1px solid ${a.color}40`, borderRadius: 20, fontStyle: "italic" }}>{a.age}</span>
                </div>
                <p className="lo" style={{ fontSize: 14, color: "rgba(237,232,220,0.5)", lineHeight: 1.8 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px" }}><div className="gold-line" /></div>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Lora',serif" }}>The 6-Month Arc</p>
          <h2 className="pf" style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 52 }}>Learn. Then build. In that order.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {/* Phase 1 */}
            <div style={{ padding: "32px 28px", background: "rgba(201,146,42,0.04)", border: "1px solid rgba(201,146,42,0.15)", borderRadius: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#C9922A", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A0B07", fontWeight: 900, fontSize: 14 }}>1</div>
                <div>
                  <h3 className="pf" style={{ fontSize: 18, fontWeight: 700, color: "#C9922A" }}>Months 1–2: Learn</h3>
                  <p className="lo" style={{ fontSize: 12, color: "rgba(237,232,220,0.4)", fontStyle: "italic" }}>Weeks 1–8 · 8 structured modules</p>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {learnModules.map((m) => (
                  <li key={m.id} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#C9922A", marginTop: 2 }}>→</span>
                    <div>
                      <span className="pf" style={{ fontSize: 13, fontWeight: 700 }}>{m.title}</span>
                      <span className="lo" style={{ fontSize: 12, color: "rgba(237,232,220,0.4)", marginLeft: 8, fontStyle: "italic" }}>{m.subtitle}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Phase 2 */}
            <div style={{ padding: "32px 28px", background: "rgba(42,107,79,0.04)", border: "1px solid rgba(42,107,79,0.15)", borderRadius: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#2A6B4F", display: "flex", alignItems: "center", justifyContent: "center", color: "#EDE8DC", fontWeight: 900, fontSize: 14 }}>2</div>
                <div>
                  <h3 className="pf" style={{ fontSize: 18, fontWeight: 700, color: "#2A6B4F" }}>Months 3–6: Build</h3>
                  <p className="lo" style={{ fontSize: 12, color: "rgba(237,232,220,0.4)", fontStyle: "italic" }}>Weeks 9–24 · Your real product</p>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {buildModules.map((m) => (
                  <li key={m.id} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#2A6B4F", marginTop: 2 }}>→</span>
                    <div>
                      <span className="pf" style={{ fontSize: 13, fontWeight: 700 }}>{m.title}</span>
                      <span className="lo" style={{ fontSize: 12, color: "rgba(237,232,220,0.4)", marginLeft: 8, fontStyle: "italic" }}>{m.subtitle}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/vibe-coders/curriculum" className="lo" style={{ color: "#C9922A", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
              See the full week-by-week curriculum →
            </Link>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px" }}><div className="gold-line" /></div>

      {/* ── THE STACK ── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Lora',serif" }}>The Tools</p>
          <h2 className="pf" style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 14 }}>The Stack You Will Master</h2>
          <p className="lo" style={{ color: "#C9922A", fontSize: 15, fontStyle: "italic", marginBottom: 44 }}>
            You don&apos;t need to know any of this before you apply. We start from zero.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 14 }}>
            {TOOLS.map((t) => (
              <div key={t.name} style={{ padding: "20px 18px", background: "rgba(237,232,220,0.025)", border: "1px solid rgba(237,232,220,0.07)", borderRadius: 12 }}>
                <div className="pf" style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: "#EDE8DC" }}>{t.name}</div>
                <div className="lo" style={{ fontSize: 12, color: "rgba(237,232,220,0.4)", fontStyle: "italic" }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px" }}><div className="gold-line" /></div>

      {/* ── PRICING ── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Lora',serif" }}>Investment</p>
          <h2 className="pf" style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 14 }}>Multiple Paths In</h2>
          <p className="lo" style={{ color: "rgba(237,232,220,0.45)", fontSize: 16, fontStyle: "italic", marginBottom: 48, maxWidth: 480, lineHeight: 1.75 }}>
            No path should be closed because of money alone. We built this for builders, not buyers.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
            {PRICING_TIERS.map((tier) => (
              <div key={tier.id} style={{ padding: "28px 24px", background: tier.highlight ? "rgba(201,146,42,0.06)" : "rgba(237,232,220,0.025)", border: `1px solid ${tier.highlight ? "rgba(201,146,42,0.4)" : "rgba(237,232,220,0.07)"}`, borderRadius: 14, display: "flex", flexDirection: "column", position: "relative" }}>
                {tier.badge && (
                  <span className="lo" style={{ position: "absolute", top: -10, left: 20, background: "#C9922A", color: "#0A0B07", fontSize: 10, padding: "2px 10px", borderRadius: 20, fontWeight: 700, letterSpacing: "0.1em" }}>{tier.badge}</span>
                )}
                <div className="pf" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: tier.highlight ? "#C9922A" : "rgba(237,232,220,0.6)", marginBottom: 8 }}>{tier.name}</div>
                <div className="pf" style={{ fontSize: 26, fontWeight: 900, color: "#EDE8DC", lineHeight: 1.1, marginBottom: 4 }}>{tier.price}</div>
                <div className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.35)", fontStyle: "italic", marginBottom: 20 }}>{tier.priceSubtext}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, flex: 1, marginBottom: 24 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "#C9922A", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span className="lo" style={{ fontSize: 13, color: "rgba(237,232,220,0.55)", lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={tier.ctaHref} style={{ padding: "12px", textAlign: "center", background: tier.highlight ? "#C9922A" : "transparent", border: `1px solid ${tier.highlight ? "#C9922A" : "rgba(237,232,220,0.18)"}`, color: tier.highlight ? "#0A0B07" : "#EDE8DC", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 7, fontFamily: "'Lora',serif", fontWeight: tier.highlight ? 700 : 400 }}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Sponsored Rivers */}
          <div style={{ marginTop: 48, padding: "28px 32px", background: "rgba(237,232,220,0.02)", border: "1px solid rgba(237,232,220,0.07)", borderRadius: 14 }}>
            <h3 className="pf" style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>Sponsored Rivers</h3>
            <p className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 14, lineHeight: 1.8, maxWidth: 660, marginBottom: 16, fontStyle: "italic" }}>
              Nigerian companies and organisations can sponsor cohort seats or entire curriculum modules. A sponsored seat gives a qualifying applicant full program access at no cost. A sponsored module puts your name on a week of the curriculum — with full visibility to 30 builders who will be creating products in the Nigerian market.
            </p>
            <a href="mailto:hello@villagecircle.ng?subject=Sponsored Rivers — Vibe Coders" className="lo" style={{ color: "#C9922A", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>
              Become a sponsor →
            </a>
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/vibe-coders/pricing" className="lo" style={{ color: "rgba(237,232,220,0.4)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>
              See full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "90px 40px 120px", borderTop: "1px solid rgba(237,232,220,0.06)", background: "rgba(201,146,42,0.03)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 className="pf" style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 18 }}>
            The village doesn&apos;t<br />build itself.
          </h2>
          <p className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 17, fontStyle: "italic", lineHeight: 1.8, marginBottom: 14 }}>
            Cohort 1 opens Q2 2026. {CURRENT_COHORT.capacity} seats. Applications close when they close.
          </p>
          <p className="lo" style={{ color: "rgba(237,232,220,0.3)", fontSize: 13, marginBottom: 44 }}>
            {CURRENT_COHORT.enrolledCount} of {CURRENT_COHORT.capacity} seats filled
          </p>
          <Link href="/vibe-coders/apply" style={{ display: "inline-block", padding: "18px 48px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 10, fontFamily: "'Lora',serif" }}>
            Apply Now — It&apos;s Free to Apply
          </Link>
          <p className="lo" style={{ marginTop: 20, fontSize: 13, color: "rgba(237,232,220,0.25)", fontStyle: "italic" }}>
            No coding experience required. Just bring your idea and your hunger.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: "28px 40px", borderTop: "1px solid rgba(237,232,220,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/" className="lo" style={{ color: "rgba(237,232,220,0.35)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>← VillageCircle</Link>
          <Link href="/vibe-coders/showcase" className="lo" style={{ color: "rgba(237,232,220,0.35)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>Showcase</Link>
          <Link href="/vibe-coders/portal" className="lo" style={{ color: "rgba(237,232,220,0.35)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>Student Portal</Link>
        </div>
        <span className="lo" style={{ color: "rgba(237,232,220,0.14)", fontSize: 11, fontStyle: "italic" }}>
          Tool from BoldMind. Story from VillageCircle. · #ReturnToTheCircle
        </span>
      </footer>
    </div>
  );
}
