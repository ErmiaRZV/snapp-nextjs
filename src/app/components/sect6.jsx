import React from "react";

export default function Sect6() {
  return (
    <section dir="rtl" className="w-full 2xl:container mx-auto flex lg:px-[10%] flex-wrap bg-[#f2f5f7] mt-14 py-14 ">
      <h2 className="w-full flex justify-center px-5 text-[#404040] text-3xl lg:text-4xl text-center font-bold ">
        در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.
      </h2>
      <p className="w-full flex justify-center px-5 text-[#4f5451] text-center mt-8 text-xl ">
        بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
        اینترنتی انجام دهید
      </p>
      <div className="w-full flex justify-center">
        <span className="flex cursor-pointer duration-500 hover:bg-[#00db75] bg-[#20ab58] text-white mt-8 px-8 rounded-lg py-3 ">
          ثبت‌نام رانندگان
        </span>
      </div>
      <div className="w-full mt-8 px-5 rounded-xl flex">
        <video
          className="w-full h-full"
          controls
          src="https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbranandeh1.mp4"
        ></video>
      </div>
    </section>
  );
}
