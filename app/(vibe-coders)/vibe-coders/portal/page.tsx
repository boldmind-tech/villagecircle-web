"use client";

import Link from "next/link";

export default function PortalDashboard() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1A202C", marginBottom: 4 }}>Welcome back</h1>
        <p style={{ fontSize: 14, color: "#6B7280" }}>Here&apos;s where you are in the program.</p>
      </div>

      {/* Progress strip */}
      <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "20px 24px", marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1A202C" }}>Program Progress</span>
          <span style={{ fontSize: 12, color: "#6B7280" }}>Week 1 of 24</span>
        </div>
        <div style={{ background: "#E7E5E4", borderRadius: 999, height: 8 }}>
          <div style={{ width: "4%", height: "100%", background: "#2B4D87", borderRadius: 999, transition: "width 0.4s" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>Learn phase</span>
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>Build phase</span>
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>Graduate</span>
        </div>
      </div>

      {/* Quick cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { label: "Current Week", value: "Week 1", sub: "Setup & Orientation", href: "/vibe-coders/portal/curriculum", color: "#2B4D87" },
          { label: "My Project", value: "Not started", sub: "Tap to define your idea", href: "/vibe-coders/portal/projects", color: "#E9A825" },
          { label: "Next Mentor Session", value: "Not booked", sub: "Book your first check-in", href: "/vibe-coders/portal/mentors", color: "#2A6B4F" },
          { label: "Cohort Standing", value: "Active", sub: "30 builders in Cohort 1", href: "/vibe-coders/portal/cohort", color: "#5B3080" },
        ].map((c) => (
          <Link key={c.label} href={c.href} style={{ textDecoration: "none" }}>
            <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "18px 20px", cursor: "pointer", transition: "all 0.15s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = c.color; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 3px ${c.color}15`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E7E5E4"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
              <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: c.color, marginBottom: 8, fontWeight: 600 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#1A202C", marginBottom: 3 }}>{c.value}</div>
              <div style={{ fontSize: 12, color: "#9CA3AF" }}>{c.sub}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* This week */}
      <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px" }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1A202C", marginBottom: 16 }}>This Week — Week 1: Setup & Orientation</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { task: "Install VS Code and Cursor AI", done: false },
            { task: "Create a GitHub account and push your first repo", done: false },
            { task: "Join the WhatsApp cohort group", done: false },
            { task: "Read the Week 1 orientation materials", done: false },
            { task: "Post your introduction in the cohort channel", done: false },
          ].map((t) => (
            <div key={t.task} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #F3F4F6" }}>
              <div style={{ width: 18, height: 18, borderRadius: 4, border: "2px solid #E7E5E4", background: t.done ? "#2B4D87" : "transparent", flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: t.done ? "#9CA3AF" : "#1A202C", textDecoration: t.done ? "line-through" : "none" }}>{t.task}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <Link href="/vibe-coders/portal/curriculum" style={{ fontSize: 12, color: "#2B4D87", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>
            View full curriculum →
          </Link>
        </div>
      </div>
    </div>
  );
}
