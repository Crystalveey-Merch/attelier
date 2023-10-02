import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { PAYSTACK_PUBLIC_KEY } from "/src/Pages/Payment/payment.js";
import { Link } from "react-router-dom";
import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { datas } from "../../assets/data";

const goBack = () => {
    window.history.back();
  };
export const OrderNow = () => {
    const [product, setProduct] = useState("");

    const { productId } = useParams();
   
    useEffect(() => {
        console.log("productId:", productId);
    console.log("datas:", datas);

        const allProducts = [
          ...datas.children,
          ...datas.women,
          ...datas.men,
          ...datas.untagged,
        ];
        const selectedProduct = allProducts.find(
          (p) => p.id === parseInt(productId)
        );
    
        if (selectedProduct) {
          // Now you can safely use selectedProduct
          setProduct(selectedProduct);
        }
      }, [productId]);

    //   if (!product) {
    //     return (
    //       <div>
    //         Loading...
    //         {/* You can add a loading spinner or message here */}
    //       </div>
    //     );
    //   }

    return (
        <><div className="mt-24  pt-5 sm:mt-16 w-full AcehLight ">
            <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
                <i className="fas fa-arrow-left text-black" />
            </div>
            <div className="w-full px-40 sm:px-0 m-auto " key={product.id}>
                <div className=" m-auto justify-center sm:w-full ">
                    <div className="overflow-x-auto mx-10  m-auto">
                        <table className="table text-black ">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Product</th>

                                    <th>Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* row 1 */}
                                <tr>

                                    <td>{product.length}</td>
                                    {/* <td>{items.length}</td> */}
                                    <td>{product.price}</td>
                                </tr>
                                <tr>

                                    <td>Delivery Fee</td>
                                    {/* <td>{items.length}</td> */}
                                    <td>N 500</td>
                                </tr>
                            </tbody>

                        </table>
                        
                        <button className=" hidden bg-black p-2 text-md m-auto flex justify-center text-white">
                            {" "}
                            Proceed to Checkout
                        </button>
                    </div>
                </div>

            </div>
        </div><div className="  sm:block w-full static mb-10  px-40 sm:px-5">
                <div>
                    <h1 className="text-lg text-black Aceh py-2">Subtotal: {product.price} </h1>
                    <Link to="/payment">
                        <button className="bg-black px-10 py-3  m-auto text-xl sm:text-sm flex capitalize justify-center text-white">
                            {" "}
                            Pay with PAYSTACK
                        </button>
                    </Link>
                </div>
            </div></>
 )
}
