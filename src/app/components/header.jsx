import React, { useContext } from "react";
import store from "./store";
export default function Header() {
  const data = useContext(store)
  return (
    <header style={{position:data.isMenu&&'fixed'}} className=" lg:fixed top-0 left-0  z-50  w-full h-16 lg:h-24  px-3 md:px-5 lg:px-8 xl:px-[10%] bg-white flex ">
      <div className="w-full h-full 2xl:container mx-auto flex lg:border-b lg:flex-row-reverse flex-wrap">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <figure className="w-1/2 lg:w-[10%] h-full flex justify-start items-center lg:justify-end ">
      <img
        className="w-24 h-full "
        src="https://web-cdn.snapp.ir/snapp-website/icons/snappTextLogo.svg"
        alt=""
      />
    </figure>
  );
}

function Menu() {
  const data = useContext(store)
  return (
    <nav className="w-1/2 lg:w-[90%] h-full">
      <ul className="w-full h-full flex flex-wrap items-center content-center justify-end gap-5 xl:gap-8 lg:pe-8 ">
        <li onClick={data.clickMenu} className="flex lg:hidden">
          {data.iconMenu}
        </li>
        <li className="hidden py-4  lg:flex items-end gap-1 content-center cursor-pointer group relative">
          <nav className="absolute border hidden group-hover:flex hover:flex left-[-40%] bottom-[-200%] bg-white w-[180%] min-h-12 rounded-lg">
            <ul className="w-full h-full flex flex-wrap *:w-full   *:flex *:justify-end">
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  فرصت‌های شغلی
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  تماس با ما
                </a>
              </li>
            </ul>
          </nav>
          <span className=" cursor-pointer flex h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>{" "}
          <a className="text-[#595859]" href="">
            {" "}
            درباره اسنپ{" "}
          </a>{" "}
        </li>
        <li className="hidden lg:flex">
          <a className="text-[#595859]" href="">
            {" "}
            بلاگ{" "}
          </a>
        </li>
        <li className="hidden lg:flex">
          <a className="text-[#595859]" href="">
            پنل سازمانی{" "}
          </a>
        </li>
        <li className="hidden lg:flex">
          <a className="text-[#595859]" href="">
            {" "}
            باشگاه رانندگان{" "}
          </a>
        </li>
        <li className="hidden lg:flex">
          <a className="text-[#595859]" href="">
            {" "}
            ثبت نام راننده اسنپ{" "}
          </a>
        </li>
        <li className="hidden lg:flex py-4 items-end gap-1 content-center cursor-pointer group relative ">
          <nav className="absolute border hidden group-hover:flex hover:flex left-[-40%] bottom-[-850%] bg-white w-[180%] min-h-12 rounded-lg">
            <ul className="w-full h-full flex flex-wrap *:w-full   *:flex *:justify-end">
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  درخواست تاکسی
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  پیک موتوری
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  سفارش آنلاین غذا
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  سوپرمارکت
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  رزرو بلیط هواپیما{" "}
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  رزرو بلیط قطار
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  رزرو بلیط اتوبوس
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  رزرو هتل
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  درخواست وانت بار
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  خدمات اسباب‌کشی
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  پزشک و مشاور
                </a>
              </li>
              <li>
                <a
                  className="w-full h-full flex justify-end px-5 py-2   hover:text-[#20ab58] text-[#595859] "
                  href=""
                >
                  اسنپ پرو
                </a>
              </li>
            </ul>
          </nav>
          <span className=" cursor-pointer flex h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>{" "}
          <a className="text-[#595859]" href="">
            {" "}
            سوپراپ اسنپ{" "}
          </a>{" "}
        </li>
      </ul>
    </nav>
  );
}
