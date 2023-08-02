import React from "react";
import Header from "../components/Header";
import FirstSection from "../components/FirstSection";
import BestSection from "../components/BestSection";
import JoinSection from "../components/JoinSection";
import CommentSection from "../components/CommentSection";
import GrowCollectionSection from "../components/GrowCollectionSection";
import { Footer } from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="relative  bg-white sm:[background:linear-gradient(180deg,_#fffbeb,_#fff)] w-full overflow-hidden flex flex-col items-center justify-start text-left text-xl text-blue-gray-900 font-body-xs">
      <img
        className="absolute my-0 mx-[!important] top-[192px] hidden  right-[0px] w-full  z-[0]  "
        alt=""
        src="/rectangle-31.svg"
      />
      <Header />
      <FirstSection />
      <BestSection />
      <JoinSection />
      <CommentSection />
      <GrowCollectionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
