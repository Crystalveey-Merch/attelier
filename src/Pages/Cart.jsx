import { useCart } from "react-use-cart";

const Cart = () => {
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem, } =
    useCart();

  return (
    <div className="mt-40 sm:mt-32 text-black px-5  mb-20 AcehLight">
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
        <div className="flex flex-col gap-3 overflow-y-auto sm:overflow-none w-1/2 sm:w-full " style={{height:" 36rem"}}>
          {items.map((item, id) => (
            <div
              key={id}
              className="flex sm:w-full sm:gap-5 sm:m-auto m-auto gap-10   AcehLight  hover cursor-pointer"
            >
              <div className="">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-48 sm:w-84 border  "
                />
              </div>
              <div className="flex flex-col m-auto  gap-2">
                <h1 className="Aceh text-lg capitalize">Product: {item.name}</h1>
                <h1 className="text-xl text-sky-500 Aceh">Price: N{item.price}</h1>
                <h1 className=" text-xl capitalize" >Color: {item.color}</h1>
                <h1 className="text-xl  ">Size: {item.size}</h1>

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
            <h1 className="text-md py-5">Subtotal: {cartTotal} </h1>
          <button className="bg-black p-2 text-md m-auto flex justify-center text-white">
            {" "}
            Proceed to Checkout
          </button>
          </div>
         
          
        </div>
      </div>

      <div className="hidden  sm:block w-full static mb-10 ">
        <div>
        
          <h1 className="text-xl Aceh py-2">Subtotal: N{cartTotal} </h1>

          <button className="bg-black btn m-auto text-xl flex capitalize justify-center text-white">
            {" "}
             Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
