import React from 'react';
import { TiTick } from 'react-icons/ti';

const Pricing = () => {
  return (
    <section className='py-20 md:py-25 px-4 sm:px-10 lg:px-30'>
      <div className='mx-auto text-center space-y-2 mb-12'>
        <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
        <p className='text-gray-500'>
           Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

       <div className="grid md:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow-md p-6 text-left">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Perfect for getting started
            </p>
            <h2 className="text-3xl font-bold mb-4">$0<span className="text-base font-normal">/Month</span></h2>
            <ul className="space-y-2 mb-6 flex-1">
              <li className='flex items-center gap-2'> <TiTick /> Access to 10 free tools</li>
              <li className='flex items-center gap-2'> <TiTick /> Basic templates</li>
              <li className='flex items-center gap-2'> <TiTick /> Community support</li>
              <li className='flex items-center gap-2'> <TiTick /> 1 project per month</li>
            </ul>
            <button className="btn btn-primary w-full rounded-full">
              Get Started Free
            </button>
          </div>

          <div className="relative card text-white shadow-xl p-6 text-left bg-linear-to-br from-purple-600 to-indigo-600 scale-105">            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="badge badge-warning px-4 py-3">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-semibold mt-4">Pro</h3>
            <p className="text-sm text-purple-100 mb-4">
              Best for professionals
            </p>
            <h2 className="text-3xl font-bold mb-4">$29<span className="text-base font-normal">/Month</span></h2>
            <ul className="space-y-2 mb-6 flex-1">
              <li className='flex items-center gap-2'> <TiTick /> Access to all premium tools</li>
              <li className='flex items-center gap-2'> <TiTick /> Unlimited templates</li>
              <li className='flex items-center gap-2'> <TiTick /> Priority support</li>
              <li className='flex items-center gap-2'> <TiTick /> Unlimited projects</li>
              <li className='flex items-center gap-2'> <TiTick /> Cloud sync</li>
              <li className='flex items-center gap-2'> <TiTick /> Advanced analytics</li>
            </ul>
            <button className="btn bg-white text-purple-700 hover:bg-gray-100 w-full rounded-full">
              Start Pro Trial
            </button>
          </div>

          <div className="card bg-base-100 shadow-md p-6 text-left">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-sm text-gray-500 mb-4">
              For teams and businesses
            </p>
            <h2 className="text-3xl font-bold mb-4">$99<span className="text-base font-normal">/Month</span></h2>
            <ul className="space-y-2 mb-6 flex-1">
              <li className='flex items-center gap-2'> <TiTick /> Everything in Pro</li>
              <li className='flex items-center gap-2'> <TiTick /> Team collaboration</li>
              <li className='flex items-center gap-2'> <TiTick /> Custom integrations</li>
              <li className='flex items-center gap-2'> <TiTick /> Dedicated support</li>
              <li className='flex items-center gap-2'> <TiTick /> SLA guarantee</li>
              <li className='flex items-center gap-2'> <TiTick /> Custom branding</li>
            </ul>
            <button className="btn btn-primary w-full rounded-full">
              Contact Sales
            </button>
          </div>
        </div>
    </section>
  );
};

export default Pricing;