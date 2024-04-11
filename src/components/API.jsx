//API.jsx
/*서버에 요청하는 API 모음집, 
각 요청의 response들은 https://codeit.notion.site/API-d9eecacf2dbd4f268baf33cd11190a78 참조 */

const BASE_URL = 'https://rolling-api.vercel.app/5-9';

/*롤링 페이퍼 대상(redipent)관련 API*/

//롤링 페이퍼 대상 생성
export const postRecipients = async (name, bgColor) => {
  const response = await fetch(`${BASE_URL}/recipients/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, backgroundColor: bgColor }),
  });
  if (!response.ok) throw new Error('대상 생성 오류');
  return response.json();
};

//롤링 페이퍼 대상 목록 조회
export const getRecipientsList = async (
  limit = 8,
  offset = 0,
  sort = 'like'
) => {
  const response = await fetch(
    `${BASE_URL}/recipients/?limit=${limit}&offset=${offset}&sort=${sort}`
  );
  if (!response.ok) throw new Error('대상 목록 불러오기 오류');
  return response.json();
};

//롱링 페이퍼 대상 조회
export const getRecipient = async (recipientId) => {
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/`);
  if (!response.ok) throw new Error('대상 불러오기 오류');
  return response.json();
};

//롤링 페이퍼 대상 삭제
export const deleteRecipient = async (recipientId) => {
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('대상 삭제 오류');
  return response.json();
};

/*메세지 관련 API */

//대상에게 보내는 메세지 생성 완
export const postMessages = async (
  recipientId,
  sender,
  relationship,
  content,
  font,
  profileImageURL
) => {
  const response = await fetch(
    `${BASE_URL}/recipients/${recipientId}/messages/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: sender,
        relationship: relationship,
        content: content,
        font: font,
        profileImageURL: profileImageURL,
      }),
    }
  );
  if (!response.ok) throw new Error('메세지 보내기 오류');
  return response.json();
};

// 대상에게 보낸 메세지 조회
export const getMessages = async (recipientId, limit = 8, offset = 0) => {
  const response = await fetch(
    `${BASE_URL}/recipients/${recipientId}/messages/?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) throw new Error('메세지 불러오기 오류');
  return response.json();
};

// 메세지 삭제
export const deleteMessage = async (messageId) => {
  const response = await fetch(`${BASE_URL}/messages/${messageId}/`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('메세지 삭제 오류');
  return response.json();
};

/* 리액션 관련 API */

//대상에게 리액션 달기
export const postReaction = async (recipientId, emoji, type) => {
  const response = await fetch(
    `${BASE_URL}/recipients/${recipientId}/reactions/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emoji: emoji,
        type: type,
      }),
    }
  );
  if (!response.ok) throw new Error('리액션 달기 오류');
  return response.json();
};

//대상에게 단 리액션 조회
export const getReaction = async (recipientId, limit = 8, offset = 0) => {
  const response = await fetch(
    `${BASE_URL}/recipients/${recipientId}/reactions/?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) throw new Error('리액션 조회 오류');
  return response.json();
};
