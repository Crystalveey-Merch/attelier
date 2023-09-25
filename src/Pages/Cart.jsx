import React from "react";
import { useState } from "react";
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
    <div className="mt-40 sm:mt-28 text-black">
      <div>
      <div className="text-center sm:text-xl text-3xl bg-black text-white py-5 px-20 Aceh">
      <h1> My Cart {items.quantity}   <button  onClick={()=> emptyCart(items)} className="ms-2 text-sm text-red-500 Quicksand"><i className="fas fa-trash text-red-500 text-sm"></i>clear cart</button></h1>
      </div>
        
        {isEmpty ?( <div className="text-center sm:text-3xl text-5xl text-gray-500 Quicksand h-96 py-20 mt-20"><i className="fas fa-cart-shopping pr-10"></i>Your Cart is Empty</div>) : "The Cart"}
        <div>
          {items.map((item, id) => (
            <div key={id} className="flex   w-full justify-center Quicksand gap-2 hover cursor-pointer">
                <img src={item.src} alt={item.title} className="w-28 "/>
                
                <div className="flex m-auto  gap-32 sm:block">
                <h1>{item.name}</h1>
                <h1 className="text-xl Aceh">N{item.price}</h1>
                <h1>Quantity: {item.quantity}</h1>
                <button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="m-2 px-2 text-white bg-black">-</button>
                <button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="m-2 px-2 text-white bg-black">+</button>
                <button  onClick={()=> removeItem(item.id)} className="ms-2"><i className="fas fa-trash text-red-500"></i></button>

                <h1>Total: {item.itemTotal}</h1>
                
                </div>
                <hr></hr>
        
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Cart;
