import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText, Presentation } from "lucide-react";

interface ProjectListItemProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  imageSize?: "small";
  codeUrl?: string;
  paper?: string | null;
  slides?: string | null;
  ongoing?: boolean;
}

export function ProjectListItem({
  slug,
  title,
  description,
  tags,
  date,
  image,
  imageSize,
  codeUrl,
  paper,
  slides,
  ongoing,
}: ProjectListItemProps) {
  return (
    <article className="grid gap-6 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[minmax(15rem,19rem)_1fr] md:gap-10 md:py-9">
      <Link
        href={`/projects/${slug}`}
        className="group/image relative aspect-[5/3] overflow-hidden rounded-xl border border-border bg-card"
        aria-label={`View ${title}`}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          fill
          sizes="(min-width: 768px) 304px, 100vw"
          className={`object-contain transition-transform duration-300 group-hover/image:scale-[1.03] ${
            imageSize === "small" ? "p-7 md:p-10" : "p-3"
          }`}
        />
      </Link>

      <div className="flex min-w-0 flex-col items-start">
        <Link href={`/projects/${slug}`} className="group/title">
          <h3 className="text-2xl font-bold leading-tight text-foreground transition-colors group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400 md:text-3xl">
            {title}
          </h3>
        </Link>

        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
          {ongoing && <span className="font-medium">[Ongoing project] </span>}
          {description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-blue-50 px-3 py-1.5 text-sm font-semibold tracking-wide text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            {date}
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {(paper || codeUrl || slides) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {paper && (
              <a
                href={paper}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <FileText size={16} />
                Paper
              </a>
            )}
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <ExternalLink size={16} />
                Code
              </a>
            )}
            {slides && (
              <a
                href={slides}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Presentation size={16} />
                Slides
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
