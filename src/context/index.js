import { createContext, useCallback, useContext, useState } from "react";
import { page1, page2 } from "../models";

const PriceContext = createContext();

const pages = {
  1: page1,
  2: page2,
};

export const PriceContextProvider = ({ children }) => {
  const [temp, setTemp] = useState();
  const [pagesData, setPagesData] = useState(pages);

  return (
    <PriceContext.Provider value={{ temp, setTemp, pagesData, setPagesData }}>
      {children}
    </PriceContext.Provider>
  );
};

export const usePrice = () => {
  return useContext(PriceContext);
};
