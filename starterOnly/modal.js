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

//close modal form
let modalClose = document.getElementById('close');
modalClose.addEventListener('click', function () {
	modalbg.style.display = 'none';
});

// FORM Elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantite = document.getElementById('quantity');
const birthday = document.getElementById('birthdate');
const buttonSubmit = document.getElementById('buttonSubmit');
const checkbox1 = document.getElementById('checkbox1');

//****************** Verification du prénom */

const isFirstNameValid = () => {
	// Recuperation de la balisse  small
	let small = firstName.nextElementSibling;
	inputFirstName = document.getElementById('first').value;

	if (inputFirstName.length < 2) {
		small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
		small.classList.remove('text-success');
		small.classList.add('text-failed');
		firstName.closest('.formData').classList.add('error');
		return false;
	} else {
		small.classList.remove('text-failed');
		firstName.closest('.formData').classList.remove('error');
		small.innerHTML = '';
		return true;
	}
};
//  Ecoute du prénom
firstName.addEventListener('change', function () {
	isFirstNameValid(this);
});

firstName.addEventListener('blur', function () {
	isFirstNameValid(this);
});

//******* Verification du Nom *****************/
const isLastNameValid = () => {
	// Recuperation de la balisse  small
	let small = lastName.nextElementSibling;
	let inputLastName = document.getElementById('last').value;

	if (inputLastName.length < 2) {
		small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
		small.classList.remove('text-success');
		small.classList.add('text-failed');
		lastName.closest('.formData').classList.add('error');
		return false;
	} else {
		small.classList.remove('text-failed');
		lastName.closest('.formData').classList.remove('error');
		small.innerHTML = '';
		return true;
	}
};

lastName.addEventListener('change', function () {
	isLastNameValid(this);
});
lastName.addEventListener('blur', function () {
	isLastNameValid(this);
});

//******************* Verification de l'email  ****************/

const isEmailValid = (inputEmail) => {
	let small = document.getElementById('smallEmail');
	let emailRegExp = new RegExp(
		'^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
		'g',
	);

	let testEmail = emailRegExp.test(inputEmail.value);
	if (testEmail) {
		small.innerHTML = "L'adresse électronique est valide.";
		small.classList.remove('text-failed');
		small.classList.add('text-success');

		return true;
	} else {
		small.innerHTML = "L'adresse électronique n'est pas valide.";
		small.classList.remove('text-success');
		small.classList.add('text-failed');
		email.closest('.formData').classList.add('error');
		return false;
	}
};
//  Ecoute de l'Email
email.addEventListener('change', function () {
	isEmailValid(this);
});
email.addEventListener('blur', function () {
	isEmailValid(this);
});

//*********************** validation de date de naissance ***********************/
const isBirthdayValid = () => {
	let inputBirthday = document.getElementById('birthdate').value;
	let small = birthday.nextElementSibling;

	if (inputBirthday == '') {
		small.innerHTML = 'Vous devez entrer votre date de naissance.';
		small.classList.remove('text-success');
		small.classList.add('text-failed');
		birthday.closest('.formData').classList.add('error');
		return false;
	} else {
		small.classList.remove('text-failed');
		birthday.closest('.formData').classList.remove('error');
		small.innerHTML = '';
		return true;
	}
};

birthday.addEventListener('change', isBirthdayValid);
birthday.addEventListener('blur', isBirthdayValid);

// ******************  validation de partipation *****************
const isQuantityValid = () => {
	quantite = document.getElementById('quantity');
	if (isNaN(quantite.value) || (quantite.value = '')) {
		console.log('false');
		return false;
	} else {
		console.log('chiffre ok');
		return true;
	}
};
quantite.addEventListener('change', isQuantityValid);
quantite.addEventListener('blur', isQuantityValid);

//************** validation de condtions d'utilisations****************************/

const checkboxstart = checkbox1.checkValidity();
const ischeckBoxValid = () => {
	let small = document.getElementById('agreementText');
	const box1 = document.getElementById('box1');

	if (checkbox1.checked) {
		small.innerHTML = '';
		box1.style.border = 'none';
		return true;
	} else {
		small.innerHTML =
			'Vous devez vérifier que vous acceptez les termes et conditions.';

		box1.style.border = '2px solid red';

		return false;
	}
};

checkbox1.addEventListener('click', ischeckBoxValid);
checkbox1.addEventListener('blur', ischeckBoxValid);

//******* Validation de formulaire *********/
let form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(lastName.value);

	if (
		(isFirstNameValid &&
			isLastNameValid &&
			isEmailValid &&
			isBirthdayValid &&
			ischeckBoxValid) ||
		checkboxstart
	) {
		form.submit();
		alert('Merci ! Votre réservation a été reçue.');
		console.log('ok');
	} else {
		e.preventDefault();
		console.log('reccommence');
	}
});
