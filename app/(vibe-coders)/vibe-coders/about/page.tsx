"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", fontFamily: "'Georgia',serif", overflowX: "hidden" }}>
      <div style={{ position: "fixed", top: "-10%", left: "20%", width: 500, height: 500, background: "radial-gradient(circle,rgba(201,146,42,0.05) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(14px)", background: "rgba(10,11,7,0.85)", borderBottom: "1px solid rgba(237,232,220,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/vibe-coders" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <span className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>← Vibe Coders</span>
          </Link>
        </div>
        <Link href="/vibe-coders/apply" style={{ padding: "9px 20px", background: "#C9922A", color: "#0A0B07", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif", fontWeight: 700, borderRadius: 6 }}>Apply Now</Link>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "140px 40px 100px" }}>
        <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Lora',serif" }}>The Philosophy</p>
        <h1 className="pf" style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 900, lineHeight: 1.04, marginBottom: 40 }}>
          Why Vibe Coders<br /><em style={{ color: "#C9922A" }}>Exists</em>
        </h1>

        <div className="gold-line" style={{ marginBottom: 40 }} />

        <div className="lo" style={{ fontSize: "clamp(15px,1.6vw,18px)", color: "rgba(237,232,220,0.7)", lineHeight: 1.9, display: "flex", flexDirection: "column", gap: 28 }}>
          <p>There are 40 million informal entrepreneurs in Nigeria. Most of them are paying developers they cannot fully communicate with, to build products they cannot maintain, using tools they do not understand.</p>

          <p>This is not a failure of intelligence. It is a failure of infrastructure — educational infrastructure that was never designed to serve them.</p>

          <p>Vibe Coders is not a bootcamp. We do not use that word. A bootcamp implies military conditioning toward a fixed output. We are something different: a <strong style={{ color: "#EDE8DC" }}>circle</strong>. A place where you build alongside people who look like the problem they are trying to solve.</p>

          <p>The program is 6 months. The first 2 months, you learn the stack — not to become a senior engineer, but to become sovereign enough to build your first real thing. The last 4 months, you build it. With mentors who check in, with a cohort that holds you accountable, with AI tools that multiply your output.</p>

          <p>We chose the stack deliberately: Next.js because it is where the world is going. Supabase because it removes the backend barrier. Cursor and Claude Code because they are the honest future of how code gets written. Paystack because it is ours.</p>

          <p style={{ fontStyle: "italic", color: "rgba(237,232,220,0.5)" }}>
            "Code that cannot feed your village has no roots."
          </p>

          <p>Every module has a business layer. Every deliverable is a real thing that could be shown to a real user. We do not teach you to pass a test. We teach you to ship.</p>

          <p>The psychology-informed application process is not bureaucracy. It is respect. We want to know who you are before we ask you to trust us with 6 months of your life. The deep assessment is not a filter — it is a map. It helps us mentor you, not evaluate you.</p>
        </div>

        <div className="gold-line" style={{ margin: "48px 0" }} />

        <h2 className="pf" style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 900, marginBottom: 24 }}>The Doctrine</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            ["Conviction before code", "You don't come here to learn syntax. You come here because you believe something needs to exist. The syntax is the vehicle. The conviction is the fuel."],
            ["Build, not consume", "The program is project-based from week one. There are no passive lectures. You build your way to understanding."],
            ["Psychology first", "We study how you learn, what blocks you, what drives you. We do not pretend everyone learns the same way. You don't."],
            ["Nigerian-first design", "Every tool choice, every example, every market context is designed for Nigerian builders and the Nigerian market. Not translated from Silicon Valley. Built here."],
            ["Graduation is a beginning", "When you complete the program, you have a working product, a public portfolio, and a community. The circle does not close on demo day."],
          ].map(([title, body]) => (
            <div key={title} style={{ padding: "22px 24px", background: "rgba(237,232,220,0.025)", border: "1px solid rgba(237,232,220,0.07)", borderRadius: 12 }}>
              <h3 className="pf" style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
              <p className="lo" style={{ fontSize: 14, color: "rgba(237,232,220,0.5)", lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, textAlign: "center" }}>
          <Link href="/vibe-coders/apply" style={{ display: "inline-block", padding: "16px 40px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, fontFamily: "'Lora',serif" }}>
            Apply for Cohort 1 →
          </Link>
        </div>
      </div>
    </div>
  );
}
