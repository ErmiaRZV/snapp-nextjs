import React from "react";

export default function Sect1() {
  return (
    <section dir="rtl" className=" lg:mt-24  w-full flex flex-wrap 2xl:container mx-auto ">
      <Box1 />
      <Box0 />
    </section>
  );
}

function Box0() {
  return (
    <figure className="hidden lg:flex w-1/2">
      <img
        className="object-cover "
        src="https://web-cdn.snapp.ir/snapp-website/images/homepage/intro_desktop.jpg"
        alt=""
      />
    </figure>
  );
}

function Box1() {
  return (
    <div className="bg-[#20ab58]  w-full h-auto text-white ps-6 py-6  lg:w-1/2 ">
      <h2 className="text-2xl font-bold [line-height:50px;] lg:[line-height:50px;] xl:[line-height:70px;] pe-[10%] w-full lg:text-4xl xl:text-5xl lg:text-center ">
        تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
      </h2>
      <p className="pe-6 [line-height:30px;] text-lg w-full mt-2 lg:mt-10 lg:px-[15%] lg:text-right">
        از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
        رزرو هتل و... را میتوانید با اسنپ انجام دهید.
      </p>
      <div className="w-full flex justify-center items-center  pe-6 mt-6 lg:hidden ">
        <span className="flex bg-white text-[#404040] font-bold justify-center items-center py-3 rounded-lg w-full  ">
          دانلود اپلیکیشن اسنپ
        </span>
      </div>
      <div className="hidden  flex-wrap lg:flex">
        <div className="w-full flex justify-center gap-5 mt-8 ">
          <input
            className="bg-transparent border-b border-white py-2 ps-2 outline-none "
            type="text"
            name=""
            placeholder="09XXXXX6798"
            id=""
          />
          <span className="bg-white text-[#20ab58] cursor-pointer flex justify-center items-center px-2 rounded-lg ">
            ارسال لینک
          </span>
        </div>
        <div className="w-[70%]  mx-auto mt-12 justify-center    flex ">
          <span className="border border-white bg-transparent cursor-pointer text-white py-3 px-5 rounded-lg">
            ورود به وب اپلیکیشن اسنپ
          </span>
        </div>
      </div>
    </div>
  );
}
