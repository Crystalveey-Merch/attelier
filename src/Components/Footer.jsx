export const Footer = () => {
  return (
    <div className="flex flex-col gap-10 px-20 pl-48 pt-16 pb-8 bg-gray-50 2xl:pl-20 xl:pl-7 sm:gap-6 sm:pl-4 sm:px-5">
      <div className="flex justify-between pr-40 2xl:pr-16 xl:pr-7  lg:flex lg:flex-wrap lg:gap-16 sm:gap-8 sm:pr-0">
        <div className="flex flex-col gap-4 w-60 lg:w-5/12 lg:order-1 sm:w-full">
          <h2 className="font-lifesavers font-bold text-2xl text-gray-900">
            Crystalveey&apos;s Atelier
          </h2>
          <p className=" text-gray-800 font-semibold text-base">
            Your Destination for Fashion and Elegance
          </p>
        </div>
        <div className="flex gap-40  2xl:gap-20 xl:gap-12 lg:w-full lg:order-3 lg:justify-between lg:pr-10 sm:flex-wrap">
          <ul className="flex flex-col gap-6 ">
            <li className="middle hover:text-gray-750 cursor-pointer w-max">
              Company
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              About Us
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              FAQs
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              Contact US
            </li>
          </ul>
          <ul className="flex flex-col gap-6 w-max">
            <li className="middle  hover:text-gray-750 cursor-pointer">
              Resources
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              Blog
            </li>
            <li className="middle text-gray-900 font-medium text-sm cursor-pointer w-max">
              {" "}
              Privacy Policy
            </li>
          </ul>
          <ul className="flex flex-col gap-6 w-max">
            <li className="middle  hover:text-gray-750 cursor-pointer">
              Contact
            </li>
            <li className=" flex gap-1 items-center text-gray-900 font-medium text-sm cursor-pointer w-max">
              <a
                href="mailto:office.crystalveey@gmail.com"
                className="hover:text-gray-750"
              >
                office.crystalveey@gmail.com
              </a>
            </li>
            <li className=" flex gap-1 items-center text-gray-900 font-medium text-sm cursor-pointer w-max">
              <a href="tel:+2548126091411" className="hover:text-gray-750">
                +254 812 609 1411
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-5/12 lg:order-2 sm:w-full">
          <h4 className=" text-gray-900 text-base font-semibold ">Follow Us</h4>
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
