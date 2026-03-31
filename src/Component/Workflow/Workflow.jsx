import React from 'react';

const Workflow = () => {
  return (
    <div>
      <section>
        <div className="bg-linear-to-r from-purple-600 to-indigo-600 py-20 px-4 text-center text-white">
      <div className="max-w-3xl mx-auto py-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="btn bg-white text-purple-700 hover:bg-gray-100 border-none rounded-full px-6">Explore Products</button>
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-700 rounded-full px-6">View Pricing</button>
        </div>
        <p className="text-sm text-purple-200">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
      </section>
    </div>
  );
};

export default Workflow;