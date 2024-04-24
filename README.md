## 🔮 Rolling
웹 롤링페이퍼 ‘롤링’
<br>
롤링 서비스는 감사와 축하, 응원의 메시지 등을 온라인으로 보낼 수 있는 플랫폼입니다.

<br>

## 🧑‍💻 Team
|<img src="https://avatars.githubusercontent.com/u/57613101?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/41028065?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/141231525?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/49749101?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/160023429?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|:-:|:-:|
|조혜진<br/>[@MEGUMMY1](https://github.com/MEGUMMY1)|이현승<br/>[@waterkail](https://github.com/waterkail)|박수민<br/>[@ssumai-kr](https://github.com/ssumai-kr)|김지민<br/>[@jimin0209](https://github.com/jimin0209)|김다진<br/>[@GoldenHamsterK](https://github.com/GoldenHamsterK)|

<br>

## ⚙️ TechStack
![image](https://github.com/sprint5-part2-team9/Rolling/assets/57613101/29368aee-6252-488d-825f-ef35954db01d) ![image](https://github.com/sprint5-part2-team9/Rolling/assets/57613101/1364e244-500d-42b3-aa0d-1042c20d4051) 
<br>
![image](https://github.com/sprint5-part2-team9/Rolling/assets/57613101/bcd51c94-b35c-47c3-b04d-fe677c214104) ![image](https://github.com/sprint5-part2-team9/Rolling/assets/57613101/63274650-e22f-400c-ac8d-e20d3c463e9f)

<br>

## 🔎 Service
<details>
<summary>조혜진</summary>
  
- 롤링페이퍼 메시지 작성 Form 화면
    - Input 컴포넌트
        - Blur 이벤트 추가
    - ProfileImage 컴포넌트
        - 프로필 이미지는 API를 통해서 받아옴
        - Default 이미지 기본 세팅 후 다른 이미지 선택 시 프로필 이미지 변경
        - 이미지 선택 후 기본 이미지로 돌아가기 위한 이미지 삭제 버튼 추가
    - Dropdown 컴포넌트
        - Select 문을 사용하지 않고 컴포넌트 새로 생성
        - Tab, Enter, SpaceBar로 선택이 가능하도록 구현하여 접근성 향상
    - Editor 컴포넌트
        - React-Quill 패키지 사용
        - 툴바에 글 효과 포맷 추가(bold, italic, underline, strike, list, bullet, color, background)
    - CancelBtn 컴포넌트
        - 이전 화면으로 돌아감
    - CreateBtn 컴포넌트
        - Input 값이 비어있으면 disabled
        - onClick 시 Form 데이터 API POST
    - 반응형 UI 적용
- Subheader
    - 뒤로가기 버튼
        - UX 향상을 위한 추가 기능
    - 반응형 UI 적용
    - 카카오톡 공유하기(KAKAO API 사용)
- 배포(Netlify)
  
</details>
<details>
<summary>이현승</summary>
postId 페이지

1.무한 스크롤 : 화면 아래에 도달했을 때 추가적인 카드를 불러옵니다. 

- Js의 IntersectionObserver를 이용하여 화면 가장 아래가 노출 되었을 추가적인 데이터를 불러오는 방식으로 구현했습니다.

2.모달: 카드 클릭 시 모달 창을 띄워 자세한 내용을 볼 수 있도록 합니다.

- 모달 창은 react-dom의 createPortal을 통해 완전 별개의 DOM에 생성하였다.
- Tab키를 눌렀을 때 모달 창 밖으로 나가는 것을 막기 위해 onKeyPress를 통해 모달 창 안에서만 움직이도록 하였다.
- 확인 버튼이나 모달 창 밖을 누르면 모달 창이 꺼지도록 하였다.

3.카드 : 데이터를 받아 메시지의 내용과 메시지와 관련된 정보를 보여줍니다.

- 이 때 카드는 클릭할 수 있지만, 버튼 안에 div가 있는 것은 부적합하므로, button 기능을 하는 div 태그로 만들었다.
- grid 속성을 이용하여 카드들을 배치하였습니다.

4.기타

- Tab으로 이동할 때 보다 편하다고 느낄 수 있도록 dom순서 조정
- 엄격 모드에서 api를 2회 요청하는 것을 useEffect를 이용하여 처리함
</details>
<details>
<summary>박수민</summary>
- Post Page Form 구현

- 컬러 or 이미지 버튼 클릭시 Option 컴포넌트로 Props를 전달해줍니다.<br>
→ Option 컴포넌트 부분만 컬러 or 이미지에 맞추어 자동적으로 전환됩니다.

- Option 컴포넌트 :
 컬러 혹은 이미지에 대해서 모두 배열처리하고,
이미지는 API를 통해 받아옵니다.
선택될 시 부모 컴포넌트로 결정사항을 넘겨줍니다.
컬러 | 이미지 전환 시, 가장 첫번째 항목이 자동으로 선택됩니다.

- 반응형 UI 적용.
- 선택 가능한 요소를 모두 Button으로 하여 Tab으로 이동할 수 있게 하였습니다.

</details>
<details>
<summary>김지민</summary>

- 메인페이지
    - 반응형 UI 적용
        - 태블릿과 모바일에서는 grid 속성을 적용
- 서브헤더
    - 이모지 추가
        - EmojiPicker 라이브러리 사용 (https://www.npmjs.com/package/emoji-picker-react)
        - 화면에 리액션 나타나도록 구현
    - URL 공유하기
        - react-toastify 라이브러리 사용 (https://www.npmjs.com/package/react-toastify)
    - 반응형 UI 적용
</details>
<details>
<summary>김다진</summary>

- 인기 리스트와 최신 리스트 컴포넌트
    - 코드 재사용성을 위하여 한 컴포넌트만 사용하여 각 리스트마다 context를 만들어 유지 보수성을 높임
- 리스트 반응형
    - pc에서는 4개씩 보여주고 버튼으로 이벤트 처리
    - 모바일에서 스크롤로 구현
- 리스트 카드 컴포넌트
    - 배경에 사진 url이 null일때 배경 색 정보의 색 이미지를 배경이미지로 적용
    - 사진 url 있다면 배경이미지로 사용하고 폰트 색이 흰색이도록 구현
    - 각 카드별 post{id} 이동
</details>

<br>

## ✨ https://rolling9.netlify.app/
