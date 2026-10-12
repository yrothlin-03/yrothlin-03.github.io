import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo de profil */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Yanic Rothlingshofer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Yanic Rothlingshofer
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Developer / Student / Engineer
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Hello! I'm Yanic, and this portfolio presents my projects,
              experience, and technical interests across{" "}
              <span className="text-foreground font-medium">
                software development
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                applied technology
              </span>
              . Welcome to my portfolio!
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <Link
                href="#projects"
                className="px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Download Resume
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <Link
                href="https://github.com/yrothlin-03"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yanic-rothlingshofer/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="mailto:yanic.rothlingshofer@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
