import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FavoriteQuotes from './pages/FavoriteQuotes';
import QuotesProvider from './context/QuotesProvider';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <QuotesProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favoriteQuotes' element={<FavoriteQuotes />} />
        </Routes>
        <Footer />
      </HashRouter>
    </QuotesProvider>
  );
}

export default App;
