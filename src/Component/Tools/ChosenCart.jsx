import React from 'react';

const ChosenCart = ({data, isSelected, removeItem, setRemoveItem }) => {

  const cart = data.filter((item) => isSelected.includes(item.id));

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  

  return (
    <div>
      <div className="card bg-base-100 shadow-sm m-12 p-15 lg:mx-35 space-y-4">
        <h1 className='text-2xl font-bold'>Your Cart</h1>
        
        {
          cart.map((cart) => {
         
          return (
            <div className="space-y-4">
          <div className="flex justify-between items-center bg-base-200 p-4 rounded-xl" >
            <div className="flex items-center gap-4">
              <img src={cart.image} alt={cart.title} />
              <div>
                <h3 className="font-medium">{cart.title}</h3>
                <p className="text-sm text-gray-500"> ${cart.price} </p>
              </div>
            </div>
            <button className="text-pink-500 font-medium hover:underline" >Remove </button>
          </div>
        </div>
          )
})
        }


        <div className='flex justify-between'>
          <h1 className='text-gray-400'>Total:</h1>
          <h1 className='text-2xl font-bold'>$ {totalPrice}</h1>
        </div>
        <button className="mt-6 w-full rounded-full text-white py-3 font-medium bg-linear-to-r from-indigo-600 to-purple-600">
          Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default ChosenCart;