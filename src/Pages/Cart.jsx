import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
const goBack = () => {
  window.history.back();
  }
const Cart = () => {
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem, } =
    useCart();

  return (
    <div className="mt-24 sm:mt-16 text-black  pt-5 px-5 sm:p-2 mb-20 AcehLight">
    <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
      <i className="fas fa-arrow-left text-black"/>

      </div>
      <div className="text-center sm:text-xl text-xl text-black py-5 px-20 Aceh">
        <h1> My Cart ({items.length}) </h1>
      </div>

      {isEmpty ? (
        <div className="text-center sm:text-3xl text-5xl text-gray-500 AcehLight h-96 py-20 mt-20">
          <i className="fas fa-cart-shopping pr-10"></i>Your Cart is Empty
        </div>
      ) : (
        ""
      )}
      <div className="flex  ">
        <div className="flex flex-col gap-5 overflow-y-auto sm:overflow-none w-1/2 sm:w-full " style={{height:" 36rem"}}>
          {items.map((item, id) => (
            <div
              key={id}
              className="flex sm:w-full sm:gap-10 sm:m-auto m-auto gap-14 w-full px-5 AcehLight  hover cursor-pointer"
            >
              <div className="w-full">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-44 h-44 sm:w-84 border  "
                />
              </div>
              <div className="flex flex-col m-auto  gap-0 w-full">
                <h1 className="Aceh text-sm capitalize">{item.name}</h1>
                <h1 className="text-xl text-sky-500 AcehLight"> N{item.price}</h1>
                <h1 className=" text-sm capitalize" >Color: {item.color}</h1>
                <h1 className="text-sm  ">Size: {item.size}</h1>

                <div className="flex ">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ms-2 m-auto"
                  >
                    <i className="fas fa-trash text-black text-lg"></i>
                  </button>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    className="m-2 px-2 text-black text-xl  m-auto "
                  >
                    {" "}
                    -
                  </button>
                  <h1 className="text-xl  m-auto">{item.quantity}</h1>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    className="m-2 px-2 text-black  m-auto text-xl "
                  >
                    +
                  </button>
                </div>

                <h1 className="text-sm">Total: {item.itemTotal}</h1>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
        <div className="sm:hidden w-2/5 m-auto ">
          
         
            <div className="overflow-x-auto mx-10 " >
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              {items.map((item, id) => (
              <tbody key={id}>
                {/* row 1 */}
                <tr>
                  <th><li/></th>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>N{item.price}</td>
                  
                </tr>
              
                
              </tbody>
              ))}
            </table>
            <h1 className="text-xl AcehLight bold py-2 flex justify-between">Subtotal ({items.length} items) <span> N{cartTotal}</span> </h1>
            <Link to="/checkout">
          <button className="bg-black p-2 text-md m-auto flex justify-center text-white">
            {" "}
             Checkout
          </button>
          </Link>
          </div>
         
          
        </div>
      </div>

      <div className="hidden  sm:block w-full static mb-4 px-4 ">
        <div>
        
          <h1 className="text-xl AcehLight bold py-2 flex justify-between">Subtotal ({items.length} items) <span> N{cartTotal}</span> </h1>
          <Link to="/checkout">
          <button className="bg-black w-full py-2 m-auto text-xl flex capitalize justify-center text-white">
            {" "}
             Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
