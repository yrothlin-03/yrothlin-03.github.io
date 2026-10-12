import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  paper?: string | null;
}

export function ProjectCard({
  title,
  description,
  tags,
  codeUrl,
  paper,
}: ProjectCardProps) {
  return (
    <div className="group p-6 rounded-2xl border border-border bg-card hover:border-muted-foreground/30 transition-all duration-300">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
        {title}
      </h4>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center gap-4">
        {codeUrl && (
          <Link
            href={codeUrl}
            target="_blank"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={16} />
            Code
          </Link>
        )}
        {paper && (
          <Link
            href={paper}
            target="_blank"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText size={16} />
            Paper
          </Link>
        )}
      </div>
    </div>
  );
}
