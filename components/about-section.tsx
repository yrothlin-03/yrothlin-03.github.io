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
            Currently finishing my engineering degree at{" "}
            <span className="text-foreground font-medium">Telecom Paris</span>,
            I've built a solid foundation in applied mathematics and computer
            science. My focus? Making machines see and understand the world
            around them through{" "}
            <span className="text-foreground font-medium">Computer Vision</span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              Artificial Intelligence
            </span>
            .
          </p>
          <p>
            What excites me most is bridging the gap between theoretical
            research and practical applications. Whether it's detecting image
            forgeries, working with large language models, or diving into
            generative architectures, I'm always looking for problems where math
            and code can make a real difference.
          </p>
          <p>
            Right now, I'm deepening my expertise through advanced coursework in
            Deep Learning, 3D/Video Vision, Object Recognition, NLP, and Signal
            Processing. Each project is an opportunity to push my understanding
            further.
          </p>
          <p>
            Outside of code, you'll find me exploring new music, playing
            football, or hunting for the next interesting hackathon to join. I
            believe the best ideas often come from unexpected places.
          </p>
        </div>
      </div>
    </section>
  );
}
