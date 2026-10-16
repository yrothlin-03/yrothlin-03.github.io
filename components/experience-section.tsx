import Image from "next/image";

type TimelineItem = {
  title: string;
  place: string;
  period: string;
  description: string;
  highlights?: string[];
  link?: string;
  logo?: string;
};

const education: TimelineItem[] = [
  {
    title: "M.Sc. MVA — Mathematics, Vision, Learning",
    link: "https://www.master-mva.com/",
    place: "ENS Paris-Saclay",
    period: "Sep 2026 — Apr 2027",
    description:
      "Mathematics, Vision and Learning master's programme. Coursework includes optimal transport, convex optimization, computer vision, deep learning, reinforcement learning, Bayesian inference, robotics, large language models, and time series.",
  },
  {
    title: "Engineering Degree",
    link: "https://www.telecom-paris.fr/",
    place: "Télécom Paris (IP Paris) — Palaiseau, France",
    period: "Sep 2024 — Sep 2027",
    description:
      "Coursework in probability, information theory, statistics, Fourier analysis, signal processing, physics, telecommunications, computer vision, and image processing.",
    highlights: [
      "Research track during the second year on Mamba applications for time series and EEG foundation models, under the supervision of Van-Tam Nguyen.",
      "One-week intensive programme in medical robotics at Télécom Physique Strasbourg.",
    ],
  },
  {
    title: "CPGE — MPSI / PSI*",
    place: "Lycée privé ORT — Strasbourg, France",
    period: "Sep 2021 — Jun 2024",
    description:
      "Intensive preparatory programme in mathematics, physics, and engineering sciences. Ranked first in the programme.",
  },
];

const experience: TimelineItem[] = [
  {
    title: "Research Intern",
    place: "Télécom Paris (IP Paris) — Palaiseau, France · Hybrid",
    period: "Jul 2026 — Sep 2026",
    description:
      "Research internship under the supervision of Van-Tam Nguyen, investigating EEG foundation models and Mamba architectures.",
    highlights: [
      "Benchmarked self-supervised methods and analysed their latent representations.",
      "Developed a LeJEPA-based architecture combining temporal and spatial modelling with EEG-specific augmentations to better capture physiological structure.",
    ],
  },
  {
    title: "Mathematics and Physics Tutor",
    link: "/projects/mathematics-physics-cpge",
    logo: "/mathematics-physics-cpge/logo.png",
    place: "Strasbourg, France",
    period: "Sep 2024 — Present",
    description:
      "Mentoring preparatory-class students in mathematics and physics, and conducting mock oral examinations for competitive entrance examinations.",
  },
];

function TimelineList({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h2 className="mb-8 border-b border-border pb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="space-y-8">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.period}`}
            className="rounded-2xl border border-border bg-card p-7 sm:p-8"
          >
            <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="text-2xl font-bold text-foreground">
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                    className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h4>
              <div className="flex shrink-0 items-center gap-3 self-end sm:self-auto">
                <span className="text-sm font-mono text-muted-foreground">
                  {item.period}
                </span>
                {item.logo && (
                  <a
                    href={item.link}
                    aria-label={`View ${item.title} project`}
                    className="rounded-md transition-opacity hover:opacity-70"
                  >
                    <Image
                      src={item.logo}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </a>
                )}
              </div>
            </div>
            <p className="mb-4 text-lg text-muted-foreground">{item.place}</p>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {item.highlights && (
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                {item.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-16">
          <TimelineList title="Education" items={education} />
          <TimelineList title="Experience" items={experience} />
        </div>
      </div>
    </section>
  );
}
