import React from 'react';
import User from "../../assets/user.png";
import Rocket from "../../assets/rocket.png";
import Package from "../../assets/package.png";

const Steps = () => {
  return (
    <section className='py-16 md:py-20 bg-gray-50 px-4 sm:px-10 lg:px-30'>
      <div className='mx-auto text-center space-y-2 mb-12'>
        <h2 className='text-4xl font-bold'>Get Started in 3 Steps</h2>
        <p className='text-gray-500'>
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        <div className='bg-white p-8 rounded-xl shadow-sm w-80 text-center relative'>
          <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full'>
            01
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full">
            <img src={User} alt="User" className="w-8 h-8" />
          </div>
          <h3 className='font-semibold text-lg'>Create Account</h3>
          <p className='text-gray-500 text-sm mt-2'>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className='bg-white p-8 rounded-xl shadow-sm w-80 text-center relative'>
          <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full'>
            02
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full">
            <img src={Package} alt="Package" className="w-8 h-8" />
          </div>

          <h3 className='font-semibold text-lg'>Choose Products</h3>
          <p className='text-gray-500 text-sm mt-2'>
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className='bg-white p-8 rounded-xl shadow-sm w-80 text-center relative'>
          <span className='absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full'>
            03
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full">
            <img src={Rocket} alt="Rocket" className="w-8 h-8" />
          </div>

          <h3 className='font-semibold text-lg'>Start Creating</h3>
          <p className='text-gray-500 text-sm mt-2'>
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Steps;