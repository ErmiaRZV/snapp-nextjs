import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Sect3() {
  return (
    <section className=" 2xl:container mx-auto w-full px-[10%] lg:px-[15%] mt-14 ">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-32 md:h-56 lg:h-[400px] border rounded-2xl">
          <SwiperSlide><img className="w-full h-full object-fill" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Market.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full h-full object-fill" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Food.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img  className="w-full h-full object-fill" src="https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Driver.jpg" alt="" /></SwiperSlide>
        </Swiper>

    </section>
  );
}
