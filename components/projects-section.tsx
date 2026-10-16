import Link from "next/link";
import { ProjectCard } from "./project-card";
import { ArrowRight } from "lucide-react";
import { allProjects } from "@/lib/projects-data";

const notableProjects = allProjects
  .filter((project) => project.notableRank !== undefined)
  .sort((first, second) => first.notableRank! - second.notableRank!);

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          02.
        </h2>
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold text-foreground">
            Notable Projects
          </h3>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div>
          {notableProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 flex md:hidden items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
