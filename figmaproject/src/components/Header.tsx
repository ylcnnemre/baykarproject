import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-max z-[1]">
      <div className="w-full flex flex-row sm:py-6 sm:px-20 px-6 py-4  box-border items-center justify-between text-13xl text-amber-900">
        <b className="relative leading-[110%]">Collers</b>
        <div className="flex flex-row items-center justify-start gap-[16px] text-base lg:flex hidden ">
          <div className="self-stretch flex flex-row py-3 px-2 items-center justify-start gap-[8px]">
            <div className="relative tracking-[0.5px] leading-[24px] font-medium cursor-pointer ">
              Products
            </div>
          </div>
          <div className="self-stretch flex flex-row py-3 px-2 items-center justify-start gap-[8px] cursor-pointer ">
            <div className="relative tracking-[0.5px] leading-[24px] font-medium">
              Solutions
            </div>
          </div>
          <div className="self-stretch flex flex-row py-3 px-2 items-center justify-start gap-[8px] cursor-pointer ">
            <div className="relative tracking-[0.5px] leading-[24px] font-medium">
              Pricing
            </div>
          </div>
          <div className="self-stretch flex flex-row py-3 px-2 items-center justify-start gap-[8px] cursor-pointer ">
            <div className="relative tracking-[0.5px] leading-[24px] font-medium">
              Resources
            </div>
          </div>
          <div className="self-stretch flex flex-row py-3 px-2 items-center justify-start gap-[8px] cursor-pointer ">
            <div className="relative tracking-[0.5px] leading-[24px] font-medium">
              Log In
            </div>
          </div>
          <div className="rounded-lg flex flex-row p-3 items-center justify-center border-[2px] border-solid border-amber-900  cursor-pointer ">
            <div className="flex flex-row py-0 px-4 items-center justify-center">
              <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                Sign up now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
