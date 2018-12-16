const imgPokemon1 = document.querySelector('#imgPokemon1');
const namePokemon1 = document.querySelector('#name-pokemon1');
const imgPokemon2 = document.querySelector('#imgPokemon2');
const namePokemon2 = document.querySelector('#name-pokemon2');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const typesList = {
	"types": [9/*fire*/, 10/*water*/, 11/*grass*/]
}

const selectType = typesList => {
		const nb = getRandomInt(3);
		selectedType = typesList.types[nb];	
	}
	

fetch('https://pokeapi.co/api/v2/type/').then(response => response.json()).then(data => {
		selectType(typesList);

	console.log(selectedType)
	console.log(data)
	
	console.log(selectedType)
	
	const selectedTypeUrl = data.results[selectedType].url
	
	console.log(selectedTypeUrl)
	
	
	fetch(selectedTypeUrl).then(response => response.json()).then(data => {
		const nb = getRandomInt(60);
		const selectedPokemon = data.pokemon[nb].pokemon.name;
		const selectedPokemonUrl = data.pokemon[nb].pokemon.url;
		
		console.log(nb)
		console.log(selectedPokemon)
		console.log(selectedPokemonUrl)
		
		namePokemon1.innerHTML = selectedPokemon;
		
		fetch(selectedPokemonUrl).then(response => response.json()).then(data => {
			const selectedPokemonImage = data.sprites.front_default;
			
			console.log(selectedPokemonImage)
			
			imgPokemon1.src = selectedPokemonImage;
		});
	});
});

fetch('https://pokeapi.co/api/v2/type/').then(response => response.json()).then(data => {
		selectType(typesList);

	console.log(selectedType)
	console.log(data)
	
	console.log(selectedType)
	
	const selectedTypeUrl = data.results[selectedType].url
	
	console.log(selectedTypeUrl)
	
	
	fetch(selectedTypeUrl).then(response => response.json()).then(data => {
		const nb = getRandomInt(60);
		const selectedPokemon = data.pokemon[nb].pokemon.name;
		const selectedPokemonUrl = data.pokemon[nb].pokemon.url;
		
		console.log(nb)
		console.log(selectedPokemon)
		console.log(selectedPokemonUrl)
		
		namePokemon2.innerHTML = selectedPokemon;
		
		fetch(selectedPokemonUrl).then(response => response.json()).then(data => {
			const selectedPokemonImage = data.sprites.front_default;
			
			console.log(selectedPokemonImage)
			
			imgPokemon2.src = selectedPokemonImage;
		});
	});
});

/*
fetch('https://pokeapi.co/api/v2/type/3').then(response => response.json()).then(data => {
	const pokemons = data;
	console.log(selectedType)
	console.log(pokemons)
});
*/

/*
function selectPokemon() {
	const nb = getRandomInt(60);
	const selectedPokemonName = pokemon[nb].pokemon.name;
	fetch(pokemon[nb].pokemon.url).then(response =>response.json()).then(data => {
		const pokemonInfo = data;
		const selectedPokemonImg = pokemonInfo.sprites.front_default;
	})
}
*/

const selectAndShowPokeName = type => {
	imgPokemon1.src = selectedPokemonImg;
	namePokemon1.innerHTML = selectedPokemonName;
}
