"use client";

import Link from "next/link";

const NAV = [
  { href: "/vibe-coders/portal", label: "Dashboard", icon: "⊞" },
  { href: "/vibe-coders/portal/curriculum", label: "Curriculum", icon: "📚" },
  { href: "/vibe-coders/portal/projects", label: "My Project", icon: "🔨" },
  { href: "/vibe-coders/portal/mentors", label: "Mentors", icon: "👤" },
  { href: "/vibe-coders/portal/cohort", label: "Cohort", icon: "🌱" },
  { href: "/vibe-coders/portal/profile", label: "Profile", icon: "✦" },
  { href: "/vibe-coders/portal/settings", label: "Settings", icon: "⚙" },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#FAFAF9", color: "#1A202C", fontFamily: "Inter,system-ui,sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: "#fff", borderRight: "1px solid #E7E5E4", display: "flex", flexDirection: "column", position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 100 }}>
        <div style={{ padding: "20px 18px", borderBottom: "1px solid #E7E5E4" }}>
          <Link href="/vibe-coders" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2B4D87", fontWeight: 600 }}>Vibe Coders</span>
            <span style={{ fontSize: 10, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase" }}>Student Portal</span>
          </Link>
        </div>

        <nav style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 7, textDecoration: "none", color: "#4B5563", fontSize: 13, fontWeight: 500, transition: "all 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F3F4F6"; e.currentTarget.style.color = "#2B4D87"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#4B5563"; }}>
              <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div style={{ padding: "14px 18px", borderTop: "1px solid #E7E5E4" }}>
          <Link href="/" style={{ fontSize: 11, color: "#9CA3AF", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>← VillageCircle</Link>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, marginLeft: 220, padding: "32px 36px", minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}
