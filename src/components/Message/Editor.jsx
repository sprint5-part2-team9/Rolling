// Editor.jsx
/*
From이 있는 글을 작성하는 페이지의 content를 작성할 수 있는 에디터 컴포넌트
*/
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({ onChange }) {
  const [content, setContent] = useState("");

  const handleQuillChange = (content) => {
    setContent(content);
    if (onChange) {
      onChange(content);
    }
  };

  useEffect(() => {
    // content 작성했다가 지웠을때 사용
    // !content.trim 인식 안 됨 수정 要
    if (!content.trim()) {
      onChange("");
    }
  }, [content, onChange]);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "color",
    "background",
  ];

  return (
    <ReactQuill
      style={{ height: "260px" }}
      theme='snow'
      modules={modules}
      formats={formats}
      value={content}
      onChange={handleQuillChange}
    />
  );
}

export default Editor;
