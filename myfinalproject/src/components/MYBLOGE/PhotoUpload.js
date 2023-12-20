import React, { useState } from 'react';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

  };

  return (
    <div>
      <label htmlFor="fileInput">Выберите фото:</label>
      <input
        type="file"
        id="fileInput"
        accept="image/*" 
        onChange={handleFileChange}
      />

      {selectedFile && (
        <div>
          <p>Выбрано фото: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Выбранное фото"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
