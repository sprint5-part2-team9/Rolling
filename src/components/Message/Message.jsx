// Message.jsx
/*
엔드포인트 /post/:id/message 

sender: 메세지 작성자의 이름
profileImageURL: ProfileImage 컴포넌트에서 선택한 작성자 프로필 이미지
relationship: 대상과 작성자의 관계, 지인이 기본값
content: 메세지의 내용으로, Editor 컴포넌트에서 내용을 전달받음
font: 메세지에 사용할 폰트. font.css 파일에 import 되어있음. value 이름 달라서 수정 要
createdAt: 객체 생성 시점
*/
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postMessages } from "../../api/Api";
import styles from "./Message.module.scss";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Editor from "./Editor";
import ProfileImage from "./ProfileImage";
import CreateBtn from "./CreateBtn";
import { useParams } from "react-router-dom";

function Message() {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("지인");
  const [content, setContent] = useState("");
  const [font, setFont] = useState("Noto Sans");
  const [profileImageURL, setProfileImageURL] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // URL 파라미터에서 가져온 recipientId를 설정
    setRecipientId(id);
  }, [id]);

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

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleFontChange = (value) => {
    setFont(value);
  };

  const handleCreateMessage = async () => {
    try {
      console.log(`메시지 생성 중 id : ${recipientId}`);
      await postMessages(recipientId, name, relationship, content, font, profileImageURL);
      console.log("메시지 생성 완료");
      navigate(`/post/${recipientId}`);
    } catch (error) {
      console.error("메시지 생성 중 오류 발생:", error);
    }
  };

  // 생성하기 버튼 활성화
  const isCreateButtonDisabled = !name.trim() || !content.trim();

  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          <label htmlFor="name">From.</label>
          <Input
            id="name"
            placeholder="이름을 입력해 주세요."
            value={name}
            onChange={handleNameChange}
          />
        </section>
        <section className={styles.section}>
          <label htmlFor="profile_img">프로필 이미지</label>
          <ProfileImage id="profile_img" onChange={setProfileImageURL} />
        </section>
        <section className={styles.section}>
          <label htmlFor="relationship">상대와의 관계</label>
          <Dropdown
            id="relationship"
            options={relationshipOptions}
            value={relationship}
            onChange={handleRelationshipChange}
          />
        </section>
        <section className={styles.section}>
          <label htmlFor="content">내용을 입력해 주세요</label>
          <Editor id="content" onChange={handleContentChange} />
        </section>
        <section className={styles.section}>

          <label htmlFor="font">폰트 선택</label>
          <Dropdown id="font" options={fontOptions} value={font} onChange={handleFontChange} />

        </section>
        <CreateBtn disabled={isCreateButtonDisabled} onClick={handleCreateMessage} />
      </div>
    </>
  );
}

export default Message;
