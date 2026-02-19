"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Memanggil API Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // GANTI DENGAN ACCESS KEY DARI EMAIL TUAN MUDA
          access_key: "f043a507-4ef5-41c5-be86-04bb6e7d214e",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "CME Solver Website", // Nama pengirim yang akan muncul di inbox Tuan Muda
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        // Kosongkan form setelah sukses
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Kembalikan tombol ke keadaan semula setelah 5 detik
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        alert("Mohon maaf, terjadi kesalahan sistem. Silakan coba lagi.");
      }
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim pesan, pastikan koneksi internet Anda stabil.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Get in <span className="text-blue-500">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Let's build the future, together. Contact us today to discuss how
            our innovative engineering solutions can transform your vision into
            reality.
          </motion.p>
        </div>
      </section>

      {/* --- CONTACT INFO & FORM SECTION --- */}
      <section className="py-24 relative -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* --- LEFT COLUMN: CONTACT INFO --- */}
              <div className="lg:col-span-2 bg-blue-600 p-10 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">
                    Contact Information
                  </h3>
                  <p className="text-blue-100 mb-12 leading-relaxed text-sm">
                    At PT CME SOLIDARITY FOREVER, our commitment goes beyond
                    consultancy; we forge lasting partnerships built on
                    integrity and technical excellence.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Phone className="w-5 h-5 text-blue-100" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200 font-medium mb-1">
                          Call Us / WhatsApp
                        </p>
                        <p className="font-semibold tracking-wide">
                          <a
                            href="https://wa.me/6285220110336"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            +62 852 2011 0336
                          </a>
                        </p>
                        <p className="font-semibold tracking-wide mt-1">
                          <a
                            href="https://wa.me/6281219554659"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            +62 812 1955 4659
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Mail className="w-5 h-5 text-blue-100" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200 font-medium mb-1">
                          Email Us
                        </p>
                        <p className="font-semibold tracking-wide">
                          <a
                            href="mailto:cs@cmesolver.com"
                            className="hover:text-white transition-colors"
                          >
                            cs@cmesolver.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Globe className="w-5 h-5 text-blue-100" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200 font-medium mb-1">
                          Website
                        </p>
                        <p className="font-semibold tracking-wide">
                          <a
                            href="https://www.cmesolver.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            www.cmesolver.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- RIGHT COLUMN: CONTACT FORM --- */}
              <div className="lg:col-span-3 p-10 lg:p-12">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-8">
                  Send us a message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="e.g. John Due"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  {/* Pancing Bot Spam (Honeypot) - Disembunyikan dari User */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg group ${isSuccess ? "bg-green-600 hover:bg-green-700 text-white shadow-green-900/20" : "bg-[#0F172A] hover:bg-blue-800 text-white shadow-blue-900/20"} ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : isSuccess ? (
                      <>
                        Sent Successfully <CheckCircle2 className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Send Message{" "}
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
