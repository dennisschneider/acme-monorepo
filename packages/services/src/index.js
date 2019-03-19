const URL = `https://official-joke-api.appspot.com/random_joke`;

export const fetchGeekJoke = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};
