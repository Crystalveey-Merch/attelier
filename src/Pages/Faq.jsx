import React from "react";

const Faq = () => {
  return (
    <div className="my-40 sm:my-28 sm:mt-28 AcehLight">
      <div>
        <h1 className="text-black text-2xl Aceh  text-center pt-10">FAQ</h1>

<div className="mx-40 sm:mx-5 my-10 sm:my-5  flex flex-col gap-10 sm:gap-5 text-black ">
        <div className="collapse collapse-arrow bg-gray-100 text-black ">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title Aceh  text-xl font-medium">
            How  do i place an order?
          </div>
          <div className="collapse-content">
            <p className="text-sm">
              To place an order, simply browse through our categories, new
              arrivals or collections, select the items you want to purchase,
              choose the size and color (if applicable), and click on the add to
              cart. Once you have completed your shopping, proceed to the
              checkout page and follow the instructions to finilize your order.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title Aceh text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content text-sm">
            <p>
              We accept various payment methods including card payment ( visa,
              mastercard, verve), paystack, and online bank transfers. You can
              opt for the most convenient option during the checkout process.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title Aceh text-xl font-medium">
            How long will delivery take?
          </div>
          <div className="collapse-content text-sm">
            <p>
              Delivery time varies depending on your location and the shipping
              method you choose. Generally, we strive to process and ship all
              orders within 1-3 buisness days.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title Aceh text-xl font-medium">
            What is untagg?
          </div> 
          <div className="collapse-content text-sm">
            <p>
              Untagg is a fashion recommerce platform where you can buy and sell
              pre- owned fashion items. It allows individuals to sell their
              gently used clothings to others who are interested in purchasing
              second hand iitems.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title Aceh text-xl font-medium">
            Why should you shop on untagg?
          </div>
          <div className="collapse-content text-sm">
            <p>
              <li>
                It is an affordable way to shop for high quality fashion items
                at a fraction of the original price{" "}
              </li>
              <li>
                It promotes sustainable fashion by extending the life span of
                clothings while reducing textile waste
              </li>
              <li>It offers a wide variety of unique and vintage pieces</li>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title Aceh text-xl font-medium">
            How do i sell my fashion items on untagg?
          </div>
          <div className="collapse-content">
            <p>
              To sell your fashion items on untagg, you have to first create an
              account on the website and after that you can upload photos and
              description if you meet our clothing and upload standard.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
