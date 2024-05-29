/* eslint-disable react/prop-types */
import {
  // convertNumberToNaira,
  // convertPriceToLocale,
  getProductDetails,
} from "../../hooks";
import { useAtUngData } from "../ShareContext";
import { toast } from "react-toastify";

export const OrderSummary = ({
  purchaseData,
  total,
  deliveryMethod,
  totalBeforeCheckout,
}) => {
  const { products } = useAtUngData();

  const handleApplyCoupon = () => {
    toast.error("Coupon code not valid");
  };

  const getImageBySelectedColor = (product, selectedColor) => {
    const image = product?.images?.find(
      (image) => image.name === selectedColor
    );
    return image?.frontImage;
  };

  return (
    <div className="w-[400px] p-6 border border-gray-200 top-0sticky h-max flex flex-col gap-5 lg:w-full">
      <h4 className="text-xl font-semibold text-black">Order Summary</h4>
      <hr className="border border-[rgba(145,158,171,0.2)] border-dashed" />
      <div className="flex flex-col gap-3">
        {purchaseData.cart.map &&
          purchaseData.cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div className="flex gap-2">
                <div className="w-16 h-16 relative">
                  <img
                    src={getImageBySelectedColor(
                      getProductDetails(item.productId, products),
                      item.selectedColor
                    )}
                    alt="product"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <p className="text-sm text-black">
                    {getProductDetails(item.productId, products)?.name}
                  </p>
                  {item.selectedColor && (
                    <p className="text-sm text-black">
                      Color: {item.selectedColor}
                    </p>
                  )}
                  {item.selectedSize && (
                    <p className="text-sm text-black">
                      Size: {item.selectedSize}
                    </p>
                  )}
                  <p className="text-sm text-black">
                    {getProductDetails(item.id, products)?.price.toLocaleString(
                      "en-NG",
                      {
                        style: "currency",
                        currency: "NGN",
                      }
                    )}
                    x {item.cartQuantity}
                  </p>
                </div>
              </div>
              <p className="text-sm text-black">QTY: {item.cartQuantity}</p>
            </div>
          ))}
      </div>
      <hr className="border border-[rgba(145,158,171,0.2)] border-dashed" />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="text-sm text-black font-semibold">Subtotal</p>
          <p className="text-base text-black font-semibold">
            {totalBeforeCheckout.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-black font-semibold">Delivey</p>
          <p className="text-base text-black font-semibold">
            {deliveryMethod === "home-delivery" ? "₦5000" : "₦0"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-black font-semibold">Coupon Discount</p>
          <p className="text-base text-black font-semibold">- ₦0</p>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="w-full p-3 pr-[70px] border border-gray-200 rounded-md bg-white"
        />
        <button
          className="absolute right-1 top-1 p-2 bg-gray-100 rounded-md"
          onClick={handleApplyCoupon}
        >
          Apply
        </button>
      </div>
      <hr className="border border-[rgba(145,158,171,0.2)] border-dashed" />
      <div className="flex justify-between">
        <h4 className="text-lg text-black font-semibold">Total</h4>
        <h4 className="text-lg text-black font-semibold">
          {total.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })}
        </h4>
      </div>
    </div>
  );
};
