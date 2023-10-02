import React from "react";

const Contact = () => {
  return (
    <div className="mt-24 sm:mt-16 AcehLight mb-10">
      <div className=" pt-10 m-auto text-center text-black w-1/2 sm:w-full">
        <h1 className="text-2xl text-center Aceh text-black">Studio Visit</h1>
        <p className="text-black mb-10"> Bu Appointment Only</p>
        <p className="pb-10 border-b"> Lagos</p>
        <div className="border-t text-left  px-10">
          <h1 className="Aceh  text-left py-4">Phone</h1>
          <ul className="text-sky-500">
            <li>+234 xxx xxx xxx</li>
            <li>+234 xxx xxx xxx</li>
          </ul>
          <h1 className="Aceh  text-left py-4">Address</h1>
          <p className="text-sky-500">
            Plot 7 block 95 Omorinre Johnson Street Glory to God Complex , Ajah,
            Lagos
          </p>
          <h1 className="Aceh  text-left py-4 ">Email</h1>
          <p className="text-sky-500">office.crystalveey@gmail.com</p>
        </div>
        <div>
        <h1 className=" border-b Aceh  text-left py-4  px-10   ">Socialize</h1>
          <div className="text-left px-10 flex gap-5 my-5">
            <a href="https://twitter.com/crystalveeyshop"><i className="fab fa-twitter"/></a>
            <a href="https://www.instagram.com/explorecrystalveey/"><i className="fab fa-instagram"/></a>
           <a href="https://web.facebook.com/crystalveeyshop"> <i className="fab fa-facebook"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
