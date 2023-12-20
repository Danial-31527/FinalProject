import React, { useState } from 'react';
import Blog_main from '../MAIN/Blog_main';

function Save_page({ savedBlogs }) {
  const [showSavedBlogs, setShowSavedBlogs] = useState(false);

  const handleShowSavedBlogs = () => {
    setShowSavedBlogs(true);
  };

  return (
    <div>
      <div className="news-header">
        <img src="/img/logo.jpeg" alt="Logo" />
        <h1>Сохраненные блоги</h1>
      </div>
      <div className="content">
        {!showSavedBlogs && (
          <button className='view' onClick={handleShowSavedBlogs}>Показать сохраненные блоги</button>
        )}

        {showSavedBlogs &&
          savedBlogs &&
          savedBlogs.map((blog, index) => <Blog_main key={index} blog={blog} />)
        }
      </div>
    </div>
  );
}

export default Save_page;
