import styles from "./PostMain.module.scss";
import Input from "./Message/Input";
import { useState } from "react";
import Option from "./Option";
import CreateBtn from "./Message/CreateBtn";
import { postRecipients } from "../Api/Api";
//Post 페이지 내부의 Main으로 사용될 컴포넌트입니다.

//name : input.value,
//backgroundimg : selectedBackground,


function PostMain() {
  const [selectedButton, setSelectedButton] = useState("color");
  const [selectedBackGround, setSelectedBackGround] = useState("beige");
  const [name, setName] = useState("");

  const isCreateButtonDisabled = !name.trim();

  const handleNameChange = (value) => {
    setName(value);
  };

  const pickBackgorund = (picked) => {
    //최종 선택된 배경
    setSelectedBackGround(picked);
  };
  

  const handleToggleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleCreatePost = async () => {
    try {
      console.log('post 생성중..');
      await postRecipients(name, selectedBackGround);
      console.log('생성완료');
    } catch(error) {
      console.log('생성 실패 :');
      console.error(error);
    }
  };

  return (
    <main className={styles.PostMain}>
      <form>
        <label className={styles.to}>To.</label>
        <Input
          id="name"
          placeholder="받는 사람 이름을 입력해 주세요."
          value={name}
          onChange={handleNameChange}
        />
        <label className={styles.choose}>배경화면을 선택해 주세요.</label>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        <div className={styles.toggle}>
          <button
            type="button"
            name="color"
            className={`${styles.toggleButton} ${selectedButton === "color" ? styles.checked : styles.unchecked}`}
            onClick={() => handleToggleClick("color")}
          >
            컬러
          </button>
          <button
            type="button"
            name="image"
            className={`${styles.toggleButton} ${selectedButton === "image" ? styles.checked : styles.unchecked}`}
            onClick={() => handleToggleClick("image")}
          >
            이미지
          </button>
        </div>
        <div className={styles.btn__container}>
          <Option ColorOrImg={selectedButton} setBackGround={pickBackgorund} />
          <CreateBtn disabled={isCreateButtonDisabled} onClick={handleCreatePost}/>
        </div>
      </form>
    </main>
  );
}

export default PostMain;
