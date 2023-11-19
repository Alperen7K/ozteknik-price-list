import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePrice } from "../context";
import { PriceTable } from "../component";

export const Price = () => {
  const [pageData, setPageData] = useState();
  const params = useParams().id;
  const { pagesData } = usePrice();
  console.log(pageData);

  // const pageData = pagesData[params];

  useEffect(() => {
    setPageData(pagesData[params]);
  }, [params]);

  console.log("pageData", pageData);

  if (!Array.isArray(pageData)) {
    return <h1 className="text-center">Lütfen bekleyiniz.</h1>;
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <h1 className="text-center mt-4 mb-2">Sayfa-{params}</h1>
      <div>
        {pageData.map((table) => {
          return <PriceTable Data={table} />;
        })}
      </div>
    </div>
  );
};
