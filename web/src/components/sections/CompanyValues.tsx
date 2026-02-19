"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Award, Leaf, Users } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "Pioneering smart infrastructure and energy through cutting-edge technology and AI.",
    icon: Lightbulb,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Integrity",
    description:
      "Upholding the highest standards of safety, quality, and governance in every project.",
    icon: ShieldCheck,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Excellence",
    description:
      "Delivering high-quality consultancy services driven by an experienced professional team.",
    icon: Award,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    title: "Sustainability",
    description:
      "Optimizing efficiency and reducing carbon footprint for a greener future.",
    icon: Leaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Solidarity",
    description:
      "Forging lasting partnerships built on trust, integrity, and a shared purpose.",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function CompanyValues() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600">
            We do not merely build infrastructure; we build long-term
            partnerships based on trust and a shared purpose to inspire
            progress.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            // Membuat elemen terakhir (Solidarity) berada di tengah jika di layar besar
            const isLastOdd =
              index === values.length - 1 && values.length % 2 !== 0;

            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isLastOdd ? "lg:col-start-2" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${value.bgColor} ${value.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
