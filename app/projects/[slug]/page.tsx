import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* Header */}
            <div className="mb-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase"
                  >
                    {tag}
                    {project.tags.indexOf(tag) < project.tags.length - 1 && (
                      <span className="text-muted-foreground ml-1">,</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {project.ongoing && (
                  <span className="text-muted-foreground">[Ongoing] </span>
                )}
                {project.title}
              </h1>

              {/* Date */}
              <p className="text-muted-foreground">{project.date}</p>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-10">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Abstract Section */}
            <section id="abstract" className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Abstract
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.abstract}
              </p>
            </section>

            {/* Meta Info */}
            <div className="border-t border-border pt-6 mb-10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <span className="font-semibold text-foreground min-w-[120px]">
                  Type
                </span>
                <span className="text-muted-foreground">{project.type}</span>
              </div>
              {project.publication && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <span className="font-semibold text-foreground min-w-[120px]">
                    Publication
                  </span>
                  <span className="text-muted-foreground">
                    {project.publication}
                  </span>
                </div>
              )}
            </div>

            {/* Additional Sections */}
            {project.sections?.map((section, index) => (
              <section
                key={index}
                id={section.title.toLowerCase().replace(/\s+/g, "-")}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
                {section.image && (
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mt-6">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                {section.images && section.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {section.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-video rounded-xl overflow-hidden bg-muted"
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${section.title} - ${imgIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Links */}
            {(project.codeUrl || project.paper) && (
              <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                {project.codeUrl && (
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity font-medium"
                  >
                    <ExternalLink size={16} />
                    View Code
                  </Link>
                )}
                {project.paper && (
                  <Link
                    href={project.paper}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
                  >
                    <FileText size={16} />
                    Read Report
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Sidebar - On this page */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                On this page
              </h3>
              <nav className="space-y-2">
                <a
                  href="#abstract"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Abstract
                </a>
                {project.sections?.map((section, index) => (
                  <a
                    key={index}
                    href={`#${section.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
