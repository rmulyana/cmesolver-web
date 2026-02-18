"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background Blueprint/Grid Geometris */}
      <div className="absolute inset-0 z-0">
        {/* Grid dikembalikan ke 24px dengan warna abu-abu kebiruan */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Efek gradient putih di bagian ATAS agar halus di bawah Navbar */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>

        {/* Efek gradient putih di bagian BAWAH agar menyatu dengan konten selanjutnya */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge Animasi di atas judul */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-100 shadow-sm">
            Engineering 4.0 & Sustainable Solutions
          </span>
        </motion.div>

        {/* Judul Utama */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] mb-6"
        >
          Pioneering the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
            Smart Infrastructure
          </span>
        </motion.h1>

        {/* Subjudul */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Pioneering the transformation of smart infrastructure and sustainable
          energy through technological innovation. Delivering high-quality
          solutions across civil, mechanical, and electrical engineering.
        </motion.p>

        {/* Tombol Aksi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/services"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0F172A] text-white rounded-lg font-medium hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center px-8 py-3.5 bg-white text-[#0F172A] border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-all w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
