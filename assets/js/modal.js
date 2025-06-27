
function openModalWithPokemon(pokemon) {
  const modal = document.querySelector('.modal')

  // Limpa qualquer conteúdo anterior
  modal.innerHTML = ''

  // Cria o conteúdo do modalCard dinamicamente
  const modalCardHTML = `
    <div class="modalCard ${pokemon.type}">
      <i class="ri-close-line modalClose"></i>
      <img class="modalImg" src="${pokemon.photo}" alt="${pokemon.name}">
      <div>
        <h3 class="modalName">${pokemon.name}</h3>
        <p class="modalDetail modalType">Tipo: ${pokemon.types.join(', ')}</p>
        <p class="modalDetail modalHeight">Altura: ${(pokemon.height / 10).toFixed(1)} m</p>
        <p class="modalDetail modalWeight">Peso: ${(pokemon.weight / 10).toFixed(1)} kg</p>
      </div>
    </div>
  `

  // Insere o HTML no modal
  modal.innerHTML = modalCardHTML

  // Adiciona classe de visibilidade
  modal.classList.add('activeModal')

  // Eventos para fechar
  modal.querySelector('.modalClose').addEventListener('click', () => {
    modal.classList.remove('activeModal')
  })

  modal.addEventListener('click', () => {
    modal.classList.remove('activeModal')
  })

  // Evita fechar o modal ao clicar dentro do card
  modal.querySelector('.modalCard').addEventListener('click', (e) => {
    e.stopPropagation()
  })
}

