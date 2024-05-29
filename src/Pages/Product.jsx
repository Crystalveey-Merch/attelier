import { useState, useEffect } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";
// import {
//   convertPriceToLocale,
//   getNoOfOrders,
//   getProductDetails,
// } from "@/hooks";
import { getColorsHex, convertForURL } from "../hooks";
import { faPlus, faMinus, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faWhatsapp,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import { toast } from "react-toastify";
// import { addProductToCart } from "@/config/redux/cart.slice";
// import { useDispatch } from "react-redux";
// import { setCookie } from "cookies-next";
// import { SizeGuideModal } from "./SizeGuideModal";
import { useAtUngData } from "../Components/ShareContext";

export const Product = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { orders, products } = useAtUngData();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products && products.length > 0) {
      // return product that match the product id in the URL
      setProduct(
        products.find(
          (product) => product.id === productId && product.published
        )
      );
    }
    setIsLoading(false);
  }, [products, productId]);

  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  // if size length is 1, set the first size as the selected size else set the selected size to an empty string
  const sizes = product?.sizes;

  useEffect(() => {
    if (sizes?.length === 1) {
      setSelectedSize(sizes[0]);
    } else {
      setSelectedSize("");
    }
  }, [sizes]);

  const [selectedColor, setSelectedColor] = useState("");
  // if color length is 1, set the first color as the selected color else set the selected color to an empty string
  const colors = product?.colors;

  useEffect(() => {
    if (colors?.length === 1) {
      setSelectedColor(colors[0]);
    } else {
      setSelectedColor("");
    }
  }, [colors]);

  const [currentImage, setCurrentImage] = useState(
    product?.images[0].frontImage
  );
  const [currentColorImages, setCurrentColorImages] = useState(
    product?.images[0]
  );
  const [currentView, setCurrentView] = useState("front");

  useEffect(() => {
    if (selectedColor !== "") {
      // set currunt image based on the selected color
      const matchedColor = product?.images.find(
        (image) => image.name === selectedColor
      );
      if (matchedColor) {
        setCurrentImage(
          currentView === "front"
            ? matchedColor.frontImage
            : currentView === "back"
            ? matchedColor.backImage
            : matchedColor.sideImage
        );
        setCurrentColorImages(matchedColor);
      }
    } else {
      setCurrentColorImages(product?.images[0]);
      if (product?.images[0]) {
        setCurrentImage(
          currentView === "front"
            ? product?.images[0].frontImage
            : currentView === "back"
            ? product?.images[0].backImage
            : product?.images[0].sideImage
        );
      }
    }
  }, [selectedColor, currentView, product]);

  const handleViewChange = (view) => {
    setCurrentView(view);
    console.log();
  };

  // dropdowns
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const link = `https://atelier.crystalveey.com/products/${product?.id}`;

  // product cartId will be id plus size plus color
  // const cartId = `${product.id}-${selectedSize}-${selectedColor}`;
  //   const remaingQuantity = product.quantity - getNoOfOrders(product.id, orders);

  //   const handleAddToCart = async () => {
  //     //  check if the product is in stock
  //     if (remaingQuantity < 1) {
  //       toast.error("Product is out of stock");
  //       return;
  //     }

  //     if (product.sizes.length > 1 && !selectedSize) {
  //       toast.error("Please select a size");
  //       return;
  //     }
  //     if (product.colors.length > 1 && !selectedColor) {
  //       toast.error("Please select a color");
  //       return;
  //     }

  //     // const updatedProduct = {
  //     //   ...product,
  //     //   productId: product.id,
  //     //   selectedSize,
  //     //   selectedColor,
  //     //   cartQuantity: 1,
  //     // };
  //     const updatedProduct = {
  //       colors: product.colors,
  //       sizes: product.sizes,
  //       name: product.name,
  //       price: product.price,
  //       images: product.images,
  //       quantity: product.quantity,
  //       id: product.id,
  //       productId: product.id,
  //       selectedSize,
  //       selectedColor,
  //       cartQuantity: 1,
  //     };

  //     dispatch(addProductToCart(updatedProduct));
  //   };

  const purchaseData = {
    currency: "NGN",
    currencyLocale: "en-NG",
    // add quantity to product
    cart: [
      {
        colors: product?.colors,
        sizes: product?.sizes,
        name: product?.name,
        price: product?.price,
        images: product?.images,
        quantity: product?.quantity,
        id: product?.id,
        productId: product?.id,
        selectedSize,
        selectedColor,
        cartQuantity: 1,
      },
    ],
    totalBeforeCheckout: product?.price,
  };

  //   const handleOrderNow = () => {
  //     // check if the product is in stock
  //     if (remaingQuantity < 1) {
  //       toast.error("Product is out of stock");
  //       return;
  //     }

  //     if (
  //       getProductDetails(product.id, products)?.sizes.length > 1 &&
  //       !selectedSize
  //     ) {
  //       toast.error("Please select a size");
  //       return;
  //     }
  //     if (
  //       getProductDetails(product.id, products)?.colors.length > 1 &&
  //       !selectedColor
  //     ) {
  //       toast.error("Please select a color");
  //       return;
  //     }
  //     setCookie("purchaseData", JSON.stringify(purchaseData));
  //     localStorage.setItem("purchaseData", JSON.stringify(purchaseData));
  //     navigate("/checkout");
  //   };

  const [openSizeGuide, setOpenSizeGuide] = useState(false);

  if (isLoading === true) {
    return (
      <div className="flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-700">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isLoading && !product) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-black text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div className="mt-24 text-black sm:mt-16 px-10 py-6 w-full max-w-[1440px] mx-auto flex flex-col gap-6 lg:px-4">
      <div className="flex gap-1.5 items-center">
        <NavLink className="text-black text-xs" to="/products">
          Products
        </NavLink>
        <p className="text-black text-xs">/</p>
        <NavLink
          to={`/${convertForURL(product.category)}`}
          className="text-black text-xs"
        >
          {product.category}
        </NavLink>
        <p className="text-black text-xs">/</p>
        <p className="text-black text-xs font-semibold">{product.name}</p>
      </div>
      <div className="w-full flex gap-10 lg:gap-4 md:flex-col">
        <section className="w-[60%] p-3 border flex flex-col gap-3 justify-center items-center lg:w-[50%] md:w-full">
          <img
            src={currentImage}
            alt={product.name}
            className="w-max h-[500px] min-h-[500px] object-cover lg:h-[400px] md:h-[550px] md:max-h-[550px] sm:h-[450px]"
            // layout="responsive"
            width={600}
            height={500}
          />
          <div className="flex flex-wrap justify-center gap-3 sm:gap-2">
            {/* show front back and side view of current image */}
            <button
              onClick={() => handleViewChange("front")}
              className={`${
                currentView === "front"
                  ? "border border-black"
                  : "border border-gray-300"
              } h-20 w-20 rounded-md p-1 flex justify-center`}
            >
              <img
                src={currentColorImages?.frontImage}
                alt={product.name}
                className="h-full object-cover"
              />
            </button>
            <button
              onClick={() => handleViewChange("back")}
              className={`${
                currentView === "back"
                  ? "border border-black"
                  : "border border-gray-300"
              } h-20 w-20 rounded-md p-1 flex justify-center`}
            >
              <img
                src={currentColorImages?.backImage}
                alt={product.name}
                className="h-full object-cover"
              />
            </button>
            <button
              onClick={() => handleViewChange("side")}
              className={`${
                currentView === "side"
                  ? "border border-black"
                  : "border border-gray-300"
              } h-20 w-20 rounded-md p-1 flex justify-center`}
            >
              <img
                src={currentColorImages?.sideImage}
                alt={product.name}
                className="h-full object-cover"
              />
            </button>
          </div>
        </section>
        <section className="w-[40%] py-2 flex flex-col gap-8 lg:w-[50%] md:w-full">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[1.4rem] font-semibold uppercase font-tabac lg:text-xl">
                {product.name}
              </h2>
              <p className="text-lg font-bold">
                {product.price.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-medium text-black capitalize AcehLight ">
                <span className="uppercase font-semibold">Colour:</span> &nbsp;
                {selectedColor}
              </h1>
              <div className="flex gap-2">
                {colors.slice(0, 7).map((color, id) => (
                  <button
                    key={id}
                    className={`rounded-full w-8 h-8 ${
                      selectedColor === color
                        ? "border border-black"
                        : "border border-gray-300"
                    }`}
                    style={{ background: getColorsHex(color) }}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
            {/* size */}
            <div className="w-full flex flex-col gap-2.5">
              <div className="w-full flex justify-between">
                <p className="text-sm text-black uppercase font-semibold">
                  Select Size:{" "}
                </p>
                <button
                  onClick={() => setOpenSizeGuide(true)}
                  className="text-sm text-gray-600 font-semibold pb-0.5 border-b border-gray-600"
                >
                  Size Guide
                </button>
              </div>
              <div className="w-full flex gap-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black"
                    } text-sm font-semibold py-2 px-4 rounded-md`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* add to cart, order now */}
          <div className="flex flex-col gap-2">
            <button
              //   onClick={handleAddToCart}
              className="w-full bg-black text-white font-semibold text-sm uppercase py-2 rounded-sm transition duration-300 ease-in-out hover:bg-white hover:text-black border border-black"
            >
              Add to Cart
            </button>
            <button
              className="w-full border border-black text-black font-semibold text-sm uppercase py-2 rounded-sm transition duration-300 ease-in-out hover:bg-black hover:text-white"
              //   onClick={handleOrderNow}
            >
              Order Now
            </button>
          </div>
          {/* collapsible */}
          <div className="flex flex-col gap-3">
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold uppercase text-black">
                    Description
                  </p>
                  <FontAwesomeIcon
                    icon={isDescriptionOpen ? faMinus : faPlus}
                    className="w-4 h-4 text-black"
                  />
                </div>
              }
              onOpening={() => setIsDescriptionOpen(true)}
              onClosing={() => setIsDescriptionOpen(false)}
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm text-black">{product?.description}</p>

                {product?.collection && (
                  <p className="text-sm text-black">- {product?.collection}</p>
                )}
                <p className="my-2 text-sm text-black">
                  Product ID:
                  {product.id}
                </p>
              </div>
            </Collapsible>
            <hr />
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold uppercase text-black">
                    Shipping & Returns
                  </p>
                  <FontAwesomeIcon
                    icon={isShippingOpen ? faMinus : faPlus}
                    className="w-4 h-4 text-black"
                  />
                </div>
              }
              onOpening={() => setIsShippingOpen(true)}
              onClosing={() => setIsShippingOpen(false)}
            >
              <div className="flex flex-col gap-2 pt-1">
                <p className="text-sm text-black">
                  All orders are processed within 24 hours of order
                  confirmation. We offer free returns within 7 days of delivery.
                </p>
              </div>
            </Collapsible>
            <hr />
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold uppercase text-black">
                    Share
                  </p>
                  <FontAwesomeIcon
                    icon={isShareOpen ? faMinus : faPlus}
                    className="w-4 h-4 text-black"
                  />
                </div>
              }
              onOpening={() => setIsShareOpen(true)}
              onClosing={() => setIsShareOpen(false)}
            >
              <div className="w-full flex gap-2 justify-between pt-2 px-2.5">
                <FacebookShareButton url={link} className="">
                  <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-5 h-5 text-black"
                    />
                  </button>
                </FacebookShareButton>

                <TwitterShareButton url={link} className="">
                  <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="w-5 h-5 text-black"
                    />
                  </button>
                </TwitterShareButton>

                <WhatsappShareButton url={link} className="">
                  <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="w-5 h-5 text-black"
                    />
                  </button>
                </WhatsappShareButton>

                <TelegramShareButton url={link} className="">
                  <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="w-5 h-5 text-black"
                    />
                  </button>
                </TelegramShareButton>

                <LinkedinShareButton url={link} className="">
                  <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-5 h-5 text-black"
                    />
                  </button>
                </LinkedinShareButton>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(link);
                    toast.success("Link copied to clipboard");
                  }}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faLink}
                    className="w-5 h-5 text-black"
                  />
                </button>
              </div>
            </Collapsible>
            <hr />
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold uppercase text-black">
                    Need Help?
                  </p>
                  <FontAwesomeIcon
                    icon={isHelpOpen ? faMinus : faPlus}
                    className="w-4 h-4 text-black"
                  />
                </div>
              }
              onOpening={() => setIsHelpOpen(true)}
              onClosing={() => setIsHelpOpen(false)}
            >
              <div className="flex flex-col gap-2 pt-1">
                <div className="text-sm text-black">
                  {/* <p> */}
                  For any inquiries, customer service or support, order
                  tracking, and more, please contact us {/* </p> */}
                  <NavLink
                    to="/contact"
                    className="text-black font-semibold underline"
                  >
                    here
                  </NavLink>
                </div>
              </div>
            </Collapsible>
            <hr />
          </div>
        </section>
      </div>
      {/* <SizeGuideModal open={openSizeGuide} setOpen={setOpenSizeGuide} /> */}
    </div>
  );
};
