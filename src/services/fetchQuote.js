import key from '../utils/key';

export default async function fetchQuote(category) {
  const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {headers: { 'X-Api-Key': key }});
  const data = await response.json();

  return data[0];
}
