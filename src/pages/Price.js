import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePrice } from "../context";
import { PriceTable } from "../component";
import { Header, Footer } from "../component";
import logo from "../assets/ozteknik-logo.png";

export const Price = () => {
  const [pageData, setPageData] = useState();
  const params = parseInt(useParams().id, 10);
  const { pagesData } = usePrice();

  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    scrollToTop();

    if (isValidPageNumber(params)) {
      setPageData(pagesData[params]);
    } else {
      navigate("/price/1");
    }
  }, [params]);

  const isValidPageNumber = (pageNumber) => {
    const pageAsNumber = parseInt(pageNumber, 10);
    return !isNaN(pageAsNumber) && pageAsNumber >= 0 && pageAsNumber <= 90;
  };

  if (!Array.isArray(pageData?.Data)) {
    return (
      <div className="w-full min-h-[100vh] flex flex-col  justify-center">
        <div className="w-full flex items-center justify-center">
          <img src={logo} className="w-[40vw]" />
        </div>
        <h1 className="text-center mt-16">
          Sayfa henüz hazır değil lütfen bekleyiniz.
        </h1>
      </div>
    );
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      <Header title={pageData.pageName} />
      <div>
        {pageData.Data.map((table) => {
          return <PriceTable Data={table} />;
        })}
      </div>
      <Footer params={params} />
    </div>
  );
};
