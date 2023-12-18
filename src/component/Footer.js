import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ConfigProvider, InputNumber, Pagination } from "antd";
import phone from "../assets/icon/phone.png";
import fax from "../assets/icon/fax.png";
import email from "../assets/icon/email.png";
import web from "../assets/icon/web.png";

export const Footer = ({ params }) => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const labelClass = "text-[10px] sm:text-[15px]";
  const imgClass = "w-[20px] sm:w-[30px] m-1";
  const footerClass = "flex items-center justify-center  m-1 ";

  const goToPage = (pageNumber) => {
    navigate(`/price/${pageNumber}`);
  };
  return (
    <div className="shadow-xl w-full mt-10  bg-[#E3E3E3] border-solid border-t-4 border-[#E00414] flex flex-col items-center justify-center">
      <div className=" w-full flex flex-col items-center">
        <Pagination
          defaultCurrent={params}
          responsive={true}
          total={900}
          className="mt-4 mb-2"
          onChange={(number) => {
            goToPage(number);
          }}
        />
        <div className="mb-2 flex items-center justify-center w-full">
          <InputNumber
            className="w-[125px] m-1"
            onInput={(number) => {
              setPage(number);
            }}
            placeholder="Sayı giriniz"
          />
          <Button
            className="bg-[#E00414] text-white w-[125px] m-1"
            onClick={() => {
              if (page !== 0) {
                goToPage(page);
              }
            }}
          >
            Sayfaya Git
          </Button>
        </div>
        <div className="w-full flex justify-around items-center mb-5">
          <div className="lg:w-[50vw] flex flex-col lg:flex-row lg:justify-around items-center justify-center">
            <div className={footerClass}>
              <img src={phone} className={imgClass} />
              <label className={labelClass}>
                + 90 312 395 2578
                <br />+ 90 850 420 1990
              </label>
            </div>
            <div className={footerClass}>
              <img src={fax} className={imgClass} />
              <label className={labelClass}>+ 90 312 395 1709 </label>
            </div>
          </div>
          <div className="lg:w-[50vw] flex flex-col lg:flex-row lg:justify-around items-start justify-center">
            <div className={footerClass}>
              <img src={email} className={imgClass} />
              <a href="mailto:bilgi@ozteknikrekor.com.tr">
                <label className={labelClass}>bilgi@ozteknikrekor.com.tr</label>
              </a>
            </div>
            <div className={footerClass}>
              <img src={web} className={imgClass} />
              <a href="https://ozteknikrekor.com.tr" target="_blank">
                <label className={labelClass}>ozteknikrekor.com.tr</label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
