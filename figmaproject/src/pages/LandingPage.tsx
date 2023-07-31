import React from "react";
import Header from "../components/Header";
import FirstSection from "../components/FirstSection";
import BestSection from "../components/BestSection";

const LandingPage = () => {
  return (
    <div className="relative [background:linear-gradient(180deg,_#fffbeb,_#fff)] w-full overflow-hidden flex flex-col items-center justify-start text-left text-xl text-blue-gray-900 font-body-xs">
      <img
        className="absolute left-[0] right-0 w-full top-[190px]  "
        alt=""
        src="/rectangle-31.svg"
      />
      <Header />
      <FirstSection />
      <BestSection />
    </div>
  );
};

export default LandingPage;
