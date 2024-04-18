import { useState, useEffect } from "react";
import styles from "./Option.module.scss";
import selectedImg from "../assets/check.svg";
import useFetch from "../Hooks/useFetch";

function BackImg({ imgurl, onclick, isSelected,}) {
  return (
    <div
      className={styles.Option__backImg__container}
      onClick={() => onclick(imgurl)}
    >
      <img
        src={imgurl}
        alt="선택 배경 이미지"
        className={`${isSelected ? styles.Option__backImg__opacity : styles.Option__backImg}`}
      />
      {isSelected && (
        <img src={selectedImg} alt="selected" className={styles.selectedImg} />
      )}
    </div>
  );
}


function Option({ ColorOrImg, setBackGround }) {
  const imgData = useFetch("https://rolling-api.vercel.app/background-images/");
  const [selectedColor, setSelectedColor] = useState("beige"); //선택된 컬러 state
  const [selectedBackImg, setSelectedBackImg] = useState(null); //선택된 배경이미지 state

  const colorOptions = [
    { color: "beige" },
    { color: "purple" },
    { color: "blue" },
    { color: "green" },
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBackGround(color, null); //최종 선택 반영
    setSelectedBackImg(null); // 이미지 선택 해제
  };

  const handleBackImgClick = (url) => {
    setSelectedBackImg(url);
    setBackGround("beige", url); //최종선택 반영
    setSelectedColor(null); // 컬러 선택 해제
  };

  useEffect(() => {
    if (ColorOrImg === "image" && imgData.data && imgData.data.imageUrls) {
      setBackGround("beige", imgData.data.imageUrls[0]);
    } else if (ColorOrImg === "color") {
      setSelectedBackImg(null);
      setSelectedColor("beige");
      setBackGround("beige", null);
    }
  }, [ColorOrImg, imgData.data, setBackGround]);

  if (ColorOrImg === "image") {
    //이미지 선택시 보여지는 레이아웃
    if (imgData.isLoading) return <div>Loading...</div>;
    if (imgData.isError) return <div>Error occurred</div>;
    if (!selectedBackImg && imgData.data?.imageUrls.length > 0) {
      setSelectedBackImg(imgData.data.imageUrls[0]);
      setSelectedColor(null);
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
      {colorOptions.map((colorOption) => (
        <div
          key={colorOption.color}
          className={`${styles.Option} ${styles[colorOption.color]}`}
          onClick={() => handleColorClick(colorOption.color)}
        >
          {selectedColor === colorOption.color && (
            <img
              src={selectedImg}
              className={styles.selectedImg}
              alt="selected"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Option;
