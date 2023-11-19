import React from "react";

export const PriceTable = ({ Data }) => {
  let trClass = " ";
  let thClass = "h-full border-2 border-solid border-black rounded";
  let tdClass = "h-full border-2 border-solid border-black/50 rounded";
  let pClass = "px-1 text-[10px] text-center";

  return (
    <div className="flex flex-col items-center justify-center  p-2">
      <h1 className="text-center font-bold mt-2 mb-1">{Data.name}</h1>
      <table>
        <thead>
          <tr className={trClass}>
            <th className={thClass} colSpan={Data.headerLength}>
              <p className={`text-center py-2 font-extrabold text-[14px]`}>
                {Data.codeName}
              </p>
            </th>
          </tr>
          <tr className={trClass}>
            {Data.header.map((head) => {
              return (
                <th className={thClass}>
                  <p className={pClass}>{head}</p>
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
