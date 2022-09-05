import key from '../utils/key';

export default async function fetchAuthorInfo(authorName) {
  const response = await fetch(`https://api.api-ninjas.com/v1/historicalfigures?name=${authorName}`, {headers: { 'X-Api-Key': key }});
  const data = await response.json();

  if (data[0]) return data[0].title;
  else return false;
}