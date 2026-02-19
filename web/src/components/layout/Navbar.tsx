"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Menambahkan ikon X untuk tombol close

export default function Navbar() {
  // State untuk mengontrol apakah menu mobile sedang terbuka atau tertutup
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk membalikkan state (buka -> tutup, tutup -> buka)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fungsi untuk menutup menu saat link di-klik (agar tidak menghalangi layar)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-gray-100 bg-white/70 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Bagian Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={closeMobileMenu}
            >
              {/* Gambar Logo */}
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo-cme.png"
                  alt="CME Solver Logo"
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  className="object-contain"
                  priority
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
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-blue-600 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {/* Jika menu terbuka tampilkan ikon X, jika tertutup tampilkan Hamburger */}
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full transition-all duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              onClick={closeMobileMenu}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block w-full text-center mt-4 px-5 py-3.5 text-base font-bold text-white bg-[#0F172A] rounded-lg hover:bg-blue-800 transition-all shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
