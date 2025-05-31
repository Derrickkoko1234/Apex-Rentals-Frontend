import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-4">
              {/* Replace with your actual logo image */}
              <Image src="/logo.png" alt="ApexRental Logo" width={40} height={40} />
              <span className="ml-2 text-xl font-bold text-white">ApexRental</span>
            </Link>
            <p className="text-sm text-gray-400">Your trusted partner in property rentals.</p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 md:gap-12 lg:gap-16 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Rent Report</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Sitemaps</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Terms</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Help & Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">FAQs</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Contact Support</Link></li>
              </ul>
            </div>

            {/* Popular Search Links */}
            <div>
              <h3 className="font-semibold text-white mb-3">Popular Search</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Apartments Near me</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Condos near me</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Houses Near Me</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Rooms Near Me</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">All rentals Near Me</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Post a Rental</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Landlords</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          &copy; {year} ApexRental. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 