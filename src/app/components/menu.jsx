import React, { useContext } from "react";
import store from "./store";
export default function Menu() {
  const data = useContext(store);
  return (
    <nav

      dir="rtl"
      className="w-full h-[100vh] bg-white mt-16 z-50 fixed top-0 overflow-auto"
      style={{ left: data.isMenu ? "0px" : "100%" }}
    >
      <ul className="w-full h-auto flex flex-wrap *:w-full *:text-sm *:flex items-center *:px-5  *:min-h-16 *:items-center">
        <li onClick={(e)=>data.clickLi(0,e)}>
          <span className="text-[#404040] justify-between flex w-full font-bold">
          
            <span>سوپراپ اسنپ </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>{" "}
          </span>
        </li>
        <ul style={{display : data.displayMenu[0]}} className="w-full h-auto  flex-wrap *:w-full *:min-h-16  ">
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  درخواست تاکسی
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  پیک موتوری
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  سفارش آنلاین غذا
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  سوپرمارکت
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  رزرو بلیط هواپیما{" "}
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  رزرو بلیط قطار
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  رزرو بلیط اتوبوس
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  رزرو هتل
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  درخواست وانت بار
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  خدمات اسباب‌کشی
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  پزشک و مشاور
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start  py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  اسنپ پرو
                </a>
              </li>
            </ul>
        <li>
          <a href="" className="text-[#404040]">
            {" "}
            ثبت نام راننده اسنپ{" "}
            <span className="text-[#20ab58]"> (سواری، موتور و وانت) </span>
          </a>
        </li>
        <li>
          <a href="" className="text-[#404040]">
            {" "}
            باشگاه رانندگان{" "}
          </a>
        </li>
        <li>
          <a href="" className="text-[#404040]">
            {" "}
            پنل سازمانی{" "}
          </a>
        </li>
        <li>
          <a href="" className="text-[#404040]">
            {" "}
            بلاگ{" "}
          </a>
        </li>
        <li onClick={(e)=>data.clickLi(1,e)}>
          <span className="text-[#404040] font-bold w-full flex justify-between">
            <span>درباره اسنپ </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>{" "}
          </span>
        </li>
        <ul style={{display:data.displayMenu[1]}} className="w-full h-auto    flex-wrap *:w-full *:min-h-16  *:flex ">
              <li>
                <a
                  className="w-full h-full flex justify-start py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  فرصت‌های شغلی
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-start py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  تماس با ما
                </a>
              </li>
            </ul>
      
      </ul>
    </nav>
  );
}
