import { NavLink } from "react-router-dom";
import {
  selectTotalItems,
  selectCart,
  removeProductFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cart.slice";
import { useSelector, useDispatch } from "react-redux";
import { getNoOfOrders, getProductDetails } from "../hooks";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { useAtUngData } from "../Components/ShareContext";

export const NewCart = () => {
  const { orders, products } = useAtUngData();
  const dispatch = useDispatch();
  const totalCartItems = useSelector(selectTotalItems);
  const cart = useSelector(selectCart);

  const handleRemoveProduct = (product) => {
    // ask user if they are sure they want to remove product from cart
    const confirm = window.confirm(
      `Are you sure you want to remove ${product.name} from cart?`
    );
    if (confirm) {
      dispatch(removeProductFromCart(product));
    }
  };

  const getAvailableQuantity = (product) => {
    return (
      getProductDetails(product.id, products)?.quantity -
      getNoOfOrders(product.id, orders)
    );
  };

  const getSameProductCartQuantity = (product) => {
    //  get their total quantity in cart of the same product
    return cart.reduce((acc, item) => {
      if (item.id === product.id) {
        return acc + item.cartQuantity;
      }
      return acc;
    }, 0);
  };

  const handleIncreaseQuantity = (product) => {
    if (getAvailableQuantity(product) <= getSameProductCartQuantity(product)) {
      toast.error("You can't add more than available quantity");
      return;
    }
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  //   price is in string format
  const subTotal = cart.reduce((acc, item) => {
    return (
      acc +
      getProductDetails(item.productId, products)?.price * item.cartQuantity
    );
  }, 0);

  //   console.log(subTotal);

  const total = subTotal;

  const purchaseData = {
    currency: "NGN",
    currencyLocale: "en-NG",
    cart,
    totalBeforeCheckout: total,
    // coupon: null,
    // couponDiscount: 0,
  };

  // setCookie("purchaseData", JSON.stringify(purchaseData));
  // Group items with the same product id
  const groupedCart = cart.reduce((acc, item) => {
    const found = acc.find((el) => el.id === item.id);
    if (found) {
      found.cartQuantity += item.cartQuantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const handleCheckout = () => {
    //for each product in groupedCart, check if the quantity is available
    // if not, return a toast message and stop the checkout process
    if (
      groupedCart.some(
        (item) => getAvailableQuantity(item) < getSameProductCartQuantity(item)
      )
    ) {
      toast.error("Some products are more than stock");
      return;
    }

    // setCookie("purchaseData", JSON.stringify(purchaseData));
    // router.push("/checkout");
    // console.log("Proceed to checkout");
  };

  const getImageBySelectedColor = (product, selectedColor) => {
    const image = product?.images?.find(
      (image) => image.name === selectedColor
    );
    return image?.frontImage;
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl z-20 font-semibold text-center font-quicksand md:text-2xl sm:text-xl">
          Shopping cart ({totalCartItems})
        </h2>
        <div className="flex justify-center items-center h-[70vh]">
          <h3 className="text-2xl font-semibold text-center font-quicksand sm:text-xl">
            Your cart is empty
          </h3>
        </div>
      </div>
    );
  }
  return (
    <main className="mt-24 min-h-[80vh] text-black flex flex-col gap-16 py-10 px-16 md:px-8 md:mt-12 sm:px-4">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl z-20 font-semibold text-center font-quicksand md:text-2xl">
          Shopping cart ({totalCartItems})
        </h2>
        <div className="w-full flex gap-10 justify-center lg:flex-col">
          <section className="w-[60%] flex flex-col gap-4 lg:w-full">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 py-3 border-b border-gray-200 sm:gap-4"
              >
                <img
                  src={getImageBySelectedColor(
                    getProductDetails(item.productId, products),
                    item.selectedColor
                  )}
                  alt={getProductDetails(item.productId, products)?.name}
                  className="w-32 min-w-32 h-36 object-cover rounded object-top md:w-28 md:min-w-28 md:h-32 sm:w-28 sm:min-w-2 sm:h-32"
                  //   width={200}
                  //   height={200}
                />
                <div className="w-full flex flex-col gap-6 min-h-36 justify-between">
                  <div className="w-full flex justify-between">
                    <div className="flex flex-col gap-2.5">
                      <NavLink to={`/products/${item.id}`}>
                        <p className="text-xl font-semibold uppercase text-black md:text-lg sm:text-base">
                          {getProductDetails(item.productId, products)?.name}
                        </p>
                      </NavLink>
                      {/* <p className="text-xs text-gray-500">
                    {item.quantity} x {convertPriceToLocale(item.price)}
                  </p> */}
                      {/* colour */}
                      <div className="flex flex-col gap-1">
                        {item.selectedColor && (
                          <p className="text-sm text-black md:text-[0.85rem] sm:text-xs">
                            Colour: {item.selectedColor}
                          </p>
                        )}
                        {/* size */}
                        {item.selectedSize && (
                          <p className="text-sm text-black md:text-[0.85rem] sm:text-xs">
                            Size: {item.selectedSize}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <p className="text-lg font-bold text-black md:text-base sm:text-sm">
                        {getProductDetails(
                          item.productId,
                          products
                        )?.price.toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        })}
                      </p>
                      {/* <p className="text-xs text-gray-500">
                      {item.quantity - getNoOfOrders(item.id, orders)} In Stock
                    </p> */}
                      <p className="text-xs text-gray-500">
                        {getProductDetails(item?.id, products)?.quantity -
                          getNoOfOrders(item?.id, orders) ===
                        0
                          ? "Out of Stock"
                          : `${
                              getProductDetails(item?.id, products)?.quantity -
                              getNoOfOrders(item?.id, orders)
                            } In Stock`}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <button
                      onClick={() => handleRemoveProduct(item)}
                      className="flex gap-2 items-center self-start p-2 rounded-md transition-all duration-300 hover:bg-gray-100 md:p-1.5"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-orange-500 h-[18px] w-[18px] md:h-4 md:w-4"
                      />
                      <span className="text-orange-500 text-sm font-medium md:text-[0.85rem]">
                        Remove
                      </span>
                    </button>
                    <div className="flex gap-2 items-center">
                      <button
                        className="p-2 rounded-md bg-gray-100"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold text-black">
                        {item.cartQuantity}
                      </span>
                      <button
                        className="p-2 rounded-md bg-gray-100"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <section className="w-[400px] p-6 border border-gray-200 top-0sticky h-max flex flex-col gap-5 lg:w-full md:p-4">
            <div className="p-2 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-center font-quicksand md:text-lg">
                Order Summary
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-lg text-black md:text-base">Subtotal</p>
                <p className="text-lg text-black md:text-base">
                  {subTotal.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </p>
              </div>
              {/* calculate items price in each cart */}
              {/* <div className="flex justify-between">
              <p className="text-lg text-black">Shipping</p>
              <p className="text-lg text-black">-</p>
            </div> */}
              {/* coupon code */}
              {/* <div className="relative">
              <input
                type="text"
                placeholder="Enter coupon code"
                disabled
                className="w-full p-3 pr-5 border border-gray-200 rounded-md"
              />
              <button
                className="absolute right-1 top-1 p-2 bg-gray-100 rounded-md"
                disabled
              >
                Apply
              </button>
            </div> */}
            </div>
            {/* <div className="flex justify-between">
            <p className="text-lg text-black">Total</p>
            <p className="text-lg text-black">{convertNumberToNaira(total)}</p>
          </div> */}
            {groupedCart.some(
              (item) =>
                getAvailableQuantity(item) < getSameProductCartQuantity(item)
            ) ? (
              <button
                className="w-full p-3 bg-black text-white rounded-md font-semibold text-center md:p-2.5 md:font-medium md:text-sm"
                onClick={handleCheckout}
              >
                Proceed to checkout
              </button>
            ) : (
              <NavLink
                to={{
                  pathname: "/checkout",
                }}
                className=""
                state={{ purchaseData }}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <button className="w-full p-3 bg-black text-white rounded-md font-semibold text-center md:p-2.5 md:font-medium md:text-sm">
                  Proceed to checkout
                </button>
              </NavLink>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};
