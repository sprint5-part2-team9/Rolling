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

function Option({ ColorOrImg }) {
  const imgData = useFetch("https://rolling-api.vercel.app/background-images/");

  const [selectedColor, setSelectedColor] = useState("orange");
  const [selectedBackImg, setSelectedBackImg] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedBackImg(null); // 이미지 선택 해제
  };

  const handleBackImgClick = (url) => {
    setSelectedBackImg(url);
    setSelectedColor(null); // 컬러 선택 해제
  };

  if (ColorOrImg === "image") {
    if (imgData.isLoading) return <div>Loading...</div>;
    if (imgData.isError) return <div>Error occurred</div>;
    if (!selectedBackImg && imgData.data?.imageUrls.length > 0) {
      setSelectedBackImg(imgData.data.imageUrls[0]);
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
