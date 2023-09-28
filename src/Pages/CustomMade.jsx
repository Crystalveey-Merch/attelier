import custom from "/Images/Fashionista/custom.jpeg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const CustomMade = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="mt-40 sm:mt-28 AcehLight">
      <div className="flex flex-row">
        <div className="px-36 sm:px-5 p-10 sm:w-full shadow-2xl ">
          <h1 className="text-black text-2xl Aceh text-center">
            Order Custom Made
          </h1>
          <div className="">
            <h1 className="text-xl Aceh my-2 text-black">Sessions</h1>
            <p className="my-2 leading-8 text-black">
              Sessions at crystalveey’s atelier are categorized in 3 types for
              our customers convenience;
              <ul className="list-decimal">
              <li className="text-justify">
                VIRTUAL SESSION: The client will connect with our representative
                through a video call to discuss style, measurement arrangements
                and pricing. This session will attract a fee of ₦5000.
              </li>
              <li className="text-justify ">
                ON-SITE SESSION: Requires no payment. The client will be meeting
                our representative at the company’s address to take
                measurements, discuss style and also discuss pricing.
              </li>
              <li>
                IN PERSON SESSION: Our representative will be meeting the client
                at their home/office address. This session will attract a fee of
                25,000 (prices may be higher for certain locations).
              </li>
              </ul>
              <span className=" leading-8 text-black">
                <h1 className="Aceh text-xl my-2 text-black">Adherence to Time:</h1>
                 Kindly note that session slots are to be
                strictly adhered to; we will be unable to guarantee allotted
                slot if you come at a later time. Hence, it is imperative that
                you contact us in advance if you won’t be able to make it at the
                scheduled time
              </span>
            </p>
          </div>

          <div className="my-10 text-black">
            <h1 className="my-10 Aceh text-xl">Book a Session</h1>
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
      </div>
    </div>
  );
};

export default CustomMade;
