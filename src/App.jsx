import {  Footer, Header } from "./Components";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" min-h-screen bg-white" 
    //style={{backgroundColor: "#efd7ec"}}
    >
      <Header />
      <div className="w-full h-10 bg-black">

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
