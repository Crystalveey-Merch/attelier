import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Refurblish = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="mt-40  Quicksand sm:mt-26 sm:px-5 px-40 py-10">
      <div >
        <h1 className="Aceh text-2xl  text-black">Welcome to our sellers untagg page.</h1>
        <p>How to sell on untagg</p>

        <ol className="my-5">
          <li>
            Register Register by easily creating an account using your either
            your Gmail, apple ID, or Facebook account( or do it using your email
            and phone).
          </li>
          <li>
            Make photos of your item Take clear pictures using a smartphone with
            very good camera.
          </li>
          <li>
            Press sell After pressing the sell button at the end of the page,
            choose the appropriate category for your item and upload your photos
            according to the prescribed standard.
          </li>
        </ol>
        <h1>Chothe Standard</h1>
        <p className="italic">
          All clothing items are required to be in excellent condition. If your
          clothing item doesn't meet the required standard, you can either sell
          other clothing items in excellent condition or opt for the
          refurbishing service rendered by the company by simply clicking the
          button below.
        </p>
        <h1>Photo Standard</h1>
        <p className="italic">
          You are required to upload very high quality images of the front, side and back view of the clothing item(s) on a plain white background.
        </p>
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
              (a member of our team will get in touch to confirm your date or
              suggest an alternative date)
            </span>
          </label>
          <br />
          <input type="date" className="p-3 rounded my-4 bg-gray-200"></input>
          <fieldset className="border border-xl p-4">
            <legend>How do you love to make payment?</legend>
            <div className="flex">
              <input
                type="checkbox"
                className="checkbox"
                id="onsite"
                value="On site Consultation (Free)"
              ></input>
              <label className="mx-4">On site Consultation</label>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                className="checkbox"
                id="online"
                value="Online Payment"
              ></input>
              <label className="mx-4">Online Payment</label>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                className="checkbox"
                id="bank"
                value="On site Consultation (Free)"
              ></input>
              <label className="mx-4">Bank Transfer</label>
            </div>
          </fieldset>
          <button className="p-4 text-center bg-black px-10 my-10 text-white rounded">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Refurblish;
