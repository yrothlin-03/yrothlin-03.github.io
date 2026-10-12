import { Footer } from "@/components/footer";
import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Mathematics",
    description:
      "Probability notes and preparation resources.",
    documents: [
      {
        title: "Denombrements et tribus",
        href: "/prepa/proba/Dénombrements et tribus.pdf",
      },
      {
        title: "Esperance et variance",
        href: "/prepa/proba/Espérance et variance.pdf",
      },
      {
        title: "Familles sommables",
        href: "/prepa/proba/Familles sommables.pdf",
      },
      {
        title: "Probabilites",
        href: "/prepa/proba/Probabilités.pdf",
      },
      {
        title: "Variables aleatoires",
        href: "/prepa/proba/Variables aléatoires.pdf",
      },
    ],
  },
  {
    title: "Physics",
    description:
      "Add course material, problem sets, useful links, or personal explanations here.",
  },
  {
    title: "Computer Science",
    description:
      "Add algorithms, projects, code snippets, or revision material here.",
  },
];

export default function PrepaPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Prepa</h1>
          <p className="text-muted-foreground max-w-2xl">
            A space for preparation resources, notes, exercises, and useful
            content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border border-border rounded-xl p-6 hover:bg-muted/40 transition-colors"
            >
              <h2 className="text-xl font-bold text-foreground mb-3">
                {section.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>
              {section.documents && (
                <div className="mt-5 space-y-3">
                  {section.documents.map((document) => (
                    <Link
                      key={document.href}
                      href={document.href}
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FileText size={16} className="shrink-0" />
                      <span>{document.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
