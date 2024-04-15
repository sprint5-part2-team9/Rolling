import styles from "./ListMain.module.scss";
import ToCardListBest from "./ToCardListBest";
import ToCardListNew from "./ToCardListNew";
import { getRecipientsList } from "../../Api/Api";

import { useState, createContext, useEffect } from "react";

// import Data from "./Data.json";


export const RollingPaperContext = createContext();

const ListMain = () => {
  const [rollingPaperData, setRollingPaperData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecipientsList();
        setRollingPaperData(data.results);
      } catch (error) {
        console.error("에러입니다.");
      }
    };
    fetchData();
  }, []);

  return (
    <RollingPaperContext.Provider value={rollingPaperData}>
      <h1 className={styles.rollingPaperTitle}>인기 롤링 페이퍼🔥</h1>
      <ToCardListBest />
      <h1 className={styles.rollingPaperTitle}>최근 만든 롤링 페이퍼⭐</h1>
      <ToCardListNew />
      <button>나도 만들어보기</button>
    </RollingPaperContext.Provider>
  );
};

export default ListMain;
