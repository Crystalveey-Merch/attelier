import React from 'react'
import { Link } from 'react-router-dom';

const goBack = () => {
    window.history.back();
  };
  
const Sellpage1 = () => {
  return (
    <div className='mt-24 sm:mt-16 AcehLight text-black mb-10 py-10'>
     <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
      <div>
        <p className="text-center Aceh">How to sell on untagg</p>
        <div className="flex sm:flex-col gap-12 my-10 justify-center m-auto">
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1 className="">STEP 1</h1>
              <p className="Aceh ">REGISTER</p>
              <img src="/Images/icons/reg.png" className="m-auto"></img>
              <p>
                Register by creating an account using either your Gmail,
                Facebook, accoount or Apple ID (or by using your email)
              </p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5  text-center">
              <h1 className="">STEP 2</h1>
              <p className="Aceh">UPLOAD PHOTO</p>
              <img src="/Images/icons/upload.png" className="m-auto"></img>
              <p>Ensure you meet our photo requirements</p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1>STEP 3</h1>
              <p className="Aceh">START SELLING</p>
              <img src="/Images/icons/start.png" className="m-auto"></img>
              <p>
                Choose the appopriate category for your item[s] and upload
                your image
              </p>
            </ol>
          </div>


        </div>
        <Link to="/sell"> <button type="Submit" className="bg-black flex w-40 px-5 py-4 justify-center text-white m-auto">Start selling</button></Link>

      </div>
    </div>
  )
}

export default Sellpage1