import { useState } from "react";
import styles from "./Option.module.scss";
import selectedImg from "../assets/check.svg";
import useFetch from "../Hooks/useFetch";

function BackImg({ imgurl, onclick, isSelected }) {
  return (
    <div
      className={styles.Option__backImg}
      style={{ backgroundImage: `url(${imgurl})` }}
      onClick={() => onclick(imgurl)}
    >
      {isSelected && (
        <img src={selectedImg} alt="selected" className={styles.selectedImg} />
      )}
    </div>
  );
}

function Option({ ColorOrImg, setBackGround }) {
  const imgData = useFetch("https://rolling-api.vercel.app/background-images/");

  const [selectedColor, setSelectedColor] = useState("orange"); //선택된 컬러 state
  const [selectedBackImg, setSelectedBackImg] = useState(null); //선택된 배경이미지 state

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBackGround(color); //최종 선택 반영
    setSelectedBackImg(null); // 이미지 선택 해제
  };

  const handleBackImgClick = (url) => {
    setSelectedBackImg(url);
    setBackGround(url); //최종선택 반영
    setSelectedColor(null); // 컬러 선택 해제
  };

  if (ColorOrImg === "image") {
    //이미지 선택시 보여지는 레이아웃
    if (imgData.isLoading) return <div>Loading...</div>;
    if (imgData.isError) return <div>Error occurred</div>;
    if (!selectedBackImg && imgData.data?.imageUrls.length > 0) {
      setSelectedBackImg(imgData.data.imageUrls[0]);
      setSelectedColor(null);
      setBackGround(imgData.data.imageUrls[0]);
    }
    return (
      <div className={styles.Options}>
        {imgData.data?.imageUrls.map((imgurl, index) => (
          <BackImg
            key={index}
            imgurl={imgurl}
            onclick={handleBackImgClick}
            isSelected={selectedBackImg === imgurl}
          />
        ))}
      </div>
    );
  }

  return (
    //컬러 선택 레이아웃
    <div className={styles.Options}>
      <div
        className={`${styles.Option} ${styles.orange}`}
        onClick={() => handleColorClick("orange")}
      >
        {selectedColor === "orange" && (
          <img
            src={selectedImg}
            className={styles.selectedImg}
            alt="selected"
          />
        )}
      </div>
      <div
        className={`${styles.Option} ${styles.purple}`}
        onClick={() => handleColorClick("purple")}
      >
        {selectedColor === "purple" && (
          <img
            src={selectedImg}
            className={styles.selectedImg}
            alt="selected"
          />
        )}
      </div>
      <div
        className={`${styles.Option} ${styles.blue}`}
        onClick={() => handleColorClick("blue")}
      >
        {selectedColor === "blue" && (
          <img
            src={selectedImg}
            className={styles.selectedImg}
            alt="selected"
          />
        )}
      </div>
      <div
        className={`${styles.Option} ${styles.green}`}
        onClick={() => handleColorClick("green")}
      >
        {selectedColor === "green" && (
          <img
            src={selectedImg}
            className={styles.selectedImg}
            alt="selected"
          />
        )}
      </div>
    </div>
  );
}

export default Option;
