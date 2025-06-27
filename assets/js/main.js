// function convertPokemonTypesToLi(pokemonTypes) {
//   return pokemonTypes.map((typeSlot) => {
//     return ` <li class="type">${typeSlot.type.name}</li>`
//   })
// }

//  function convertPokemonToLi(pokemon) {
//     return `
//     <li class="pokemon ${pokemon.type}">
//           <span class="number">#${pokemon.number}</span>
//           <span class="name">${pokemon.name}</span>
//           <div class="detail">
//             <ol class="types">
//               ${pokemon.types
//                 .map((type) => `<li class="type ${type}">${type}</li>`)
//                 .join("")}
//             </ol>

//             <img src="${pokemon.photo}" alt="${pokemon.name}">
//           </div>

//         </li>
//   `;
//   }

const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")


const maxRecords = 151
const limit = 5
let offset = 0


function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemons.forEach(pokemon => {
      const li = document.createElement('li')
      li.className = `pokemon ${pokemon.type}`
      li.innerHTML = `
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
          <ol class="types">
            ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
      `

      // ADICIONE AQUI: clique no card
      li.addEventListener('click', () => openModalWithPokemon(pokemon))

      pokemonList.appendChild(li)
    })
  })
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
  offset += limit 

  const qtdRecordNextPage = offset + limit

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }

})
