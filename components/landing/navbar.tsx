"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine if we're on the homepage or another page
  const isHomePage = pathname === "/" || pathname === "";

  return (
    <nav className="w-full z-50 bg-slate-900 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="shrink-0 flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/lobocon.svg"
              alt="Lobocon"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
              Lobocon
            </span>
          </Link>

          <div className="hidden md:flex space-x-1 items-center">
            {isHomePage ? (
              <a
                href="#product-highlights"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium text-sm transition-colors"
              >
                Product
              </a>
            ) : (
              <Link
                href="/#product-highlights"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium text-sm transition-colors"
              >
                Product
              </Link>
            )}

            {isHomePage ? (
              <a
                href="#how-it-works"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium text-sm transition-colors"
              >
                How It Works
              </a>
            ) : (
              <Link
                href="/#how-it-works"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium text-sm transition-colors"
              >
                How It Works
              </Link>
            )}

            <Link
              href="/about"
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium text-sm transition-colors"
            >
              About
            </Link>

            <a
              href="mailto:support@nexaslab.com"
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors"
            >
              Sign in
              <ArrowRight size={14} />
            </a>
            <a
              href="mailto:support@nexaslab.com"
              className="bg-white text-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              Contact sales
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {isHomePage ? (
              <a
                href="#product-highlights"
                className="block text-white font-medium py-3 px-3 hover:bg-slate-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </a>
            ) : (
              <Link
                href="/#product-highlights"
                className="block text-white font-medium py-3 px-3 hover:bg-slate-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
            )}

            {isHomePage ? (
              <a
                href="#how-it-works"
                className="block text-white font-medium py-3 px-3 hover:bg-slate-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
            ) : (
              <Link
                href="/#how-it-works"
                className="block text-white font-medium py-3 px-3 hover:bg-slate-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
            )}

            <Link
              href="/about"
              className="block text-white font-medium py-3 px-3 hover:bg-slate-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="#"
                className="text-center text-white font-medium py-3 hover:bg-slate-800 rounded-md"
              >
                Sign in
              </a>
              <a
                href="mailto:support@nexaslab.com"
                className="bg-white text-slate-900 px-5 py-3 rounded-md text-sm font-medium w-full block text-center hover:bg-slate-100 transition-colors"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
