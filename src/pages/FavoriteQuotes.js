import React, { useContext, useEffect } from 'react';
import QuotesContext from '../context/QuotesContext';
import { TiDelete } from 'react-icons/ti';

export default function FavoriteQuotes() {
  const {favoriteQuotes, setFavoriteQuotes} = useContext(QuotesContext);

  useEffect(() => {
    const storageQuotes = localStorage.getItem('favoriteQuotes');
    if (storageQuotes) setFavoriteQuotes(JSON.parse(storageQuotes));
  }, []);

  const unSaveQuote = ({target}) => {
    const newFavQuotes = favoriteQuotes.filter(({quote}) => !target.parentElement.firstChild.innerText.includes(quote));
    localStorage.setItem('favoriteQuotes', JSON.stringify(newFavQuotes));
    setFavoriteQuotes(newFavQuotes);
  };

  return (
    <div className='pt-10 xl:px-28'>
      {favoriteQuotes.map((favQuote, index) => (
        <div
          key={index}
          className='items-center flex flex-col p-2 mx-3 mb-10
          bg-red-400 rounded-lg'
        >
          <p className='text-base'>{`"${favQuote.quote}" - ${favQuote.author}`}</p>
          <TiDelete className='mt-2 text-6xl text-red-700' onClick={unSaveQuote} />
        </div>
      ))}
    </div>
  );
}