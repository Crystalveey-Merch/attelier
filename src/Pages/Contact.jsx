import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="mt-18 sm:mt-16 AcehLight mb-10 py-10">
    <Helmet>
    <title> Contact Page</title>

    <meta name='description' content="Crystalveeys’ atelier is a fashion merchandise and recommerce site that allows individuals to shop their favorite fashion pieces and also sell previously owned clothing items to interested buyers. "/>
    <meta name="keywords" content="ecommerce, online shopping, retail, products, services, atelier"></meta>
    <link rel=" canonical"  href='http://atelier.crystalveey.com'/>
    <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Atelier" />
        <meta
          property="og:url"
          content='http://atelier.crystalveey.com'
        />
        {/* <meta property="og:image" content={posts} /> */}
        <meta
          name="og:description"
          content="Crystalveeys’ atelier is a fashion merchandise and recommerce site that allows individuals to shop their favorite fashion pieces and also sell previously owned clothing items to interested buyers."
        />
        <meta name="og:site_name" content="Atelier" />

        <meta name="og:image" content="public/Images/logo.jpeg"/>

        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content='http://atelier.crystalveey.com'
        />
        <meta name="twitter:title" content="Attelier" />
        <meta
          name="twitter:description"
          content="Crystalveeys’ atelier is a fashion merchandise and recommerce site that allows individuals to shop their favorite fashion pieces and also sell previously owned clothing items to interested buyers."
        />
        <meta name="twitter:image" content="public/Images/logo.jpeg"/>
    </Helmet> 
      <div className=" text-xl pt-10 m-auto text-center text-black w-1/2 sm:w-full">
      <img src="public/Images/cheerful-call-center-woman-with-headphones_8087-2405.png" width={500} className="m-auto p-10"></img>
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
