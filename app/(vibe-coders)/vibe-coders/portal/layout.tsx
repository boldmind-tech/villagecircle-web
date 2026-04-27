"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (item: (typeof NAV)[0]) => {
    const active = pathname === item.href;
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "9px 10px", borderRadius: 7, textDecoration: "none",
          color: active ? "#2B4D87" : "#4B5563",
          background: active ? "#EFF6FF" : "transparent",
          fontSize: 13, fontWeight: active ? 600 : 500, transition: "all 0.15s",
        }}
        onMouseEnter={(e) => {
          if (!active) {
            e.currentTarget.style.background = "#F3F4F6";
            e.currentTarget.style.color = "#2B4D87";
          }
        }}
        onMouseLeave={(e) => {
          if (!active) {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#4B5563";
          }
        }}
      >
        <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>{item.icon}</span>
        <span>{item.label}</span>
      </Link>
    );
  };

  const sidebarContent = (
    <>
      <div style={{ padding: "20px 18px", borderBottom: "1px solid #E7E5E4", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/vibe-coders" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2B4D87", fontWeight: 600 }}>Vibe Coders</span>
          <span style={{ fontSize: 10, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase" }}>Student Portal</span>
        </Link>
        {/* Close button — mobile only */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#9CA3AF", lineHeight: 1 }}
          className="portal-close-btn"
        >✕</button>
      </div>

      <nav style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" }}>
        {NAV.map(navLink)}
      </nav>

      <div style={{ padding: "14px 18px", borderTop: "1px solid #E7E5E4" }}>
        <Link href="/" style={{ fontSize: 11, color: "#9CA3AF", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          ← VillageCircle
        </Link>
      </div>
    </>
  );

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .portal-sidebar {
            transform: translateX(-100%) !important;
            transition: transform 0.28s ease !important;
            box-shadow: none !important;
          }
          .portal-sidebar.open {
            transform: translateX(0) !important;
            box-shadow: 4px 0 24px rgba(0,0,0,0.12) !important;
          }
          .portal-close-btn { display: flex !important; }
          .portal-main { margin-left: 0 !important; padding: 24px 20px !important; }
          .portal-topbar { display: flex !important; }
          .portal-overlay { display: block !important; }
        }
        @media (min-width: 769px) {
          .portal-topbar { display: none !important; }
          .portal-overlay { display: none !important; }
          .portal-sidebar { transform: translateX(0) !important; }
        }
      `}</style>

      <div style={{ display: "flex", minHeight: "100vh", background: "#FAFAF9", color: "#1A202C", fontFamily: "Inter,system-ui,sans-serif" }}>

        {/* Mobile overlay */}
        {open && (
          <div
            className="portal-overlay"
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", zIndex: 99 }}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`portal-sidebar${open ? " open" : ""}`}
          style={{
            width: 220, background: "#fff", borderRight: "1px solid #E7E5E4",
            display: "flex", flexDirection: "column",
            position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 100,
          }}
        >
          {sidebarContent}
        </aside>

        {/* Mobile top bar */}
        <header
          className="portal-topbar"
          style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 98,
            background: "#fff", borderBottom: "1px solid #E7E5E4",
            padding: "12px 20px", alignItems: "center", justifyContent: "space-between",
            display: "none",
          }}
        >
          <Link href="/vibe-coders" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2B4D87", fontWeight: 700 }}>Vibe Coders</span>
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{ background: "none", border: "1px solid #E7E5E4", borderRadius: 6, padding: "6px 10px", cursor: "pointer", fontSize: 14, color: "#4B5563" }}
          >
            ☰ Menu
          </button>
        </header>

        {/* Main content */}
        <main
          className="portal-main"
          style={{ flex: 1, marginLeft: 220, padding: "32px 36px", minHeight: "100vh", paddingTop: 32 }}
        >
          {children}
        </main>
      </div>
    </>
  );
}
