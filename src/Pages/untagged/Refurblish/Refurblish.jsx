import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Refurblish = () => {
    const [phone, setPhone] = useState("");

  return (
    <div className="mt-24 sm:mt-16  Quicksand  sm:px-5 px-40  py-10">
      <div>
        <hi className="Aceh text-black">
          Refurbishing at crystalveey’s atelier is categorized into 3 types
          (available in Lagos only)
        </hi>
        <ol className="my-5">
          <li>
             Standard refurbishing: The client will drop off his or her
            clothing item(s) at the company’s address for amendments and pick up
            when item is ready. No charges required.
          </li>
          <li>
        Premium refurbishing: The company will send its dispatch agent to
            pick up clothing item(s) for refurbishing from the client’s address
            and to deliver newly refurbished clothing item(s) to clients
            address. Pickup/delivery charges will apply.
          </li>
          <li>
         Refurbish and sell : This category is available to untagg sellers
            only. The seller will deliver clothing item(s) to the company’s
            address for amendment either by drop off or through the company’s
            dispatch agent. The company will upload and sell clothing item(s) on
            the website after necessary amendments on behalf of the seller. This
            category will require a standard fee of 2000. Company pickup will
            attract further charges. 
          </li>

        </ol>
        <p className="italic">Note: Pricing for refurbishing in all 3
            categories will be determined and communicated to you via E-mail
            after our professional has examined the clothing item(s).</p>
      </div>
      <div className="my-10 text-black">
            {/* <h1 className="my-10 Aceh text-xl">Book a Session</h1> */}
            <form className="Quicksand">
              <label>First Name:</label>
              <div className="flex flex-row gap-4 w-full m-auto  ">
                <input
                  type="text"
                  placeholder="first name"
                  className="p-3 my-4 bg-gray-200 rounded w-1/2 "
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 my-4 bg-gray-200 rounded w-1/2  "
                />
              </div>

              <label>Email:</label>
              <br />
              <input
                type="email"
                placeholder="email"
                className="p-3 my-4 bg-gray-200 rounded w-full"
              />
              <br />
              <label>Phone number:</label>
              <br />
              <PhoneInput
                defaultCountry="ng"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="w-full my-4 text-xl "
                style={{ width: "100%" }}
              />
              <label>
                Date{" "}
                <span className="text-gray-400">
                  (a member of our team will get in touch to confirm your date
                  or suggest an alternative date)
                </span>
              </label>
              <br />
              <input type="date" className="p-3 rounded my-4 bg-gray-200"></input>
              <fieldset className="border border-xl p-4">
              <legend>How do you love to make payment?</legend>
              <div className="flex">
              <input type="checkbox" className="checkbox" id="onsite" value= "On site Consultation (Free)"></input>
              <label className="mx-4">On site Consultation</label>
              </div>
              <div className="flex">
              <input type="checkbox" className="checkbox" id="online" value= "Online Payment"></input>
              <label  className="mx-4">Online Payment</label>
              </div>
              <div className="flex">
              <input type="checkbox" className="checkbox" id="bank" value= "On site Consultation (Free)"></input>
              <label className="mx-4">Bank Transfer</label>
              </div>
              </fieldset>
                    <button className="p-4 text-center bg-black px-10 my-10 text-white rounded">Next</button>
            </form>
          </div>
    </div>
  );
};

export default Refurblish;
