import { AllProjectsCard } from "@/components/all-projects-card";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allProjects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            All Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive collection of my work in AI, Computer Vision, and
            Applied Mathematics.
          </p>
        </div>

        <div>
          {allProjects.map((project) => (
            <AllProjectsCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
