import React, { useState } from 'react';
import PhotoUpload from './PhotoUpload';

function Create_form({ onBlogCreate }) {
  const [formData, setFormData] = useState({
    blogName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBlogCreate(formData);

    setFormData({
      blogName: '',

    });
  };

  return (
    <section className="blog">
      <div className="blog-header">
        <img className="ava" src="/img/logo.jpeg" alt="Blogger Avatar" />
        <h4 className="blog-name">Danial Abibulla</h4>
        <button className="delete">
          <img src="/img/delete.png" alt="Delete Blog" />
        </button>
      </div>
      <form className="blog-content" onSubmit={handleSubmit}>
        <input
          type="text"
          name="blogName"
          placeholder="Что хотите писать?"
          value={formData.blogName}
          onChange={handleInputChange}
        />
        <PhotoUpload />
        <button type="submit">Создать блог</button>
      </form>
    </section>
  );
}

export default Create_form;
