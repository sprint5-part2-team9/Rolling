// App.js

import "./global.scss";
import "./reset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Post from "./pages/Post/Post";
import MessagePage from "./pages/Message/MessagePage";
import PostId from "./pages/Post/Postid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:postId">
          <Route index element={<PostId edit={false} />} />
          <Route path="edit" element={<PostId edit={true} />} />
        </Route>
        <Route path="/post/:id/message" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
