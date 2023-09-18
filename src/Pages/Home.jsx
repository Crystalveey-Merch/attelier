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

export const Home = () => {
  return (
    <div className="text-center relative Quicksand flex flex-col gap-20 mt-40 lg:mt-24 sm:gap-14">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive/>
      {/* <SectionSix/> */}
    </div>
  );
};
