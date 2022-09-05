import React, { useContext } from 'react';
import QuotesContext from '../context/QuotesContext';
import quoteCategories from '../utils/data';

export default function QuoteGenerator() {
  const {setQuoteCategory, generateTrivia} = useContext(QuotesContext);

  const handleCategory = ({target}) => setQuoteCategory(target.value);

  return (
    <div className='flex flex-col p-6 lg:px-28'>
      <label className='form-label form-control'>
        Choose a keyword:
        {' '}
        <select className='form-select' onChange={handleCategory}>
          <option value=''>All quotes</option>
          {quoteCategories.map((category, index) => {
            const string = category.replace(category.charAt(0), category.charAt(0).toUpperCase());
            return (
              <option key={index} value={category}>{string}</option>
            );
          })}
        </select>
      </label>
      <button className='btn bg-red-400 text-white' onClick={generateTrivia}>
        Quote!
      </button>
    </div>
  );
}