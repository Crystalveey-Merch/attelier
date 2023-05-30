import { Footer, Header } from "./Components";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      className=" min-h-screen bg-white"
      //style={{backgroundColor: "#efd7ec"}}
    >
      <Header />
      <div className="w-full  bg-black py-3">
        <p className="text-white text-center">
          {" "}
          Free Shipping on all orders over $100
        </p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
