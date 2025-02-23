import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/project-card";
import { type Project } from "@shared/schema";

export default function Portfolio() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-semibold mb-8 font-serif">Portfolio</h1>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-96 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
