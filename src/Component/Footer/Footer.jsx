import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#0b1220] to-[#0a0f1a] text-gray-300 px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 text-center sm:text-left">
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-semibold mb-4">
            DigiTools</h2>
          <p className="text-sm  text-gray-400 max-w-sm">
            Premium digital tools for creators, <br /> professionals,and businesses.Work smarter <br /> with our suite of powerful tools.</p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">Features</a></li>
            <li><a className="hover:text-white">Pricing</a></li>
            <li><a className="hover:text-white">Templates</a></li>
            <li><a className="hover:text-white">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">About</a></li>
            <li><a className="hover:text-white">Blog</a></li>
            <li><a className="hover:text-white">Careers</a></li>
            <li><a className="hover:text-white">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">Documentation</a></li>
            <li><a className="hover:text-white">Help Center</a></li>
            <li><a className="hover:text-white">Community</a></li>
            <li><a className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Social Links</h3>
          <div className="flex gap-3 justify-center">
            <a className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
              <FaYoutube size={14} /></a>
            <a className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
              <FaFacebookF size={14} /></a>
            <a className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
              <FaTwitter size={14} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2026 DigiTools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-white">Privacy Policy</a>
          <a className="hover:text-white">Terms of Service</a>
          <a className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;