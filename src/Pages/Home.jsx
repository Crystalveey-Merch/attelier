import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  
} from "../Components/HomeComponents";
import { SectionTwo2 } from "../Components/HomeComponents/SectionTwo2";
import { SectionTwoTest } from "../Components/HomeComponents/SectionTwoTest";

export const Home = () => {
  return (
    <div className="text-center relative Quicksand flex flex-col gap-10 mt-40 lg:mt-24 sm:gap-5">
      <SectionOne />
      <SectionTwo />
      {/* <SectionTwo2 /> */}
      <SectionTwoTest/>
      <SectionFour />
      <SectionFive />
      <SectionThree />
      {/* <SectionSix/> */}
    </div>
  );
};
