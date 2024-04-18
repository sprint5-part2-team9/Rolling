// ProfileImage.jsx
/*
From이 있는 글을 작성하는 페이지의 프로필 이미지를 선택하는 컴포넌트
이미지 선택을 안하거나 삭제 버튼을 누르면 기본 이미지로 초기화된 상태로 작성
이미지 선택 시 해당 프로필 이미지로 글 작성
*/
import { useState, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import styles from "./ProfileImage.module.scss";

function ProfileImage({ onChange }) {
  const { data } = useFetch("https://rolling-api.vercel.app/profile-images/");
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileImages, setProfileImages] = useState([]);
  const [defaultImage, setDefaultImage] = useState(null);

  useEffect(() => {
    if (data && data.imageUrls && data.imageUrls.length > 0) {
      setDefaultImage(data.imageUrls[0]);
      setProfileImages(data.imageUrls.slice(1));
      setSelectedImage(data.imageUrls[0]);
    }
  }, [data]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    if (onChange) {
      onChange(image);
    }
  };

  const handleDefaultImageClick = () => {
    setSelectedImage(defaultImage);
    if (onChange) {
      onChange(defaultImage);
    }
  };

  const handleImageKeyPress = (event, image) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelectedImage(image);
      if (onChange) {
        onChange(image);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectedImg_container} tabIndex={0} onClick={handleDefaultImageClick}>
        <img
          src={selectedImage || defaultImage}
          alt='ProfileImage'
          className={styles.selectedImage}
        />
      </div>
      <div className={styles.txt_img_container}>
        <div className={styles.txt_container}>
          <button onClick={handleDefaultImageClick} className={styles.default_btn}>
            삭제
          </button>
          <p>프로필 이미지를 선택해주세요!</p>
        </div>
        <div className={styles.profileImgs}>
          {profileImages.map((image, index) => (
            <div
              key={index}
              tabIndex={0}
              onClick={() => handleImageClick(image)}
              onKeyDown={(event) => handleImageKeyPress(event, image)}
            >
              <img src={image} alt={`Profile ${index}`} className={styles.profileImg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
