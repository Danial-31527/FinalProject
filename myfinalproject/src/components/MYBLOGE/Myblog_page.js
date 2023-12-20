import React, { useState, useEffect } from 'react';
import Create_form from "./Create_form";
import Blogs from './Blogs';
import Blog from './Blog';

function Myblog_page() {
  const [blogs, setBlogs] = useState(() => {
    const storedBlogs = localStorage.getItem('blogs');
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleBlogCreate = (newBlogData) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlogData]);
  };

  const handleDelete = (blogId) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
  };

  return (
    <section className="myblog">
    <div className="news-header">
      <div>
        <img src="/img/logo.jpeg" alt="Logo" />
        <h1>Мои Блоги</h1>
      </div>
    </div>
    <Create_form onBlogCreate={handleBlogCreate} />
      <Blogs blogs={blogs} onDelete={handleDelete} />
    </section>
  );
}

export default Myblog_page;

