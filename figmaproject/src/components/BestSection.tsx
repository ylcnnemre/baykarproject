import React from "react";

const BestSection = () => {
  return (
    <div className="flex flex-col  bg-blue-gray-900 w-full ">
      <div className="flex sm:flex-row sm:justify-between  sm:p-20 items-center p-4 flex-col sm:mt-0 mt-4  ">
        <h2 className="text-white sm:text-[56px] my-0 text-[32px]  ">
          The best of the best
        </h2>
        <div className="text-white border-2 border-white border-solid h-max py-4 px-8 rounded-md  sm:mt-0 mt-4 cursor-pointer ">
          <span>Sign Up Now</span>
        </div>
      </div>

      <div className="self-stretch flex sm:flex-row  flex-col items-start justify-start relative gap-[48px] sm:p-20 p-4 text-lg text-blue-gray-900">
        <div className="absolute sm:w-[271px] w-[202px] h-[202px]  sm:h-[271px] bg-[#BE185D] sm:left-[50px]  left-[40px]  sm:top-[270px] top-[310px] rounded-31xl  "></div>
        <div className="absolute sm:w-[161px] sm:h-[161px] w-[120px] h-[120px]    bg-[#0369A1] sm:left-[520px] left-[270px] sm:top-[50px]  top-[650px]  rounded-31xl "></div>
        <div className="absolute w-[131px] h-[131px] bg-[#B45309] left-[860px] top-[400px] rounded-11xl sm:block hidden "></div>
        <div className="absolute sm:w-[202px] sm:h-[202px] w-[150px] h-[150px]    bg-[#A21CAF] sm:left-[1120px] left-[0]   sm:top-[395px] top-[1100px] rounded-11xl "></div>
        <div className="absolute w-[232px] h-[232px] bg-[#15803D] left-[1240px] top-[125px] rounded-31xl sm:block hidden "></div>

        <div className="self-stretch flex-1 rounded-3xs bg-blue-gray-900 shadow-[0px_25px_50px_-12px_rgba(255,_255,_255,_0.25),_0px_0px_15px_rgba(255,_255,_255,_0.07)] overflow-hidden flex flex-col items-center justify-start relative z-[1] border-[1px] border-solid border-blue-gray-900">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-cover z-[0]"
            alt=""
            src="/picture6@2x.png"
          />
          <div className="self-stretch flex flex-col pt-8 px-8 pb-0 items-start justify-start gap-[16px] z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-5xl text-default-white">
                <b className="flex-1 relative leading-[110%]">Title</b>

                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--pencil4.svg"
                />
              </div>
            </div>
            <img
              className="self-stretch max-w-full overflow-hidden h-[220px] shrink-0 object-cover hidden"
              alt=""
              src="/picture7@2x.png"
            />
            <div className="self-stretch relative leading-[160%] text-default-white">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
          </div>
          <div className=" cursor-pointer self-stretch flex flex-row p-8 items-start justify-start gap-[16px] z-[2] text-xl text-default-white">
            <div className="flex-1 rounded-lg flex flex-row p-4 items-center justify-center border-[2px] border-solid border-default-white">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/icon--jamicons--outline--logos--shoppingcart1.svg"
              />
              <div className="flex flex-row py-0 px-4 items-center justify-center cursor-pointer">
                <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch flex-1 rounded-3xs bg-blue-gray-900 shadow-[0px_25px_50px_-12px_rgba(255,_255,_255,_0.25),_0px_0px_15px_rgba(255,_255,_255,_0.07)] overflow-hidden flex flex-col items-center justify-start relative z-[2] border-[1px] border-solid border-blue-gray-900">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-cover z-[0]"
            alt=""
            src="/picture8@2x.png"
          />
          <div className="self-stretch flex flex-col pt-8 px-8 pb-0 items-start justify-start gap-[16px] z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base">
              <div className="self-stretch relative leading-[110%] font-medium hidden">
                Entertainment
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-5xl text-default-white">
                <b className="flex-1 relative leading-[110%]">Title</b>
              </div>
            </div>

            <div className="self-stretch relative leading-[160%] text-default-white">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
          </div>
          <div className="self-stretch flex flex-row p-8 items-start cursor-pointer justify-start gap-[16px] z-[2] text-xl text-default-white">
            <div className="flex-1 rounded-lg flex flex-row p-4 items-center justify-center border-[2px] border-solid border-default-white">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/icon--jamicons--outline--logos--shoppingcart2.svg"
              />
              <div className="flex flex-row py-0 px-4 items-center justify-center cursor-pointer ">
                <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch flex-1 rounded-3xs bg-blue-gray-900 shadow-[0px_25px_50px_-12px_rgba(255,_255,_255,_0.25),_0px_0px_15px_rgba(255,_255,_255,_0.07)] overflow-hidden flex flex-col items-center justify-start relative z-[3] border-[1px] border-solid border-blue-gray-90 sm:mb-0 mb-5 ">
          <img
            className="self-stretch max-w-full overflow-hidden max-h-full object-cover z-[0]"
            alt=""
            src="/picture10@2x.png"
          />
          <div className="self-stretch flex flex-col pt-8 px-8 pb-0 items-start justify-start gap-[16px] z-[1] ">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-5xl text-default-white">
                <b className="flex-1 relative leading-[110%]">Title</b>
              </div>
            </div>

            <div className="self-stretch relative leading-[160%] text-default-white">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
          </div>

          <div className="self-stretch flex flex-row p-8 items-start justify-start gap-[16px] z-[2] text-xl text-default-white">
            <div className="flex-1 rounded-lg flex flex-row p-4 items-center cursor-pointer justify-center border-[2px] border-solid border-default-white">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/icon--jamicons--outline--logos--shoppingcart3.svg"
              />
              <div className="flex flex-row py-0 px-4 items-center justify-center  ">
                <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                  Buy Now
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default BestSection;

/*  <div className="self-stretch flex-1 rounded-3xs bg-blue-gray-900 shadow-[0px_25px_50px_-12px_rgba(255,_255,_255,_0.25),_0px_0px_15px_rgba(255,_255,_255,_0.07)] overflow-hidden flex flex-col items-center justify-start relative z-[1] border-[1px] border-solid border-blue-gray-900">
<img
  className="self-stretch max-w-full overflow-hidden max-h-full object-cover z-[0]"
  alt=""
  src="/picture6@2x.png"
/>
<div className="self-stretch flex flex-col pt-8 px-8 pb-0 items-start justify-start gap-[16px] z-[1]">
  <div className="hidden flex-row items-center justify-center">
    <img
      className="relative w-16 h-16 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--alarmclock2.svg"
    />
  </div>
  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base">
    <div className="self-stretch relative leading-[110%] font-medium hidden">
      Entertainment
    </div>
    <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-5xl text-default-white">
      <b className="flex-1 relative leading-[110%]">Title</b>
      <div className="rounded bg-green-100 h-6 hidden flex-row py-2 px-1 box-border items-center justify-center text-center text-sm text-green-800">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon--jamicons--outline--logos--circle16.svg"
        />
        <div className="flex flex-row py-0 px-1 items-center justify-center">
          <div className="relative leading-[140%]">+2,5%</div>
        </div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/icon--iconoir--statup4.svg"
        />
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
        alt=""
        src="/icon--jamicons--outline--logos--pencil4.svg"
      />
    </div>
  </div>
  <img
    className="self-stretch max-w-full overflow-hidden h-[220px] shrink-0 object-cover hidden"
    alt=""
    src="/picture7@2x.png"
  />
  <div className="self-stretch relative leading-[160%] text-default-white">
    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
  </div>
  <div className="self-stretch hidden flex-row pt-4 px-0 pb-0 items-center justify-start gap-[16px]">
    <img
      className="rounded-81xl w-16 h-16 object-cover"
      alt=""
      src="/user-thumb@2x.png"
    />
    <div className="flex-1 flex flex-col items-start justify-start">
      <div className="self-stretch relative leading-[160%]">
        Jane Doe
      </div>
      <div className="self-stretch relative text-base leading-[140%] text-blue-gray-600">
        Senior Designer
      </div>
    </div>
  </div>
</div>
<div className="self-stretch flex flex-row p-8 items-start justify-start gap-[16px] z-[2] text-xl text-default-white">
  <div className="flex-1 rounded-lg flex flex-row p-4 items-center justify-center border-[2px] border-solid border-default-white">
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0"
      alt=""
      src="/icon--jamicons--outline--logos--shoppingcart1.svg"
    />
    <div className="flex flex-row py-0 px-4 items-center justify-center">
      <div className="relative tracking-[0.5px] leading-[24px] font-medium">
        Buy Now
      </div>
    </div>
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--arrowright16.svg"
    />
  </div>
  <div className="flex-1 rounded-lg hidden flex-row p-3 items-center justify-center text-base text-blue-600 border-[2px] border-solid border-blue-600">
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--plus13.svg"
    />
    <div className="flex flex-row py-0 px-4 items-center justify-center">
      <div className="relative tracking-[0.5px] leading-[24px] font-medium">
        Event Details
      </div>
    </div>
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--arrowright17.svg"
    />
  </div>
</div>
<div className="my-0 mx-[!important] absolute top-[16px] left-[16px] rounded bg-purple-100 h-6 hidden flex-row py-2 px-1 box-border items-center justify-center z-[3] text-sm text-purple-800">
  <img
    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
    alt=""
    src="/icon--jamicons--outline--logos--circle11.svg"
  />
  <div className="flex flex-row py-0 px-1 items-center justify-center">
    <div className="relative leading-[140%]">Featured</div>
  </div>
  <img
    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
    alt=""
    src="/icon--iconoir--cancel7.svg"
  />
</div>
<img
  className="my-0 mx-[!important] absolute top-[172px] left-[calc(50%_-_48.33px)] rounded-81xl w-24 h-24 object-cover hidden z-[4]"
  alt=""
  src="/user-thumb1@2x.png"
/>
</div>
<div className="self-stretch flex-1 rounded-3xs bg-blue-gray-900 shadow-[0px_25px_50px_-12px_rgba(255,_255,_255,_0.25),_0px_0px_15px_rgba(255,_255,_255,_0.07)] overflow-hidden flex flex-col items-center justify-start relative z-[2] border-[1px] border-solid border-blue-gray-900">
<img
  className="self-stretch max-w-full overflow-hidden max-h-full object-cover z-[0]"
  alt=""
  src="/picture8@2x.png"
/>
<div className="self-stretch flex flex-col pt-8 px-8 pb-0 items-start justify-start gap-[16px] z-[1]">
  <div className="hidden flex-row items-center justify-center">
    <img
      className="relative w-16 h-16 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--alarmclock3.svg"
    />
  </div>
  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base">
    <div className="self-stretch relative leading-[110%] font-medium hidden">
      Entertainment
    </div>
    <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-5xl text-default-white">
      <b className="flex-1 relative leading-[110%]">Title</b>
      <div className="rounded bg-green-100 h-6 hidden flex-row py-2 px-1 box-border items-center justify-center text-center text-sm text-green-800">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon--jamicons--outline--logos--circle17.svg"
        />
        <div className="flex flex-row py-0 px-1 items-center justify-center">
          <div className="relative leading-[140%]">+2,5%</div>
        </div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/icon--iconoir--statup5.svg"
        />
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
        alt=""
        src="/icon--jamicons--outline--logos--pencil5.svg"
      />
    </div>
  </div>
  <img
    className="self-stretch max-w-full overflow-hidden h-[220px] shrink-0 object-cover hidden"
    alt=""
    src="/picture9@2x.png"
  />
  <div className="self-stretch relative leading-[160%] text-default-white">
    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
  </div>
  <div className="self-stretch hidden flex-row pt-4 px-0 pb-0 items-center justify-start gap-[16px]">
    <img
      className="rounded-81xl w-16 h-16 object-cover"
      alt=""
      src="/user-thumb7@2x.png"
    />
    <div className="flex-1 flex flex-col items-start justify-start">
      <div className="self-stretch relative leading-[160%]">
        Jane Doe
      </div>
      <div className="self-stretch relative text-base leading-[140%] text-blue-gray-600">
        Senior Designer
      </div>
    </div>
  </div>
</div>
<div className="self-stretch flex flex-row p-8 items-start justify-start gap-[16px] z-[2] text-xl text-default-white">
  <div className="flex-1 rounded-lg flex flex-row p-4 items-center justify-center border-[2px] border-solid border-default-white">
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0"
      alt=""
      src="/icon--jamicons--outline--logos--shoppingcart2.svg"
    />
    <div className="flex flex-row py-0 px-4 items-center justify-center">
      <div className="relative tracking-[0.5px] leading-[24px] font-medium">
        Buy Now
      </div>
    </div>
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--arrowright18.svg"
    />
  </div>
  <div className="flex-1 rounded-lg hidden flex-row p-3 items-center justify-center text-base text-blue-600 border-[2px] border-solid border-blue-600">
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--plus14.svg"
    />
    <div className="flex flex-row py-0 px-4 items-center justify-center">
      <div className="relative tracking-[0.5px] leading-[24px] font-medium">
        Event Details
      </div>
    </div>
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--arrowright19.svg"
    />
  </div>
</div>
<div className="my-0 mx-[!important] absolute top-[16px] left-[16px] rounded bg-purple-100 h-6 hidden flex-row py-2 px-1 box-border items-center justify-center z-[3] text-sm text-purple-800">
  <img
    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
    alt=""
    src="/icon--jamicons--outline--logos--circle18.svg"
  />
  <div className="flex flex-row py-0 px-1 items-center justify-center">
    <div className="relative leading-[140%]">Featured</div>
  </div>
  <img
    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
    alt=""
    src="/icon--iconoir--cancel10.svg"
  />
</div>
<img
  className="my-0 mx-[!important] absolute top-[172px] left-[calc(50%_-_48.33px)] rounded-81xl w-24 h-24 object-cover hidden z-[4]"
  alt=""
  src="/user-thumb6@2x.png"
/>
</div>
<div className="self-stretch flex-1 rounded-3xs bg-blue-gray-900 shadow-[0px_25px_50px_-12px_rgba(255,_255,_255,_0.25),_0px_0px_15px_rgba(255,_255,_255,_0.07)] overflow-hidden flex flex-col items-center justify-start relative z-[3] border-[1px] border-solid border-blue-gray-900">
<img
  className="self-stretch max-w-full overflow-hidden max-h-full object-cover z-[0]"
  alt=""
  src="/picture10@2x.png"
/>
<div className="self-stretch flex flex-col pt-8 px-8 pb-0 items-start justify-start gap-[16px] z-[1]">
  <div className="hidden flex-row items-center justify-center">
    <img
      className="relative w-16 h-16 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--alarmclock4.svg"
    />
  </div>
  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base">
    <div className="self-stretch relative leading-[110%] font-medium hidden">
      Entertainment
    </div>
    <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-5xl text-default-white">
      <b className="flex-1 relative leading-[110%]">Title</b>
      <div className="rounded bg-green-100 h-6 hidden flex-row py-2 px-1 box-border items-center justify-center text-center text-sm text-green-800">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon--jamicons--outline--logos--circle19.svg"
        />
        <div className="flex flex-row py-0 px-1 items-center justify-center">
          <div className="relative leading-[140%]">+2,5%</div>
        </div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/icon--iconoir--statup6.svg"
        />
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
        alt=""
        src="/icon--jamicons--outline--logos--pencil6.svg"
      />
    </div>
  </div>
  <img
    className="self-stretch max-w-full overflow-hidden h-[220px] shrink-0 object-cover hidden"
    alt=""
    src="/picture11@2x.png"
  />
  <div className="self-stretch relative leading-[160%] text-default-white">
    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
  </div>
  <div className="self-stretch hidden flex-row pt-4 px-0 pb-0 items-center justify-start gap-[16px]">
    <img
      className="rounded-81xl w-16 h-16 object-cover"
      alt=""
      src="/user-thumb8@2x.png"
    />
    <div className="flex-1 flex flex-col items-start justify-start">
      <div className="self-stretch relative leading-[160%]">
        Jane Doe
      </div>
      <div className="self-stretch relative text-base leading-[140%] text-blue-gray-600">
        Senior Designer
      </div>
    </div>
  </div>
</div>
<div className="self-stretch flex flex-row p-8 items-start justify-start gap-[16px] z-[2] text-xl text-default-white">
  <div className="flex-1 rounded-lg flex flex-row p-4 items-center justify-center border-[2px] border-solid border-default-white">
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0"
      alt=""
      src="/icon--jamicons--outline--logos--shoppingcart3.svg"
    />
    <div className="flex flex-row py-0 px-4 items-center justify-center">
      <div className="relative tracking-[0.5px] leading-[24px] font-medium">
        Buy Now
      </div>
    </div>
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--arrowright20.svg"
    />
  </div>
  <div className="flex-1 rounded-lg hidden flex-row p-3 items-center justify-center text-base text-blue-600 border-[2px] border-solid border-blue-600">
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--plus15.svg"
    />
    <div className="flex flex-row py-0 px-4 items-center justify-center">
      <div className="relative tracking-[0.5px] leading-[24px] font-medium">
        Event Details
      </div>
    </div>
    <img
      className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
      alt=""
      src="/icon--jamicons--outline--logos--arrowright21.svg"
    />
  </div>
</div>
<div className="my-0 mx-[!important] absolute top-[16px] left-[16px] rounded bg-purple-100 h-6 hidden flex-row py-2 px-1 box-border items-center justify-center z-[3] text-sm text-purple-800">
  <img
    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
    alt=""
    src="/icon--jamicons--outline--logos--circle20.svg"
  />
  <div className="flex flex-row py-0 px-1 items-center justify-center">
    <div className="relative leading-[140%]">Featured</div>
  </div>
  <img
    className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
    alt=""
    src="/icon--iconoir--cancel11.svg"
  />
</div>
<img
  className="my-0 mx-[!important] absolute top-[172px] left-[calc(50%_-_48.33px)] rounded-81xl w-24 h-24 object-cover hidden z-[4]"
  alt=""
  src="/user-thumb4@2x.png"
/>
</div>  */
