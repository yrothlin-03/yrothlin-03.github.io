"use client"

import Link from "next/link"
import { useTheme } from "./theme-provider"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Yanic Röthlingshöfer
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            All Projects
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          <Link
            href="/#about"
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            All Projects
          </Link>
        </nav>
      )}
    </header>
  )
}
