import { datas } from "../assets/data.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Productdes = () => {
    const products = datas.products;
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState();
    const { addItem } = useCart();
    const [text, setText] = useState("Select a size");
    const [totalPrice, setTotalPrice] = useState(0);
    const { productId } = useParams();
    const [isActive, setIsActive] = useState(null);
    //   const [currentImage, setCurrentImage] = useState(product.src); // Initial image source


    //   console.log('productId:', ProductId);

    useEffect(() => {
        // Find the product based on the productId
        const allProducts = [...datas.children, ...datas.women, ...datas.men];
        const selectedProduct = allProducts.find((p) => p.id === parseInt(productId));
        console.log(productId);
        if (selectedProduct) {
            setProduct(selectedProduct); // Set the product data
            setTotalPrice(selectedProduct.price * quantity); // Calculate the initial total price
        } else {
            console.error("Product not found.");
        }
        // setText(...products, );
        // setText(...products, size);
    }, [productId, quantity, products, text]);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
        // setQuantity(...products, quantity);

        if (product) {
            setTotalPrice(newQuantity * product.price);
        } else {
            setTotalPrice(0);
        }
    };

    if (!product) {
        return <div>Product not found.</div>;
    }

    const addToCart = () => {
        addItem(product);

        toast(
            <div>
                Added to Cart!{" "}
                <button className="bg-black p-1 text-white">View Cart</button>
            </div>
        );
    };
    const updateText = (size, index) => {
        setText(`${size}`);
        setIsActive(index);
    };

    //   const updateImage = (newImage) => {
    //     setCurrentImage(newImage);
    //   };

    return (
        <div
            className="mt-40 Quicksand text-black sm:mt-28 px-20 sm:px-0 flex sm:block justify-center"
            key={product.id}
        >
            <div className="border m-20 sm:m-5 sm:w-full w-1/2">
                <img
                    src={product.src}
                    style={{ height: "500px", width: "400px" }}
                ></img>
            </div>
            <div className="m-20 sm:mx-5 w-1/2 sm:w-full ">
                <div className="text-black Aceh text-2xl ">{product.name}</div>
                <div className="text-2xl my-4 ">
                    <i className="fas fa-naira-sign" />
                    {product.price}
                </div>

                <div className="">
                    <h1 className="text-black flex m-auto Aceh ">
                        Color:
                        <ul className="flex gap-2 px-1">
                            {product.color.map((item, id) => (
                                <li key={id} className="text-sm capitalize Quicksand ">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </h1>
                    <h1 className="text-black flex m-auto Aceh ">
                        Fabric:
                        <ul className="flex gap-2 px-1">
                            {product.fabricType.map((item, id) => (
                                <li key={id} className="text-sm capitalize Quicksand ">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </h1>
                    <div className="flex  my-5 flex-col space-x-6">
                        <h1 className="Aceh">Size: {text}</h1>
                        <h1
                            onClick={() => document.getElementById("my_modal_2").showModal()}
                            className="text-gray-400 ml-20 text-right underline"
                        >
                            Size Guide
                        </h1>
                        <div className="flex gap-5">
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-center text-white text-lg">Size Guide</h3>
                                    <img className="py-4"
                                        src="/Images/Avatar/IMG_4684.jpg"
                                    />
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            <button
                                className={
                                    isActive === 0
                                        ? "border bg-black px-4 py-2 text-white "
                                        : "border border-black px-4 py-2 text-black "
                                }
                                onClick={() => updateText("Small", 0)}
                            >
                                Small
                            </button>
                            <button
                                className={
                                    isActive === 1
                                        ? "border bg-black px-4 py-2 text-white "
                                        : "border border-black px-4 py-2 text-black "
                                }
                                onClick={() => updateText("Medium", 1)}
                            >
                                Medium
                            </button>
                            <button
                                className={
                                    isActive === 2
                                        ? "border bg-black px-4 py-2 text-white "
                                        : "border border-black px-4 py-2 text-black "
                                }
                                onClick={() => updateText("Large", 2)}
                            >
                                Large
                            </button>
                        </div>
                    </div>
                </div>
               

                <div className="flex gap-5 my-10 sm:flex-col  sm:gap-5  justify-center">
                    <div className="btn w-40 sm:w-full">Order Now </div>
                    <div onClick={addToCart} className="btn w-32 sm:w-full">
                        <i className="fas fa-plus" />
                        Cart{" "}
                    </div>
                    <ToastContainer />
                </div>
                <div>
                    <div>
                        <h1 className="Aceh">Product Description</h1>
                        <hr></hr>
                        <ul>
                            {product.description.map((item, id) => (
                                <li key={id} className="text-sm py-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Productdes;
