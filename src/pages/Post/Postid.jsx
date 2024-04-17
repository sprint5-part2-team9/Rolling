//Post/{id}.jsx
/*카드 리스트에서 카드 선택시 이동하게될 페이지*/
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import PostIdMain from "../../components/PostId/PostIdMain";
import { getMessages, deleteMessage, getRecipient } from "../../Api/Api";
import Cards from "../../components/PostId/Cards";
import { useCallback, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/PostId/Modal";

const FIRST_LIMIT = 8;
const LIMIT = 6;

function PostId({ edit }) {
  const { postId } = useParams();
  const [messages, setMessages] = useState([]);
  const [didMount, setDidMount] = useState(false);
  const [rolling, setRolling] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const pageEnd = useRef(null);
  const offsets = useRef(FIRST_LIMIT);
  const counts = useRef(0);

  const getMessageData = useCallback(
    async (asyncFunction, postId, limit, offset) => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { results, count } = await asyncFunction(postId, limit, offset);
        if (offset === 0) {
          setMessages(results);
          offsets.current = FIRST_LIMIT;
        } else {
          setMessages((prev) => [...prev, ...results]);
          offsets.current = offsets.current + LIMIT;
        }
        counts.current = count;
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const onIntersect = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && offsets.current < counts.current) {
        try {
          observer.unobserve(entry.target);
          await getMessageData(getMessages, postId, LIMIT, offsets.current);
          setTimeout(() => {
            observer.observe(entry.target);
          }, 1000);
        } catch (err) {
        } finally {
          setIsLoading(false);
        }
      }
    },
    [getMessageData, postId]
  );

  const handleDelete = async (e) => {
    const target = Number(e.target.name);
    try {
      await deleteMessage(target);
      setMessages((prev) => prev.filter((item) => item?.id !== target));
    } catch (err) {
      console.log(err);
    }
  };

  const getRollingData = useCallback(async (asyncFunction, postId) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await asyncFunction(postId);
      setRolling(result);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (didMount) {
      getMessageData(getMessages, postId, FIRST_LIMIT, 0);
      getRollingData(getRecipient, postId);
      const observer = new IntersectionObserver(onIntersect, { threshold: 0 });
      if (pageEnd.current) observer.observe(pageEnd.current);
    }
  }, [getMessageData, getRollingData, postId, onIntersect, didMount]);

  return (
    <>
      <Header isbutton={false} postIdPage="postIdPage" />
      <Subheader rolling={rolling} postId={postId} />
      <PostIdMain
        bgColor={rolling?.backgroundColor}
        bgImg={rolling?.backgroundImageURL}
      >
        <div>
          <Cards
            items={messages}
            deleteClick={handleDelete}
            edit={edit}
            setModalData={setModalData}
            postId={postId}
            setIsModal={setIsModal}
          />
          {isLoading && <div>로딩중...</div>}
          {isError && <div>에러 에러!</div>}
          <div style={{ height: "10px" }} ref={pageEnd}></div>
        </div>
      </PostIdMain>
      {isModal && <Modal data={modalData} setIsModal={setIsModal} />}
    </>
  );
}

export default PostId;
