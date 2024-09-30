import React, { useEffect, useState } from "react";
import mainLogo from "../assets/images/webp/main-logo.webp"
import Button from "../components/common/CommonButton"

const Header = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    document.body.style.overflow = data ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [data]);
  function VIEW() {
    setData((prevData) => !prevData);
  }
  
  return (
    <div className=" max-w-[1162px] px-3 mx-auto ">
      <div className="pt-8 flex justify-between items-center">
        <img src={mainLogo} alt="logo" />
        <div className={`${data ? "right-0" : "right-[-100%]"} flex gap-7 items-center justify-between z-[50] max-md:gap-[26px] max-md:fixed max-md:bg-white max-md:w-full max-md:h-full max-xl:top-0 max-md:flex-col max-md:justify-center duration-300`}>
          <div className=" flex gap-11 max-md:flex-col max-md:items-center">
            <ul className=" flex gap-11 max-md:flex-col max-md:items-center">
              <a href="/" className="text-lg leading-5 font-inter font-medium text-black z-10">About Us</a>
              <a href="/" className="text-lg leading-5 font-inter font-medium text-black z-10">News</a>
              <a href="/" className="text-lg leading-5 font-inter font-medium text-black z-10">Contact Us</a>
            </ul>
          </div>
          <Button button="Get Started" />
        </div>
        <div onClick={VIEW} className={` ${data ? "cross " : ""} md:hidden cursor-pointer block z-50`}>
          <span className="block h-[3px] bg-black w-[25px] duration-300 cursor-pointer"></span>
          <span className="block h-[3px] bg-black w-[25px] duration-300 cursor-pointer my-[6px]"></span>
          <span className="block h-[3px] bg-black w-[25px] duration-300 cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
};

export default Header