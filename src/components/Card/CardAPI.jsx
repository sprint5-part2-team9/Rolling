//카드 컴포넌트에서 사용하게 될 것 같은 API를 적어보았습니다.

const BASE_URL = 'https://rolling-api.vercel.app/5-9';

export const getMessages = async (recipientId, limit = 8, offset = 0) => {
  const response = await fetch(
    `${BASE_URL}/recipients/${recipientId}/messages/?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) throw new Error('메시지들 불러오기 에러');
  const result = await response.json();

  return result;
};
//메세지들을 받아오는 것은 상위 컴포넌트에서 할 듯 함;

export const deleteMessage = async (messageId) => {
  const response = await fetch(`${BASE_URL}/messages/${messageId}/`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('메시지 삭제 에러');
  const result = await response.json();

  return result;
};
