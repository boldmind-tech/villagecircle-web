"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CONCEPTS = [
  { id: "kolo-ai", emoji: "🪙", name: "KoloAI", tagline: "Teach money to serve community, not consume it", river: "Economic Liberation", riverColor: "#C9922A", desc: "Passive income flows that feed one orphan per stream. Wealth as bridge, not extractive engine. Sankara's 4-year discipline meets modern SaaS.", status: "BUILDING", href: "/vibe-coders" },
  { id: "safe-ai", emoji: "🛡️", name: "SAFE AI", tagline: "Sovereignty shield for communities", river: "Pan-African Governance", riverColor: "#2A6B4F", desc: "Community safety infrastructure built on local truth, not foreign architecture. Refuses the colonial mirror.", status: "CONCEPT", href: "#join" },
  { id: "afrohustle-os", emoji: "⚡", name: "AfroHustle OS", tagline: "ADHD lightning meets ancestral code", river: "Technology Leap", riverColor: "#C0470E", desc: "MVPs in 4–8 weeks. Code that outlives its builder. ADHD patterns see futures. Automate freedom, not chains.", status: "CONCEPT", href: "#join" },
  { id: "naijagig-matcher", emoji: "🎭", name: "NaijaGig Matcher", tagline: "Skill is sovereign. No CV.", river: "Economic Liberation", riverColor: "#C9922A", desc: "The village square as marketplace. Talent visible on merit alone. DJ, tailor, coder — equal dignity.", status: "CONCEPT", href: "#join" },
  { id: "borderless-remit", emoji: "🌍", name: "Borderless Remit", tagline: "Berlin's lines cannot tax our love", river: "Pan-African Governance", riverColor: "#2A6B4F", desc: "Cross-border value flows that honor the 54 stools. Remittance as reparation. Debt traps snapped with integrity.", status: "CONCEPT", href: "#join" },
  { id: "farmgate-direct", emoji: "🌾", name: "FarmGate Direct", tagline: "Refine raw. End the toothpick mockery.", river: "Economic Liberation", riverColor: "#C9922A", desc: "Farmer-to-market sovereign chains. Raw exports bleed us. Local processing heals. Cotton empires, local mills.", status: "CONCEPT", href: "#join" },
  { id: "power-alert", emoji: "💡", name: "PowerAlert NG", tagline: "Infrastructure truth, community-owned", river: "Technology Leap", riverColor: "#C0470E", desc: "Crowd-sourced power data. Knowledge is sovereignty. Literally. Community tool for community problems.", status: "CONCEPT", href: "#join" },
  { id: "receipt-genius", emoji: "🧾", name: "ReceiptGenius NG", tagline: "Account to the village, transparently", river: "Pan-African Governance", riverColor: "#2A6B4F", desc: "Financial transparency tools. Ubuntu demands we account to each other. No hidden hands in community funds.", status: "CONCEPT", href: "#join" },
  { id: "skill2cash", emoji: "💎", name: "Skill2Cash", tagline: "Every Naija skill has a market", river: "Economic Liberation", riverColor: "#C9922A", desc: "Monetization rails for underground talent. The market was always there — we build the rails to reach it.", status: "CONCEPT", href: "#join" },
  { id: "afrocopy-ai", emoji: "✍️", name: "AfroCopy AI", tagline: "Words trained on our own proverbs", river: "Technology Leap", riverColor: "#C0470E", desc: "AfriDataSovereign language model. Replace foreign mirrors with Naija-trained AI. Code and copy that sound like us.", status: "CONCEPT", href: "#join" },
  { id: "anontruth-mic", emoji: "🎤", name: "AnonTruth Mic", tagline: "Truth speaks even when it must whisper", river: "History", riverColor: "#5B3080", desc: "Lumumba refused to kneel in public. This gives truth a way to speak without martyrdom. Community confession without consequence.", status: "CONCEPT", href: "#join" },
  { id: "vibe-coders", emoji: "⚡", name: "Vibe Coders", tagline: "Build what Nigeria needs", river: "Technology Leap", riverColor: "#C0470E", desc: "A 6-month AI-assisted coding mentorship program for Nigerian youth. Project-based. Psychology-informed. VillageCircle-rooted. The thesis made flesh.", status: "BUILDING", href: "/vibe-coders" },
];

const RIVERS = [
  { name: "Religion & Culture", sym: "🌀", color: "#7C3AED", short: "Aṣẹ · Ifá · Mbiti" },
  { name: "History", sym: "📜", color: "#5B3080", short: "Erased events as keys" },
  { name: "Economic Liberation", sym: "🪙", color: "#C9922A", short: "Wealth as bridge" },
  { name: "Technology Leap", sym: "⚡", color: "#C0470E", short: "Code sovereign" },
  { name: "Pan-African Governance", sym: "🌍", color: "#2A6B4F", short: "54 stools, no thrones" },
];

const DAILY = [
  '"Before the gun, we had the gong. The gong still calls." — #ReturnToTheCircle',
  '"Awolowo freed minds in 1955. Whose children are still waiting?" — #ReturnToTheCircle',
  '"Ubuntu is not an app. It\'s the OS." — #ReturnToTheCircle',
  '"Code that cannot feed your village has no roots." — #ReturnToTheCircle',
  '"Sankara wore no gold. He wore results." — #ReturnToTheCircle',
];

export default function ConceptHub() {
  const [activeRiver, setActiveRiver] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [visible, setVisible] = useState(new Set<string>());
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) =>
            e.isIntersecting &&
            setVisible((p) => new Set([...p, (e.target as HTMLElement).dataset.id!]))
        ),
      { threshold: 0.12 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, [activeRiver]);

  const filtered = activeRiver ? CONCEPTS.filter((c) => c.river === activeRiver) : CONCEPTS;

  return (
    <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", fontFamily: "'Georgia','Palatino Linotype',serif", overflowX: "hidden" }}>
      <div style={{ position: "fixed", top: "-15%", left: "15%", width: 700, height: 700, background: "radial-gradient(circle,rgba(201,146,42,0.055) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-10%", right: "5%", width: 500, height: 500, background: "radial-gradient(circle,rgba(42,107,79,0.065) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── Nav ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(14px)", background: "rgba(10,11,7,0.8)", borderBottom: "1px solid rgba(237,232,220,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>🌱</span>
          <span className="pf" style={{ color: "#EDE8DC", fontWeight: 700, fontSize: 14, letterSpacing: "0.04em" }}>VillageCircle</span>
          <span style={{ color: "rgba(237,232,220,0.2)", margin: "0 6px", fontSize: 12 }}>/</span>
          <span className="lo" style={{ color: "#C9922A", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontStyle: "italic" }}>Concept Hub</span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          {([["https://amebogist.ng","AmeboGist"],["https://educenter.com.ng","EduCenter"],["https://boldmind.ng","BoldMind"]] as [string,string][]).map(([href,label]) => (
            <a key={label} href={href} style={{ color: "rgba(237,232,220,0.4)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(237,232,220,0.4)")}
            >{label}</a>
          ))}
          <Link href="/vibe-coders" style={{ padding: "8px 18px", border: "1px solid rgba(201,146,42,0.4)", borderRadius: 6, color: "#C9922A", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,146,42,0.1)"; e.currentTarget.style.borderColor = "rgba(201,146,42,0.7)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(201,146,42,0.4)"; }}
          >Vibe Coders ⚡</Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "130px 40px 80px", textAlign: "center", position: "relative" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.55 }} />
        {[{ top: "14%", left: "7%", size: 70, color: "#C9922A", delay: "0s" },{ top: "38%", right: "6%", size: 55, color: "#2A6B4F", delay: "5s" },{ bottom: "22%", left: "12%", size: 45, color: "#7C3AED", delay: "9s" }].map((s, i) => (
          <div key={i} className="drift" style={{ position: "absolute", ...s as React.CSSProperties, width: s.size, height: s.size, animationDelay: s.delay, opacity: 0.13, pointerEvents: "none" }}>
            <svg viewBox="0 0 60 60" width={s.size} height={s.size} style={{ color: s.color }}>
              <circle cx="30" cy="30" r="27" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="30" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <line x1="30" y1="3" x2="30" y2="57" stroke="currentColor" strokeWidth="0.5" />
              <line x1="3" y1="30" x2="57" y2="30" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        ))}

        <div className="fadein" style={{ marginBottom: 36, display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 18px", border: "1px solid rgba(201,146,42,0.25)", borderRadius: 30, background: "rgba(201,146,42,0.05)" }}>
          <span className="breathe" style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9922A", display: "inline-block" }} />
          <span className="tickin lo" key={tick} style={{ color: "#C9922A", fontSize: 12, fontStyle: "italic", maxWidth: 420, textAlign: "left" }}>
            {DAILY[tick % DAILY.length]}
          </span>
        </div>

        <h1 className="pf fadein" style={{ fontSize: "clamp(40px,7.5vw,88px)", fontWeight: 900, lineHeight: 1.04, marginBottom: 26, maxWidth: 860, animationDelay: "0.1s" }}>
          What We Are<br /><em style={{ color: "#C9922A" }}>Building Next</em>
        </h1>

        <div style={{ maxWidth: 620, marginBottom: 44 }} className="fadein">
          <div className="gold-line" style={{ marginBottom: 20 }} />
          <p className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: "clamp(15px,1.8vw,19px)", fontStyle: "italic", lineHeight: 1.75 }}>
            "Until the lion learns to write, every story will glorify the hunter."
          </p>
          <p style={{ color: "rgba(237,232,220,0.22)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 11, fontFamily: "'Lora',serif" }}>
            Chinua Achebe · We build so the lion writes its own future
          </p>
          <div className="gold-line" style={{ marginTop: 20 }} />
        </div>

        <p className="lo fadein" style={{ color: "rgba(237,232,220,0.55)", fontSize: "clamp(15px,1.6vw,18px)", maxWidth: 640, lineHeight: 1.85, marginBottom: 56, animationDelay: "0.4s" }}>
          These are the seeds in the ground — not yet born into full products, but alive in concept. Each one rooted in the <strong style={{ color: "rgba(237,232,220,0.8)" }}>5 Rivers</strong> of the Village Circle. Each one a refusal to remain colonial.
        </p>

        <div className="fadein" style={{ display: "flex", gap: 52, justifyContent: "center", flexWrap: "wrap", animationDelay: "0.55s" }}>
          {([["12","Concepts in motion"],["5","Rivers of change"],["∞","Doors to open"]] as [string,string][]).map(([n,l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div className="pf" style={{ fontSize: 44, fontWeight: 900, color: "#C9922A", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(237,232,220,0.3)", marginTop: 5, fontFamily: "'Lora',serif" }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(237,232,220,0.2)", fontFamily: "'Lora',serif" }}>Enter the circle</span>
          <div style={{ width: 1, height: 44, background: "linear-gradient(to bottom,rgba(201,146,42,0.6),transparent)" }} />
        </div>
      </section>

      {/* ── 5 Rivers ── */}
      <section style={{ padding: "70px 40px", borderTop: "1px solid rgba(237,232,220,0.06)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
            <div>
              <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Lora',serif" }}>The Philosophy</p>
              <h2 className="pf" style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, lineHeight: 1.1 }}>The 5 Rivers Cycle</h2>
            </div>
            <p className="lo" style={{ color: "rgba(237,232,220,0.4)", fontSize: 15, maxWidth: 380, fontStyle: "italic", lineHeight: 1.75 }}>Daily drops at 8:30 AM. Not content. Medicine. Each concept flows from one of these currents.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
            {RIVERS.map((r) => (
              <button key={r.name} className={`river-btn ${activeRiver === r.name ? "on" : ""}`}
                onClick={() => setActiveRiver(activeRiver === r.name ? null : r.name)}
                style={{ padding: "18px 16px", borderRadius: 12, textAlign: "left" }}>
                <span style={{ fontSize: 22, display: "block", marginBottom: 9 }}>{r.sym}</span>
                <span className="pf" style={{ fontSize: 13, fontWeight: 700, color: activeRiver === r.name ? r.color : "#EDE8DC", display: "block", marginBottom: 5, lineHeight: 1.3 }}>{r.name}</span>
                <span className="lo" style={{ fontSize: 12, color: "rgba(237,232,220,0.38)", fontStyle: "italic" }}>{r.short}</span>
              </button>
            ))}
          </div>
          {activeRiver && (
            <div style={{ marginTop: 12, padding: "10px 18px", background: "rgba(237,232,220,0.03)", borderRadius: 8, border: "1px solid rgba(237,232,220,0.07)" }}>
              <span className="lo" style={{ fontSize: 13, color: "rgba(237,232,220,0.38)", fontStyle: "italic" }}>
                {filtered.length} concept{filtered.length !== 1 ? "s" : ""} from <strong style={{ color: "rgba(237,232,220,0.65)" }}>{activeRiver}</strong> ·{" "}
                <button onClick={() => setActiveRiver(null)} style={{ color: "#C9922A", background: "none", border: "none", cursor: "pointer", fontSize: 13, fontFamily: "inherit", fontStyle: "italic" }}>show all</button>
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── Concept Cards ── */}
      <section style={{ padding: "10px 40px 90px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(310px,1fr))", gap: 18 }}>
          {filtered.map((c, i) => (
            <div key={c.id} ref={(el) => { refs.current[i] = el; }} data-id={c.id}
              className={`concept-card card-enter ${visible.has(c.id) ? "vis" : ""}`}
              style={{ borderRadius: 16, padding: "26px 24px", transitionDelay: `${(i % 3) * 0.07}s` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: c.riverColor, opacity: 0.8, fontFamily: "'Lora',serif" }}>{c.river}</span>
                <span className="lo" style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 20, border: `1px solid ${c.status === "BUILDING" ? "rgba(201,146,42,0.35)" : "rgba(139,115,85,0.3)"}`, color: c.status === "BUILDING" ? "#C9922A" : "#8B7355", background: c.status === "BUILDING" ? "rgba(201,146,42,0.08)" : "rgba(139,115,85,0.06)" }}>{c.status}</span>
              </div>
              <div style={{ display: "flex", gap: 13, alignItems: "center", marginBottom: 14 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: `${c.riverColor}18`, border: `1px solid ${c.riverColor}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{c.emoji}</div>
                <div>
                  <h3 className="pf" style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.2 }}>{c.name}</h3>
                  <p className="lo" style={{ fontSize: 11, color: c.riverColor, fontStyle: "italic", marginTop: 2, opacity: 0.85 }}>{c.tagline}</p>
                </div>
              </div>
              <p className="lo" style={{ fontSize: 13.5, color: "rgba(237,232,220,0.48)", lineHeight: 1.78, marginBottom: 20 }}>{c.desc}</p>
              <div style={{ width: "100%", height: 1, background: `linear-gradient(90deg,${c.riverColor}28,transparent)`, marginBottom: 16 }} />
              <Link href={c.href} style={{ color: c.riverColor, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif", opacity: 0.7, display: "flex", alignItems: "center", gap: 5 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}>
                Enter the circle <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section style={{ padding: "70px 40px", borderTop: "1px solid rgba(237,232,220,0.06)", background: "rgba(237,232,220,0.012)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 30, fontFamily: "'Lora',serif" }}>Village Circle · Daily Drop Doctrine</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 1, marginBottom: 52, border: "1px solid rgba(237,232,220,0.07)", borderRadius: 14, overflow: "hidden" }}>
            {([["🌀","Aṣẹ Command","We speak things into existence. Every concept is a declaration before it is a product."],["🌍","Ubuntu Code","I am because we are. Products built for community sovereignty, not individual extraction."],["📜","History as Weapon","Awolowo freed minds in 1955. Lumumba lived in refusal. We build what empire buried."],["⚡","ADHD Lightning","Neurodivergent patterns see futures. We build tools that honor how African minds actually work."]] as [string,string,string][]).map(([icon,title,body]) => (
              <div key={title} style={{ padding: "26px 22px", background: "rgba(237,232,220,0.02)", borderRight: "1px solid rgba(237,232,220,0.05)" }}>
                <span style={{ fontSize: 22, display: "block", marginBottom: 11 }}>{icon}</span>
                <h4 className="pf" style={{ fontSize: 14, fontWeight: 700, marginBottom: 7 }}>{title}</h4>
                <p className="lo" style={{ fontSize: 12.5, color: "rgba(237,232,220,0.42)", lineHeight: 1.72, fontStyle: "italic" }}>{body}</p>
              </div>
            ))}
          </div>
          <blockquote style={{ borderLeft: "2px solid #C9922A", paddingLeft: 22, textAlign: "left", marginBottom: 40 }}>
            <p className="pf" style={{ fontSize: "clamp(16px,2.2vw,22px)", fontStyle: "italic", lineHeight: 1.68, color: "rgba(237,232,220,0.78)", marginBottom: 10 }}>
              "No fluff, no begging. Only calm thunder to realign youth toward integrity, sovereignty, truth-to-power."
            </p>
            <cite className="lo" style={{ fontSize: 11, color: "#C9922A", letterSpacing: "0.16em", textTransform: "uppercase", fontStyle: "normal" }}>Village Circle Daily Drop</cite>
          </blockquote>
        </div>
      </section>

      {/* ── Vibe Coders CTA ── */}
      <section style={{ padding: "60px 40px", borderTop: "1px solid rgba(237,232,220,0.06)", background: "rgba(201,146,42,0.03)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Lora',serif" }}>Now Open</p>
            <h2 className="pf" style={{ fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 10 }}>Vibe Coders — Cohort 1</h2>
            <p className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 15, fontStyle: "italic", lineHeight: 1.7 }}>6 months. Real products. Nigerian minds. AI-first.</p>
          </div>
          <Link href="/vibe-coders" style={{ padding: "14px 32px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, fontFamily: "'Lora',serif", whiteSpace: "nowrap" }}>
            Apply Now →
          </Link>
        </div>
      </section>

      {/* ── Join ── */}
      <section id="join" style={{ padding: "70px 40px 110px", borderTop: "1px solid rgba(237,232,220,0.06)" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 30, display: "block", marginBottom: 18 }}>🌱</span>
          <h2 className="pf" style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, marginBottom: 14, lineHeight: 1.1 }}>Enter the Circle</h2>
          <p className="lo" style={{ color: "rgba(237,232,220,0.48)", fontSize: 16, marginBottom: 38, fontStyle: "italic", lineHeight: 1.8 }}>One email. No noise. Only when the seed breaks ground.</p>
          {!joined ? (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setJoined(true); }}
              style={{ display: "flex", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(237,232,220,0.12)", maxWidth: 420, margin: "0 auto" }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required
                style={{ flex: 1, padding: "14px 16px", background: "rgba(237,232,220,0.04)", border: "none", color: "#EDE8DC", fontSize: 15, outline: "none", fontFamily: "'Lora',serif" }} />
              <button type="submit" style={{ padding: "14px 22px", background: "#C9922A", border: "none", color: "#0A0B07", fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Lora',serif", whiteSpace: "nowrap" }}>Join →</button>
            </form>
          ) : (
            <div style={{ padding: "20px 28px", border: "1px solid rgba(201,146,42,0.3)", borderRadius: 10, background: "rgba(201,146,42,0.05)" }}>
              <span style={{ fontSize: 22, display: "block", marginBottom: 8 }}>🌱</span>
              <p className="lo" style={{ color: "#C9922A", fontSize: 15, fontStyle: "italic" }}>You&apos;re in the circle. The seed knows your name.</p>
            </div>
          )}
          <p className="lo" style={{ marginTop: 16, fontSize: 12, color: "rgba(237,232,220,0.18)", fontStyle: "italic" }}>No spam. No hustle theatre. Only when something real is ready.</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: "28px 40px", borderTop: "1px solid rgba(237,232,220,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span>🌱</span>
          <span className="pf" style={{ color: "rgba(237,232,220,0.4)", fontSize: 13 }}>VillageCircle · BoldMind Technology Solution Enterprise</span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/vibe-coders" style={{ color: "#C9922A", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif" }}>Vibe Coders ⚡</Link>
          <span className="lo" style={{ color: "rgba(237,232,220,0.16)", fontSize: 11, fontStyle: "italic" }}>© {new Date().getFullYear()} · #ReturnToTheCircle</span>
        </div>
      </footer>
    </div>
  );
}
