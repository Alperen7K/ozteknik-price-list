import React from "react";

export const PriceTable = ({ Data }) => {
  let trClass = " ";
  let thClass = "h-full border-2 border-solid border-black rounded";
  let tdClass = "h-full border-2 border-solid border-black/70 rounded";
  let pClass =
    "p-1 text-[10px] sm:text-[12px] md:text-[14px] text-center font-bold";
  let headerThClass =
    "bg-gradient-to-r from-[#1C1652]  to-[#015CA4] text-white border-2 border-solid border-black";

  return (
    <div className="flex flex-col items-center justify-center   p-2">
      <div>
        {Data.image && (
          <>
            <img
              src={Data.image}
              className="h-[20vw] my-[2vh] sm:h-[10vh] sm:my-[2vh]"
              alt={Data.codeName}
            />
          </>
        )}
      </div>
      {/* sm:scale-[1.1] md:scale-[1.2] lg:scale-[1.3] xl:scale-[1.4] sm:my-6 md:my-12 lg:my-[72px] xl:my-[90px] */}
      <table className=" ">
        <thead>
          {/* Header 1 */}
          <tr className={trClass}>
            <th
              className={
                "bg-red-600 text-white border-2 border-solid border-black px-2"
              }
              colSpan={Data.header.length}
            >
              <p
                className={`text-center py-2 md:p-3 font-extrabold text-[14px] sm:text-[16px] md:text-[18px]`}
              >
                {Data.name}
              </p>
            </th>
          </tr>
          {/* Header 2 */}
          {/* <tr className={trClass}>
            <th className={headerThClass} colSpan={Data.header.length}>
              <p
                className={`text-center py-2 font-extrabold text-[12px] sm:text-[14px]`}
              >
                {Data.codeName}
              </p>
            </th>
          </tr> */}
          {/* Header 3 */}
          <tr className={headerThClass}>
            {Data.header.map((head) => {
              return (
                <th className={thClass}>
                  <p
                    className={
                      "px-1 md:p-3 text-[12px] sm:text-[14px] md:text-[16px] text-center"
                    }
                  >
                    {head}
                  </p>
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
