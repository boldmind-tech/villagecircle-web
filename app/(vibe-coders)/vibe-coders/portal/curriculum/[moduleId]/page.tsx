import { CURRICULUM_MODULES } from "@/lib/vibe-coders/curriculum-data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const weekNum = parseInt(moduleId);

  let week = null;
  let module = null;
  for (const m of CURRICULUM_MODULES) {
    const w = m.weeks.find((w) => w.week === weekNum);
    if (w) { week = w; module = m; break; }
  }

  if (!week || !module) return notFound();

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <Link href="/vibe-coders/portal/curriculum" style={{ fontSize: 12, color: "#6B7280", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase" }}>← Curriculum</Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <span style={{ fontSize: 11, padding: "4px 12px", background: `${module.color}15`, color: module.color, borderRadius: 20, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Week {week.week}</span>
        <span style={{ fontSize: 11, color: "#9CA3AF" }}>{module.title}</span>
      </div>

      <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1A202C", marginBottom: 8 }}>{week.title}</h1>
      <p style={{ fontSize: 16, color: "#6B7280", marginBottom: 32, lineHeight: 1.6 }}>{week.description}</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
        <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "20px" }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "#1A202C", marginBottom: 14 }}>Topics this week</h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {week.topics.map((t) => (
              <li key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 14, color: "#4B5563" }}>
                <span style={{ color: module.color, marginTop: 2 }}>→</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {week.deliverable && (
          <div style={{ background: `${module.color}08`, border: `1px solid ${module.color}30`, borderRadius: 12, padding: "20px" }}>
            <h2 style={{ fontSize: 14, fontWeight: 700, color: module.color, marginBottom: 10 }}>Deliverable</h2>
            <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.65 }}>{week.deliverable}</p>
          </div>
        )}
      </div>

      <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px" }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: "#1A202C", marginBottom: 16 }}>Submit your deliverable</h2>
        <textarea placeholder="Paste your GitHub link, Vercel URL, or describe what you built..." rows={4}
          style={{ width: "100%", padding: "12px 14px", border: "1px solid #E7E5E4", borderRadius: 8, fontSize: 14, color: "#1A202C", outline: "none", resize: "vertical", fontFamily: "inherit" }} />
        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
          <button style={{ padding: "10px 24px", background: module.color, border: "none", color: "#fff", fontWeight: 600, fontSize: 12, borderRadius: 7, cursor: "pointer", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
