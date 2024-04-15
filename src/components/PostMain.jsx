import styles from "./PostMain.module.scss";
import Input from "./Message/Input";
import { useState } from "react";
import Option from "./Option";
//Post 페이지 내부의 Main으로 사용될 컴포넌트입니다.

function PostMain() {
  const [selectedButton, setSelectedButton] = useState("color");

  const handleToggleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <main className={styles.PostMain}>
      <form>
        <label className={styles.to}>To.</label>
        <Input placeholder='받는 사람 이름을 입력해 주세요.' error={false} />
        <label className={styles.choose}>배경화면을 선택해 주세요.</label>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        <div className={styles.toggle}>
          <button
            type='button'
            name='color'
            className={`${styles.toggleButton} ${selectedButton === "color" ? styles.checked : styles.unchecked}`}
            onClick={() => handleToggleClick("color")}
          >
            컬러
          </button>
          <button
            type='button'
            name='image'
            className={`${styles.toggleButton} ${selectedButton === "image" ? styles.checked : styles.unchecked}`}
            onClick={() => handleToggleClick("image")}
          >
            이미지
          </button>
        </div>
        <div className={styles.btn__container}>
          <Option ColorOrImg={selectedButton} setBackGround={pickBackgorund} />
          <CreateBtn disabled={isCreateButtonDisabled} />
        </div>
      </form>
    </main>
  );
}
export default PostMain;
