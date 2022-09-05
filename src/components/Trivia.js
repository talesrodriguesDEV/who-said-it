import React, { useContext, useEffect, useState } from 'react';
import QuotesContext from '../context/QuotesContext';
import { useNavigate } from 'react-router-dom';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';

export default function Trivia() {
  const {quote: {quote, author}, fakeAuthors, authorInfo, favoriteQuotes, setFavoriteQuotes, generateTrivia} = useContext(QuotesContext);

  const [alternatives, setAlternatives] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [heartFilled, setHeartFilled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authorsAlternatives = [author, ...fakeAuthors].sort(() => Math.random() - 0.5);
    setAlternatives(authorsAlternatives);
  }, [fakeAuthors]);

  const answerFeedback = ({target}, alternative) => {
    Array.from(target.parentElement.children).forEach((button) => {
      button.disabled = true;
      if (button.innerText === author) button.style.backgroundColor = '#1B5E20';
      else button.style.backgroundColor = 'black';
    });
    if (alternative === author) setFeedback('You got it!');
    else setFeedback('Not today :(');
  };

  const saveQuote = () => {
    const newFavQuotes = [...favoriteQuotes, {quote, author}];
    setFavoriteQuotes(newFavQuotes);
    localStorage.setItem('favoriteQuotes', JSON.stringify(newFavQuotes));
    navigate('/favoriteQuotes');
    generateTrivia();
  };

  if (quote) return (
    <div className='flex flex-col px-2'>
      <h2 className='pb-6 text-center text-base lg:text-xl'>{quote}</h2>
      <div className='flex flex-wrap p-1 justify-center'>
        {alternatives.map((alternative, index) => (
          <button
            key={index}
            onClick={(event) => answerFeedback(event, alternative)}
            className='btn bg-red-400 text-white text-sm p-1 m-1'
          >
            {alternative}
          </button>
        ))}
      </div>
      {feedback !== '' && (
        <div className='flex flex-col w-full justify-around items-center text-sm lg:text-lg mt-3 h-36'>
          <h3 className='text-lg'>{feedback}</h3>
          <p className='text-green-300 text-center'>{authorInfo && `${author}: ${authorInfo}`}</p>
          <button
            className='flex items-center btn bg-red-400 text-white'
            onClick={() => {
              setHeartFilled(true);
              saveQuote();
            }}
            onMouseEnter={() => setHeartFilled(true)}
            onMouseLeave={() => setHeartFilled(false)}
          >
            Save quote
            {heartFilled ? <TiHeartFullOutline className='ml-1 text-xl' /> : <TiHeartOutline className='ml-1 text-xl' />}
          </button>
        </div>
      )}
    </div>
  );
}