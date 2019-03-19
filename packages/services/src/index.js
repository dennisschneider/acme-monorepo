const URL = `https://geek-jokes.sameerkumar.website/api`;

export const fetchGeekJoke = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};
