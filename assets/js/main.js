
const offset = 0;
const limit = 10; 

const url =  `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//Retorna uma promise (assincronismo)
fetch(url)
  .then((response) => {//arrow function
    return response.json()//conversão do body para json
  })
  .then(function(jsonBody){
    console.log(jsonBody)
  })
  .catch(function(error) {
    console.log(error)
  })
  .finally(function() {
    console.log('Requisição concluída');
  })

