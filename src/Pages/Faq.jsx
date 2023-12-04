import React from "react";
import { Helmet } from "react-helmet-async";

const goBack = () => {
  window.history.back();
};
const Faq = () => {
  return (
    <div className="mt-24 sm:mt-16  AcehLight">
      <Helmet>
        <title>FAQs - Atelier</title>
        <meta
          name="description"
          content="Crystalveeys’ atelier is a fashion merchandise and recommerce site that allows individuals to shop their favorite fashion pieces and also sell previously owned clothing items to interested buyers."
        />
        <meta
          name="keywords"
          content="ecommerce, online shopping, retail, products, services, atelier"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Crystalveey Atelier" />
        <meta name="url" content="https://atelier.crystalveey.com/faq" />
        <meta name="og:title" content="FAQs - Atelier" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://explore.crystalveey.com/faq" />
        <meta name="og:image" content="public/Images/logo.jpeg" />
        <meta
          name="og:description"
          content="Crystalveeys’ atelier is a fashion merchandise and recommerce site that allows individuals to shop their favorite fashion pieces and also sell previously owned clothing items to interested buyers."
        />
        <meta name="og:site_name" content="Crystalveery Atelier" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://atelier.crystalveey.com/faq"
        />
        <meta name="twitter:title" content="FAQs - Atelier" />
        <meta
          name="twitter:description"
          content="Crystalveeys’ atelier is a fashion merchandise and recommerce site that allows individuals to shop their favorite fashion pieces and also sell previously owned clothing items to interested buyers."
        />
        <meta name="twitter:site" content="@crystalveey" />
        <meta name="twitter:creator" content="@crystalveey" />
        <meta name="twitter:image" content="public/Images/logo.jpeg" />
        <meta name="twitter:image:alt" content="Atelier" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="600" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="public/Images/logo.jpeg"
        />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="canonical" href="https://atelier.crystalveey.com/faq" />
        <link rel="apple-touch-icon" href="public/Images/logo.jpeg" />
        <link rel="icon" href="public/Images/logo.jpeg" />
        <script type="application/ld+json">
          {`
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How do i place and order?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "To place an order, simply browse through our categories, new arrivals or collections, select the items you want to purchase, choose the size and color (if applicable), and click on the add to cart. Once you have completed your shopping, proceed to the checkout page and follow the instructions to finilize your order."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What payment options do you accept?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We accept various payment methods including card payment ( visa, mastercard, verve), paystack, and online bank transfers. You can opt for the most convenient option during the checkout process."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long will delivery take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Delivery time varies depending on your location and the shipping method you choose. Generally, we strive to process and ship all orders within 1-3 buisness days."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is Untagg?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Untagg is a fashion recommerce platform where you can buy and sell pre- owned fashion items. It allows individuals to sell their gently used clothings to others who are interested in purchasing second hand iitems.?",
"
                                }
                            },
                            // {
                            //     "@type": "Question",
                            //     "name": "Why should i shop on untagg?",
                            //     "acceptedAnswer": {
                            //         "@type": "Answer",
                            //         "text": "It is an affordable way to shop for high quality fashion items at a fraction of the original price, It promotes sustainable fashion by extending the life span of clothings while reducing textile waste, It offers a wide variety of unique and vintage pieces."
                            //     }
                            // },
                            {
                                "@type": "Question",
                                "name": "How do i sell  my fashion items on untagg?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "To sell your fashion items on untagg, you have to first create an account on the website and after that you can upload photos and description if you meet our clothing and upload standard."
                                }
                            }
                        ]
                    }
                    `}
        </script>
      </Helmet>
      <div>
        <div className="w-1/2 sm:mx-5 py-20 sm:my-5 m-auto  flex flex-col gap-10 sm:gap-5 text-black ">
          <div className="hidden   sm:block pt-5 " onClick={goBack}>
            <i className="fas fa-arrow-left text-black" />
          </div>
          <h1 className="text-black text-2xl Aceh  text-center ">FAQ</h1>
          <div className="collapse collapse-arrow bg-gray-100 text-black cursor-pointer">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title Aceh  text-sky-500 text-xl font-medium">
              How do i place an order?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                To place an order, simply browse through our categories, new
                arrivals or collections, select the items you want to purchase,
                choose the size and color (if applicable), and click on the add
                to cart. Once you have completed your shopping, proceed to the
                checkout page and follow the instructions to finilize your
                order.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title Aceh text-xl text-sky-500 font-medium">
              What payment methods do you accept?
            </div>
            <div className="collapse-content text-sm">
              <p className="text-xl">
                We accept various payment methods including card payment ( visa,
                mastercard, verve), paystack, and online bank transfers. You can
                opt for the most convenient option during the checkout process.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title Aceh text-xl text-sky-500 font-medium">
              How long will delivery take?
            </div>
            <div className="collapse-content text-sm">
              <p className="text-xl">
                Delivery time varies depending on your location and the shipping
                method you choose. Generally, we strive to process and ship all
                orders within 1-3 buisness days.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title Aceh text-xl text-sky-500 font-medium">
              What is untagg?
            </div>
            <div className="collapse-content text-sm">
              <p className="text-xl">
                Untagg is a fashion recommerce platform where you can buy and
                sell pre- owned fashion items. It allows individuals to sell
                their gently used clothings to others who are interested in
                purchasing second hand iitems.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title Aceh text-xl text-sky-500 font-medium">
              Why should you shop on untagg?
            </div>
            <div className="collapse-content text-sm">
              <p className="text-xl">
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
            <div className="collapse-title Aceh text-xl text-sky-500  font-medium">
              How do i sell my fashion items on untagg?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                To sell your fashion items on untagg, you have to first create
                an account on the website and after that you can upload photos
                and description if you meet our clothing and upload standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
