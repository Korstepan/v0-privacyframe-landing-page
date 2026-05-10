"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-primary/90 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 text-primary-foreground group">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-semibold tracking-tight">PrivacyFrame</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/75 hover:text-white transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl shadow-accent/20 rounded-xl px-6"
            >
              <Link href="#contact">Schedule a consultation</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-primary/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-accent hover:bg-white/5 transition-colors px-3 py-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4"
              >
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Schedule a consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
