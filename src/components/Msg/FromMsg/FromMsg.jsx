// FromMsg.jsx
import { useState } from "react";
import styles from "./FromMsg.module.scss";
import Input from "../Input";
import Dropdown from "../Dropdown";

function FromMsg() {
  const isError = false;
  const isDisabled = false;

  const [selectedRelation, setSelectedRelation] = useState("지인");
  const [selectedFont, setSelectedFont] = useState("Noto Sans");

  const relationOptions = [
    { value: "친구", label: "친구" },
    { value: "지인", label: "지인" },
    { value: "동료", label: "동료" },
    { value: "가족", label: "가족" },
  ];

  const fontOptions = [
    { value: "Noto Sans", label: "Noto Sans" },
    { value: "font2", label: "font2" },
    { value: "font3", label: "font3" },
    { value: "font4", label: "font4" },
  ];

  const handleRelationChange = (value) => {
    setSelectedRelation(value);
  };

  const handleFontChange = (value) => {
    setSelectedFont(value);
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2>From.</h2>
          <Input placeholder="이름을 입력해 주세요." error={isError} disabled={isDisabled} />
        </section>
        <section className={styles.section}>
          <h2>프로필 이미지</h2>
        </section>
        <section className={styles.section}>
          <h2>상대와의 관계</h2>
          <Dropdown
            options={relationOptions}
            value={selectedRelation}
            onChange={handleRelationChange}
          />
        </section>
        <section className={styles.section}>
          <h2>내용을 입력해 주세요</h2>
        </section>
        <section className={styles.section}>
          <h2>폰트 선택</h2>
          <Dropdown options={fontOptions} value={selectedFont} onChange={handleFontChange} />
        </section>
      </div>
      <button>생성하기</button>
    </>
  );
}

export default FromMsg;
