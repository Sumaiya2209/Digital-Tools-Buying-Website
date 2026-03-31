import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const EmptyCart = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm m-12 p-15 lg:mx-35 space-y-4">
        <h1 className='text-2xl font-bold'>Your Cart</h1>
        <div className='m-4 text-gray-400 flex flex-col items-center gap-4'>
          <CiShoppingCart className='text-7xl'></CiShoppingCart>
          <h1>Your cart is empty</h1>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;