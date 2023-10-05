import React from 'react'
import { Link } from 'react-router-dom'

const goBack = () => {
  window.history.back();
};

 const RefurblishP1 = () => {
  return (
    <div className='mt-24 sm:mt-16 AcehLight text-black mb-10 py-10'>
          <div>
          <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
      <p className="text-center text-3xl capitalize Aceh">Refurblish your Clothes in 3 steps</p>
        <div className=" sm:flex-col gap-12 my-10 justify-center m-auto">
         <div className='flex sm:flex-col'>
          <div className="card w-60  h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1 className="text-xl">STEP 1</h1>
              <img src="/Images/icons/ref1.png" className="m-auto"></img>

              <p className="Aceh text-sky-500 text-xl ">Choose a Category</p>
              <p  className='Aceh'>
              Follow our easy steps and choose your preferred category
              </p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5  text-center">
              <h1 className="text-xl">STEP 2</h1>
              <img src="/Images/icons/ref2.png" className="m-auto"></img>

              <p className="Aceh text-sky-500 text-xl">Fill The Form</p>
              <p className='Aceh'>Input all necessary information and select shipping mode</p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1 className='text-xl'>STEP 3</h1>
              <img src="/Images/icons/ref3.png" className="m-auto"></img>

              <p className="Aceh Aceh text-sky-500 text-xl">Make Payment</p>
              <p className='Aceh'>
                Check email for invoice and follow link for payment
              </p>
            </ol>
          </div>
          </div>
         <Link to="/refurblishpage2"> <button type="Submit" className="bg-black flex w-40 px-3 my-10 py-4 justify-center text-white m-auto">Get Started</button></Link>

        </div>
      </div>
    </div>
  )
}
export default RefurblishP1;

