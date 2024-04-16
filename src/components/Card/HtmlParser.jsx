// HtmlParser.jsx
/*
Editor로 쓴 content 데이터가 html 태그가 포함되어 있어서
출력 전에 형식 파싱
*/
import React from "react";
import parse from "html-react-parser";

function HtmlParser({ content }) {
  const parsedContent = parse(`${content}`, { decodeEntities: true });

  return <>{parsedContent}</>;
}

export default HtmlParser;
