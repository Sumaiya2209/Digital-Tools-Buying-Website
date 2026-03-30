import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
  return (
    <div className='bg-base-200'>
      <div className="navbar max-w-7xl mx-auto px-6 py-6">
        <div className="navbar-start">
          <h1 className="text-4xl font-bold pb-1 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">DigiTools</h1>
        </div>
        <div className="navbar-center flex">
          <ul className="flex gap-6 px-1 font-semibold items-center">
            <li><a href="">Products</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          <CiShoppingCart className='text-3xl'></CiShoppingCart>
          <a href="" className='font-semibold'>Login</a>
          <a className="btn bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;