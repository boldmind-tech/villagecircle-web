export default function ProfilePage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A202C", marginBottom: 4 }}>My Profile</h1>
        <p style={{ fontSize: 14, color: "#6B7280" }}>Your public portfolio page on graduation.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Profile form */}
        <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px" }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1A202C", marginBottom: 18 }}>Basic Information</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: "Full Name", placeholder: "Your name", type: "text" },
              { label: "Location", placeholder: "Lagos, Nigeria", type: "text" },
              { label: "WhatsApp Number", placeholder: "+234 801 234 5678", type: "tel" },
            ].map((f) => (
              <div key={f.label}>
                <label style={{ fontSize: 11, fontWeight: 600, color: "#4B5563", display: "block", marginBottom: 5, letterSpacing: "0.1em", textTransform: "uppercase" }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #E7E5E4", borderRadius: 7, fontSize: 14, color: "#1A202C", outline: "none", fontFamily: "inherit" }} />
              </div>
            ))}
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: "#4B5563", display: "block", marginBottom: 5, letterSpacing: "0.1em", textTransform: "uppercase" }}>Short Bio</label>
              <textarea placeholder="Tell the circle who you are and what you are building..." rows={3}
                style={{ width: "100%", padding: "10px 12px", border: "1px solid #E7E5E4", borderRadius: 7, fontSize: 14, color: "#1A202C", outline: "none", resize: "vertical", fontFamily: "inherit" }} />
            </div>
            <button style={{ padding: "10px", background: "#2B4D87", border: "none", color: "#fff", fontWeight: 600, fontSize: 12, borderRadius: 7, cursor: "pointer", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Save Changes
            </button>
          </div>
        </div>

        {/* Portfolio preview */}
        <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px" }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1A202C", marginBottom: 8 }}>Portfolio Preview</h2>
          <p style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 20, lineHeight: 1.6 }}>
            Your portfolio page goes live on graduation day. It will show your project, bio, and the product you built.
          </p>
          <div style={{ background: "#F9FAFB", border: "1px dashed #E7E5E4", borderRadius: 8, padding: "20px", textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "#D1D5DB", fontStyle: "italic" }}>Portfolio previews activate after Week 8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
