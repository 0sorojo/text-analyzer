import React, { useState } from 'react';
import AutoCompleteSearchBar from './AutoCompleteSearchBar';
import ImportFromFileComponent from './ImportFromFileComponent';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <main className='main-container'>
      <h1 className='title'>
        <p>Text-Analyzer</p>
      </h1>
      <div className='component-container'>
        <AutoCompleteSearchBar content={content} />
        <ImportFromFileComponent content={content} setContent={setContent} />
      </div>
    </main>
  );
};

export default App;
