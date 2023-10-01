import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  
} from "../Components/HomeComponents";
import { SectionTwoTest } from "../Components/HomeComponents/SectionTwoTest";

export const Home = () => {
  return (
    <div className="text-center relative AcehLight flex flex-col gap-10 mt-10 lg:mt-18 sm:gap-5 sm:px-5">
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
