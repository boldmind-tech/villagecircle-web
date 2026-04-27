export default function MentorsPage() {
  const mentors = [
    { name: "Charles Uche Chijuka", role: "Lead Mentor · Full-Stack + AI", bio: "Founder of BoldMind. Building African-first AI tools. 10+ years product and engineering.", availability: "By appointment", type: "Lead" },
    { name: "Community Mentor", role: "Product & Business", bio: "Mentor slots open to practitioners who want to give back to Nigerian builders.", availability: "Open slot", type: "Open" },
  ];

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A202C", marginBottom: 4 }}>Mentors</h1>
        <p style={{ fontSize: 14, color: "#6B7280" }}>Book a 1-on-1 session. Premium members get priority.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
        {mentors.map((m) => (
          <div key={m.name} style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "22px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#2B4D8715", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#2B4D87", fontWeight: 700 }}>
                {m.name.charAt(0)}
              </div>
              <span style={{ fontSize: 10, padding: "2px 8px", background: m.type === "Lead" ? "#2B4D8715" : "#E7E5E4", color: m.type === "Lead" ? "#2B4D87" : "#6B7280", borderRadius: 20, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {m.type}
              </span>
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1A202C", marginBottom: 3 }}>{m.name}</h3>
            <p style={{ fontSize: 12, color: "#2B4D87", marginBottom: 8, fontWeight: 500 }}>{m.role}</p>
            <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, marginBottom: 16 }}>{m.bio}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#9CA3AF" }}>{m.availability}</span>
              <button style={{ padding: "7px 14px", background: "#2B4D87", border: "none", color: "#fff", fontSize: 11, fontWeight: 600, borderRadius: 6, cursor: "pointer", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Book
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, padding: "20px 24px", background: "#FFF7ED", border: "1px solid #FED7AA", borderRadius: 10 }}>
        <p style={{ fontSize: 13, color: "#92400E" }}>
          <strong>Premium members</strong> get 2 guaranteed 1-on-1 sessions per month. Standard cohort members can book available slots. <a href="/vibe-coders/pricing" style={{ color: "#C9922A", textDecoration: "none", fontWeight: 600 }}>Upgrade to Premium →</a>
        </p>
      </div>
    </div>
  );
}
