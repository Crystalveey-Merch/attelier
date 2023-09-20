import {
  SectionOne,
   SectionTwo,
   SectionThree,
   SectionFour,
  SectionFive,
  SectionSix,
  // SectionSix,
  // SectionSeven,
  // SectionEight,
  // SectionNine,
  // SectionTen,
} from "../Components/HomeComponents";
import { SectionTwo2 } from "../Components/HomeComponents/SectionTwo2";

export const Home = () => {
  return (
    <div className="text-center relative Quicksand flex flex-col gap-10 mt-40 lg:mt-24 sm:gap-5">
      <SectionOne />
      <SectionTwo />
      <SectionTwo2/>
      <SectionFour />
      <SectionFive/>
      <SectionThree />
      {/* <SectionSix/> */}
    </div>
  );
};
