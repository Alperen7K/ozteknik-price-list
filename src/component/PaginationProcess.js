import { Button, InputNumber, Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PaginationProcess = ({ params }) => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const goToPage = (pageNumber) => {
    navigate(`/price/${pageNumber}`);
  };
  return (
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
  );
};
