// App.js
import "./global.scss";
import "./reset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import FromMsgPage from "./pages/Msg/FromMsg/FromMsgPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />}/>
        <Route path="/post/:id/message" element={<FromMsgPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
