import React, { useState } from 'react';

const ImageUpload = ({ label, onImageSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setPreviewUrl(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setPreviewUrl(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  return (
    <div className="image-upload d-flex flex-column">
      <label className="input-title d-flex align-items-center">
        <span>{label}</span>
        <img src="/assets/info-icon.svg" alt="info" />
      </label>

      <div className={previewUrl ? "image-preview" : "drag-drop-zone-wrapper"}>
        {
          previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
            />
          ) : (
            <div
              className={`drag-drop-zone d-flex justify-content-center align-items-center ${dragActive ? 'active' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("imageUpload").click()}

            >
              <div className='input-info d-flex justify-content-center align-items-center'>
                <img src="/assets/upload-icon.svg" alt="upload" />
                <span>Şəkil seçin və ya sürükləyib atın</span>
              </div>
            </div>
          )
        }
      </div>

      <input
        type="file"
        id="imageUpload"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
};

export default ImageUpload;
