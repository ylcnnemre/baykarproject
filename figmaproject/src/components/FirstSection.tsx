import React from "react";

const FirstSection = () => {
  return (
    <section className="w-full ">
      <img
        className="absolute w-full sm:top-[183px] sm:block  top-[590px] "
        alt=""
        src="/rectangle-31.svg"
      />
      <div className="sm:px-20 px-4  flex sm:mt-[80px] mt-4 sm:flex-row flex-col ">
        <div className="sm:flex sm:flex-col">
          <h2 className="sm:text-[72px] text-[56px]  mb-4 sm:text-start text-center ">
            Collectible Sneakers
          </h2>
          <p className="sm:text-start text-center font-normal sm:my-8 my-8  ">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="flex justify-start">
            <div className="flex flex-row py-0  items-center justify-center">
              <div className="cursor-pointer  relative text-lg  font-medium  border-2 border-[#78350F] px-5 py-3 rounded-lg border-solid text-[#78350F] ">
                Sign up now
              </div>
            </div>
            <div className="flex items-center ml-6  ">
              <img
                src="/icon--jamicons--outline--logos--playcircle.svg"
                alt=""
              />
              <span className="text-[#78350F] ml-2 ">Watch Demo</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative sm:w-[486px] sm:h-[423px]  w-[361px] h-[288px]  ">
            <div className="absolute sm:top-[51px] sm:left-[51px] rounded-31xl bg-amber-400 sm:w-[367px] sm:h-[372px] w-[272px]  h-[266px] left-[40px] right-[60px] top-[50px]   " />
            <img
              className="absolute sm:top-[0px] left-[0px] sm:w-[486px] sm:h-[388px] w-[350px] h-[280px] top-[20px] z-50  object-cover"
              alt=""
              src="/pexels-photo-by-ray-piedra@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="sm:px-20 px-8 sm:pb-0 pb-8  flex  sm:mt-[160px] mt-[48px]  sm:mb-[80px] sm:flex-row flex-col sm:bg-transparent  bg-[#FEF3C7]  ">
        <div className="flex flex-col sm:mr-[80px] z-40  sm:items-start items-center relative ">
          <img
            className="relative w-16 h-16 overflow-hidden shrink-0"
            alt=""
            src="/icon--iconoir--trophy1.svg"
          />
          <img
            className="absolute my-0 mx-[!important] sm:top-[0.43px] sm:left-[28.12px] left-[155px]  rounded-3xs w-[56.61px] h-[38.28px] opacity-[0.5] z-[0]"
            alt=""
            src="/rectangle-25.svg"
          />

          <h3 className="text-lg font-medium my-1 ">Nibh viverra</h3>
          <p className="my-4 sm:text-start text-center ">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>

        <div className="flex flex-col sm:mr-[80px] sm:items-start items-center sm:mt-0 mt-8  z-40 relative ">
          <img
            src="/icon--iconoir--tunnel1.svg"
            alt=""
            className="relative w-16 h-16 overflow-hidden shrink-0"
          />
          <img
            className="absolute my-0 mx-[!important] sm:top-[-0.88px] sm:left-[24.79px] left-[155px]  rounded-3xs w-[38.88px] h-[38.88px] opacity-[0.5] z-[0]"
            alt=""
            src="/rectangle-26.svg"
          />

          <h3 className="text-lg font-medium my-1 ">Cursus amet</h3>
          <p className="my-4 sm:text-start text-center ">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa
          </p>
        </div>

        <div className="flex flex-col z-40 sm:mt-0 mt-8 sm:items-start items-center  relative">
          <img
            src="/icon--iconoir--tv1.svg"
            alt=""
            className="relative w-16 h-16 overflow-hidden shrink-0"
          />
          <div className="absolute my-0 mx-[!important] top-[2px] sm:left-[41.33px] left-[170px]  rounded-xl bg-fuchsia-700 w-[45px] h-[45px] opacity-[0.5] z-[0]" />
          <h3 className="text-lg font-medium my-1 ">Ipsum fermentum</h3>
          <p className="my-4 sm:text-start text-center ">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
