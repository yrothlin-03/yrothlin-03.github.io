import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase mb-4">04.</h2>
        <h3 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h3>

        <p className="text-muted-foreground leading-relaxed mb-8">
          I am seeking a final-year research internship of at least four months,
          starting in April or May 2027. Feel free to get in touch.
        </p>

        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/yrothlin-03"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/Yanic%20Rothlingshofer"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={22} />
          </Link>
          <Link
            href="mailto:yanic.rothlingshofer@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={22} />
          </Link>
        </div>
      </div>
    </section>
  )
}
