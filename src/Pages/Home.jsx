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
     <title> Attelier</title>
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
        <script
          type="application/ld+json"
          {...JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Atelier",
            url: 'http://atelier.crystalveey.com',
            logo: "public/Images/logo.jpeg",
            email: "office.crystalveey@gmail.com",
            phone: "+234 812 609 1411",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Olu-Olusegun avenue off Mobil road, Lekki. Lagos state, Nigeria",
              city: "Lekki",
              state: "Lagos",
              postalCode: "100001",
            },
          })}
        />
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
