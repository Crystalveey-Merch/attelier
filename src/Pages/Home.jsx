import {
  SectionOne,
   SectionTwo,
   SectionThree,
   SectionFour,
  // SectionFive,
  // SectionSix,
  // SectionSeven,
  // SectionEight,
  // SectionNine,
  // SectionTen,
} from "../Components/HomeComponents";

export const Home = () => {
  return (
    <div className="text-center relative flex flex-col gap-20 sm:gap-14">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};
