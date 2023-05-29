import React from "react";
import imgOne from "../../Images/Patners/one.png";
import imgTwo from "../../Images/Patners/two.png";
import imgThree from "../../Images/Patners/three.png";
import imgFour from "../../Images/Patners/four.png";
import imgFive from "../../Images/Patners/five.png";

export const SectionNine = () => {
  return (
    <div className="flex gap-24 items-center justify-center mx-40 bg-gray-100 rounded-md">
        <img src={imgOne} alt="imgOne" />
        <img src={imgTwo} alt="imgTwo"  />
        <img src={imgThree} alt="imgThree"  />
        <img src={imgFour} alt="imgFour" />
        <img src={imgFive} alt="imgFive"  />
    </div>
  );
};
