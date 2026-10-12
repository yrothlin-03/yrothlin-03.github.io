"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    label: "EDUCATION",
    title: "Master of Science in Engineering",
    place: "Télécom Paris - Institut Polytechnique de Paris",
    period: "2024 — 2027",
    description:
      "Télécom Paris is a leading French engineering school specializing in computer science and telecommunications. Coursework includes Deep Learning, Generative Models, 3D/Video Vision, Object Recognition, NLP, Signal Processing, and ML Optimization.",
  },
  {
    label: "EDUCATION",
    title: "Preparatory Classes PCSI / PC*",
    place: "Lycée du Parc, Lyon",
    period: "2022 — 2024",
    description:
      "Intensive two-year program focused on Mathematics, Physics, and Computer Science to prepare for the competitive entrance exams to French engineering schools.",
  },
  {
    label: "EXPERIENCE",
    title: "Humanitarian Internship",
    place: "Polytechnique, Palaiseau",
    period: "Jul — Aug 2025",
    description:
      "Books and historical documents restauration internship at the library of the École Polytechnique, involving the preservation and digitization of rare collections.",
  },
  {
    label: "EXPERIENCE",
    title: "Private Tutor — Mathematics",
    place: "Self-employed",
    period: "2024 — Present",
    description:
      "Providing personalized mathematics tutoring to high school and preparatory class students, helping them build strong foundations and achieve their academic goals.",
  },
];

export function ExperienceSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % timeline.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + timeline.length) % timeline.length);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          Education & Experience
        </h2>

        <div className="bg-card border border-border rounded-2xl p-10 min-h-[320px] flex flex-col justify-center">
          <span className="text-xs font-mono text-muted-foreground tracking-widest mb-4">
            {timeline[index].label}
          </span>
          <h3 className="text-3xl font-bold text-foreground mb-3">
            {timeline[index].title}
          </h3>
          <p className="text-lg text-muted-foreground mb-2">
            {timeline[index].place}
          </p>
          <span className="text-sm font-mono text-muted-foreground mb-6">
            {timeline[index].period}
          </span>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            {timeline[index].description}
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="h-12 w-12 rounded-xl bg-transparent border-border hover:bg-muted"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {timeline.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-foreground"
                    : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="h-12 w-12 rounded-xl bg-transparent border-border hover:bg-muted"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
