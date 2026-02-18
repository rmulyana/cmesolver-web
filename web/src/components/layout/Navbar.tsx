"use client";

import Link from "next/link";
import Image from "next/image"; // Import komponen Image dari Next.js
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-gray-100 bg-white/70 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Bagian Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Gambar Logo */}
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo-cme.png" // Pastikan file logo sudah disimpan di folder public dengan nama ini
                  alt="CME Solver Logo"
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  className="object-contain"
                  priority // Memprioritaskan pemuatan logo
                />
              </div>
              {/* Teks Logo */}
              <span className="text-2xl font-extrabold tracking-tighter text-[#0F172A]">
                CME<span className="text-blue-600">SOLVER</span>
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0F172A] rounded-lg hover:bg-blue-800 transition-all shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Tombol Menu Mobile (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-900 hover:text-blue-600 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
