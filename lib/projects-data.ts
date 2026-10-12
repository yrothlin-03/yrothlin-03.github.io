export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  codeUrl?: string;
  paper?: string | null;
  ongoing?: boolean;
  // Detailed content for project page
  abstract: string;
  type: string;
  publication?: string;
  sections?: {
    title: string;
    content: string;
    image?: string;
    images?: string[];
  }[];
}

export const allProjects: Project[] = [
  {
    slug: "White-Blood-Cell-Classification",
    title: "White Blood Cell Classification Challenge",
    description:
      "White blood cell classification from microscopic images (13 classes, 28.9k images). Classical ML pipeline (89 handcrafted features + GradientBoosting + SMOTE) and deep learning (ConvNeXt-Tiny, Focal Loss, MixUp/CutMix, TTA). IMA205 Challenge 2026.",
    tags: [
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
      "Image Classification",
      "Medical Imaging",
    ],
    date: "2026",
    image: "/WCB.png",
    codeUrl: "https://github.com/theoplg/White-Blood-Cell-Classification",
    paper: "/reports/WBC-report.pdf",
    abstract:
      "Automatic classification of white blood cells from microscopic images is a major challenge for haematological diagnosis. This project addresses a 13-class classification problem from 28,901 training images with an extreme class imbalance (1183:1 ratio). We developed a classical ML pipeline based on 89 handcrafted features (morphological, colorimetric, textural) with dual cell/nucleus segmentation, then transitioned to deep learning with ConvNeXt-Tiny, Focal Loss, MixUp/CutMix, backbone freezing, and Test Time Augmentation. The iterative approach, guided by t-SNE embedding analysis and confusion matrix diagnostics, achieved a progression from 0.491 to 0.77 macro F1 on the Kaggle leaderboard. Ranked 20th out of 70+ students at Télécom Paris.",
    type: "Academic Project",
    publication: "Course Project - Image Processing (IMA205), April 2026",
    sections: [
      {
        title: "Classical ML: Handcrafted Features & Segmentation",
        content:
          "The first approach relies on a dual cell/nucleus segmentation using Otsu thresholding in CIELab colour space, followed by extraction of 89 handcrafted features spanning three categories: morphological (area, circularity, Hu moments, nucleus/cell ratio), colorimetric (RGB/HSV statistics per region: cell, nucleus, cytoplasm), and textural (GLCM properties over 4 angles + LBP histograms). Class imbalance is handled by SMOTE with k_neighbors=3 for ultra-rare classes and class_weight='balanced'. After GridSearchCV optimization, GradientBoosting achieves a macro F1 of 0.491. Confusion matrix analysis reveals that biologically similar classes (BNE/SNE, PLY/LY, MMY/MY/PMY) are systematically confused, highlighting the limits of handcrafted features for capturing fine morphological differences.",
        image: "/WCB/double_segm.png",
      },
      {
        title: "Deep Learning: From EfficientNet to ConvNeXt",
        content:
          "Transfer learning with EfficientNet-B3 pre-trained on ImageNet achieves 0.685 on the leaderboard, a +19 point jump over classical ML. However, t-SNE visualization of the embeddings reveals that rare classes (MMY, MY, PMY, PLY) form an indistinct central blob in feature space. This motivates the switch to ConvNeXt-Tiny with Focal Loss (gamma=2), which forces the network to focus on hard-to-classify examples. A CosineAnnealingWarmRestarts scheduler with T_0=15 over 60 epochs escapes local minima through periodic learning rate restarts, pushing the score to 0.747 with Test Time Augmentation (8 rounds, temperature scaling T=0.8).",
        images: ["/WCB/embed_eff.png", "/WCB/conv_tsne.png"],
      },
      {
        title: "Optimization: Diagnosing and Fixing Overfitting",
        content:
          "A paradoxical observation drove the final optimization phase: adding MixUp improved validation F1 from 0.696 to 0.730, but the Kaggle score dropped from 0.747 to 0.728. This diagnosed overfitting on the validation split itself. Successive fixes included: backbone freezing for 5 epochs to prevent noisy gradient destruction of ImageNet features, CutMix alongside MixUp (50/50) for spatial regularization, weight decay increase from 5e-4 to 1e-2, and recalibration of class weights from log-dampened to 1/sqrt(n) with Focal Loss gamma reduced from 2.0 to 1.0. Each change was motivated by a specific diagnostic — not trial and error — yielding a final score of 0.77.",
        image: "/WCB/confusion_DL1.png",
      },
      {
        title: "Results & Analysis",
        content:
          "The optimized model achieves high recalls on dominant classes (BA: 0.97, EO: 0.95, LY: 0.91, SNE: 0.88) while rare classes remain challenging: PLY (0.50, confused with LY), PC (0.40), PMY (0.24, confused with MY). These residual confusions are biologically coherent — PLY is a lymphocyte precursor morphologically near-identical to LY, and the granulocytic lineage (MMY/MY/PMY) represents successive maturation stages with gradual morphological boundaries. With only 11 training images for PLY, no method can compensate for the fundamental lack of diversity. Overall progression: 0.491 (ML) → 0.685 (EfficientNet) → 0.747 (ConvNeXt + TTA) → 0.77 (optimized), a +28.3 point gain.",
        images: [],
      },
    ],
  },
  {
    slug: "copy-move-forgery-detection",
    title: "Copy-Move Forgery Detection",
    description:
      "Implementation of the PatchMatch algorithm to detect Copy-Move forgeries in images. Robust pipeline including median filtering, error map and RMSE verification.",
    tags: ["Computer Vision", "Python", "Image Processing"],
    date: "Sep 2025",
    image: "/copy-moove.png",
    codeUrl: "https://github.com/theoplg/copy-move-forgery",
    paper: "/reports/copy-move-report.pdf",
    abstract:
      "Digital image manipulation has become increasingly common, with copy-move forgery being one of the most prevalent techniques where a region is copied and pasted elsewhere in the same image to hide or duplicate objects. This project implements an automatic detection system based on the PatchMatch algorithm, originally designed for structural image editing. By adapting this dense correspondence algorithm with spatial constraints and post-processing techniques, we created a robust pipeline capable of detecting copy-move forgeries while maintaining resilience against common image alterations such as blur, noise, and JPEG compression.",
    type: "Academic Project",
    publication: "Course Project - Computer Vision (IM01), November 2025",
    sections: [
      {
        title: "The PatchMatch Algorithm",
        content:
          "PatchMatch efficiently computes a Nearest-Neighbor Field (NNF) by exploiting local image coherence. The algorithm operates through three key phases: (1) Random initialization assigns random correspondences between patches; (2) Propagation exploits spatial coherence by testing if neighboring offsets improve the current match, using both forward and backward passes; (3) Random search escapes local minima by testing candidates in exponentially decreasing concentric neighborhoods. For copy-move detection, we introduced a 'forbidden zone' constraint that prevents patches from matching to themselves, forcing the algorithm to find duplicated regions elsewhere in the image.",
        image: "/copy-move/patchmatch-phases.png",
      },
      {
        title: "Detection Pipeline",
        content:
          "The raw displacement field from PatchMatch requires extensive post-processing to produce reliable binary detection masks. Our pipeline includes: (1) Median filtering on displacement components to remove isolated outliers while preserving boundaries; (2) Error map computation measuring local variance of displacement vectors—copied regions exhibit near-zero variance while natural homogeneous areas show high variance; (3) Global frequency filtering to keep only displacement vectors shared by many pixels (typically >1000); (4) RMSE verification between matched patches to eliminate false positives; (5) Morphological operations including size filtering and dilation to produce clean detection masks.",
      },
      {
        title: "Results & Robustness",
        content:
          "The system successfully detects copy-move forgeries in various scenarios, performing particularly well on simple translations with textured objects. The algorithm demonstrates remarkable robustness: (1) Blur resistance—PatchMatch compares neighborhoods rather than individual pixels, so low-frequency structures remain detectable; (2) Noise tolerance—median filtering effectively handles impulse noise, and the method remains functional with Gaussian noise and JPEG compression artifacts; (3) Parameter sensitivity—the forbidden zone radius must be carefully tuned based on image characteristics (larger for homogeneous areas, smaller for detailed images). Key limitations include difficulty with uniform regions (sky, grass) that exhibit natural self-similarity, inability to handle rotation/scaling without invariant descriptors, and challenges with inpainting where copied patches originate from multiple dispersed locations.",
        images: [
          "/copy-move/results-comparison.png",
          "/copy-move/robustness-examples.png",
          "/copy-move/inpainting-examples.png",
        ],
      },
    ],
  },
  {
    slug: "llm-ssc",
    title: "LLM-SSC",
    description:
      "Web application for automatic topic extraction from text corpora. Uses BERTopic, SentenceTransformers and unsupervised clustering techniques to analyze YouTube comments or rap lyrics.",
    tags: ["NLP", "Python", "BERTopic"],
    date: "Feb - Jun 2025",
    image: "/nlp-topic-extraction-visualization-with-clusters.jpg",
    codeUrl: "https://github.com/theoplg/llm-ssc",
    abstract:
      "This project presents a web application designed for automatic topic extraction from large text corpora. The system leverages BERTopic, a state-of-the-art topic modeling technique that combines transformer-based embeddings with clustering algorithms. By utilizing SentenceTransformers for semantic text representation and unsupervised clustering techniques such as HDBSCAN, the application can identify coherent topics from diverse text sources including YouTube comments and rap lyrics. The pipeline includes preprocessing steps for text normalization, embedding generation, dimensionality reduction via UMAP, and final topic assignment with interpretable labels.",
    type: "Academic Project",
    sections: [
      {
        title: "Technical Overview",
        content:
          "The application is built with a Python backend using FastAPI for the REST API and Streamlit for the interactive web interface. BERTopic is used as the core topic modeling library, which internally uses SentenceTransformers (all-MiniLM-L6-v2) for generating document embeddings. UMAP reduces the high-dimensional embeddings to a lower-dimensional space, and HDBSCAN performs density-based clustering to identify topics. The system also generates word clouds and interactive visualizations for topic exploration.",
      },
      {
        title: "Results and Applications",
        content:
          "The tool has been successfully applied to analyze sentiment and themes in YouTube comment sections, as well as to extract recurring motifs and subjects in French rap lyrics corpora. The extracted topics provide meaningful insights into public opinion and artistic themes, demonstrating the versatility of the approach across different domains and languages.",
      },
    ],
  },
  {
    slug: "spinning-ball-spiral",
    title: "spinning-ball-spiral",
    description:
      "This project investigates the aerodynamics of spinning spherical projectiles, inspired by the legendary perfect free-kick scored by Roberto Carlos in 1997.",
    tags: ["Physics Simulation", "Python", "Matplotlib"],
    date: "2023 - 2024",
    image: "/soccer-ball-trajectory-physics-simulation.jpg",
    codeUrl: "https://github.com/theoplg/spinning-ball-spiral",
    paper: "/reports/spinning-report.pdf",
    abstract:
      "This project presents a comprehensive physics simulation investigating the aerodynamics of spinning spherical projectiles, with particular focus on the Magnus effect. Inspired by Roberto Carlos's legendary free-kick goal in 1997, where the ball curved dramatically in flight, we develop a mathematical model that captures the complex interplay between drag forces, lift forces, and the Magnus effect. The simulation allows for exploration of how spin rate, initial velocity, and environmental conditions affect the trajectory of a spinning ball.",
    type: "Academic Project",
    publication: "Course Project - Applied Mathematics, Fall 2024",
    sections: [
      {
        title: "Physical Model",
        content:
          "The simulation models three main forces acting on a spinning ball: gravitational force, aerodynamic drag (proportional to velocity squared), and the Magnus force (perpendicular to both velocity and angular velocity vectors). The equations of motion are solved using numerical integration methods (Runge-Kutta 4th order) to compute the ball's trajectory over time. Parameters such as ball mass, radius, drag coefficient, and spin decay are configurable.",
      },
      {
        title: "Visualization and Analysis",
        content:
          "Using Matplotlib, the project generates 3D trajectory visualizations and 2D projections showing the ball's path from different angles. Analysis reveals how varying spin rates produce different curvature patterns, explaining phenomena observed in football, tennis, and baseball. The Roberto Carlos kick is recreated by setting appropriate initial conditions, demonstrating that the extreme curve was indeed physically achievable.",
      },
    ],
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
    abstract:
      "This project is a comprehensive TypeScript learning repository that compiles various practical works (TPs) and a final project undertaken during a TypeScript course. The repository serves as a portfolio of TypeScript skills, showcasing interactive web applications, demonstrations of TypeScript features, and best practices in modern web development. Each TP focuses on different aspects of TypeScript, including type safety, interfaces, classes, generics, and integration with popular frameworks.",
    type: "Academic Project",
    publication: "Course Project - TypeScript Development, January 2025",
    sections: [
      {
        title: "Practical Works Overview",
        content:
          "The repository includes multiple TPs that progressively build TypeScript proficiency. Early TPs cover fundamental concepts such as types, interfaces, and functions, while later TPs delve into advanced topics like generics, decorators, and asynchronous programming. Each TP includes well-documented code examples and explanations to illustrate key concepts.",
      },
      {
        title: "Final Project",
        content:
          "The final project is a web application developed using TypeScript and React. It features a user-friendly interface, state management with Redux, and integration with RESTful APIs. The application demonstrates the practical application of TypeScript in building scalable and maintainable web applications, highlighting the benefits of static typing and modern development practices.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return allProjects.map((p) => p.slug);
}
