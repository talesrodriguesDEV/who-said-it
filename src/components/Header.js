import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className='w-full text-center bg-red-400 shadow-lg p-8'>
      <h1 className='text-5xl mb-3'>Who said it?</h1>
      {location.pathname !== '/' && <Link className='link-style' to='/'>Play Trivia</Link>}
      {location.pathname !== '/favoriteQuotes' && <Link className='link-style' to='/favoriteQuotes'>Favorite Quotes</Link>}
    </header>
  );
}