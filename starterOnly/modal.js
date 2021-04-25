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
const birthday = document.getElementById('birthdate');
const buttonSubmit = document.getElementById('buttonSubmit');
const checkbox1 = document.getElementById('checkbox1');

//******* Verification du Nom *****************/
function isLastNameValid() {
	let inputLastName = document.getElementById('last').value;

	if (inputLastName.length < 2) {
		lastName.setCustomValidity(
			'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
		);
		return false;
	} else {
		return true;
	}
}

lastName.addEventListener('change', isLastNameValid);

//******************* Verification de l'email  ****************/

const validEmail = (inputEmail) => {
	// Recuperation de la balisse  small
	let small = email.nextElementSibling;

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
		small.innerHTML = "L'adresse électronique n 'est pas valide.";
		small.classList.remove('text-success');
		small.classList.add('text-failed');
		return false;
	}
};
//  Ecoute de l'Email
email.addEventListener('change', function () {
	validEmail(this);
});

//*********************** validation de date de naissance ***********************/
const isBirthdayValid = () => {
	let inputBirthday = document.getElementById('birthdate').value;

	if (inputBirthday == '') {
		birthday.setCustomValidity('Vous devez entrer votre date de naissance.');
		alert('Vous devez entrer votre date de naissance.');
		console.log('birthday false');
		return false;
	} else {
		console.log('birthday true');
		return true;
	}
};

birthday.addEventListener('change', isBirthdayValid);
birthday.addEventListener('blur', isBirthdayValid);

//************** validation de condtions d'utilisations****************************/

const checkboxstart = checkbox1.checkValidity();
const ischeckBoxValid = () => {
	if (checkbox1.checked) {
		return true;
	} else {
		alert('Vous devez vérifier que vous acceptez les termes et conditions.');
		return false;
	}
};

checkbox1.addEventListener('click', ischeckBoxValid);

//******* Validation de formulaire *********/
let form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(lastName.value);

	if (
		(isLastNameValid && validEmail && isBirthdayValid && ischeckBoxValid) ||
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
