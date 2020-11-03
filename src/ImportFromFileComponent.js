import React, { useState } from 'react';
import { FiCornerLeftDown } from 'react-icons/fi';

const ImportFromFileComponent = ({ content, setContent }) => {
  const [error, setError] = useState(false);

  let fileReader;

  console.log(error);

  const handleFileRead = (e) => {
    const newContent = fileReader.result;
    setContent(newContent);
  };

  const handleFileChosen = (file) => {
    try {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    } catch (error) {
      setError(true);
      setContent('');
      console.log(error);
    }
  };

  return (
    <>
      <section className='content-container'>
        <div className='input-file'>
          <input
            type='file'
            id='file'
            accept='.txt'
            onChange={(e) => handleFileChosen(e.target.files[0])}
          />
          <FiCornerLeftDown className='icon' />
          <h2 className='content-title'>
            upload a .txt file | it contents are displayed below
          </h2>
        </div>

        <div className='content'>{content}</div>
      </section>
    </>
  );
};

export default ImportFromFileComponent;
