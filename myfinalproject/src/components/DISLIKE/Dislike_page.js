import React, { useState } from 'react';
import Blog_main from '../MAIN/Blog_main';

function Dislike_page({ dislikedBlogs }) {
  const [showDislikedBlogs, setShowDislikedBlogs] = useState(false);

  const handleShowDislikedBlogs = () => {
    setShowDislikedBlogs(true);
  };

  return (
    <div>
      <div className="news-header">
        <img src="/img/logo.jpeg" alt="Logo" />
        <h1>Черный список блогов</h1>
      </div>
      <div className="content">
        {!showDislikedBlogs && (
          <button className='view' onClick={handleShowDislikedBlogs}>Показать блоги из черного списка</button>
        )}

        {showDislikedBlogs &&
          dislikedBlogs &&
          dislikedBlogs.map((blog, index) => <Blog_main key={index} blog={blog} />)
        }
      </div>
    </div>
  );
}

export default Dislike_page;
