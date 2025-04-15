// app/projects/[slug]/page.tsx
"use client";

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">Project: {slug}</h1>
      <p className="mt-4">
        Project description.
      </p>
    </div>
  );
}
