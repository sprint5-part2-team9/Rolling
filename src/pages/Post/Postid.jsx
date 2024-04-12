//Post/{id}.jsx
/*카드 리스트에서 카드 선택시 이동하게될 페이지*/
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import Main from "../../components/Main";
import { getMessages, deleteMessage } from "../../Api/Api";
import Cards from "../../components/PostId/Cards";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostId({ edit }) {
  const { postId } = useParams();
  const [messages, setMessages] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      const { results } = await asyncFunction(id, limit, offset);
      setMessages(results);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setisLoading(false);
    }
  }, []);

  useEffect(() => {
    getData(getMessages, postId, 8, 0);
  }, [getData, postId]);

  return (
    <>
      <Header />
      {/* <Subheader /> */}
      <Main>
        <Cards
          items={messages}
          onClick={handleDelete}
          edit={edit}
          postId={postId}
        />
      </Main>
    </>
  );
}

export default PostId;
