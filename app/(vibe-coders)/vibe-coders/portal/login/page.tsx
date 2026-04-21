"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginContent() {
  const params = useSearchParams();
  const redirect = params.get("redirect") ?? "/vibe-coders/portal";
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  }

  return (
    <div style={{ background: "#FAFAF9", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", fontFamily: "Inter,system-ui,sans-serif" }}>
      <div style={{ width: "100%", maxWidth: 380 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Link href="/vibe-coders" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2B4D87", fontWeight: 700 }}>Vibe Coders</span>
          </Link>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A202C", marginTop: 10, marginBottom: 4 }}>Student Portal</h1>
          <p style={{ fontSize: 14, color: "#6B7280" }}>Sign in with your email to continue.</p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "28px 24px" }}>
            <label style={{ fontSize: 11, fontWeight: 600, color: "#4B5563", display: "block", marginBottom: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required
              style={{ width: "100%", padding: "12px 14px", border: "1px solid #E7E5E4", borderRadius: 8, fontSize: 15, color: "#1A202C", outline: "none", marginBottom: 16, fontFamily: "inherit" }} />
            <button type="submit" disabled={loading}
              style={{ width: "100%", padding: "12px", background: "#2B4D87", border: "none", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 8, cursor: loading ? "wait" : "pointer", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Sending link..." : "Send Magic Link →"}
            </button>
          </form>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "32px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>📧</div>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "#1A202C", marginBottom: 8 }}>Check your email</h2>
            <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>
              We sent a magic sign-in link to <strong style={{ color: "#1A202C" }}>{email}</strong>. Click it to access your portal.
            </p>
          </div>
        )}

        <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "#9CA3AF" }}>
          Not enrolled yet?{" "}
          <Link href="/vibe-coders/apply" style={{ color: "#2B4D87", fontWeight: 600, textDecoration: "none" }}>Apply for Cohort 1</Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ background: "#FAFAF9", minHeight: "100vh" }} />}>
      <LoginContent />
    </Suspense>
  );
}
