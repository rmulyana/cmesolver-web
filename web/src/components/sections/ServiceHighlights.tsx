"use client";

import { motion } from "framer-motion";
import { Building2, Cog, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

// Data layanan diambil langsung dari Company Profile
const services = [
  {
    id: "civil",
    title: "Civil Engineering",
    icon: Building2,
    features: [
      "Structural Design",
      "Geotechnical Engineering",
      "Water Resource Management",
      "Transportation & Infrastructure",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    icon: Cog,
    features: [
      "HVAC Systems",
      "Plumbing Systems",
      "Fire Protection",
      "Building Automation System (BAS)",
    ],
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    id: "electrical",
    title: "Electrical Engineering",
    icon: Zap,
    features: [
      "Power Distribution",
      "Smart Lighting Systems",
      "Telecommunications, Data, & CCTV",
      "Renewable Energy",
    ],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

// Varian animasi untuk efek kemunculan berurutan (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceHighlights() {
  return (
    <section className="py-24 bg-gray-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Integrated Engineering Solutions
          </h2>
          <p className="text-gray-600">
            We combine deep expertise with data analytics and AI to optimize
            performance and ensure long-term positive impacts.
          </p>
        </div>

        {/* Grid Kartu Layanan */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bgColor} ${service.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="mr-2 text-blue-500 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.id}`}
                  className={`inline-flex items-center text-sm font-semibold ${service.color} hover:opacity-80 transition-opacity`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
