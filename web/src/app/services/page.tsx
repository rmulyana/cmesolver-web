"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Cog,
  Zap,
  Cpu,
  Leaf,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// Data Core Services
const coreServices = [
  {
    id: "civil",
    title: "Civil Engineering",
    description:
      "Designing and building robust, sustainable infrastructure that forms the backbone of modern communities and industries.",
    icon: Building2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    features: [
      "Structural Design",
      "Geotechnical Engineering",
      "Water Resource Management",
      "Transportation & Infrastructure",
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    description:
      "Delivering advanced mechanical systems that ensure optimal building performance, safety, and energy efficiency.",
    icon: Cog, // Ikon pilihan Tuan Muda!
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-100",
    features: [
      "HVAC Systems",
      "Plumbing Systems",
      "Fire Protection",
      "Building Automation System (BAS)",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Engineering",
    description:
      "Powering the future with reliable, smart, and sustainable electrical and telecommunication systems.",
    icon: Zap,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
    features: [
      "Power Distribution",
      "Smart Lighting Systems",
      "Telecommunications, Data, & CCTV",
      "Renewable Energy",
    ],
  },
];

// Data Other Services
const otherServices = [
  {
    id: "smart-energy",
    title: "Smart Energy Management & Digital Innovation",
    icon: Cpu,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    features: [
      "Energy Management System (EMS) Development",
      "Energy Audits & AI Optimization",
      "IoT (Internet of Things) Integration",
      "Digital Modeling & Simulation",
    ],
  },
  {
    id: "sustainability",
    title: "Sustainability & Environmental Consultancy",
    icon: Leaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    features: [
      "Carbon Footprint Calculation & Reduction Strategy",
      "Green Building Certification",
      "Operational Efficiency Feasibility Studies",
    ],
  },
  {
    id: "project-management",
    title: "Project Management & Supervision",
    icon: ClipboardCheck,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    features: [
      "Integrated Project Management",
      "Construction Management & Supervision",
      "Quality Assurance (QA/QC)",
      "Occupational Health & Safety (OHS) Management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20 overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 bg-[#0F172A] text-white">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Integrated Engineering <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We combine deep expertise in Civil, Mechanical, and Electrical
            Engineering with the power of data analytics and artificial
            intelligence (AI). This integrated approach allows us to build
            physical infrastructure, optimize its performance, and manage energy
            consumption intelligently.
          </motion.p>
        </div>
      </section>

      {/* --- CORE SERVICES SECTION (Alternating Layout) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              Core Engineering Services
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-24">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id} // ID untuk Anchor Link dari Footer
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center scroll-mt-28 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Left/Right Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                  >
                    <div
                      className={`aspect-square sm:aspect-video lg:aspect-square rounded-3xl ${service.bgColor} border ${service.borderColor} p-8 lg:p-12 relative overflow-hidden group flex items-center justify-center`}
                    >
                      {/* Decorative Background Icon */}
                      <Icon
                        className={`absolute -right-12 -bottom-12 w-64 h-64 ${service.color} opacity-5 group-hover:scale-110 transition-transform duration-700`}
                      />

                      <div
                        className={`w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-500`}
                      >
                        <Icon className={`w-12 h-12 ${service.color}`} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                  >
                    <h3 className="text-3xl font-bold text-[#0F172A] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.color}`}
                          />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- OTHER SERVICES SECTION (3-Column Grid) --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              Advanced & Other Services
            </h2>
            <p className="text-gray-600 text-lg">
              We also provide a comprehensive suite combining digital
              innovation, sustainability consultancy, and disciplined project
              delivery to achieve Net Zero and ESG targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id} // ID untuk Anchor Link dari Footer
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 scroll-mt-28"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bgColor} ${service.color}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-6 min-h-[56px]">
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-sm text-gray-600 flex items-start gap-3"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-current ${service.color}`}
                        ></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our innovative engineering solutions
            can transform your vision into reality. Let&apos;s build the future,
            together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
