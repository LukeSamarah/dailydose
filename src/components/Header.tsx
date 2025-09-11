'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dienstleistungen', href: '/dienstleistungen' },
  { name: 'Prozess', href: '/prozess' },
  { name: 'Referenzen', href: '/referenzen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100 sticky top-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Logo_einzeilige Unterzeile.png"
                alt="Daily Dose Logo"
                width={150}
                height={50}
                className="h-auto"
              />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="ml-10 hidden space-x-1 lg:block">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-lg font-medium text-gray-800 hover:text-white hover:bg-orange-500 transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menu öffnen</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-orange-100 bg-white/98 backdrop-blur-sm">
            <div className="space-y-2 px-4 pb-4 pt-4">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 border border-transparent hover:border-orange-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}