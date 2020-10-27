import React, { useState, useEffect } from 'react';

const AutoCompleteSearchBar = ({ content }) => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');
  const [finalArray, setFinalArray] = useState([]);

  const contentArray = content.split(' ').filter((element) => element !== '|');

  const createFinalArray = (contentArray) => {
    let orderedArray = new Map();

    for (const value of contentArray) {
      const count = orderedArray.get(value) ?? 0;
      orderedArray.set(value, count + 1);
    }

    orderedArray = new Map(
      [...orderedArray].sort(([k1, v1], [k2, v2]) => v2 - v1)
    );

    console.log(orderedArray);

    const wordArray = [...orderedArray.keys()];

    setFinalArray(wordArray);
    console.log(finalArray);
  };

  useEffect(() => {
    createFinalArray(contentArray);
  }, [content]);

  const setSearchTerms = (term) => {
    setSearch(term);
    setDisplay(false);
  };

  const countingEntries = (content, word) => {
    const wordsMatched = content.filter((element) => element === word);
    return wordsMatched === null ? 0 : wordsMatched.length;
  };

  const handleKeyDown = (event) => {
    console.log(event.keyCode);
  };

  const newContentArray = finalArray
    .filter(
      (word, index) =>
        word.indexOf(search.toLocaleLowerCase()) > -1 &&
        finalArray.indexOf(word) === index
    )
    .slice(0, 26);

  return (
    <div>
      <input
        type='text'
        id='auto'
        placeholder='type to search'
        onClick={() => setDisplay(!display)}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div>
          {newContentArray.map((value, index) => {
            return (
              <div
                onClick={() => setSearchTerms(value)}
                onKeyDown={(event) => {
                  event.key === 'Enter' && setSearchTerms(value);
                }}
                onChange={() => setDisplay(true)}
                key={index}
                tabIndex='0'
              >
                <p>
                  {' '}
                  <span>{value}</span>{' '}
                  {`${countingEntries(contentArray, value)}`}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearchBar;
