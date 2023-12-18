import { createContext, useContext, useState } from "react";
import { page1, page2, page3, page4, page5, page6, page7 } from "../models";

const PriceContext = createContext();

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

const pages = {
  1: {
    Data: page1,
    pageName: "HIDROLiK HORTUM SOKETLERI / HYDRAULIC HOSE SOCKETS",
  },
  2: {
    Data: page2,
    pageName: "HIDROLiK HORTUM SOKETLERI / HYDRAULIC HOSE SOCKETS",
  },
  3: {
    Data: page3,
    pageName: "HIDROLiK HORTUM SOKETLERI / HYDRAULIC HOSE SOCKETS",
  },
  4: {
    Data: page4,
    pageName: "HIDROLiK HORTUM SOKETLERI / HYDRAULIC HOSE SOCKETS",
  },
  5: {
    Data: page5,
    pageName: "HIDROLiK HORTUM SOKETLERI / HYDRAULIC HOSE SOCKETS",
  },
  6: {
    Data: page6,
    pageName: "HIDROLiK HORTUM SOKETLERI / HYDRAULIC HOSE SOCKETS",
  },
  7: {
    Data: page7,
    pageName: "HIDROLiK HORTUM SOKETLERI / HYDRAULIC HOSE SOCKETS",
  },
};