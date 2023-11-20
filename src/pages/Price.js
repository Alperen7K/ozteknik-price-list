import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePrice } from "../context";
import { PaginationProcess, PriceTable } from "../component";
import { Button, Input, InputNumber, Pagination } from "antd";

export const Price = () => {
  const [pageData, setPageData] = useState();
  const params = parseInt(useParams().id, 10);
  const { pagesData } = usePrice();

  const navigate = useNavigate();
  // const pageData = pagesData[params];

  useEffect(() => {
    if (isValidPageNumber(params)) {
      setPageData(pagesData[params]);
    } else {
      navigate("/price/1");
    }
  }, [params]);

  console.log("pageData", pageData);
  console.log(pageData);
  console.log(params);

  const isValidPageNumber = (pageNumber) => {
    const pageAsNumber = parseInt(pageNumber, 10);
    return !isNaN(pageAsNumber) && pageAsNumber >= 0 && pageAsNumber <= 90;
  };

  const goToPage = (pageNumber) => {
    navigate(`/price/${pageNumber}`);
  };

  if (!Array.isArray(pageData?.Data)) {
    return <h1 className="text-center">Lütfen bekleyiniz.</h1>;
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <h1 className="text-center mt-4 mb-2">{pageData.pageName}</h1>
      <h1 className="text-center mt-4 mb-2">Sayfa-{params}</h1>
      <div>
        {pageData.Data.map((table) => {
          return <PriceTable Data={table} />;
        })}
      </div>
      <PaginationProcess params={params} />
    </div>
  );
};
