// App.js
import './global.scss';
import './reset.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import PostId from './pages/Post/Postid';
import List from './pages/List/List';
import MessagePage from './pages/Message/MessagePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/post' element={<Post />} />
        <Route path='/post/:id/message' element={<MessagePage />} />
        <Route path='/post/3' element={<PostId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
