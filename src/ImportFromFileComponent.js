import React, { useState } from 'react';

const ImportFromFileComponent = () => {
  const [content, setContent] = useState('');

  let fileReader;

  const handleFileRead = (e) => {
    const newContent = fileReader.result;
    setContent(newContent);
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
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
