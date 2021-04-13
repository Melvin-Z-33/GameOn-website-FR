function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = 'block';
}

let modalClose = document.getElementById('fermer');
modalClose.addEventListener('click', function () {
	modalbg.style.display = 'none';
});

const form = document.querySelector('#formReservation'); //Recuperer le formulaire pour pouvoir y ajouter des methodes et agir sur les inputs
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdatez = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const checkbox1 = document.getElementById('checkbox1');
let buttonSubmit = document.getElementById('buttonSubmit');

const isFirstValid = first.checkValidity();
const isLastValid = last.checkValidity();
const isEmailValid = email.checkValidity();
const isBirthdatez = birthdatez.checkValidity();
const isQuantity = quantity.checkValidity();
const isValidCheckBox = checkbox1.checkValidity();
const isValidDate = birthdatez.checkValidity();

//*** first **********************/

const validityFirst = () => {
	if (!isFirstValid == true) {
		buttonSubmit.disabled = false;
		first.setCustomValidity('rentrer un nom correct');
		alert('05');
	} else {
		buttonSubmit.disabled = true;
		first.setCustomValidity('ok');
	}
};

form.first.addEventListener('keyup', function () {
	validityFirst(this);
});

// ******** Validation Email *********/
const validEmail = (inputEmail) => {
	// Recuperation de la balisse  small
	let small = email.nextElementSibling;

	//Regex pour valider Email
	let emailRegExp = new RegExp(
		'^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
		'g',
	);

	let testEmail = emailRegExp.test(inputEmail.value);
	// Test Regex
	if (testEmail) {
		small.innerHTML = "L'adresse électronique est valide.";
		small.classList.remove('text-failed');
		small.classList.add('text-success');
		return true;
	} else {
		small.innerHTML = "L'adresse électronique n 'est pas valide.";
		small.classList.remove('text-success');
		small.classList.add('text-failed');
		return false;
	}
};
//  Ecoute de l'Email
form.email.addEventListener('change', function () {
	validEmail(this);
});

//********* Date de naissance ********/

const validityDate = () => {
	if (!isBirthdatez == true) {
		buttonSubmit.disabled = false;
		first.setCustomValidity('Vous devez entrer votre date de naissance.');
		alert('05');
	} else {
		buttonSubmit.disabled = true;
	}
};

form.birthdate.addEventListener('change', function () {
	validityDate(this);
});

// ***********   Checkbox    ***********

checkbox1.addEventListener('click', function (event) {
	isValidCheckBox = checkbox1.checkValidity();
	if (isValidCheckBox) {
		alert('false');
		return false;
	} else {
		alert('true');
		return 'true';
	}
});

//****** Validation formulaire *******

form.addEventListener('submit', function (e) {
	e.preventDefault();
	buttonSubmit.disabled = false;

	if (
		isFirstValid &&
		isLastValid &&
		validEmail === true &&
		isBirthdatez &&
		isQuantity &&
		isValidCheckBox &&
		isValidDate
	) {
		buttonSubmit.disabled = true;
		form.submit();
		alert('Merci ! Votre réservation a été reçue.');
	}
});
