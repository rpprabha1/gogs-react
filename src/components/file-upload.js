import React, { useState } from 'react';
import "./file-upload.css";
import config from "../configs/config.js";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload =  async () => {
    if (selectedFile) {
      // Implement your file upload logic here
      console.log('Uploading file:', selectedFile);
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await axios.post(config.apiUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className='file-upload-container'>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
