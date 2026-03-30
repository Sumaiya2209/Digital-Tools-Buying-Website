import React, { use } from 'react';
import Cart from './Cart'

const Tools = ({ cartData }) => {
  const data = use(cartData);

  return (
    <section className='my-20 px-4'>
      <div className='mx-auto text-center space-y-4'>
        <h1 className=' text-3xl sm:text-4xl md:text-5xl  font-extrabold'>Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
        </p>

        <div className='bg-gray-100 p-1 rounded-full inline-flex gap-2 mt-4'>
          <button className='px-4 py-2 rounded-full bg-white shadow'>Products</button>
          <button className='px-4 py-3 rounded-full'>
            Cart (0)
          </button>
        </div>
      </div>

      <Cart data={data}></Cart>

    </section>
  );
};

export default Tools;