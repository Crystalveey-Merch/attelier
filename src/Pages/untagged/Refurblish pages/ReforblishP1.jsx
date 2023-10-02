import React from 'react'

export const ReforblishP1 = () => {
  return (
    <div>
          <div>
        <p className="text-center Aceh">Choose A Category</p>
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
                Choose the appopriate categories for your item[s] and upload
                your image
              </p>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
