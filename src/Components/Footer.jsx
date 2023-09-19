import "@fortawesome/fontawesome-free/css/all.css";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-10 px-20 pl-48 pt-16 pb-8 bg-black text-white 2xl:pl-20 xl:pl-7 sm:gap-6 sm:pl-4 sm:px-5 Quicksand">
      <div className="flex justify-between pr-40 2xl:pr-16 xl:pr-7  lg:flex lg:flex-wrap lg:gap-16 sm:gap-8 sm:pr-0">
        <div className="flex flex-col gap-4 w-60 lg:w-5/12 lg:order-1 sm:w-full">
          <h2 className="font-lifesavers font-bold text-2xl text-white">
            Crystalveey&apos;s Atelier
          </h2>
          <p className="  font-semibold text-base text-gray-600">
            Your Destination for Fashion and Elegance
          </p>
        </div>
        <div className="flex gap-40  2xl:gap-20 xl:gap-12 lg:w-full lg:order-3 lg:justify-between lg:pr-10 sm:flex-wrap">
          <ul className="flex flex-col gap-6 ">
            <li className="middle hover:text-gray-750 cursor-pointer w-max">
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

            <li className="middle  font-medium text-sm cursor-pointer w-max">
              FAQs
            </li>
            <li className="middle  font-medium text-sm cursor-pointer w-max">
              Contact US
            </li>
          </ul>
          <ul className="flex flex-col gap-6 w-max">
            <li className="middle  hover:text-gray-750 cursor-pointer">
              Resources
            </li>
            <li className="middle  font-medium text-sm cursor-pointer w-max">
              Blog
            </li>
            <li className="middle  font-medium text-sm cursor-pointer w-max">
              {" "}
              Privacy Policy
            </li>
          </ul>
          <ul className="flex flex-col gap-6 w-max text-sky-600">
            <li className="middle  hover:text-gray-750 cursor-pointer text-white">
              Contact
            </li>
            <li className=" flex gap-1 items-center  font-medium text-sm cursor-pointer w-max">
              <a
                href="mailto:office.crystalveey@gmail.com"
                className="hover:text-gray-750"
              >
                <i class="fa-solid fa-envelope"></i> {"    "}
                office.crystalveey@gmail.com
              </a>
            </li>
            <li className=" flex gap-1 items-center  font-medium text-sm cursor-pointer w-max">
              <a href="tel:+2548126091411" className="hover:text-gray-750">
                <i class="fa-solid fa-phone"></i> +254 812 609 1411
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-5/12 lg:order-2 sm:w-full">
          <h4 className="  text-base font-semibold ">Follow Us</h4>
          <div className="flex gap-4 text-xl mt-5">
            <a href="https://www.instagram.com/explorecrystalveey/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://web.facebook.com/crystalveeyshop">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/crystalveeyshop">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://wa.link/s55ykr">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>

          <p></p>
        </div>
      </div>
      <div className=" border-gray-100 pt-6 text-center">
        <p className="font-semibold base">
          &copy; {new Date().getFullYear()} Crystalveey&apos;s Atelier
          <span className="text-gray-400 pl-2"> All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};
