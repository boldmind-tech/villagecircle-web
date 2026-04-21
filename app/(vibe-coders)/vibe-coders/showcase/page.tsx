import Link from "next/link";

export const metadata = {
  title: "Showcase — Vibe Coders | VillageCircle",
  description: "Projects built by Vibe Coders graduates. Real products. Real Nigerian problems. Real builders.",
};

export default function ShowcasePage() {
  return (
    <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", fontFamily: "'Georgia',serif", overflowX: "hidden" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(14px)", background: "rgba(10,11,7,0.85)", borderBottom: "1px solid rgba(237,232,220,0.06)" }}>
        <Link href="/vibe-coders" style={{ textDecoration: "none" }}>
          <span className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>← Vibe Coders</span>
        </Link>
        <Link href="/vibe-coders/apply" style={{ padding: "9px 20px", background: "#C9922A", color: "#0A0B07", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif", fontWeight: 700, borderRadius: 6 }}>Apply Now</Link>
      </nav>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "140px 40px 100px", textAlign: "center" }}>
        <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Lora',serif" }}>Student Work</p>
        <h1 className="pf" style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, lineHeight: 1.04, marginBottom: 20 }}>
          Built by the Circle
        </h1>
        <p className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 16, fontStyle: "italic", lineHeight: 1.8, marginBottom: 80, maxWidth: 480, margin: "0 auto 80px" }}>
          Cohort 1 launches Q2 2026. This page will be filled with real products built by Nigerian builders. Come back then.
        </p>

        <div style={{ padding: "60px 40px", background: "rgba(237,232,220,0.02)", border: "1px solid rgba(237,232,220,0.07)", borderRadius: 20, maxWidth: 560, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🌱</div>
          <h2 className="pf" style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>The seeds are in the ground.</h2>
          <p className="lo" style={{ color: "rgba(237,232,220,0.4)", fontSize: 14, fontStyle: "italic", lineHeight: 1.8, marginBottom: 32 }}>
            Cohort 1 graduates in January 2027. Their products will live here. If you want to be in this showcase, apply now.
          </p>
          <Link href="/vibe-coders/apply" style={{ display: "inline-block", padding: "14px 32px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 7, fontFamily: "'Lora',serif" }}>
            Apply for Cohort 1 →
          </Link>
        </div>
      </div>
    </div>
  );
}
