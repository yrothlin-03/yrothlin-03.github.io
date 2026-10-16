export interface Project {
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
  notable?: boolean;
  notableRank?: number;
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
    slug: "medvae-x",
    title: "MedVAE-X",
    description:
      "A study evaluating MedVAE, a generic medical image autoencoder, on out-of-distribution coronary angiography. Explores robustness, FiLM quality-conditioning, JEPA self-supervised adaptation, and latent-space segmentation.",
    tags: [
      "Deep Learning",
      "Medical Imaging",
      "Computer Vision",
      "Self-Supervised Learning",
      "PyTorch",
    ],
    date: "2026",
    notableRank: 4,
    image: "/medvae-x/pipeline-robustness.jpg",
    codeUrl: "https://github.com/yrothlin-03/MEDVAE-X",
    paper: "/medvae-x/report.pdf",
    slides: "/medvae-x/slides.pdf",
    abstract:
      "MedVAE-X investigates how far a generic medical image compressor can be trusted, adapted, and reused on an out-of-distribution modality. MedVAE, a variational autoencoder trained on chest X-rays and mammographies, is evaluated on coronary angiography — a structurally distinct domain. The study is organized around four research axes: robustness to input corruptions, quality-aware reconstruction via FiLM conditioning, self-supervised latent adaptation with a Joint-Embedding Predictive Architecture (JEPA), and the use of latent representations for 26-class coronary vessel segmentation. We conclude that MedVAE produces a faithful, pixel-space–reusable code, but its latent is not yet semantically organized nor acquisition-aware enough to be segmented or conditioned directly.",
    type: "Academic Project",
    publication: "Course Project - Medical Image Analysis (IM06), Télécom Paris, 2026",
    sections: [
      {
        title: "Axis A: Robustness to Input Corruption",
        content:
          "We measure how MedVAE's reconstruction quality degrades when inputs are corrupted by Gaussian blur, Poisson noise, and JPEG compression, using vessel-masked PSNR on the ARCADE coronary angiography dataset. Gaussian blur shows a strong anti-correlation with reconstruction fidelity, Poisson noise reveals partial denoising capabilities of the autoencoder, and JPEG compression produces a non-monotonic degradation pattern. These experiments establish how a compressor trained on a different modality behaves under realistic acquisition artifacts.",
        image: "/medvae-x/pipeline-robustness.jpg",
      },
      {
        title: "Axis B: FiLM Quality Conditioning",
        content:
          "To make the model acquisition-aware, we inject per-image acquisition-quality scores through FiLM (Feature-wise Linear Modulation) layers, enabling quality-conditioned reconstruction. While the conditioning signal is genuinely exploited by the network, it slightly degrades overall reconstruction quality, suggesting that the bottleneck latent does not readily accommodate explicit quality information without trade-offs.",
        image: "/medvae-x/pipeline-film.png",
      },
      {
        title: "Axis C: JEPA Self-Supervised Adaptation",
        content:
          "We replace BioMedCLIP supervision with self-supervised Joint-Embedding Predictive Architecture (JEPA) learning on MedMNIST data, following I-JEPA design patterns. The adapted latents become more compact and discriminative under linear probing, but this comes at a reconstruction trade-off, illustrating the tension between semantically organized representations and pixel-faithful compression.",
        image: "/medvae-x/pipeline-jepa.png",
      },
      {
        title: "Axis D: Latent-Space Segmentation",
        content:
          "Finally, we test whether MedVAE's latent code can drive 26-class coronary vessel segmentation across four conditions with varying architectural constraints, using segmentation_models.pytorch. Direct dense prediction from the single-channel latent remains unsuitable, confirming that the compressed representation, while pixel-space reusable, is not yet semantically structured enough for downstream dense tasks.",
        images: [
          "/medvae-x/condition-a.png",
          "/medvae-x/condition-b.png",
          "/medvae-x/condition-c.png",
          "/medvae-x/condition-d.png",
        ],
      },
    ],
  },
  {
    slug: "White-Blood-Cell-Classification",
    title: "White Blood Cell Classification Challenge",
    description:
      "Automatic classification of 13 white blood cell types from microscopic images, combining segmentation, handcrafted features, transfer learning, and supervised contrastive learning. Ranked first on the public leaderboard of the Télécom Paris IM05 challenge.",
    tags: [
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
      "Image Classification",
      "Medical Imaging",
    ],
    date: "2025 – 2026",
    image: "/wbc-classification/pipeline.png",
    codeUrl: "https://github.com/yrothlin-03/WBC_Classification",
    paper: "/wbc-classification/report.pdf",
    abstract:
      "Automatic white blood cell classification supports haematological diagnosis but is complicated by severe class imbalance, visual variability, and morphologically similar cell types. This project tackles a 13-class challenge through cell segmentation and handcrafted descriptors, then transfer learning with modern CNN backbones, imbalance-aware training, augmentation, test-time augmentation, and supervised contrastive pretraining. The resulting system ranked first on the public leaderboard of the Télécom Paris IM05 challenge.",
    type: "Academic Project",
    publication: "IM05 White Blood Cell Classification Challenge — Télécom Paris, 2025–2026",
    sections: [
      {
        title: "Classical ML: Handcrafted Features & Segmentation",
        content:
          "The classical pipeline first segments the nucleus and cell using HSV cues, morphological operations, and GrabCut refinement. It extracts morphological, colour, intensity, texture, wavelet, and Haralick descriptors, then uses L1-regularized feature selection to reduce the representation. XGBoost with SMOTE gives the strongest classical baseline, while confusion patterns between close subclasses motivate deep learning.",
        image: "/wbc-classification/segmentation-mask.png",
      },
      {
        title: "Deep Learning: From EfficientNet to ConvNeXt",
        content:
          "ImageNet-pretrained CNN backbones are fine-tuned with strong geometric and colour augmentations, Focal Loss, class-balanced sampling, MixUp/CutMix, cosine scheduling, and test-time augmentation. EfficientNet and ConvNeXt consistently outperform pure vision transformers on this limited dataset, while head-design ablations show that the best classifier depends on the backbone latent geometry.",
        images: [
          "/wbc-classification/confusion-matrix.png",
          "/wbc-classification/tsne-deep.png",
        ],
      },
      {
        title: "Supervised Contrastive Pretraining",
        content:
          "Before fine-tuning, a supervised contrastive objective is used to draw embeddings from the same class together and push distinct classes apart. It improves the visual separation of latent clusters, but did not improve final classification in this setup, illustrating the sensitivity of contrastive learning to batch composition and morphology-preserving augmentations for rare classes.",
        image: "/wbc-classification/contrastive-tsne.png",
      },
      {
        title: "Results & Analysis",
        content:
          "The experiments show that class imbalance and intrinsically similar morphological subtypes remain the central difficulty. Robustness checks across training seeds, cross-validation folds, backbones, heads, and sampling strategies guide model selection, while the full report documents the resulting leaderboard system and the alternatives that were explored but not retained.",
      },
    ],
  },
  {
    slug: "motion-deblurring",
    title: "Motion Deblurring",
    description:
      "Blind motion deblurring from scratch: blur-kernel estimation from spectral irregularities, Total Variation deconvolution with Split-Bregman, and comparison with modern deep learning methods.",
    tags: [
      "Image Processing",
      "Computer Vision",
      "Python",
      "Inverse Problems",
      "Deep Learning",
    ],
    date: "Nov 2025",
    notableRank: 3,
    image: "/motion-deblurring/demo-deblur2.png",
    codeUrl: "https://github.com/yrothlin-03/Motion_Deblurring",
    paper: "/motion-deblurring/report.pdf",
    slides: "/motion-deblurring/slides.pdf",
    abstract:
      "This project addresses blind motion deblurring, where both the sharp image and the unknown motion blur kernel must be recovered from a single degraded observation. We implemented the complete classical pipeline in Python: kernel estimation from spectral irregularities following Goldstein and Fattal, followed by Total Variation deconvolution solved with Split-Bregman. The implementation is evaluated across noise levels, boundary conditions, kernel sizes, JPEG compression, and real images, then compared with FFTformer and EVSSM deep learning models.",
    type: "Academic Project",
    publication: "Image Restoration by Inverse Problem with Kernel Estimation — CSC_4IM01_TP, Télécom Paris, November 2025",
    sections: [
      {
        title: "Blind Kernel Estimation",
        content:
          "The motion kernel is estimated directly from the blurred image by analysing the spectral irregularities of its gradients. The pipeline combines shear projections, one-dimensional autocorrelations, intrinsic-blur deconvolution, support estimation, phase retrieval, and iterative refinement. Every component was implemented from scratch using NumPy and SciPy primitives.",
        image: "/motion-deblurring/demo-deblur2.png",
      },
      {
        title: "Total Variation Deconvolution",
        content:
          "Once the blur kernel is estimated, the sharp image is recovered by minimizing a Total Variation objective with a Split-Bregman solver. Circular Fourier-domain boundary conditions are compared with a symmetric extension and Tukey tapering approach to reduce border artefacts.",
        image: "/motion-deblurring/circular-vs-symmetric.png",
      },
      {
        title: "Robustness and Modern Baselines",
        content:
          "The experiments study sensitivity to the regularization and Bregman parameters, additive Gaussian noise, compression, kernel size, and real blurred photographs. The classical pipeline is also compared with pre-trained FFTformer and EVSSM deblurring models.",
        images: [
          "/motion-deblurring/hyperparameter-tuning.png",
          "/motion-deblurring/real-deblurring.png",
        ],
      },
    ],
  },
  {
    slug: "eeg-foundation-model",
    title: "EEG Foundation Models: Benchmark and Representation Analysis",
    description:
      "Cross-subject benchmarking of eight pretrained EEG encoders, latent-space analysis, and a proposed hierarchical LeJEPA encoder for multivariate EEG time series.",
    tags: [
      "Deep Learning",
      "EEG",
      "Time Series",
      "Self-Supervised Learning",
      "Mamba",
      "PyTorch",
    ],
    date: "Jul – Sep 2026",
    notableRank: 1,
    image: "/eeg-foundation-model/model-pipeline.png",
    codeUrl: "https://github.com/yrothlin-03/EEG_FoundationModel",
    paper: "/eeg-foundation-model/report.pdf",
    abstract:
      "This research internship studies how much task-relevant physiology EEG foundation models preserve and how well their representations transfer across subjects. Eight pretrained encoders are benchmarked against EEGNet on BCI Competition IV-2a, with additional representation analyses based on linear probing, t-SNE, PCA, and cosine similarity. The project also proposes a hierarchical EEG encoder combining channel-wise tokenization, geometry-aware spatial mixing, bidirectional Mamba2 temporal processing, and a LeJEPA joint-embedding objective.",
    type: "Research Internship",
    publication: "Télécom Paris — Research internship, 2026",
    sections: [
      {
        title: "Cross-Subject EEG Benchmark",
        content:
          "The benchmark compares CBraMod, EEGMamba, CSBrain, LuMamba, LUNA, LaBraM, EEGPT, and REVE against an end-to-end EEGNet baseline. It evaluates frozen pretrained representations on motor-imagery decoding while controlling subject splits, readout heads, and channel-montage handling. The experiments highlight how pooling, adaptation, and channel mapping can substantially affect apparent transfer performance.",
        image: "/eeg-foundation-model/model-pipeline.png",
      },
      {
        title: "Latent Representation Analysis",
        content:
          "The project examines whether latent geometry encodes motor-imagery classes or subject-specific structure. t-SNE, PCA, and cosine-similarity analyses on REVE embeddings reveal pronounced subject organization and weak pooled class contrast, motivating careful physiological validation and controls against subject-dependent shortcuts.",
        images: [
          "/eeg-foundation-model/tsne-subject-vs-class.png",
          "/eeg-foundation-model/cosine-similarity.png",
        ],
      },
      {
        title: "Proposed Hierarchical LeJEPA Encoder",
        content:
          "A research-direction encoder combines channel-wise patch tokenization, hierarchical spatial attention informed by electrode geometry, bidirectional Mamba2 temporal processing, and a learned-query global readout. Its self-supervised training aligns global and local EEG views with a non-contrastive LeJEPA objective and SIGReg regularization. The training did not converge within the internship timeframe, so this architecture remains a direction for controlled future evaluation.",
        image: "/eeg-foundation-model/training-pipeline.png",
      },
    ],
  },
  {
    slug: "eeg-rqvae",
    title: "EEG-RQVAE: Discrete EEG Foundation Model",
    description:
      "Residual-quantized variational autoencoder for self-supervised EEG representation learning, combining denoising reconstruction, latent JEPA adaptation, and a Mamba backbone.",
    tags: [
      "Deep Learning",
      "EEG",
      "Self-Supervised Learning",
      "Mamba",
      "PyTorch",
    ],
    date: "2026",
    notableRank: 2,
    image: "/eeg-rqvae/architecture.png",
    codeUrl: "https://github.com/yrothlin-03/EEG-RQVAE",
    paper: "/eeg-rqvae/report.pdf",
    abstract:
      "EEG-RQVAE is a foundation model for multichannel EEG that learns discrete, hierarchical token sequences through residual vector quantization. Its two-stage training first combines denoising reconstruction, spectral matching, vector-quantization commitment, and adversarial losses, then freezes the decoder and codebook for a JEPA-style latent-prediction stage. A subject-independent linear-probing benchmark across twelve BCI datasets shows that the frozen RVQ-Mamba encoder is the most consistent evaluated variant, with strong results on motor imagery, emotion recognition, pathology detection, and sleep staging.",
    type: "Research Project",
    publication: "Manuscript under review, 2026",
    sections: [
      {
        title: "Residual-Quantized EEG Autoencoder",
        content:
          "Raw EEG windows are processed by a channel adaptor and a spatio-temporal backbone, then compressed into a latent sequence discretized across multiple residual vector-quantization stages. The resulting hierarchical tokens can support both generative reconstruction and discriminative downstream tasks. Bidirectional Mamba blocks offer linear-time modelling of long multichannel recordings, with CrissCross-attention variants used for comparison.",
        image: "/eeg-rqvae/architecture.png",
      },
      {
        title: "Two-Stage Self-Supervised Pretraining",
        content:
          "Stage 1 learns robust representations by reconstructing clean targets from independently corrupted EEG windows, using time-domain, multi-scale spectral, quantization, and adversarial objectives. In Stage 2, the decoder and codebook are frozen while a JEPA objective predicts masked latent blocks from visible context using an EMA target encoder, shifting the representation toward semantic structure without signal-level reconstruction pressure.",
        image: "/eeg-rqvae/pipeline.png",
      },
      {
        title: "Subject-Independent Evaluation and Analysis",
        content:
          "A unified linear-probing protocol evaluates frozen encoders on twelve datasets and handles heterogeneous montages through learned raw-channel adaptation or 10–20 mapping. RVQ-Mamba is best or second-best on every reported benchmark task. Reconstruction, power-spectral-density, and temporal-consistency analyses show that Stage 1 preserves signal fidelity, while latent JEPA is the component that improves semantic neighbourhood structure.",
        images: [
          "/eeg-rqvae/reconstruction-comparison.png",
          "/eeg-rqvae/psd-comparison.png",
          "/eeg-rqvae/temporal-consistency.png",
        ],
      },
    ],
  },
  {
    slug: "mathematics-physics-cpge",
    title: "Maths and Physics in CPGE",
    description:
      "Individual tutoring and mock oral examinations in mathematics and physics for French preparatory-class students.",
    tags: ["Mathematics", "Physics", "Teaching", "CPGE"],
    date: "Sep 2024 – Present",
    image: "/mathematics-physics-cpge/logo.png",
    imageSize: "small",
    notable: false,
    abstract:
      "This ongoing teaching project consists of supporting French preparatory-class students in mathematics and physics. Sessions combine tailored problem solving, conceptual clarification, exam preparation, and mock oral examinations modelled on competitive entrance examinations.",
    type: "Teaching Experience",
    publication: "Independent tutoring — Strasbourg, France",
    sections: [
      {
        title: "Mathematics and Physics Tutoring",
        content:
          "Individual sessions are adapted to each student's objectives and level. They focus on rigorous reasoning, problem-solving methods, and the connections between mathematical tools and physical modelling.",
      },
      {
        title: "Mock Oral Examinations",
        content:
          "Mock oral examinations recreate the format and expectations of French competitive entrance examinations, with guided feedback on reasoning, presentation, and time management.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return allProjects.map((project) => project.slug);
}
