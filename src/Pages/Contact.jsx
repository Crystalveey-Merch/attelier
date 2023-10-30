import React from "react";

const Contact = () => {
  return (
    <div className="mt-24 sm:mt-16 AcehLight mb-10 py-36">
      <div className=" pt-10 m-auto text-center text-black w-1/2 sm:w-full">
        <h1 className="text-2xl text-center Aceh text-black">Atelier Visit</h1>
        <p className="text-black "> Monday - Friday</p>
        <p className="text-black Aceh  "> 9am - 5pm</p>
        <p className="pb-10 border-b ">Location: Lagos</p>
        <div className="border-t text-left  px-10">
          <h1 className="Aceh  text-left py-4">Phone</h1>
          <ul className="text-sky-500">
            <li> +254 812 609 1411</li>
            <li></li>
          </ul>
          <h1 className="Aceh  text-left py-4">Address</h1>
          <p className="text-sky-500">
          Olu-Olusegun avenue off Mobil road, Lekki. Lagos state, Nigeria

          </p>
          <h1 className="Aceh  text-left py-4 ">Email</h1>
       <a href="mailto:office.crystalveey@gmail.com">  <p className="text-sky-500">office.crystalveey@gmail.com</p></a> 
        </div>
        <div>
        <h1 className=" border-b Aceh  text-left py-4  px-10   ">Socialize</h1>
          <div className="text-left px-10 flex gap-5 my-5">
            <a href="https://twitter.com/crystalveeyshop"><i className="fab fa-twitter text-xl"/></a>
            <a href="https://www.instagram.com/explorecrystalveey/"><i className="fab fa-instagram text-xl" /></a>
           <a href="https://web.facebook.com/crystalveeyshop"> <i className="fab fa-facebook text-xl"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
