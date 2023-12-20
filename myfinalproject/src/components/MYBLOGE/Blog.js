import React from 'react';

function Blog({ blog, onDelete }) {
  if (!blog) {
    return null;
  }

  const handleDelete = () => {
    if (onDelete) {
      onDelete(blog.id);
    }
  };
  
  

  return (
     <section className="blog">
    <div className="blog-header">
      <img className="ava" src="/img/logo.jpeg" alt="Blogger Avatar" />
      <h4 className="blog-name">{blog.blogName}</h4>
      <button className="delete" onClick={handleDelete}>
        <img src="/img/delete.png" alt="Delete Blog" />
      </button>
      </div>
      <div className="blog-content">
        {blog.blogText && <p>{blog.blogText}</p>}
        <img className="blog-img" src={blog.blogImage} alt="Blog Image" />
      </div>
      <div className="buttons">
        <button>
          <img src="/img/like.png" alt="Like" />
        </button>
        <button>
          <img src="/img/dislike.png" alt="Dislike" />
        </button>
        <button>
          <img src="/img/save.png" alt="Save" />
        </button>
      </div>
    </section>
  );
}

export default Blog;
