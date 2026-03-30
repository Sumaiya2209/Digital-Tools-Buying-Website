import React from "react";
import BannerPic from "../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span>New: AI-Powered Tools Available</span>
          </div>
          <h1 className="text-[72px] font-extrabold text-gray-800 mt-3 leading-tight">
            Supercharge Your <br />Digital Workflow</h1>
          <p className="text-gray-500 mt-4">Access premium AI tools, design assets, templates, and productivity <br /> software — all in one place. Start creating faster today.</p>

          <div className="flex gap-4 mt-6">
            <button className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              Explore Products </button>
            <button className="border border-purple-500 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-200 transition flex items-center gap-2"> <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src={BannerPic} alt="AI workflow" className="rounded-xl shadow-md" />
        </div>

      </div>
    </section>
  );
};

export default Banner;