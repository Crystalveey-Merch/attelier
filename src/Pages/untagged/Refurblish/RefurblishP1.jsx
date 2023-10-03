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
      <p className="text-center Aceh">Refurblish on untagg in 3 steps</p>
        <div className="flex sm:flex-col gap-12 my-10 justify-center m-auto">
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1 className="">STEP 1</h1>
              <p className="Aceh ">Choose a Category</p>
              <img src="/Images/icons/ref1.png" className="m-auto"></img>
              <p>
              Follow our easy steps and choose your preferred category
              </p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5  text-center">
              <h1 className="">STEP 2</h1>
              <p className="Aceh">Fill The Form</p>
              <img src="/Images/icons/ref2.png" className="m-auto"></img>
              <p>Input all necessary information amd select shipping mode</p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1>STEP 3</h1>
              <p className="Aceh">Make Payment</p>
              <img src="/Images/icons/ref3.png" className="m-auto"></img>
              <p>
                Check email for invoice and follow link for payment
              </p>
            </ol>
          </div>
         <Link to="/refurblish"> <button type="Submit" className="bg-black flex w-40 px-5 py-4 justify-center text-white m-auto">Get Started</button></Link>

        </div>
      </div>
    </div>
  )
}
export default RefurblishP1;

