import { Footer, Header } from "./Components";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import CustomMade from "./Pages/CustomMade";
import NewArrival from "./Pages/NewArrival";
import Categories from "./Pages/Categories";
import Collection from "./Pages/Collection";
import Productdes from "./Pages/Productdes";
import Aboutus from "./Pages/Aboutus";
import Shoes from "./Pages/Shoes";
import Bags from "./Pages/Bags";
import Accessories from "./Pages/Accessories";
import Cart from "./Pages/Cart";
import Refurblish from "./Pages/untagged/Refurblish";
import Buy from "./Pages/untagged/Buy";
import Sell from "./Pages/untagged/Sell";
import Blog from "./Pages/Blog";
import Faq from "./Pages/Faq";
import Ready2Wear from "./Pages/Ready2Wear";
import CategoriesList from "./Pages/CategoriesList";
import UntagBuy from "./Pages/untagged/Buy";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import Consultation from "./Pages/Consultation";
import { PaymentDetails } from "./Pages/Payment/paymentDetails";

function App() {
  const [animationIndex, setAnimationIndex] = useState(0);

  const colors = ["bg-gray-500", "bg-sky-600", "bg-gray-500", "bg-black"];

  const texts = [
    "Free Shipping on all orders over $100",
    "Discover our latest collection of trendy fashion",
    "Get exclusive deals and discounts",
    "Experience luxury at its finest",
    "Shop now for the best selection",
  ];

  useEffect(() => {
    const changeAnimation = () => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const interval = setInterval(changeAnimation, 4000);

    return () => clearInterval(interval);
  }, [colors.length]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-20 ${colors[animationIndex]} Aceh p-1 `}
      >
        <p className="text-gray-100 text-center text-sm">
          {texts[animationIndex]}
        </p>
      </div>
      <div className=" min-h-screen bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/custommade" element={<CustomMade />} />
          <Route path="/newArrival" element={<NewArrival />} />
          <Route path="/collection/:collectionName" element={<Collection />} />
          <Route path="/productdes/:productId" element={<Productdes />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/category/:categoryName" element={<Categories />} />
          <Route path="/refurblish" element={<Refurblish />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/untagbuy" element={<UntagBuy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/readytowear" element={<Ready2Wear />} />
          <Route path="/categorylist" element={<CategoriesList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/payment" element={<PaymentDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
