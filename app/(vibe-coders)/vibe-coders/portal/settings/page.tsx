export default function SettingsPage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A202C", marginBottom: 4 }}>Settings</h1>
        <p style={{ fontSize: 14, color: "#6B7280" }}>Payment, notifications, and account management.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Payment status */}
        <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px" }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1A202C", marginBottom: 16 }}>Payment & Subscription</h2>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #F3F4F6" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1A202C" }}>Cohort 1 Enrollment</div>
              <div style={{ fontSize: 12, color: "#9CA3AF" }}>Standard cohort access</div>
            </div>
            <span style={{ fontSize: 11, padding: "3px 10px", background: "#FEF3C7", color: "#92400E", borderRadius: 20, fontWeight: 600 }}>Pending Payment</span>
          </div>
          <div style={{ marginTop: 16 }}>
            <button style={{ padding: "10px 24px", background: "#2B4D87", border: "none", color: "#fff", fontWeight: 600, fontSize: 12, borderRadius: 7, cursor: "pointer", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Pay Now via Paystack
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px" }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1A202C", marginBottom: 16 }}>Notifications</h2>
          {[
            { label: "Weekly curriculum reminders", sub: "Every Monday 8:30 AM Lagos time" },
            { label: "Mentor session reminders", sub: "24 hours before your booking" },
            { label: "Cohort updates", sub: "When something important happens in your cohort" },
            { label: "VillageCircle daily drops", sub: "8:30 AM Lagos time, Monday–Friday" },
          ].map((n) => (
            <div key={n.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #F9FAFB" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1A202C" }}>{n.label}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>{n.sub}</div>
              </div>
              <div style={{ width: 36, height: 20, background: "#2B4D87", borderRadius: 999, cursor: "pointer", position: "relative" }}>
                <div style={{ width: 14, height: 14, background: "#fff", borderRadius: "50%", position: "absolute", top: 3, right: 3 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Account */}
        <div style={{ background: "#fff", border: "1px solid #E7E5E4", borderRadius: 12, padding: "24px" }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1A202C", marginBottom: 16 }}>Account</h2>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ padding: "9px 18px", border: "1px solid #E7E5E4", borderRadius: 7, background: "none", fontSize: 12, color: "#6B7280", cursor: "pointer" }}>Change Email</button>
            <button style={{ padding: "9px 18px", border: "1px solid #E7E5E4", borderRadius: 7, background: "none", fontSize: 12, color: "#6B7280", cursor: "pointer" }}>Change Password</button>
            <button style={{ padding: "9px 18px", border: "1px solid #FCA5A5", borderRadius: 7, background: "none", fontSize: 12, color: "#DC2626", cursor: "pointer" }}>Withdraw from Program</button>
          </div>
        </div>
      </div>
    </div>
  );
}
