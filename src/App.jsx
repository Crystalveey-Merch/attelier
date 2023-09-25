import { Footer, Header } from "./Components";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from  "./Pages/Login";
import CustomMade from "./Pages/CustomMade";
import NewArrival from "./Pages/NewArrival";
import Categories from "./Pages/Categories";
import Collection from "./Pages/Collection";
import Productdes from "./Pages/Productdes";
import Aboutus from "./Pages/Aboutus";
import Shoes from "./Pages/Shoes"
import Bags from "./Pages/Bags";
import Accessories from "./Pages/Accessories";
import Cart from "./Pages/Cart";

function App() {
  const [animationIndex, setAnimationIndex] = useState(0);

  const colors = [
    "bg-gray-900",
    "bg-blue-600",
    "bg-green-600",
    "bg-pink-600",
  ];

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
    <div
      className=" min-h-screen bg-white"
      //style={{backgroundColor: "#efd7ec"}}
    >
      <Header />
      <div
        className={`fixed top-0 left-0 w-full z-20 ${colors[animationIndex]} Aceh  p-3 mt-28 lg:mt-16 sm:pt-3 sm:pb-2 sm:text-sm`}
      >
        <p className="text-white text-center text-sm">{texts[animationIndex]}</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/custommade" element={<CustomMade/>} />
        <Route path="/newArrival" element={<NewArrival/>} />
        <Route path="/collection/:collectionName" element={<Collection />} />
        <Route path="/productdes/:productId"  element={<Productdes/>} />
        <Route path="/aboutus"   element={<Aboutus/>} />
    <Route path="/accessories" element={<Accessories/>}/>
    <Route path="/bags" element={<Bags/>}/>

    <Route path="/cart"  element={<Cart/>}/>
    <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/category/:categoryName" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
