import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectDetailPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  if (!projectId) return notFound();

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Link href="/vibe-coders/portal/projects" style={{ fontSize: 12, color: "#6B7280", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase" }}>← Projects</Link>
      </div>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A202C", marginBottom: 4 }}>Project: {projectId}</h1>
      <p style={{ fontSize: 14, color: "#9CA3AF" }}>Project details, submissions, and build log will appear here.</p>
    </div>
  );
}
