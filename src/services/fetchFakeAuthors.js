import key from '../utils/key';

export default async function fetchFakeAuthors() {
  const randomizer1 = Math.floor(Math.random() * (91 - 65) + 65);
  const randomizer2 = Math.floor(Math.random() * (91 - 65) + 65);
  const randomTwoLetters = String.fromCharCode(randomizer1, randomizer2);

  const response = await fetch(`https://api.api-ninjas.com/v1/historicalfigures?name=${randomTwoLetters}`, {headers: { 'X-Api-Key': key }});
  const data = await response.json();

  if (data.length >= 4) return (
    data
      .sort(() => Math.random() - 0.5)
      .filter((_object, index) => index < 4)
      .map(({name}) => name
        .replace(/(?<=,).*/, '')
        .replace(/(?<=\().*/, '')
        .replace(/(\(|,)/, ''))
  );

  const fakeAuthors = ['Ingram Stevenson', 'Brigitte Stephanopoulos', 'Anton Iverson', 'Ivana Eriksen'];
  return fakeAuthors;
}