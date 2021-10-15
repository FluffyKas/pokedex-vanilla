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
  fire: '#fd7d24',
  grass: '#9bcc50',
  electric: '#EED535',
  water: '#4592C4',
  ground: '#AB9842',
  rock: '#D5D5DA',
  fairy: '#fdb9e9',
  poison: '#B97FC9',
  bug: '#729F3f',
  dragon: '#97B3E6',
  psychic: '#F366B9',
  flying: '#BDB9B8',
  fighting: '#D56723',
  normal: '#a4acaf'
};

const main_types = Object.keys(type_colors);

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
  const color = type_colors[type];

  pokemonElement.style.borderBottom= '14px solid' + color;

  const pokeInnerHTML = 
  `
  <div class="card">
    <figure class="card__img-container">
      <img class="poke-img" src="${pokemon.sprites.front_default}" alt="${name}."/>
    </figure>
    <div class="card__info">
      <span class="poke-id">#${pokemon.id.toString().padStart(3, '0')}</span>
      <h2 class="poke-name">${name}</h2>
      <p class="poke-type">Type: ${type}</p>
    </div>
  </div>
  `;

  pokemonElement.innerHTML = pokeInnerHTML;
  container.appendChild(pokemonElement);
}

// SEARCHBAR

const form = document.querySelector(".search-form")
form.addEventListener("keyup", (e) => {
  const keyword = e.target.value.toLowerCase();
  const nameArray = document.querySelectorAll(".poke-name");

  e.preventDefault()
  Array.from(nameArray).forEach((name)=> {
    const pokeName = name.textContent;
    if(pokeName.toLowerCase().indexOf(keyword)!=(-1)) {
      name.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      name.parentElement.parentElement.parentElement.style.display = "none";
    }
  })

})


// SELECT FILTER

const select = document.getElementById("poke-types");
main_types.sort();

main_types.forEach(type => {
  let option = document.createElement("option");
  select.appendChild(option);
  option.innerText = type[0].toUpperCase() + type.slice(1);
});

select.addEventListener("change", (e) => {
  const pokeTypes = document.querySelectorAll(".poke-type");
  option = e.target.value.toLowerCase();

  e.preventDefault()
  Array.from(pokeTypes).forEach((type)=> {
    const pokeType = type.textContent;
    if(pokeType.indexOf(option)!=(-1)) {
      type.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      type.parentElement.parentElement.parentElement.style.display = "none";
    }
  })

})