import { AllProjectsCard } from "@/components/all-projects-card";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const allProjects = [
  {
    slug: "White-Blood-Cell-Classification ",
    title: "White Blood Cell Classification challenge",
    description:
      "White blood cell classification from microscopic images (13 classes, 28.9k images). Classical ML pipeline (89 handcrafted features + GradientBoosting) and deep learning (ConvNeXt-Tiny, Focal Loss, MixUp/CutMix, TTA). IMA205 Challenge 2026.",
    tags: [
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
      "Image Classification",
    ],
    date: "2026",
    image: "/WCB.png",
    codeUrl: "https://github.com/theoplg/White-Blood-Cell-Classification",
    paper: "/reports/WBC-report.pdf",
  },
  {
    slug: "copy-move-forgery-detection",
    title: "Copy-Move Forgery Detection",
    description:
      "Implementation of the PatchMatch algorithm adapted for automatic Copy-Move forgery detection in images. Robust pipeline including median filtering, error map and RMSE verification.",
    tags: ["Computer Vision", "Python", "Image Processing"],
    date: "Sep 2025",
    image: "/copy-moove.png",
    codeUrl: "https://github.com/theoplg/copy-move-forgery",
    paper: "/reports/copy-move-report.pdf",
  },
  {
    slug: "llm-ssc",
    title: "LLM-SSC",
    description:
      "Web application for automatic topic extraction from text corpora. Uses BERTopic, SentenceTransformers and unsupervised clustering techniques to analyze YouTube comments or rap lyrics.",
    tags: ["NLP", "Python", "BERTopic"],
    date: "May 2025",
    image: "/nlp-topic-extraction-visualization-with-clusters.jpg",
    codeUrl: "https://github.com/theoplg/llm-ssc",
    paper: null,
  },
  {
    slug: "typescript-display",
    title: "Typescript display",
    description:
      "A comprehensive TypeScript learning project showcasing various practical works (TPs) and a final project. This repository serves as a portfolio of TypeScript skills, featuring interactive web applications and demonstrations.",
    tags: ["TypeScript", "Web Development"],
    date: "Jan 2025",
    image: "/typescript.webp",
    codeUrl: "https://github.com/theoplg/typescript-display",
    paper: null,
  },
  {
    slug: "spinning-ball-spiral",
    title: "spinning-ball-spiral",
    description:
      "This project investigates the aerodynamics of spinning spherical projectiles, inspired by the legendary perfect free-kick scored by Roberto Carlos in 1997.",
    tags: ["Physics Simulation", "Python", "Matplotlib"],
    date: "2023 - 2024",
    image: "/coup-franc.PNG",
    codeUrl: "https://github.com/theoplg/spinning-ball-spiral",
    paper: "/reports/spinning-report.pdf",
  },
  {
    slug: "blur-estimation",
    title: "Blur Estimation",
    description:
      "This project focuses on the restoration of blurred images using various deblurring techniques and deep learning approaches.",
    tags: ["Computer Vision", "Python", "Image Processing"],
    date: "2023 - 2024",
    image: "/blur-illustration.PNG",
    codeUrl: "https://github.com/yrothlin-03/proj_IM01",
    paper: "/reports/blur_demo.pdf",
  },
  {
    slug: "rag",
    title: "RAG ( Retrieval Augmented Generation )",
    description:
      "This project is a workshop for Telecom AI and focuses on implementing Retrieval Augmented Generation techniques.",
    tags: ["NLP", "Python", "Machine Learning"],
    date: "2023 - 2024",
    image: "/blur-illustration.PNG",
    codeUrl: "https://github.com/yrothlin-03/RAG_WORKSHOP",
    paper: "/reports/blur-report.pdf",
  },
  {
    slug: "EEG-foundation-models",
    title: "EEG Foundation Models",
    description:
      "This research project explores the application of foundation models to electroencephalography (EEG) data for brain-computer interfaces and cognitive neuroscience.",
    tags: ["NLP", "Python", "Machine Learning"],
    date: "2023 - 2024",
    image: "/blur-illustration.PNG",
    codeUrl: "https://github.com/yrothlin-03/RECH202",
    paper: "/reports/blur-report.pdf",
  },
];

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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
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
