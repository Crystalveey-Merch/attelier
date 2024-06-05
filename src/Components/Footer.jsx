import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-screen bottom-0  flex flex-col gap-10 px-20 pl-48 pt-10 sm:pt-10 pb-8 sm:pb-4 bg-black text-white 2xl:pl-20 xl:pl-7 sm:gap-6 sm:pl-4 sm:px-5 AcehLight">
      <div className="flex sm:flex-col sm:m-auto">
        <div className="flex gap-40 sm:gap-62 sm:text-sm sm:m-auto  justify-between 2xl:gap-20 xl:gap-5 lg:w-full  lg:justify-between lg:pr-10 sm:flex-wrap">
          <ul className="flex flex-col gap-6 sm:gap-2 ">
            <li className="middle hover:text-gray-750  border-b  cursor-pointer w-max">
              Company
            </li>
            <li
              className="middle  font-medium text-sm cursor-pointer w-max"
              onClick={() => document.getElementById("about").showModal()}
            >
              About Us
            </li>
            <dialog id="about" className="modal w-screen text-white  ">
              <div className="modal-box bg-black w-full">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-3xl Aceh text-center">
                  About us
                </h3>
                <p className="text-xl sm:text-xl p-10 sm:p-4">
                  Crystalveeys’ atelier is a fashion merchandise and recommerce
                  site that allows individuals to shop their favorite fashion
                  pieces and also sell previously owned clothing items to
                  interested buyers.
                </p>
              </div>
            </dialog>

            <Link to="/faq">
              {" "}
              <li className="middle  font-medium text-sm cursor-pointer w-max">
                FAQs
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-6 sm:text-sm sm:gap-2  w-max">
            <li className="middle border-b  hover:text-gray-750 cursor-pointer">
              Resources
            </li>
            <Link to="/bloglist">
              <li className="middle  font-medium text-sm cursor-pointer w-max">
                Blog
              </li>
            </Link>
            <Link to="/giftcards">
              <li className="middle  text-sm hover:text-gray-750 cursor-pointer">
                Gift Cards
              </li>
            </Link>
            <li
              className="middle  font-medium text-sm cursor-pointer w-max"
              onClick={() => document.getElementById("privacy").showModal()}
            >
              {" "}
              Privacy Policy
            </li>
          </ul>

          <ul className="flex flex-col gap-6  sm:gap-2  w-max text-sky-600">
            <li className="middle  hover:text-gray-750  border-b  cursor-pointer text-white">
              Contact
            </li>
            <div className=" flex gap-4 ">
              <li className=" flex sm:flex-col  gap-1 items-center  font-medium text-xl cursor-pointer w-max">
                <a
                  href="mailto:office.crystalveey@gmail.com"
                  className="hover:text-gray-750"
                >
                  <i className="fa-solid fa-envelope"></i> {"    "}
                  {/* office.crystalveey@gmail.com */}
                </a>
              </li>
              <li className=" flex gap-1 items-center  font-medium text-xl cursor-pointer w-max">
                <a href="tel:+2548126091411" className="hover:text-gray-750">
                  <i className="fa-solid fa-phone"></i>
                  {/* +254 812 609 1411 */}
                </a>
              </li>
            </div>
          </ul>
          <ul className="flex flex-col gap-6  sm:gap-2  w-max text-sky-600">
            <h4 className="  middle  hover:text-gray-750  border-b  cursor-pointer text-white">
              Follow Us
            </h4>
            <div className="flex  gap-4  text-xl">
              <a href="https://www.instagram.com/explorecrystalveey/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://web.facebook.com/crystalveeyshop">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com/crystalveeyshop">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://wa.link/s55ykr">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>

            <p></p>
          </ul>
        </div>
        <div className=" flex flex-col sm:py-5 justify-center m-auto ">
          <div className="flex justify-center m-auto sm:w-full ml-24 sm:ml-0 w-full   ">
            <h1 className="text-2xl m-auto text-center  sm:text-xl text-white Pragmatica tracking-wider ">
              CRYSTALVEEY <span className="Tabac spacing px-2">ATELIER</span>
            </h1>
            {/* <img src="/Images/Avatar/logo.jpeg" alt="logo" className="w-56"/> */}
          </div>
          <p className=" sm:text-sm AcehLight m-auto pl-40 sm:pl-0 text-center text-gray-300 ">
            Your Destination for Fashion and Elegance
          </p>
        </div>
      </div>

      <div className=" border-gray-100 pt-2 sm:text-sm  text-center">
        <p className="font-semibold base">
          &copy; {new Date().getFullYear()} Crystalveey&apos;s Atelier
          <span className="text-gray-400 pl-2"> All Rights Reserved</span>
        </p>
      </div>

      <dialog
        id="privacy"
        className="modal w-screen text-white dark:text-white "
      >
        <div className="modal-box bg-black  w-full">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-3xl Aceh my-4 text-center">
            Private Policy
          </h3>
          <h1 className="text-white Aceh">
            What information do we collect? <hr></hr>
          </h1>
          <ul className="gap-4 flex my-2 flex-col">
            <li>
              - We collect information from you when you subscribe to our
              community.
            </li>
            <li>
              - When booking, ordering or registering on our site, you may be
              asked to enter your name, e-mail address, mailing address, phone
              number, or credit card information.
            </li>
          </ul>
          <h1 className="text-white Aceh">
            How we use information collected? <hr></hr>
          </h1>
          <p>
            Any of the information we collect from you may be used in one of the
            following ways
          </p>
          <ul className="gap-2 flex my-2 flex-col">
            <li>-To personalize your experience</li>
            <li>
              -Your information helps us to better respond to your individual
              needs.
            </li>
            <li>-To improve our website </li>
            <li>-To improve customer service</li>
            <li>-To process transactions</li>
          </ul>
          <h1 className="text-white Aceh">
            Sharing of information by you <hr></hr>
          </h1>
          <p className="py-4">
            Your activity in connection to Crystalveey platforms, such as
            reviewing and rating items, inquiring about or purchasing items,
            liking or sharing Crystalveey content to your social media accounts
            or pages or otherwise interacting with Crystalveey platforms, may be
            visible to other users of Crystalveey platform.
          </p>
          <h1 className="text-white Aceh">
            Sharing of information by us
            <hr></hr>
          </h1>
          <ul className="gap-4 flex my-2 flex-col">
            <li>
              - We may share the information about you with our subsidiaries and
              affiliated companies primarily for business and operational
              purposes
            </li>
            <li>
              - We may share your information with third party service providers
              that provide business, professional or technical support functions
              on our behalf
            </li>
            <li>
              - Your information may also be shared with our sponsors, partners,
              advertisers, advertising networks and analytics companies or other
              third parties in connection with marketing, promotions and other
              offers
            </li>
          </ul>
          <h1 className="text-white Aceh">
            Third party services <hr></hr>
          </h1>
          <p className="py-4">
            Third party providers used by us will only collect, use and disclose
            your information to the extent necessary to allow them perform the
            services they provide.
          </p>
          <h1 className="text-white Aceh">
            Changes to privacy policy <hr></hr>
          </h1>
          <p className="py-4">
            The privacy policy may be subjected to certain changes. Please check
            back frequently to see any updates or changes to our privacy policy.
          </p>
          <h1 className="text-white Aceh">
            Contact Us <hr></hr>
          </h1>
          <p>
            If you have any questions or concerns regarding this privacy policy,
            please contact us at:
            <br></br>
            Re: CRYSTALVEEY PRIVACY POLICY
            <br></br>
            <a
              href="mailto:office.crystalveey@gmail.com"
              className="hover:text-gray-750"
            >
              <i className="fas fa-envelope" />
              office.crystalveey@gmail.com
            </a>
          </p>
        </div>
      </dialog>
    </div>
  );
};
