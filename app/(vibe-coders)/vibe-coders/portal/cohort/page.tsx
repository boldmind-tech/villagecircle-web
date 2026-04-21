import { CURRENT_COHORT } from "@/lib/vibe-coders/cohort-config";

export default function CohortPage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A202C", marginBottom: 4 }}>Cohort</h1>
        <p style={{ fontSize: 14, color: "#6B7280" }}>{CURRENT_COHORT.name} · {CURRENT_COHORT.capacity} builders</p>
      </div>

      {/* Cohort stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14, marginBottom: 32 }}>
        {[
          { label: "Total Builders", value: CURRENT_COHORT.capacity },
          { label: "Active", value: CURRENT_COHORT.enrolledCount || CURRENT_COHORT.capacity },
          { label: "Products Shipped", value: 0 },
          { label: "Weeks Remaining", value: 24 },
        ].map((s) => (
          <div key={s.label} style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#2B4D87", marginBottom: 3 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Leaderboard placeholder */}
      <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px", marginBottom: 24 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1A202C", marginBottom: 16 }}>Cohort Leaderboard</h2>
        <p style={{ fontSize: 14, color: "#9CA3AF", fontStyle: "italic" }}>
          The leaderboard fills as builders ship deliverables. Week 1 just started — come back soon.
        </p>
      </div>

      {/* Members grid */}
      <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px" }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1A202C", marginBottom: 16 }}>Your Cohort</h2>
        <p style={{ fontSize: 14, color: "#9CA3AF", fontStyle: "italic" }}>
          Builder profiles appear here once enrollment is complete. You will see names, archetypes, and what everyone is building.
        </p>
      </div>
    </div>
  );
}
