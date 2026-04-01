import { use, useState } from 'react';
import Cart from './Cart'
import ChosenCart from './ChosenCart';
import EmptyCart from './EmptyCart';


const Tools = ({ cartData }) => {
  const data = use(cartData);

  const [selectButton, setSelectButton] = useState(true);
  const [isSelected, setIsSelected] = useState([]);
  const [removeItem, setRemoveItem] = useState([]);

function handleClearCart(){
  setIsSelected([]);
  setRemoveItem([]);
}

let cart = data.filter(
  (item) => isSelected.includes(item.id) && !removeItem.includes(item.id)
);

  return (
    <section className='my-20 px-4'>
      <div className='mx-auto text-center space-y-4'>
        <h1 className=' text-3xl sm:text-4xl md:text-5xl  font-extrabold'>Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

        <div className='bg-gray-100 p-1 rounded-full inline-flex mt-4'>
          <button onClick={() => setSelectButton(true)} className={`px-4 py-2 rounded-full  ${selectButton ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-800"}`}>
            Products
          </button>
          <button onClick={() => setSelectButton(false)} className={`px-4 py-3 rounded-full  ${!selectButton ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-800"}`}>
            Cart ({cart.length})</button>
        </div>
      </div>

      {selectButton ? 
      <Cart key={data.id} data={data} isSelected={isSelected} setIsSelected={setIsSelected} cart={cart} />
       : cart.length === 0 
       ? <EmptyCart/> 
       : <ChosenCart  setIsSelected={setIsSelected} removeItem={removeItem } setRemoveItem={setRemoveItem} cart={cart} handleClearCart={handleClearCart} />}

    </section>
  );
};

export default Tools;