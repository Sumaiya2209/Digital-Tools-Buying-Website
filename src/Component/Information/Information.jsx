import React from 'react';

const Information = () => {
  return (
    <section className='bg-linear-to-r from-indigo-600 to-purple-600 py-16 text-white'> 
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
      <div  className='space-y-2 border-r border-gray-300 pr-8'>
        <h1 className='font-extrabold text-7xl'>50K+</h1>
        <p className='text-lg'>Active Users</p>
      </div>
      <div  className='space-y-2 border-r border-gray-300 pr-8'>
        <h1 className='font-extrabold text-7xl'>200+</h1>
        <p className='text-lg'>Premium Tools</p>
      </div>
      <div className='space-y-2'>
        <h1 className='font-extrabold text-7xl'>4.9</h1>
        <p className='text-lg'>Rating</p>
      </div>
    </div>
    </section>
  );
};

export default Information;