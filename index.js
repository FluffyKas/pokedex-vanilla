// TOOLTIP

const tooltip_icon = document.querySelector(".tooltip-icon");
const tooltip = document.querySelector(".tooltip");

tooltip_icon.addEventListener("mouseover", () => {
  tooltip.style.visibility= 'visible';
});

tooltip_icon.addEventListener("mouseleave", () => {
  tooltip.style.visibility= 'hidden';
});

// POKEDEX

const container = document.getElementById("pokemon-container");
const pokemonsNumber = 151;
const type_colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '#D5D5DA',
  fairy: '#FCEAFF',
  poison: '#98D7A5',
  bug: '#F8D5A3',
  dragon: '#97B3E6',
  psychic: '#EAEAD1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};

const main_types = Object.keys(type_colors);

console.log(main_types);

const fetchPokemons = async () => {
  for(let i=1; i<=pokemonsNumber; i++) {
    await getPokemon(i);
  }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonElement = document.createElement('div');
  pokemonElement.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const poke_types = pokemon.types.map(el => el.type.name);
  const type = main_types.find(type => poke_types.indexOf(type) > -1);

  const pokeInnerHTML = 
  `
  <div class="card">
    <figure class="card__img-container">
      <img class="poke-img" src="${pokemon.sprites.front_default}" alt="${name}."/>
    </figure>
    <div class="card__info">
      <span class="poke-id">#${pokemon.id}</span>
      <h2 class="poke-name">${name}</h2>
      <p class="poke-type">Type: ${type}</p>
    </div>
  </div>
  `;

  pokemonElement.innerHTML = pokeInnerHTML;
  container.appendChild(pokemonElement);
}