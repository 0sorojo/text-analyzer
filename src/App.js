import React, { useState } from 'react';
import ImportFromFileComponent from './ImportFromFileComponent';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <>
      <h1>I work</h1>
      <ImportFromFileComponent content={content} setContent={setContent} />
    </>
  );
};

export default App;
