//Post/{id}.jsx
/*카드 리스트에서 카드 선택시 이동하게될 페이지*/
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import PostIdMain from '../../components/PostId/PostIdMain';
import { getMessages, deleteMessage, getRecipient } from '../../Api/Api';
import Cards from '../../components/PostId/Cards';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const FIRST_LIMIT = 8;
const LIMIT = 6;

function PostId({ edit }) {
  const { postId } = useParams();
  const [messages, setMessages] = useState([]);
  const [rolling, setRolling] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const pageEnd = useRef(null);
  let offset = useRef(FIRST_LIMIT);
  let counts = useRef(0);

  const onIntersect = async ([entry], observer) => {
    if (!isLoading && entry.isIntersecting && offset.current < counts.current) {
      try {
        observer.unobserve(entry.target);
        getMessageData(getMessages, postId, LIMIT, offset.current);
        setTimeout(() => {
          observer.observe(entry.target);
        }, 1000);
      } catch (err) {
      } finally {
        setIsLoading(false);
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

  const getMessageData = useCallback(async (asyncFunction, postId, limit, offset) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { results, count } = await asyncFunction(postId, limit, offset);
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
      setIsLoading(false);
    }
  }, []);

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

  const observer = useCallback(new IntersectionObserver(onIntersect, { threshold: 0.5 }), []);

  useEffect(() => {
    getMessageData(getMessages, postId, FIRST_LIMIT, 0);
    getRollingData(getRecipient, postId);
    if (pageEnd.current) observer.observe(pageEnd.current);
  }, [getMessageData, getRollingData, postId, observer]);

  return (
    <>
      <Header />
      <Subheader rolling={rolling} postId={postId} />
      <PostIdMain bgColor={rolling?.backgroundColor} bgImg={rolling?.backgroundImg}>
        <div>
          <Cards items={messages} deleteClick={handleDelete} edit={edit} postId={postId} />
          {isLoading && <div>로딩중...</div>}
          <div style={{ height: '10px' }} ref={pageEnd}></div>
        </div>
      </PostIdMain>
    </>
  );
}

export default PostId;
