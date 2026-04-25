"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Concierge Service", href: "#service" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-[#ff6b5b]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 6L16 16L8 26V6Z" fill="currentColor"/>
                <path d="M16 6L24 16L16 26V16L24 6H16Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-[#ff6b5b] font-semibold text-xl">KoraBooker</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://forms.gle/BK9yGV3wMpvAGFhE9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff6b5b] text-sm font-semibold hover:text-[#ff5a48] transition-colors"
            >
              Reservation Request
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://forms.gle/BK9yGV3wMpvAGFhE9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6b5b] text-sm font-semibold hover:text-[#ff5a48] transition-colors"
              >
                Reservation Request
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
