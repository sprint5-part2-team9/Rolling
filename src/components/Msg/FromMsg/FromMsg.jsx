// FromMsg.jsx
/*
엔드포인트 /post/:id/message 

sender: 메세지 작성자의 이름
profileImageURL: ProfileImage 컴포넌트에서 선택한 작성자 프로필 이미지
relationship: 대상과 작성자의 관계, 지인이 기본값
content: 메세지의 내용으로, Editor 컴포넌트에서 내용을 전달받음
font: 메세지에 사용할 폰트. font.css 파일에 import 되어있음. value 이름 달라서 수정 要
createdAt: 객체 생성 시점
*/
import { useState } from "react";
import styles from "./FromMsg.module.scss";
import Input from "../Input";
import Dropdown from "../Dropdown";
import Editor from "./Editor";
import ProfileImage from "./ProfileImage";

function FromMsg() {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("지인");
  const [font, setFont] = useState("Noto Sans");

  const relationshipOptions = [
    { value: "친구", label: "친구" },
    { value: "지인", label: "지인" },
    { value: "동료", label: "동료" },
    { value: "가족", label: "가족" },
  ];

  const fontOptions = [
    { value: "Noto Sans", label: "Noto Sans" },
    { value: "Pretendard", label: "Pretendard" },
    { value: "나눔명조", label: "나눔명조" },
    { value: "나눔손글씨 손편지체", label: "나눔손글씨 손편지체" },
  ];

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleRelationshipChange = (value) => {
    setRelationship(value);
  };

  const handleFontChange = (value) => {
    setFont(value);
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2>From.</h2>
          <Input placeholder="이름을 입력해 주세요." value={name} onChange={handleNameChange} />
        </section>
        <section className={styles.section}>
          <h2>프로필 이미지</h2>
          <ProfileImage />
        </section>
        <section className={styles.section}>
          <h2>상대와의 관계</h2>
          <Dropdown
            options={relationshipOptions}
            value={relationship}
            onChange={handleRelationshipChange}
          />
        </section>
        <section className={styles.section}>
          <h2>내용을 입력해 주세요</h2>
          <Editor />
        </section>
        <section className={styles.section}>
          <h2>폰트 선택</h2>
          <Dropdown options={fontOptions} value={font} onChange={handleFontChange} />
        </section>
      </div>
      <button>생성하기</button>
    </>
  );
}

export default FromMsg;
