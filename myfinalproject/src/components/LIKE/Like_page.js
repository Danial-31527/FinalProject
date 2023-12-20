import React, { useState } from 'react';
import Blog_main from '../MAIN/Blog_main';

function Like_page({ likedBlogs }) {
  const [showLikedBlogs, setShowLikedBlogs] = useState(false);

  const handleShowLikedBlogs = () => {
    setShowLikedBlogs(true);
  };

  return (
    <div>
      <div className="news-header">
        <img src="/img/logo.jpeg" alt="Logo" />
        <h1>Понравившиеся блоги</h1>
      </div>
      <div className="content">
        {!showLikedBlogs && (
          <button className='view' onClick={handleShowLikedBlogs}>Показать понравившиеся блоги</button>
        )}

        {showLikedBlogs &&
          likedBlogs &&
          likedBlogs.map((blog, index) => <Blog_main key={index} blog={blog} />)
        }
      </div>
    </div>
  );
}

export default Like_page;
