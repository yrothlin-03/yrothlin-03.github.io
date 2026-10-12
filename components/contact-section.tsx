import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase mb-4">04.</h2>
        <h3 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h3>

        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to
          reach out!
        </p>

        <Link
          href="mailto:yanic.rothlingshofer@example.com"
          className="inline-block px-8 py-4 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity mb-10"
        >
          Say Hello
        </Link>

        <div className="flex items-center justify-center gap-6">
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
    </section>
  )
}
