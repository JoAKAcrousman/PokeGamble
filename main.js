const imgPokemon1 = document.querySelector('#imgPokemon1');
let types;
let selectedType = 0;
let pokemons = 0;
let selectedPokemonName = 0;
let selectedPokemonImg = 0;
const namePokemon1 = document.querySelector('#name-pokemon1');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


 
const typesList = {
	"types": [9/*fire*/, 10/*water*/, 11/*grass*/]
}

function selectType(typesList) {
		const nb = getRandomInt(3);
		selectedType = typesList.types[nb];	
	}
	
selectType(typesList);

console.log(selectedType)



fetch('https://pokeapi.co/api/v2/type/').then(response => response.json).then(data => {
	types = data;
	console.log(types)
});

fetch(types.result[selectedType].url).then(response => response.json).then(data => {
	pokemons = data;
});

function selectPokemon() {
	const nb = getRandomInt(60);
	selectedPokemonName = pokemons.pokemon[nb].pokemon.name;
	fetch(pokemons.pokemon[nb].pokemon.url).then(response =>response.json).then(data => {
		const pokemonInfo = data;
		selectedPokemonImg = pokemonInfo.sprites.front_default;
	})
}

console.log(selectedPokemonName)


const selectAndShowPokeName = type => {
	imgPokemon1.src = selectedPokemonImg;
	namePokemon1.innerHTML = selectedPokemonName;
}
