import { useState } from 'react'
import logo from '../assets/logo-text.png'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* mobile: hamburger on the left */}
          <button
            className="md:hidden p-2 -ml-2 text-gray-700"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* brand logo - centered on mobile, left on desktop */}
          <a href="#home" className="flex items-center md:mr-8 flex-1 justify-center md:flex-none md:justify-start">
            <img src={logo} alt="Dev Stack" className="h-7 sm:h-8 w-auto" />
          </a>

          {/* desktop center nav links */}
          <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors ${
                    index === 0 ? 'text-pink-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* right side auth buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </button>
            <button className="bg-brand-gradient text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>

        {/* mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden pb-5">
            <ul className="flex flex-col items-center gap-3">
              {navLinks.map((link, index) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`block text-sm font-medium ${
                      index === 0 ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col items-center gap-3 border-t border-gray-100 pt-4">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Sign In
              </button>
              <button className="bg-brand-gradient text-white text-sm font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
