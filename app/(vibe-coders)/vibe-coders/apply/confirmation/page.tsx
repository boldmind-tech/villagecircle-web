import Link from "next/link";

export const metadata = {
  title: "Application Received — Vibe Coders | VillageCircle",
};

export default function ConfirmationPage() {
  return (
    <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", fontFamily: "'Georgia',serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 540 }}>
        <div style={{ fontSize: 52, marginBottom: 24 }}>🌱</div>

        <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Lora',serif" }}>Application Received</p>

        <h1 className="pf" style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 18 }}>
          The seed knows<br /><em style={{ color: "#C9922A" }}>your name.</em>
        </h1>

        <p className="lo" style={{ color: "rgba(237,232,220,0.55)", fontSize: 16, fontStyle: "italic", lineHeight: 1.85, marginBottom: 40 }}>
          Your application has been received. We review every submission personally — no algorithms, no auto-rejections. If you are shortlisted, you will receive a unique link for the deep assessment within 5–7 business days.
        </p>

        <div style={{ padding: "24px 28px", background: "rgba(201,146,42,0.05)", border: "1px solid rgba(201,146,42,0.2)", borderRadius: 14, marginBottom: 40 }}>
          <h3 className="pf" style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>What happens next</h3>
          <ul className="lo" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, textAlign: "left", fontSize: 14, color: "rgba(237,232,220,0.55)", lineHeight: 1.7 }}>
            {[
              "We review your application (5–7 business days)",
              "If shortlisted, you get a unique assessment link via email",
              "Complete the deep assessment (takes 20–30 minutes)",
              "Final decision + enrollment details sent within 3 business days",
            ].map((step, i) => (
              <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#C9922A", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ padding: "12px 24px", border: "1px solid rgba(237,232,220,0.15)", borderRadius: 8, color: "rgba(237,232,220,0.55)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif" }}>
            Back to VillageCircle
          </Link>
          <Link href="/vibe-coders" style={{ padding: "12px 24px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, fontFamily: "'Lora',serif" }}>
            Explore Vibe Coders →
          </Link>
        </div>

        <p className="lo" style={{ marginTop: 32, fontSize: 12, color: "rgba(237,232,220,0.2)", fontStyle: "italic" }}>
          #ReturnToTheCircle · Tool from BoldMind. Story from VillageCircle.
        </p>
      </div>
    </div>
  );
}
