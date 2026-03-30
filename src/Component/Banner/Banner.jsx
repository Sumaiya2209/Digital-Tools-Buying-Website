import React from "react";
import BannerPic from "../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span>New: AI-Powered Tools Available</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-800 mt-4 leading-tight">
            Supercharge Your <br className="hidden sm:block" />
            Digital Workflow
          </h1>
          <p className="text-gray-500 mt-4">Access premium AI tools, design assets, templates, and productivity <br /> software — all in one place. Start creating faster today.</p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
            <button className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              Explore Products </button>
            <button className="border border-purple-500 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-200 transition flex items-center gap-2"> <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end ">
          <img
            src={BannerPic} alt="AI workflow" className="rounded-xl shadow-md" />
        </div>

      </div>
    </section>
  );
};

export default Banner;