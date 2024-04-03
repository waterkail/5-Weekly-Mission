import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import GlobalStyle from './components/GlobalStyle';

function Main() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/Folder" element={<FolderPage />} />
        <Route path="*" element={<div>아무것도 없는 페이지입니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
