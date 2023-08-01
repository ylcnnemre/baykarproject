import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useCallback } from "react";
import { Pagination } from "swiper/modules";
import "./styles.css";
const CommentSlider = () => {
  const sliderRef = useRef<any>();
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      <Swiper slidesPerView={3} ref={sliderRef} spaceBetween={20}  >
        {elements.map((item, index) => {
          return (
            <SwiperSlide>
              <h1>{index}</h1>
              <div className="rounded-xl bg-default-white shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_0px_6px_rgba(0,_0,_0,_0.07)] box-border w-96 overflow-hidden shrink-0 flex flex-col items-start justify-start relative border-[1px] border-solid border-blue-gray-200">
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

                  <div className="text-start relative leading-[160%]">
                    Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                    tellus, viverra turpis lorem. Varius a turpis urna id
                    porttitor.
                  </div>
                  <div className="self-stretch flex flex-row pt-4 px-0 pb-0 items-center justify-start gap-[16px] text-lg">
                    <img className="!w-16" alt="" src="/user-thumb11@2x.png" />
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
    
    </>
  );
};

export default CommentSlider;
