export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
          01.
        </h2>
        <h3 className="text-3xl font-bold text-foreground mb-8">About Me</h3>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I am completing an engineering degree at{" "}
            <span className="text-foreground font-medium">Télécom Paris</span>{" "}
            while pursuing the{" "}
            <span className="text-foreground font-medium">
              MVA Master's Programme at ENS Paris-Saclay
            </span>
            . My academic background combines applied mathematics, signal
            processing, probability, and statistics with{" "}
            <span className="text-foreground font-medium">Computer Vision</span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              Machine Learning
            </span>
            .
          </p>
          <p>
            I am particularly interested in research at the intersection of AI,
            healthcare, and neuroscience. My technical interests include deep
            learning, self-supervised learning, multimodal models, medical
            imaging, and multivariate time series.
          </p>
          <p>
            At Télécom Paris, I have developed a research focus on EEG
            foundation models and Mamba architectures for time series. The MVA
            programme is further broadening my work in optimal transport,
            computer vision, deep learning, reinforcement learning, Bayesian
            inference, robotics, and large language models.
          </p>
          <p>
            Outside research, I enjoy running, road cycling, swimming, tennis,
            and playing piano.
          </p>
        </div>
      </div>
    </section>
  );
}
