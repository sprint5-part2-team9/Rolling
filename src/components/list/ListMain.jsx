import ToCardListBest from "./ToCardListBest";
import ToCardListNew from "./ToCardListNew";

import { useState, useEffect, createContext } from "react";
import Data from "./Data.json";

export const RollingPaperContext = createContext();

const ListMain = () => {
  const [rollingPaperData, setRollingPaperData] = useState(Data);

  return (
    <RollingPaperContext.Provider value={rollingPaperData}>
      <ToCardListBest />
      <ToCardListNew />
    </RollingPaperContext.Provider>
  );
};

export default ListMain;
