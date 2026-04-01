import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { FiAlignLeft } from 'react-icons/fi';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-base-200'>
      <div className="navbar max-w-7xl mx-auto px-6 py-6">
        <div className="navbar-start flex items-center gap-4">
          <FiAlignLeft onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-4xl lg:hidden'></FiAlignLeft>
          {
            isMenuOpen && (
              <ul className="flex flex-col gap-6 px-1 font-semibold items-center text-center absolute top-20 left-0 w-70 bg-base-200 py-4 lg:hidden">
                <li className='hover:text-indigo-300'><a href="">Products</a></li>
                <li className='hover:text-indigo-300'><a href="">Features</a></li>
                <li className='hover:text-indigo-300'><a href="">Pricing</a></li>
                <li className='hover:text-indigo-300'><a href="">Testimonials</a></li>
                <li className='hover:text-indigo-300'><a href="">FAQ</a></li>
              </ul>
            )
          }
          <h1 className="text-4xl font-bold pb-1 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">DigiTools</h1>
        </div>
        <div className="navbar-center hidden lg:flex ">
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