import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A202C", marginBottom: 4 }}>My Project</h1>
          <p style={{ fontSize: 14, color: "#6B7280" }}>Your real product. This is what the 6 months are for.</p>
        </div>
        <Link href="/vibe-coders/portal/projects/new" style={{ padding: "9px 18px", background: "#2B4D87", color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: 7 }}>
          + New Project
        </Link>
      </div>

      {/* Empty state */}
      <div style={{ background: "#fff", border: "2px dashed #E7E5E4", borderRadius: 16, padding: "60px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🔨</div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1A202C", marginBottom: 8 }}>Your project starts in Week 3</h2>
        <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, maxWidth: 440, margin: "0 auto 28px" }}>
          Once you have your landing page from Week 2 ready, you will define your real product here. Complete the first two weeks of curriculum before creating your project.
        </p>
        <Link href="/vibe-coders/portal/curriculum" style={{ padding: "10px 24px", background: "#2B4D87", color: "#fff", fontSize: 12, fontWeight: 600, borderRadius: 7, textDecoration: "none" }}>
          Go to Week 1 →
        </Link>
      </div>
    </div>
  );
}
