/*const siteTitle = document.querySelector('#site-tite');
console.log(siteTitle)
const statList = document.querySelectorAll('.stat');
statList.forEach(function(element) {console.log(element.innerHTML);})


const nameInput = document.querySelector('#inputName');
const name = document.querySelector('#name');
const changeName = (value, element) => element.innerHTML = value || 'Default';
nameInput.addEventListener('keyup', event => changeName(event.target.value,name));

const button = document.querySelector('input[type="submit"]');
const selector = document.querySelector('select');
const module = document.querySelector('#end-module');
const fond = document.querySelector('#end-background');

const changeImg = (value) => {
	const cur = document.querySelector('.picture-active');
	cur.classList.remove('picture-active');
	const newCur = document.querySelector(`#${value}`);
	newCur.classList.add('picture-active');
};

selector.addEventListener('change', event => changeImg(event.target.value));


const congrats = document.querySelector('#congrats');
const characterName = document.querySelector('#character-name');

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

const nameInput1 = document.querySelector('#inputName1');
const name1 = document.querySelector('#name1');
const nameInput2 = document.querySelector('#inputName2');
const name2 = document.querySelector('#name2');
const changeName = (value, element) => element.innerHTML = value || 'Player Name';
nameInput1.addEventListener('keyup', event => changeName(event.target.value,name1));
nameInput2.addEventListener('keyup', event => changeName(event.target.value,name2));


const changePage = (button) => {
	button.preventDefault();
	const cur = document.querySelector('.page-active');
	cur.classList.remove('page-active');
	const newCur = document.querySelector('.page-inactive');
	newCur.classList.remove('page-inactive');
	newCur.classList.add('page-active');
	cur.classList.add('page-inactive');
};

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
	
const returnPage1 = (button, popup, modal) => {
	changePage(event, retry);
	closeModule(button, popup, modal);
};

button.addEventListener('click', event => changePage(event, button));
FIGHT.addEventListener('click', event => openModule(FIGHT, modal, popup));
retry.addEventListener('click', event => returnPage1(retry,modal,popup));
