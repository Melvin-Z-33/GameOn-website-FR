

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//  Message validation du prenom
const inputFirstName = document.getElementById('first');
inputFirstName.setCustomValidity('ok');

// Message validation du nom
const LastName = document.getElementById('last');











// Ecoute de l'Email
let formReserve = document.querySelector('#formReservation'); //Recuperer le formulaire pour pouvoir y ajouter des methodes et agir sur les inputs
  

formReserve.email.addEventListener('change', function(){
  validEmail(this);
});

// ******** Validation Email *********/

const validEmail = function(inputEmail) {
  // Recuperation de la balisse  small
  let small = inputEmail.nextElementSibling;
  //Regex pour valider Email
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
  // Test Regex
  let testEmail = emailRegExp.test(inputEmail.value);
  if (testEmail) {
    console.log(true);
    return true;
  }
  else
  {
    console.log(false);
    small.innerHTML = 'Adresse Non Valide';
    return false
  }
};





/**
 *  soumission du formulaire
 *  1)ecouter la soumission
 * form.addEventListener('submit', function(e){
 * 
 *  2) bloquer la propagation
 * e.preventDefault();
 * 4) si toutes les conditions sont bonnes envoyeer le formulaire
 * if(validFirst(form.first) && validLast(form.last) &&  validEmail(form.email) && validDate(form.Date) && validQuantity(form.quantity) &&  ){
    form.submit();
  }
});
 * 
 * 
 */


