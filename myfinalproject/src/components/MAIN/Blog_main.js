import React, { useState } from 'react';

function Blog_main({ blog, onLike, onDislike, onSave }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    onLike(blog.id); 
  };

  const handleDislikeClick = () => {
    setIsDisliked(!isDisliked);
    onDislike(blog.id); 
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    onSave(blog.id);
  };

  if (!blog) {
    return null;
  }

  return (
    <section className="blog">
    <div className="blog-header">
      <img className="ava" src={blog.avatarUrl} alt="Blogger Avatar" />
      <h4 className="blog-name">{blog.name} {blog.surname}</h4>
      <button className="delete">
        <img src="/img/delete.png" alt="Delete Blog" />
      </button>
    </div>
    <div className="blog-content">
      <p>{blog.text}</p>
      <img className="blog-img" src={blog.image} alt="Blog Image" />
    </div>
    <div className="buttons">
      <button onClick={handleLikeClick}>
        <img src="/img/like.png" alt="Like" />
      </button>
      <button onClick={handleDislikeClick}>
        <img src="/img/dislike.png" alt="Dislike" />
      </button>
      <button onClick={handleSaveClick}>
        <img src={isSaved ? "/img/saved.png" : "/img/save.png"} alt="Save" />
      </button>
    </div>
  </section>
  );
}

export default Blog_main;

