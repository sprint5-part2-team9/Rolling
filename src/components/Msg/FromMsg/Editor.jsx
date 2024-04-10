// Editor.jsx
/*
From이 있는 글을 작성하는 페이지의 content를 작성할 수 있는 에디터 컴포넌트
*/
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({ selectedFont }) {
  const [quillValue, setQuillValue] = useState("");

  useEffect(() => {
    // 에디터 폰트 설정
    const editor = document.querySelector(".ql-editor");
    if (editor) {
      editor.style.fontFamily = selectedFont;
    }
  }, [selectedFont]);

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "color",
    "background",
  ];

  return (
    <>
      <ReactQuill
        style={{ height: "260px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={quillValue || ""}
        onChange={handleQuillChange}
      />
    </>
  );
}

export default Editor;
