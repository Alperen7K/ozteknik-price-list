import React from "react";
import logo from "../assets/ozteknik-logo.png";

export const Header = ({ title }) => {
  return (
    <div className="sticky top-0 z-50">
      <div className=" w-full h-[100px] sm:h-[100px] bg-[#E3E3E3] flex items-end shadow-xl">
        <div className="flex items-end   w-full h-[60px] sm:h-[80px]">
          <div className="w-[65vw] sm:w-[75vw]">
            <div className="w-full h-[85px] bg-red-600 rounded-tr-[65px] border-solid border-t-4 border-r-4 border-b-4 border-b-[#E3E3E3]  text-white border-[#110551] flex items-center justify-center ">
              <h1 className="text-[3vw] sm:text-[18px] m-0 pl-1 pr-3 text-center">
                {/* {titleTr}
                <br />
                {titleEn} */}
                {title}
              </h1>
            </div>
          </div>
          <div className="w-[35vw] sm:w-[25vw] h-[80px] flex items-center justify-center">
            <img className="w-[28vw] sm:w-[175px]  " alt="" src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};
