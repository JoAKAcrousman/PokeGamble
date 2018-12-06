const selectAndShowPokeName = type => {
	
}

fetch('https://pokeapi.co/api/v2/type/').then(response => response.json).then(data => {
	const types = data;