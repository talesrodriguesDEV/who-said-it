import React, { useState } from 'react';
import QuotesContext from './QuotesContext';
import PropTypes from 'prop-types';
import fetchAuthorInfo from '../services/fetchAuthorInfo';
import fetchFakeAuthors from '../services/fetchFakeAuthors';
import fetchQuote from '../services/fetchQuote';

export default function QuotesProvider({children}) {
  const [quote, setQuote] = useState({});
  const [quoteCategory, setQuoteCategory] = useState('');
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fakeAuthors, setFakeAuthors] = useState([]);
  const [authorInfo, setAuthorInfo] = useState('');

  const generateTrivia = async () => {
    setLoading(true);

    const newQuote = await fetchQuote(quoteCategory);
    const info = await fetchAuthorInfo(newQuote.author);
    const fakeAuthors = await fetchFakeAuthors();

    setQuote(newQuote);
    if (info) setAuthorInfo(info);
    setFakeAuthors(fakeAuthors);

    setLoading(false);
  };

  const valueObject = {
    quote,
    setQuote,
    quoteCategory,
    setQuoteCategory,
    favoriteQuotes,
    setFavoriteQuotes,
    loading,
    setLoading,
    fakeAuthors,
    setFakeAuthors,
    authorInfo,
    setAuthorInfo,
    generateTrivia,
  };

  return (
    <QuotesContext.Provider value={valueObject}>
      <main className='bg-red-700 min-h-screen flex flex-col justify-between text-white'>
        {children}
      </main>
    </QuotesContext.Provider>
  );  
}

QuotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};