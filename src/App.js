import React, { useEffect, useState } from 'react';
import './App.css';
import Phrases from './Phrases';
import ChangeCss from './ChangeCss';

export default () => {
  const [phrases, setPhrases] = useState([]);
  const [position, setPosition] = useState(0);

  const getRandomPhrase = () => {
    let listOfPhrases = Phrases.getPhrases();

    if (position < listOfPhrases.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(position - position);
    }
    setPhrases(listOfPhrases[position]);
  };

  useEffect(() => {
    const loadAll = () => {
      let listOfPhrases = Phrases.getPhrases();
      let randomColor = Math.floor(Math.random() * listOfPhrases.length + 1);
      setPhrases(listOfPhrases[randomColor]);
    };
    loadAll();
    ChangeCss.changeCss();
  }, []);

  const handleOnclick = () => {
    getRandomPhrase();
    ChangeCss.changeCss();
  };

  return (
    <div id="main">
      <div id="quote-box">
        <p id="text">❝ {phrases.phrase}</p>

        <p id="author">- {phrases.author}</p>

        <div id="bottom">
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
              alt="twitter"
            ></img>
          </a>
          <a id="tumblr-quote">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733632.png"
              alt="tumblr"
            ></img>
          </a>
          <button id="new-quote" onClick={handleOnclick}>
            New quote
          </button>
        </div>
        <div id="footer">by wesley l.</div>
      </div>
    </div>
  );
};
