import Link from "next/link";
import { ProjectCard } from "./project-card";
import { ArrowRight } from "lucide-react";

const notableProjects = [
  {
    title: "White Blood Cell Classification challenge",
    description:
      "White blood cell classification from microscopic images (13 classes, 28.9k images). Classical ML pipeline (89 handcrafted features + GradientBoosting + SMOTE) and deep learning (ConvNeXt-Tiny, Focal Loss, MixUp/CutMix, TTA). IMA205 Challenge 2026.",
    tags: ["Python", "Computer Vision", "Machine Learning", "Deep Learning"],
    codeUrl: "https://github.com/theoplg/White-Blood-Cell-Classification",
    paper: "/reports/WBC-report.pdf",
  },
  {
    title: "Copy-Move Forgery Detection",
    description:
      "Implementation of the PatchMatch algorithm adapted for automatic Copy-Move forgery detection in images. Robust pipeline including median filtering, error map and RMSE verification.",
    tags: ["Python", "Computer Vision", "PatchMatch", "Image Processing"],
    codeUrl: "https://github.com/theoplg/copy-move-forgery",
    paper: "/reports/copy-move-report.pdf",
  },
  {
    title: "LLM-SSC",
    description:
      "Web application for automatic topic extraction from text corpora. Uses BERTopic, SentenceTransformers and unsupervised clustering techniques to analyze YouTube comments or rap lyrics.",
    tags: ["Python", "BERTopic", "Streamlit", "NLP", "Clustering"],
    codeUrl: "https://github.com/theoplg/llm-ssc",
    paper: null,
  },
];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
