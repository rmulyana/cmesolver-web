import Link from "next/link";
import Image from "next/image"; // Tambahkan import Image
import { Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-12 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info & Logo */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Logo Perusahaan */}
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-cme.png"
                  alt="CME Solver Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Nama Perusahaan */}
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                CME<span className="text-blue-500">SOLVER</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              PT. CME Solidarity Forever. Pioneering the transformation of smart
              infrastructure and sustainable energy through technological
              innovation.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+62 852 2011 0336 / +62 812 1955 4659</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>cs@cmesolver.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>www.cmesolver.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition-colors block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-blue-400 transition-colors block"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#civil"
                  className="hover:text-blue-400 transition-colors block"
                >
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mechanical"
                  className="hover:text-blue-400 transition-colors block"
                >
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services#electrical"
                  className="hover:text-blue-400 transition-colors block"
                >
                  Electrical Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Other Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#smart-energy"
                  className="hover:text-blue-400 transition-colors block leading-snug"
                >
                  Smart Energy Management & Digital Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#sustainability"
                  className="hover:text-blue-400 transition-colors block leading-snug"
                >
                  Sustainability & Environmental Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#project-management"
                  className="hover:text-blue-400 transition-colors block leading-snug"
                >
                  Project Management & Supervision
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} PT CME Solidarity Forever. All
            rights reserved.
          </p>
          <p>Innovating Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
