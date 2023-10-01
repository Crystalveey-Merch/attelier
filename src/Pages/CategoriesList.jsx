import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesList = () => {
  
    return (
        <div className="mt-24 sm:mt-16 mb-10 w-full Quicksand  pt-2 sm:px-0" >
        
         <h1 className="text-center sm:text-xl text-2xl pt-10 text-black py-4 bg-white  Aceh">
    Shop Categories     
     </h1>
    
    <div>
    <div className=" grid grid-cols-3 sm:grid-cols-1 mx-5 gap-4 ">
    <Link to="/category/accessories">
        <div className="flex bg-black w-62 justify-center  px-5 ">
            <h1 className="text-xl Aceh m-auto text-left">Accessories</h1>
            <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
        <Link to="/category/clothing">
        <div className="flex bg-black w-62 justify-center px-5 ">
            <h1 className="text-xl Aceh m-auto text-left">Clothing</h1>
            <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
        <Link to="/category/shoes">
        <div className="flex bg-black w-62 justify-center px-5  ">
            <h1 className="text-xl Aceh m-auto text-left">Shoes</h1>
            <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
        <Link to="/category/two pieces">
    
        <div className="flex bg-black w-62 justify-center px-5 ">
            <h1 className="text-xl Aceh m-auto text-left">Two Pieces</h1>
            <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
        <Link to="/category/hoodies">
    
        <div className="flex bg-black w-62 justify-center px-5  ">
            <h1 className="text-xl Aceh m-auto text-left">Hoodies</h1>
            <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
    
        <Link to="/category/merch">
    
        <div className="flex bg-black w-62 justify-center  px-5 ">
            <h1 className="text-xl Aceh m-auto text-left">Merch</h1>
            <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
        </div>
        </Link>
    </div>
    </div>
</div>
  )
}

export default CategoriesList