
const offset = 0;
const limit = 10; 

const url =  `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//Retorna uma promise (assincronismo)
fetch(url)
  .then((response) => response.json())//conversão do body para json e retorna com função arrow
  .then((jsonBody) => console.log(jsonBody))
  .catch((error) => console.log(error))

