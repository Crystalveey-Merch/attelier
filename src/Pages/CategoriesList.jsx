import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesList = () => {
    const goBack = () => {
        window.history.back();
      };
    return (
        <div className="mt-24 sm:mt-16 mb-10 w-full Quicksand  pt-2 sm:px-0" >
        <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
         <h1 className="text-center sm:text-xl text-2xl pt-5 text-black py-4 bg-white  Aceh">
    Shop Categories     
     </h1>
    
    <div>
    <div className=" grid grid-cols-3 sm:grid-cols-1 mx-5 gap-4  text-black">
    <Link to="/category/Accessories">
        <div className="flex bg-white border sm:h-auto  w-62 h-64 justify-center  px-5 ">
            <h1 className="text-xl AcehLight m-auto text-left">Accessories</h1>
            <img src="/Images/Fashionista/accessories.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
        <Link to="/category/Clothing">
        <div className="flex bg-white border sm:h-auto w-62 h-64 justify-center px-5 ">
            <h1 className="text-xl AcehLight m-auto text-left">Clothing</h1>
            <img src="/Images/newArrivals/image4_3.png" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
        <Link to="/category/Shoes">
        <div className="flex bg-white border sm:h-auto w-62 h-64 justify-center px-5  ">
            <h1 className="text-xl AcehLight m-auto text-left">Shoes</h1>
            <img src="/Images/Fashionista/shoes.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
        <Link to="/category/Two-pieces">
    
        <div className="flex bg-white border sm:h-auto w-62 h-64 justify-center px-5 ">
            <h1 className="text-xl AcehLight m-auto text-left">Two Pieces</h1>
            <img src="/Images/newArrivals/image5.jpeg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
        <Link to="/category/Hoodies">
    
        <div className="flex bg-white border sm:h-auto w-62 h-64 justify-center px-5  ">
            <h1 className="text-xl AcehLight m-auto text-left">Hoodies</h1>
            <img src="/Images/Products/1.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
    
        <Link to="/category/Merch">
    
        <div className="flex bg-white border sm:h-auto w-62 h-64 justify-center  px-5 ">
            <h1 className="text-xl AcehLight m-auto text-left">Merch</h1>
            <img src="/Images/Products/item-three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
    </div>
    </div>
</div>
  )
}

export default CategoriesList