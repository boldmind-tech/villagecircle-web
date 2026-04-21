import Link from "next/link";
import { CURRICULUM_MODULES } from "@/lib/vibe-coders/curriculum-data";

export default function PortalCurriculumPage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A202C", marginBottom: 4 }}>Curriculum</h1>
        <p style={{ fontSize: 14, color: "#6B7280" }}>24 weeks. Every deliverable ships something real.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {CURRICULUM_MODULES.map((module) => (
          <div key={module.id}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 3, height: 32, background: module.color, borderRadius: 3 }} />
              <div>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1A202C" }}>{module.title}</h2>
                <p style={{ fontSize: 12, color: "#9CA3AF" }}>{module.subtitle}</p>
              </div>
              <span style={{ marginLeft: "auto", fontSize: 10, padding: "2px 8px", border: `1px solid ${module.color}40`, borderRadius: 12, color: module.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {module.phase === "learn" ? "Learn" : "Build"}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 10 }}>
              {module.weeks.map((week) => (
                <Link key={week.week} href={`/vibe-coders/portal/curriculum/${week.week}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 10, padding: "14px 16px", cursor: "pointer", transition: "all 0.15s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = module.color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E7E5E4"; }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 10, color: module.color, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>Week {week.week}</span>
                      <span style={{ fontSize: 10, color: "#D1D5DB", fontWeight: 600 }}>—</span>
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#1A202C", marginBottom: 4 }}>{week.title}</h3>
                    <p style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.5 }}>{week.description}</p>
                    {week.deliverable && (
                      <div style={{ marginTop: 8, fontSize: 11, color: module.color, fontStyle: "italic" }}>→ {week.deliverable}</div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
