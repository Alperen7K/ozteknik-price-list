import React from "react";

export const PriceTable = ({ Data }) => {
  let trClass = " ";
  let thClass = "h-full border-2 border-solid border-black rounded";
  let tdClass = "h-full border-2 border-solid border-black/50 rounded";
  let pClass = "px-1 text-[10px] text-center";
  let headerThClass =
    "bg-gradient-to-r from-[#1C1652]  to-[#015CA4] text-white border-2 border-solid border-black";

  return (
    <div className="flex flex-col items-center justify-center  p-2">
      {/* <h1 className="text-center font-bold mt-2 mb-1">{Data.name}</h1> */}
      <table className="sm:scale-[1.1] md:scale-[1.2] lg:scale-[1.3] xl:scale-[1.4] sm:my-6 md:my-12 lg:my-[72px] xl:my-[90px]">
        <thead>
          <tr className={trClass}>
            <th
              className={
                "bg-red-600 text-white border-2 border-solid border-black px-2"
              }
              colSpan={Data.headerLength}
            >
              <p className={`text-center py-2 font-extrabold text-[14px]`}>
                {Data.name}
              </p>
            </th>
          </tr>
          <tr className={trClass}>
            <th className={headerThClass} colSpan={Data.headerLength}>
              <p className={`text-center py-2 font-extrabold text-[12px]`}>
                {Data.codeName}
              </p>
            </th>
          </tr>
          <tr className={trClass}>
            {Data.header.map((head) => {
              return (
                <th className={thClass}>
                  <p className={"px-1 text-[10px] text-center"}>{head}</p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Data.data.map((row, index) => {
            return (
              <tr
                key={index}
                className={`${trClass} ${
                  index % 2 === 0 ? "bg-[#e0dfdf]" : ""
                }`}
              >
                {row.map((rowData) => {
                  return (
                    <td className={tdClass}>
                      <p className={pClass}>{rowData}</p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
