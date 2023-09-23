import { datas } from "../assets/data.js";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Productdes = () => {
  const products = datas.products;
 

  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  
  return (
    <div
      className="mt-40 Quicksand text-black sm:mt-28 px-20 sm:px-0 flex sm:block justify-center"
      key={product.id}
    >
      <div className="border m-20 sm:m-5 ">
        <img
          src={product.src}
          style={{ height: "500px", width: "400px" }}
        ></img>
      </div>
      <div className="m-20 sm:mx-5">
        <div className="text-black Aceh text-2xl ">{product.name}</div>
        <div className="text-2xl my-4 ">
          <i className="fas fa-naira-sign" />
          {product.price}
        </div>

        <div>
          <h1 className="text-black Aceh ">
            Color: <span className="Quicksand">{product.color}</span>{" "}
          </h1>
          <div className="flex space-x-6">
            <h1 className="Aceh">Size:</h1>
            <h1 className="text-gray-400">Size Guide</h1>
          </div>
        </div>
        <div className="flex gap-10 my-10 sm:flex-col sm:gap-5 w-full justify-center">
          <div className="btn w-40 sm:w-full">Order Now </div>
          <div  className="btn w-40 sm:w-full">
            <i className="fas fa-plus" />
            Cart{" "}
          </div>
        </div>
        <div>
          <div>
            <h1 className="Aceh">Product Description</h1>
            <hr></hr>
              <ul>
                {product.description.map((item, id) => (
                  <li key={id} className="text-sm py-2">{item}</li>
                ))}
              </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdes;
