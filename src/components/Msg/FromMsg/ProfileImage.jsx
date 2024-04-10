// ProfileImage.jsx
/*
From이 있는 글을 작성하는 페이지의 프로필 이미지를 선택하는 컴포넌트
이미지 선택을 안하거나 삭제 버튼을 누르면 기본 이미지로 초기화된 상태로 작성
이미지 선택 시 해당 프로필 이미지로 글 작성
*/
import { useState } from "react";
import styles from "./ProfileImage.module.scss";

const profileImages = [
  "https://i.pinimg.com/236x/4b/9f/7b/4b9f7b2307ab96c3be41bd33081c4493.jpg",
  "https://i.pinimg.com/236x/6e/58/23/6e58239b6e1566c6334f6094555569e6.jpg",
  "https://i.pinimg.com/236x/cb/f3/e6/cbf3e633c8c17fd018df994efabdfc1e.jpg",
  "https://i.pinimg.com/236x/2c/56/e3/2c56e340454ea4ba2fbcc6726a331e40.jpg",
  "https://i.pinimg.com/236x/87/c4/0b/87c40b8dfb156ad0d31a2e7201a4ff24.jpg",
  "https://i.pinimg.com/236x/47/84/0a/47840a176aeeecd2905f72682e1d83b0.jpg",
  "https://i.pinimg.com/236x/4d/b1/64/4db1647914066943c5301e8cbaaab06e.jpg",
  "https://i.pinimg.com/236x/17/f5/4b/17f54bdccd2ae5f8a96e35ff604d9791.jpg",
  "https://i.pinimg.com/236x/33/ba/96/33ba96ff0971885624677253d0903f2a.jpg",
  "https://i.pinimg.com/236x/ef/3b/0e/ef3b0ed9d2647654d9a1229847b33203.jpg",
];

const defaultImage = "https://i.pinimg.com/236x/e2/21/f0/e221f0954109ff15ad17ad7d05a1859b.jpg";

function ProfileImage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleDefaultImageClick = () => {
    setSelectedImage(defaultImage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectedImg_container}>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected Profile" className={styles.selectedImage} />
        ) : (
          <img src={defaultImage} alt="Default Profile" className={styles.selectedImage} />
        )}
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
            <img
              key={index}
              src={image}
              alt={`Profile ${index}`}
              onClick={() => handleImageClick(image)}
              className={styles.profileImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
