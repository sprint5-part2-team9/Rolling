//Post/{id}.jsx
/*카드 리스트에서 카드 선택시 이동하게될 페이지*/
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import Main from "../../components/Main";
import { getMessages, deleteMessage } from "../../Api/Api";
import Cards from "../../components/PostId/Cards";
import { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { useParams } from "react-router-dom";

const FIRST_LIMIT = 11;
const LIMIT = 6;

function PostId({ edit }) {
  const { postId } = useParams();
  const [messages, setMessages] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const pageEnd = useRef(null);
  let offset = useRef(FIRST_LIMIT);
  let counts = useRef(0);

  const onIntersect = async ([entry], observer) => {
    if (!isLoading && entry.isIntersecting && offset.current < counts.current) {
      try {
        observer.unobserve(entry.target);
        getData(getMessages, postId, LIMIT, offset.current);
        setTimeout(() => {
          observer.observe(entry.target);
        }, 1000);
      } catch (err) {
      } finally {
        setisLoading(false);
        offset.current = offset.current + 6;
      }
    }
  };

  const handleDelete = async (e) => {
    const target = Number(e.target.name);
    try {
      await deleteMessage(target);
      setMessages((prev) => prev.filter((item) => item?.id !== target));
    } catch (err) {
      console.log(err);
    }
  };

  const getData = useCallback(async (asyncFunction, id, limit, offset) => {
    setisLoading(true);
    setIsError(false);
    try {
      const { results, count } = await asyncFunction(id, limit, offset);
      if (offset === 0) {
        setMessages(results);
      } else {
        setMessages((prev) => [...prev, ...results]);
      }
      counts.current = count;
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setisLoading(false);
    }
  }, []);

  const observer = useCallback(
    new IntersectionObserver(onIntersect, { threshold: 0.5 }),
    []
  );

  useEffect(() => {
    getData(getMessages, postId, FIRST_LIMIT, 0);
    if (pageEnd.current) observer.observe(pageEnd.current);
  }, [getData, postId, observer]);

  return (
    <>
      <Header />
      {/* <Subheader /> */}
      <Main>
        <div>
          <Cards
            items={messages}
            onClick={handleDelete}
            edit={edit}
            postId={postId}
          />
          {isLoading && <div>로딩중...</div>}
          <div style={{ height: "10px" }} ref={pageEnd}></div>
        </div>
      </Main>
    </>
  );
}

export default PostId;
