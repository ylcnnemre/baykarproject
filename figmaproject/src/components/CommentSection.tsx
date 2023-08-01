import React, { useMemo, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CommentSection = () => {
  const sliderRef = useRef<any>();
  const elements = useMemo(() => {
    return [1, 2, 3, 4, 5];
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="self-stretch overflow-hidden flex flex-col sm:p-20 p-4 pt-12 items-start justify-center relative sm:gap-[80px] gap-[20px]  z-[4]">
      <div className="self-stretch flex flex-row items-center justify-start sm:gap-[48px] sm:mb-0 mb-[20px] z-[1]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative sm:text-37xl text-[34px] sm:text-start text-center leading-[110%] font-extrabold">
              Because they love us
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px] text-base text-blue-600">
          <div
            onClick={handlePrev}
            className="rounded-81xl sm:block hidden cursor-pointer shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_0px_2px_rgba(0,_0,_0,_0.07)] flex flex-row p-3 items-center justify-center border-[2px] border-solid border-amber-900"
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--plus6.svg"
            />
            <div className="hidden flex-row py-0 px-4 items-center justify-center">
              <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                Request a Quote
              </div>
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 "
              alt=""
              src="/icon--iconoir--arrowleft.svg"
            />
          </div>
          <div
            onClick={handleNext}
            className="rounded-81xl sm:block hidden cursor-pointer shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_0px_2px_rgba(0,_0,_0,_0.07)] flex flex-row p-3 items-center justify-center border-[2px] border-solid border-amber-900"
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--plus6.svg"
            />
            <div className="hidden flex-row py-0 px-4 items-center justify-center">
              <div className="relative tracking-[0.5px] leading-[24px] font-medium">
                Request a Quote
              </div>
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/icon--iconoir--arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute  h-[370px]   sm:top-[200px] top-[100px] w-full    bg-[#FDE68A] sm:right-10 sm:left-10 left-[0px] "></div>
      <div className="self-stretch overflow-x-auto flex flex-row items-center justify-center gap-[24px] z-[2] text-5xl text-black ">
        <Swiper
          spaceBetween={60}
          ref={sliderRef}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView : 1
            },
            500 : {
              slidesPerView : 3
            }
          }}
        >
          {elements.map((item, index) => {
            return (
              <SwiperSlide className="rounded-xl   ">
                <div className="z-50 rounded-xl   bg-default-white  box-border  w-max h-max   flex flex-col items-start justify-start relative border-[1px] border-solid border-blue-gray-200">
                  <div className="self-stretch flex flex-col p-8 items-start justify-start gap-[16px] z-[1]">
                    <div className="self-stretch flex flex-row py-4 px-0 items-center justify-start text-blue-gray-600">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-8 h-8"
                          alt=""
                          src="/vector20.svg"
                        />
                        <b className="relative leading-[110%]">Zoomerr</b>
                      </div>
                    </div>

                    <div className="text-start relative leading-[160%] text-5xl">
                      Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                      tellus, viverra turpis lorem. Varius a turpis urna id
                      porttitor.
                    </div>
                    <div className="self-stretch flex flex-row pt-4 px-0 pb-0 items-center justify-start gap-[16px] text-lg">
                      <img
                        className="!w-16"
                        alt=""
                        src="/user-thumb11@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className=" relative leading-[160%]">
                          Hellen Jummy
                        </div>
                        <div className="relative text-base leading-[140%] text-blue-gray-600">
                          Team Lead
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CommentSection;
