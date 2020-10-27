import React, { useState, useEffect } from 'react';

const AutoCompleteSearchBar = ({ content, setContent }) => {
  const [search, setSearch] = useState('');
  const [finalArray, setFinalArray] = useState([]);

  const contentArray = content
    .split(' ')
    .filter((element) => String(element).trim());

  const createFinalArray = (contentArray) => {
    let orderedArray = new Map();

    for (const value of contentArray) {
      const count = orderedArray.get(value) ?? 0;
      orderedArray.set(value, count + 1);
    }

    orderedArray = new Map(
      [...orderedArray].sort(([k1, v1], [k2, v2]) => v2 - v1)
    );

    const wordArray = [...orderedArray.keys()];

    setFinalArray(wordArray);
  };

  const setSearchTerms = (term) => {
    setSearch(term);
  };

  const countingEntries = (content, word) => {
    const wordsMatched = content.filter((element) => element === word);
    return wordsMatched === null ? 0 : wordsMatched.length;
  };

  const noSpaceContent = (content) => {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    setContent(content.replace(regex, ''));
  };

  const newContentArray = finalArray
    .filter(
      (word, index) =>
        word.toLowerCase().indexOf(search.toLowerCase()) > -1 &&
        finalArray.indexOf(word) === index
    )
    .slice(0, 26);

  useEffect(() => {
    noSpaceContent(content);
    createFinalArray(contentArray);
    setSearch('');
  }, [content]);

  return (
    <div className='search-container'>
      <input
        className='search-input'
        type='text'
        id='auto'
        placeholder='type to search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <section className='results-container'>
        {newContentArray.map((value, index) => {
          return (
            <div
              className='search-return'
              onClick={() => setSearchTerms(value)}
              onKeyDown={(event) => {
                event.key === 'Enter' && setSearchTerms(value);
              }}
              key={index}
              tabIndex='0'
            >
              <p>{value}</p>
              <p>{`${countingEntries(contentArray, value)}`}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AutoCompleteSearchBar;
