import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"

const Ready2Wear = () => {
    const goBack = () => {
        window.history.back();
        }
  return (
    <div className="mt-24 sm:mt-16 mb-10 w-full AcehLight  pt-2 sm:px-0" >
      <Helmet>
     <title> Ready to wear| Attelier</title>
    <meta name='description' content="Payment Page"/>
    <link rel=" canonical"  href='/:categoryName'/>
    </Helmet>
    <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
    
     <h1 className="text-center sm:text-xl text-2xl pt-5 text-black py-4 bg-white  Aceh">
Shop Ready to Wear       
 </h1>

<div>
<div className=" grid grid-cols-2 sm:grid-cols-1 mx-5 text-black gap-4 ">
<Link to="/collection/Afrocentric Wears">
    <div className="flex bg-white border sm:h-auto h-64 w-62 justify-center  px-5 ">
        <h1 className="text-xl AcehLight m-auto text-left">AFROCENTRIC WEARS</h1>
        <img src="/Images/sec4/afro.jpeg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
    <Link to="/collection/Comfort Wears">
    <div className="flex bg-white border h-64 sm:h-auto w-62 justify-center px-5 ">
        <h1 className="text-xl AcehLight m-auto text-left">COMFORT WEARS</h1>
        <img src="/Images/sec4/casual.jpeg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
    <Link to="/collection/Formal Wears">
    <div className="flex bg-white border sm:h-auto  h-64 w-62 justify-center px-5  ">
        <h1 className="text-xl AcehLight m-auto text-left">FORMAL WEARS</h1>
        <img src="/Images/sec4/corporate.jpeg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
    <Link to="/collection/Party Wears">

    <div className="flex bg-white border h-64 sm:h-auto w-62 justify-center px-5 ">
        <h1 className="text-xl AcehLight m-auto text-left">PARTY WEARS</h1>
        <img src="/Images/sec4/occassion.jpeg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
    <Link to="/collection/Resort Wears">

    <div className="flex bg-white border h-64sm:h-auto   w-62 justify-center px-5  ">
        <h1 className="text-xl AcehLight m-auto text-left">RESORT WEARS</h1>
        <img src="/Images/Fashionista/three.jpg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>

    <Link to="/collection/Occasion Wears">

    <div className="flex bg-white border w-62 h-64  sm:h-auto justify-center  px-5 ">
        <h1 className="text-xl AcehLight m-auto text-left">OCCASSION WEARS</h1>
        <img src="/Images/newArrivals/image8.jpeg" className="w-40 h-42 m-2 sm:w-14 sm:h-16"/>
    </div>
    </Link>
</div>
</div>
    </div>
  )
}

export default Ready2Wear