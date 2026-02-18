"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users, CheckCircle2 } from "lucide-react";

// Data Misi dari Company Profile [cite: 34-38]
const missions = [
  {
    title: "Integrated Solutions",
    desc: "Delivering high-quality consultancy services in civil, mechanical, and electrical engineering.",
  },
  {
    title: "Technological Innovation",
    desc: "Leveraging data analytics and AI to develop smart energy management solutions.",
  },
  {
    title: "Sustainability",
    desc: "Assisting clients in achieving sustainability goals by optimizing efficiency and reducing carbon footprint.",
  },
  {
    title: "Highest Standards",
    desc: "Ensuring every project executes with the highest standards of safety, quality, and governance.",
  },
  {
    title: "Positive Impact",
    desc: "Contributing to a resilient energy landscape and delivering positive impact for society.",
  },
];

// Data Tim Ahli dari Company Profile [cite: 107-115]
// Nanti ini bisa diganti dengan data dari CMS
const experts = [
  {
    name: "Ir. Lukman Abdurachman, MT.",
    role: "Senior Expert",
    specs: [
      "Mechanical Engineering",
      "Construction Management",
      "Fire Protection",
    ],
  },
  {
    name: "Fuad Hasyim, ST.",
    role: "Middle Expert",
    specs: ["Mechanical Engineering", "Project Management"],
  },
  {
    name: "Wasihat, ST.",
    role: "Middle Expert",
    specs: ["Mechanical Engineering"],
  },
  {
    name: "M. Ismail Aji, ST.",
    role: "Middle Expert",
    specs: ["Electrical Engineering"],
  },
  {
    name: "Luthfiansyah Gigantama, ST., MT.",
    role: "Expert",
    specs: ["Building Engineering"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20 overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 bg-gray-50 border-b border-gray-100">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6"
          >
            About <span className="text-blue-600">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            PT. CME Solidarity Forever (CME Solver) is an engineering
            consultancy firm dedicated to delivering innovative, high-quality
            solutions across civil, mechanical, and electrical engineering
            disciplines. We serve as a strategic partner for infrastructure
            success.
          </motion.p>
        </div>
      </section>

      {/* --- VISION & MISSION SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Vision Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0F172A] rounded-3xl p-10 text-white relative overflow-hidden"
            >
              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-300 italic">
                &quot;To become the leading engineering consultancy firm in
                Indonesia, pioneering the transformation of smart infrastructure
                and sustainable energy through technological innovation.&quot;
              </p>
            </motion.div>

            {/* Mission Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-[#0F172A]">
                  Our Mission
                </h2>
              </div>

              <ul className="space-y-6">
                {missions.map((mission, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#0F172A]">
                        {mission.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {mission.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ORGANIZATION STRUCTURE SECTION --- */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              Organization Structure
            </h2>
            <p className="text-gray-600">
              Our team is led by experienced professionals committed to
              integrity and excellence.
            </p>
          </div>

          {/* Simplified Org Tree Visualization */}
          <div className="flex flex-col items-center">
            {/* Level 1: Presdir */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-blue-600 shadow-lg rounded-xl px-10 py-4 z-20 relative"
            >
              <span className="block font-bold text-lg text-[#0F172A]">
                President Director
              </span>
            </motion.div>

            {/* Garis Batang Utama (Turun dari Presdir) */}
            <div className="w-0.5 h-8 bg-gray-300"></div>

            {/* Level 2: Directors */}
            <div className="w-full max-w-md flex relative">
              {/* Garis Batang Tengah (Turun ke bawah melewati level Director) */}
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-300 -translate-x-1/2 z-0"></div>

              {/* Director 1 (Kiri) */}
              <div className="flex-1 relative flex flex-col items-center">
                {/* Garis horizontal setengah ke KANAN saja */}
                <div className="absolute top-0 right-0 w-1/2 h-0.5 bg-gray-300"></div>
                <div className="w-0.5 h-8 bg-gray-300 relative z-10"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 shadow-sm rounded-xl px-2 sm:px-4 py-3 text-center w-11/12 max-w-[14rem] z-10"
                >
                  <span className="block font-bold text-[#0F172A]">
                    Director 1
                  </span>
                  <span className="text-[10px] sm:text-xs text-blue-600 font-semibold uppercase">
                    Finance & HRD
                  </span>
                </motion.div>
              </div>

              {/* Director 2 (Kanan) */}
              <div className="flex-1 relative flex flex-col items-center">
                {/* Garis horizontal setengah ke KIRI saja */}
                <div className="absolute top-0 left-0 w-1/2 h-0.5 bg-gray-300"></div>
                <div className="w-0.5 h-8 bg-gray-300 relative z-10"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-gray-200 shadow-sm rounded-xl px-2 sm:px-4 py-3 text-center w-11/12 max-w-[14rem] z-10"
                >
                  <span className="block font-bold text-[#0F172A]">
                    Director 2
                  </span>
                  <span className="text-[10px] sm:text-xs text-blue-600 font-semibold uppercase">
                    Technical & External
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Garis Penyambung ke Level Manager */}
            <div className="w-0.5 h-12 bg-gray-300"></div>

            {/* Level 3: Managers */}
            <div className="w-full max-w-4xl flex">
              {[
                "Civil Engineering",
                "Mechanical Engineering",
                "Electrical & Instrument",
              ].map((mgr, i) => (
                <div
                  key={i}
                  className="flex-1 relative flex flex-col items-center px-1 sm:px-3"
                >
                  {/* Logika Garis Horizontal Cerdas */}
                  {i === 0 && (
                    <div className="absolute top-0 right-0 w-1/2 h-0.5 bg-gray-300"></div>
                  )}{" "}
                  {/* Anak pertama: Garis ke kanan */}
                  {i === 1 && (
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-300"></div>
                  )}{" "}
                  {/* Anak tengah: Garis full */}
                  {i === 2 && (
                    <div className="absolute top-0 left-0 w-1/2 h-0.5 bg-gray-300"></div>
                  )}{" "}
                  {/* Anak terakhir: Garis ke kiri */}
                  <div className="w-0.5 h-8 bg-gray-300 relative z-10"></div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-blue-50 border border-blue-100 text-blue-800 rounded-lg px-2 py-3 text-[10px] sm:text-sm font-semibold text-center w-full shadow-sm h-full flex items-center justify-center"
                  >
                    <span>
                      {mgr} <br className="hidden sm:block" />
                      Manager
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY PERSONAL / EXPERTS SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Users className="w-6 h-6 text-blue-600" />
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Key Personal Certificate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <span className="text-gray-500 font-bold text-lg group-hover:text-white transition-colors">
                  {expert.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                {expert.name}
              </h3>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4">
                {expert.role}
              </span>

              <div className="border-t border-gray-50 pt-4">
                <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">
                  Competencies:
                </p>
                <ul className="space-y-2">
                  {expert.specs.map((spec, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-sm text-gray-600 flex items-start gap-2.5"
                    >
                      {/* Menggunakan elemen div berbentuk lingkaran presisi */}
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span className="leading-tight">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
