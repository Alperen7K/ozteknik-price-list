import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePrice } from "../context";
import { PriceTable } from "../component";
import { Button, Input, InputNumber, Pagination } from "antd";

export const Price = () => {
  const [pageData, setPageData] = useState();
  const params = useParams().id;
  const { pagesData } = usePrice();
  console.log(pageData);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();
  // const pageData = pagesData[params];

  useEffect(() => {
    setPageData(pagesData[params]);
  }, [params]);

  console.log("pageData", pageData);

  console.log(params);

  const goToPage = (pageNumber) => {
    navigate(`/price/${pageNumber}`);
  };

  if (!Array.isArray(pageData)) {
    return (
      <h1 className="text-center">
        Lütfen bekleyiniz.
        <div className="flex flex-col items-center justify-center">
          <Pagination
            defaultCurrent={params}
            responsive={true}
            total={900}
            onChange={(number) => {
              goToPage(number);
            }}
          />
          <div className="mb-10 ">
            <InputNumber
              max={90}
              onInput={(number) => {
                setPage(number);
              }}
              placeholder="Sayı giriniz"
            />
            <Button
              onClick={() => {
                if (page !== 0) {
                  goToPage(page);
                }
              }}
            >
              Sayfaya Git
            </Button>
          </div>
        </div>
      </h1>
    );
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <h1 className="text-center mt-4 mb-2">Sayfa-{params}</h1>
      <div>
        {pageData.map((table) => {
          return <PriceTable Data={table} />;
        })}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Pagination
          defaultCurrent={params}
          responsive={true}
          total={900}
          onChange={(number) => {
            goToPage(number);
          }}
        />
        <div className="mb-10 ">
          <InputNumber
            onInput={(number) => {
              setPage(number);
            }}
            placeholder="Sayı giriniz"
          />
          <Button
            onClick={() => {
              if (page !== 0) {
                goToPage(page);
              }
            }}
          >
            Sayfaya Git
          </Button>
        </div>
      </div>
    </div>
  );
};
