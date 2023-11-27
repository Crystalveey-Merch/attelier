import { Helmet } from "react-helmet-async";
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
    <Helmet>
     <title>Homepage| Attelier</title>
    <meta name='description' content="Welcome to Crystalvery Attelier "/>
    <link rel=" canonical"  href='/'/>
    </Helmet>
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
