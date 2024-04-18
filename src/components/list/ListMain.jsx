import styles from "./ListMain.module.scss";
import ToCardList from "./ToCardList";
import { getRecipientsList } from "../../Api/Api";
import { Link } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

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

  const sortedData = Array.isArray(rollingPaperData)
    ? rollingPaperData
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (
    <section className={styles.listMain}>
      <h1 className={styles.rollingPaperTitle}>인기 롤링 페이퍼🔥</h1>
      <RollingPaperContext.Provider value={rollingPaperData}>
        <ToCardList />
      </RollingPaperContext.Provider>
      <h1 className={styles.rollingPaperTitle}>최근 만든 롤링 페이퍼 ⭐</h1>
      <RollingPaperContext.Provider value={sortedData}>
        <ToCardList />
      </RollingPaperContext.Provider>
      <Link to="/post" className={styles.createBtn}>
        나도 만들어보기
      </Link>
    </section>
  );
};

export default ListMain;
