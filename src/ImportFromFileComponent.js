import React, { useState } from 'react';

const ImportFromFileComponent = ({ content, setContent }) => {
  const [error, setError] = useState(false);
  let fileReader;

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
      <section>
        <h1>this is where the file text will be shown</h1>
        <input
          type='file'
          id='file'
          className='input-file'
          accept='.txt'
          onChange={(e) => handleFileChosen(e.target.files[0])}
        />
        <div>{content}</div>
      </section>
    </>
  );
};

export default ImportFromFileComponent;
