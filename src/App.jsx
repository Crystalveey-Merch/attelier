import { Footer, Header } from "./Components";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

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
  }, []);
  return (
    <div
      className=" min-h-screen bg-white"
      //style={{backgroundColor: "#efd7ec"}}
    >
      <Header />
      <div
        className={`fixed top-0 left-0 w-full z-20 ${colors[animationIndex]} pt-5 pb-3 mt-40 lg:mt-16 sm:pt-3 sm:pb-2 sm:text-sm`}
      >
        <p className="text-white text-center">{texts[animationIndex]}</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
