import React from 'react';
import Blog from './Blog';

function Blogs({ blogs, onDelete }) {
    return (
      <div className="blogs-list">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} onDelete={onDelete} />
        ))}
      </div>
    );
  }
  

export default Blogs;
