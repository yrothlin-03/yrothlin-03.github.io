"use client";

import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface AllProjectsCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  codeUrl?: string;
  paper?: string | null;
  ongoing?: boolean;
}

export function AllProjectsCard({
  slug,
  title,
  description,
  tags,
  date,
  image,
  codeUrl,
  paper,
  ongoing,
}: AllProjectsCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group flex flex-col cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase"
          >
            {tag}
            {tags.indexOf(tag) < tags.length - 1 && (
              <span className="text-muted-foreground ml-1">,</span>
            )}
          </span>
        ))}
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        {codeUrl && (
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(codeUrl, "_blank");
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={16} />
          </span>
        )}
        {paper && (
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(paper, "_blank");
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText size={16} />
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-2 line-clamp-3">
        {ongoing && <span className="font-medium">[Ongoing Project] </span>}
        {description}
      </p>

      {/* Date */}
      <p className="text-sm text-muted-foreground">{date}</p>
    </Link>
  );
}
