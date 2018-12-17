/*const siteTitle = document.querySelector('#site-title');
console.log(siteTitle)
const statList = document.querySelectorAll('.stat');
statList.forEach(function(element) {console.log(element.innerHTML);})

const changeImg = (value) => {
	const cur = document.querySelector('.picture-active');
	cur.classList.remove('picture-active');
	const newCur = document.querySelector(`#${value}`);
	newCur.classList.add('picture-active');
};

const openModule = (button, popup, endscreen) => {
	button.preventDefault();
	popup.style.display = "block";
	endscreen.style.display = "block";
	characterName.innerHTML = name.innerHTML;
	const character = document.querySelector('#end-picture');
	const activepic = document.querySelector('.picture-active');
	character.style.background = `url('${activepic.src}') no-repeat top`;
};

button.addEventListener('click', event => openModule(event, module, fond));
*/
//poke gamble


//CHANGER NOMS PLAYERS
const nameInput1 = document.querySelector('#inputName1');
const name1p1 = document.querySelector('#name1');
const name1p2 = document.querySelector('#name1p2');
const nameInput2 = document.querySelector('#inputName2');
const name2p1 = document.querySelector('#name2');
const name2p2 = document.querySelector('#name2p2');
const changeName = (value, element1,element2) =>(element1.innerHTML = value || 'Player Name')&&(element2.innerHTML = value || 'Player Name');
nameInput1.addEventListener('keyup', event => changeName(event.target.value,name1p1,name1p2));
nameInput2.addEventListener('keyup', event => changeName(event.target.value,name2p1,name2p2));

//CHANGER BET
const betInput = document.querySelector('#inputbet');
const bet = document.querySelector('#bet');
const changeBet = (value, element) => element.innerHTML = value || 'The Bet';
betInput.addEventListener('keyup', event => changeBet(event.target.value,bet));



//POPUP
const openModule = (button, popup, modal) => {
	//button.preventDefault();
	popup.style.display = "block";
	modal.style.display = "block";
	//characterName.innerHTML = name.innerHTML;
	const character = document.querySelector('#end-picture');
	const activepic = document.querySelector('.picture-active');
	character.style.background = `url('${activepic.src}') no-repeat top`;
};
const closeModule = (button, popup, modal) => {
	//button.preventDefault();
	popup.style.display = "none";
	modal.style.display = "none";
};
FIGHT.addEventListener('click', event => openModule(FIGHT, modal, popup));


//CHANGER PAGE
const changePage = (button) => {
	button.preventDefault();
	const cur = document.querySelector('.page-active');
	cur.classList.remove('page-active');
	const newCur = document.querySelector('.page-inactive');
	newCur.classList.remove('page-inactive');
	newCur.classList.add('page-active');
	cur.classList.add('page-inactive');
};
const returnPage1 = (button, popup, modal) => {
	changePage(event, retry);
	closeModule(button, popup, modal);
};
button.addEventListener('click', event => changePage(event, button));
retry.addEventListener('click', event => returnPage1(retry,modal,popup));




//PARTIE AVEC L'API

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