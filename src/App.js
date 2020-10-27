import React, { useState } from 'react';
import AutoCompleteSearchBar from './AutoCompleteSearchBar';
import ImportFromFileComponent from './ImportFromFileComponent';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <>
      <h1>I work</h1>
      <AutoCompleteSearchBar content={content} />
      <ImportFromFileComponent content={content} setContent={setContent} />
    </>
  );
};

export default App;
