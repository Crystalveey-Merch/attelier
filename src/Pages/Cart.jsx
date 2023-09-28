import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div className="mt-40 sm:mt-28 text-black px-5 AcehLight">
      
        <div className="text-center sm:text-xl text-3xl text-black py-5 px-20 Aceh">
          <h1>
            {" "}
            My Cart ({items.length}){" "}
            <button
              onClick={() => emptyCart(items)}
              className="ms-2 text-sm text-red-500 Quicksand"
            >
              <i className="fas fa-trash text-red-500 text-sm"></i>clear cart
            </button>
          </h1>
        </div>

        {isEmpty ? (
          <div className="text-center sm:text-3xl text-5xl text-gray-500 Quicksand h-96 py-20 mt-20">
            <i className="fas fa-cart-shopping pr-10"></i>Your Cart is Empty
          </div>
        ) : (
          ""
        )}
        <div>
          {items.map((item, id) => (
            <div key={id} className="flex px-10 gap-10 m-auto   Quicksand  hover cursor-pointer">
             <div className="">
              <img src={item.src} alt={item.title} className="w-48 sm:w-84 border  " />
             </div>
              <div className="flex flex-col   gap-2 sm:block">
                <h1 className="Aceh text-2xl">{item.name}</h1>
                <h1 className="text-2xl text-sky-500 Aceh">N{item.price}</h1>
                <div className="flex ">
                <button onClick={() => removeItem(item.id)} className="ms-2 m-auto">
                  <i className="fas fa-trash text-black text-xl"></i>
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className="m-2 px-2 text-black text-xl  m-auto "
                >   -
                </button>
                <h1 className="text-xl  m-auto">{item.quantity}</h1>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="m-2 px-2 text-black  m-auto text-xl "
                >
                  +
                </button>
                </div>
               
                

                <h1>Total: {item.itemTotal}</h1>
                <div className="rating rating-md">
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
      
      <div className="hidden  sm:block w-full  mb-10 ">
        <div>
          <h1 className="text-2xl py-2">Subtotal: {cartTotal} </h1>

          <button className="bg-black p-4 text-xl m-auto flex justify-center text-white">
            {" "}
            Proceed to Checkout
          </button>
        </div>
    </div>
    </div>
  );
};

export default Cart;
