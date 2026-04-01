import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Cart = ({ data, isSelected, setIsSelected , cart}) => {


  return (
    <section>
      <div className="flex justify-center mt-12">
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {data?.map((tool) => (
            <section key={tool.id} className='items-center'>
              <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                  <div className='flex justify-between mb-4'>
                    <img className='w-8 h-8 ' src={tool.image} alt="Tool" />
                    <span
                      className={`badge p-3 rounded-full  
                      ${tool.tag === "New" && "bg-green-100 text-green-600"}
                      ${tool.tag === "Best Seller" && "bg-yellow-100 text-yellow-600"}
                      ${tool.tag === "Popular" && "bg-purple-100 text-purple-600"} `}>
                      {tool.tag}
                    </span>
                  </div>

                  <div className='space-y-4'>
                    <h2 className="text-2xl font-bold">{tool.title}</h2>
                    <p>{tool.description}</p>
                    <p>
                      <span className="text-xl font-bold">${tool.price}</span>${tool.billing === "monthly" ? "/Mo" : "/One-Time"}</p>
                    <ul className="mt-2 flex flex-col gap-2 text-xs">
                      {tool.features?.map((feature, i) => (
                        <li key={i} className='flex items-center gap-1'>
                          <TiTick className='text-xl text-green-500' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button
                      className={`btn rounded-full text-white btn-block ${isSelected.includes(tool.id)? "bg-green-500": "bg-linear-to-r from-indigo-600 to-purple-600"}`} onClick={() =>{ setIsSelected((prev) => [...prev, tool.id])
                        toast.success(`${tool.title} added to cart!`);
                      }} >
                      {isSelected.includes(tool.id) ? "Added to Cart" : "Buy Now"}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;