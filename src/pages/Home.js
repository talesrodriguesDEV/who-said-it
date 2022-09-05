import React, { useContext } from 'react';
import Loading from '../components/Loading';
import QuoteGenerator from '../components/QuoteGenerator';
import Trivia from '../components/Trivia';
import QuotesContext from '../context/QuotesContext';

export default function Home() {
  const {loading}  = useContext(QuotesContext);

  return(
    <div className='w-full flex flex-col'>
      <QuoteGenerator />
      {loading ? <Loading /> : <Trivia />}
    </div>
  );
}