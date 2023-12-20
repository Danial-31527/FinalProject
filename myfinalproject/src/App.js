import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header_main from './components/Header_main';
import Navbar from './components/Navbar';
import Main_page from './components/MAIN/Main_page';
import Profil_page from './components/PROFIL/Profil_page';
import Myblog_page from './components/MYBLOGE/Myblog_page';
import Blogers_page from './components/BLOGERS/Blogers_page';
import Save_page from './components/SAVE/Save_page';
import Dislike_page from './components/DISLIKE/Dislike_page';
import Like_page from './components/LIKE/Like_page';
import { likedBlogs, dislikedBlogs, savedBlogs } from './data';


function App() {
  const handlePageChange = (page) => {
    console.log(`Переход на страницу: ${page}`);
  };

  return (
    <Router>
      <div>
        <Header_main />
        <main className="Main">
          <aside>
            <Navbar onPageChange={handlePageChange} />
          </aside>
          <div className="content">
            <Routes>
              <Route path="/" element={<Main_page />} />
              <Route path="/profil" element={<Profil_page />} />
              <Route path="/myblog" element={<Myblog_page />} />
              <Route path="/blogers" element={<Blogers_page />} />
              <Route path="/like" element={<Like_page likedBlogs={likedBlogs} />} />
              <Route path="/dislike" element={<Dislike_page dislikedBlogs={dislikedBlogs} />} />
              <Route path="/save" element={<Save_page savedBlogs={savedBlogs} />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
