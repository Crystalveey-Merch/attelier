import React from "react";
import { Link } from "react-router-dom";
const BlogList = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="mt-24 sm:mt-16 mb-10 w-full Quicksand  pt-2 sm:px-0">
      <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
      <h1 className="text-center sm:text-xl text-2xl pt-5 text-black py-4 bg-white  Aceh">
        Blog List
      </h1>

      <div>
        <div className=" flex  justify-center m-auto sm:p-10 mx-5 gap-4 ">
          <Link to="/blog">
            <div className="w-auto  w-1/2 justify-center  px-10  ">
              <img
                src="/Images/icons/blog.png"
                className="w-96 h-42 my-2 sm:w-full sm:h-40"
              />

              <div  className="border w-96  p-3 border-black">
                <h1 className="font-bold Aceh text-2xl  indent-px  sm:text-2xl text-justify text-black">
                  Elegance redefined
                </h1>
                <p className=" text-sm text-black py-2  justify-center">
                  Crystalveey’s Atelier- your one stop destination for the whole
                  family!
                </p>
                <p className=" text-sm text-sky-500 py-2  justify-center">
                  By Victoria / September 27, 2023
                </p>
                <p className="text-black">
                  In the world of fashion, there ́s always room for innovation
                  and creativity. However, when it comes to dressing up not just
                  yourself but also your entire family, finding the perfect
                  outfit that combines style, comfort and individuality can be
                  quite challenging.
                </p>
                <button className="border px-5 py-3 my-4 border-black flex text-black m-auto">Read More</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
