import React, { useState } from 'react';
import Blog_main from './Blog_main';
import Save_page from '../SAVE/Save_page';
import Like_page from '../LIKE/Like_page';
import Dislike_page from '../DISLIKE/Dislike_page';

function Main_page() {
  const [savedBlogs, setSavedBlogs] = useState([]);
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [dislikedBlogs, setDislikedBlogs] = useState([]);

  const handleLike = (blogId) => {
    const likedBlog = blogs.find(blog => blog.id === blogId);
    setLikedBlogs(prevLikedBlogs => [...prevLikedBlogs, likedBlog]);
  };

  const handleDislike = (blogId) => {
    const dislikedBlog = blogs.find(blog => blog.id === blogId);
    setDislikedBlogs(prevDislikedBlogs => [...prevDislikedBlogs, dislikedBlog]);
  };

  const handleSave = (blogId) => {
    const savedBlog = blogs.find(blog => blog.id === blogId);
    setSavedBlogs(prevSavedBlogs => [...prevSavedBlogs, savedBlog]);
  };

  const blogs = [
    {
        id: 1,
        name: 'Danial',
        surname: 'Abibulla',
        avatarUrl: '/img/logo.jpg',
        text: 'Data',
        image: '/img/111.jpg'
      },
      {
        id: 2,
        name: 'Batyrkhan',
        surname: 'Rukhanov',
        text: 'Miami',
        image: '/img/112.jpg',
        avatarUrl: '/img/logo2.jpg'
      },
      {
        id: 3,
        name: 'Adilbek',
        surname: 'Adilzhan',
        text: 'BMW',
        image: '/img/113.jpg',
        avatarUrl: '/img/logo3.jpg'
      },
      {
        id: 4,
        name: 'Yerasyl',
        surname: 'Tanatar',
        text: 'Mers',
        image: '/img/114.jpg',
        avatarUrl: '/img/logo4.jpg'
      },
  ];

  return (
    <div>
      <section className="content">
        {blogs.map(blog => (
          <Blog_main
            key={blog.id}
            blog={blog}
            onLike={handleLike}
            onDislike={handleDislike}
            onSave={handleSave}
          />
        ))}
      </section>
      
    </div>
  );
}

export default Main_page;
