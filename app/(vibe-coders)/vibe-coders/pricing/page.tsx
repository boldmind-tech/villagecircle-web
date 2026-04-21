"use client";

import Link from "next/link";
import { PRICING_TIERS, PAYMENT_OPTIONS } from "@/lib/vibe-coders/pricing-config";


export default function PricingPage() {
  return (
    <div style={{ background: "#0A0B07", color: "#EDE8DC", minHeight: "100vh", fontFamily: "'Georgia',serif", overflowX: "hidden" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(14px)", background: "rgba(10,11,7,0.85)", borderBottom: "1px solid rgba(237,232,220,0.06)" }}>
        <Link href="/vibe-coders" style={{ textDecoration: "none" }}>
          <span className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>← Vibe Coders</span>
        </Link>
        <Link href="/vibe-coders/apply" style={{ padding: "9px 20px", background: "#C9922A", color: "#0A0B07", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Lora',serif", fontWeight: 700, borderRadius: 6 }}>Apply Now</Link>
      </nav>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "140px 40px 100px" }}>
        <p style={{ color: "#C9922A", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'Lora',serif" }}>Investment</p>
        <h1 className="pf" style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, lineHeight: 1.04, marginBottom: 18 }}>
          Multiple Paths In.<br />
          <em style={{ color: "#C9922A" }}>One Destination.</em>
        </h1>
        <p className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 16, fontStyle: "italic", lineHeight: 1.8, marginBottom: 60, maxWidth: 560 }}>
          We built every pricing path intentionally. No path should be closed because of money alone. The ISA and scholarship slots exist for people who have vision but not yet capital.
        </p>

        {/* Tiers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginBottom: 64 }}>
          {PRICING_TIERS.map((tier) => (
            <div key={tier.id} style={{ padding: "30px 24px", background: tier.highlight ? "rgba(201,146,42,0.06)" : "rgba(237,232,220,0.025)", border: `1px solid ${tier.highlight ? "rgba(201,146,42,0.4)" : "rgba(237,232,220,0.07)"}`, borderRadius: 14, display: "flex", flexDirection: "column", position: "relative" }}>
              {tier.badge && (
                <span className="lo" style={{ position: "absolute", top: -10, left: 20, background: "#C9922A", color: "#0A0B07", fontSize: 10, padding: "2px 10px", borderRadius: 20, fontWeight: 700 }}>{tier.badge}</span>
              )}
              <div className="pf" style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: tier.highlight ? "#C9922A" : "rgba(237,232,220,0.5)", marginBottom: 10 }}>{tier.name}</div>
              <div className="pf" style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.1, marginBottom: 4 }}>{tier.price}</div>
              <div className="lo" style={{ fontSize: 11, color: "rgba(237,232,220,0.35)", fontStyle: "italic", marginBottom: 22 }}>{tier.priceSubtext}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, flex: 1, marginBottom: 24 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#C9922A", fontSize: 12, marginTop: 3, flexShrink: 0 }}>✓</span>
                    <span className="lo" style={{ fontSize: 13, color: "rgba(237,232,220,0.55)", lineHeight: 1.55 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={tier.ctaHref} style={{ padding: "12px", textAlign: "center", background: tier.highlight ? "#C9922A" : "transparent", border: `1px solid ${tier.highlight ? "#C9922A" : "rgba(237,232,220,0.18)"}`, color: tier.highlight ? "#0A0B07" : "#EDE8DC", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 7, fontFamily: "'Lora',serif", fontWeight: tier.highlight ? 700 : 400 }}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="gold-line" style={{ marginBottom: 56 }} />

        {/* Payment options */}
        <h2 className="pf" style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 900, marginBottom: 12 }}>How to Pay for the Cohort</h2>
        <p className="lo" style={{ color: "rgba(237,232,220,0.45)", fontSize: 15, fontStyle: "italic", marginBottom: 36 }}>
          If you get accepted into Cohort 1, you choose the payment path that works for your situation.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 60 }}>
          {PAYMENT_OPTIONS.map((opt) => (
            <div key={opt.id} style={{ padding: "22px 24px", background: "rgba(237,232,220,0.025)", border: "1px solid rgba(237,232,220,0.07)", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <h3 className="pf" style={{ fontSize: 15, fontWeight: 700 }}>{opt.label}</h3>
                  {opt.badge && <span className="lo" style={{ fontSize: 10, padding: "2px 8px", border: "1px solid rgba(201,146,42,0.35)", borderRadius: 20, color: "#C9922A" }}>{opt.badge}</span>}
                </div>
                <p className="lo" style={{ fontSize: 13, color: "rgba(237,232,220,0.45)", lineHeight: 1.65 }}>{opt.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsored Rivers */}
        <div style={{ padding: "32px", background: "rgba(237,232,220,0.02)", border: "1px solid rgba(237,232,220,0.07)", borderRadius: 14, marginBottom: 60 }}>
          <h3 className="pf" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Sponsored Rivers</h3>
          <p className="lo" style={{ color: "rgba(237,232,220,0.5)", fontSize: 14, lineHeight: 1.85, maxWidth: 680, marginBottom: 20, fontStyle: "italic" }}>
            Nigerian companies can sponsor cohort seats or curriculum modules. A sponsored seat gives a qualifying applicant full program access at no cost. A sponsored module names your organisation on that week&apos;s curriculum — with full visibility to 30 builders creating products in the Nigerian market. This is not advertising. It is investment in the builders who will build the next layer of Nigerian tech.
          </p>
          <a href="mailto:hello@villagecircle.ng?subject=Sponsored Rivers — Vibe Coders Inquiry" className="lo" style={{ color: "#C9922A", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>
            Become a sponsor → hello@villagecircle.ng
          </a>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/vibe-coders/apply" style={{ display: "inline-block", padding: "16px 40px", background: "#C9922A", color: "#0A0B07", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, fontFamily: "'Lora',serif" }}>
            Apply — Free to Apply →
          </Link>
        </div>
      </div>
    </div>
  );
}
