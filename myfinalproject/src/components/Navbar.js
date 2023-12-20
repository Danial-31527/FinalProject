import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onPageChange }) {
  const handlePageChange = (page) => {
    if (typeof onPageChange === 'function') {
      onPageChange(page);
    }
  };

  return (
    <nav>
      <ul>
      <li onClick={() => handlePageChange('main')}>
          <img src='/img/nav1.png'/>
          <Link to="/">Главная</Link>
        </li>
        <li onClick={() => handlePageChange('profil')}>
          <img src='/img/face.png'/>
          <Link to="/profil">Моя страница</Link>
        </li>
        <li onClick={() => handlePageChange('myblog')}>
          <img src='/img/blog.png'/>
          <Link to="/myblog">Мой блог</Link>
        </li>
        <li onClick={() => handlePageChange('blogers')}>
          <img src='/img/smile.png'/>
          <Link to="/blogers">Блогеры</Link>
        </li>
        <li onClick={() => handlePageChange('rec')}>
          <img src='/img/search.png'/>
          <a>Рекомендации</a>
        </li>
        <li onClick={() => handlePageChange('like')}>
          <img src='/img/like.png'/>
          <Link to="/like">Понравившиеся</Link>
        </li>
        <li onClick={() => handlePageChange('dislike')}>
          <img src='/img/dislike.png'/>
          <Link to="/dislike">Черный список</Link>
        </li>
        <li onClick={() => handlePageChange('save')}>
          <img src='/img/save.png'/>
          <Link to="/save">Закладки</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
