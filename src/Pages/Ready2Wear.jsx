import { Link } from "react-router-dom"

const Ready2Wear = () => {
    const goBack = () => {
        window.history.back();
        }
  return (
    <div className="mt-24 sm:mt-16 mb-10 w-full AcehLight  pt-2 sm:px-0" >
    <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
    
     <h1 className="text-center sm:text-xl text-2xl pt-5 text-black py-4 bg-white  Aceh">
Shop Ready to Wear       
 </h1>

<div>
<div className=" grid grid-cols-3 sm:grid-cols-1 mx-5 gap-4 ">
<Link to="/collection/afrocentric">
    <div className="flex bg-black w-62 justify-center  px-5 ">
        <h1 className="text-xl Aceh m-auto text-left">AFROCENTRIC WEARS</h1>
        <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
    <Link to="/collection/comfort">
    <div className="flex bg-black w-62 justify-center px-5 ">
        <h1 className="text-xl Aceh m-auto text-left">COMFORT WEARS</h1>
        <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
    <Link to="/collection/formal">
    <div className="flex bg-black w-62 justify-center px-5  ">
        <h1 className="text-xl Aceh m-auto text-left">FORMAL WEARS</h1>
        <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
    <Link to="/collection/party">

    <div className="flex bg-black w-62 justify-center px-5 ">
        <h1 className="text-xl Aceh m-auto text-left">PARTY WEARS</h1>
        <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
    <Link to="/collection/resort">

    <div className="flex bg-black w-62 justify-center px-5  ">
        <h1 className="text-xl Aceh m-auto text-left">RESORT WEARS</h1>
        <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>

    <Link to="/collection/occasion">

    <div className="flex bg-black w-62 justify-center  px-5 ">
        <h1 className="text-xl Aceh m-auto text-left">OCCASSION WEARS</h1>
        <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
</div>
</div>
    </div>
  )
}

export default Ready2Wear