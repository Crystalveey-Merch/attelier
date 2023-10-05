import React from 'react'
import { Link } from 'react-router-dom';

const goBack = () => {
    window.history.back();
  };
  
const Sellpage1 = () => {
  return (
    <div className='mt-24 sm:mt-16 AcehLight text-black mb-10 py-10'>
     <div className="hidden   sm:block  pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
      <div>
        <p className="text-center text-3xl capitalize Aceh">How to sell on untagg</p>
        <div className="flex sm:flex-col gap-2 my-4 justify-center m-auto">
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1 className="text-xl">STEP 1</h1>
              <img src="/Images/icons/reg.png" className="m-auto"></img>
              <p className="Aceh text-sky-500 text-xl ">REGISTER</p>
             
              <p className='Aceh'>
                Register by creating an Account
              </p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5  text-center">
              <h1 className="text-xl">STEP 2</h1>
              <img src="/Images/icons/upload.png" className="m-auto"></img>
              <p className="Aceh text-sky-500 text-xl">UPLOAD PHOTO</p>

              <p className='Aceh'>Ensure you meet our photo requirements</p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1 className='text-xl'>STEP 3</h1>
              <img src="/Images/icons/start.png" className="m-auto"></img>
              <p className="Aceh text-sky-500 text-xl">START SELLING</p>
              
              <p className='Aceh'>
                Choose the appopriate category for your item[s] and upload
                your image
              </p>
            </ol>
          </div>


        </div>
        <Link to="/sell"> <button type="Submit" className="bg-black flex w-40 px-5 py-4 mt-10 justify-center text-white m-auto">Start selling</button></Link>

      </div>
    </div>
  )
}

export default Sellpage1