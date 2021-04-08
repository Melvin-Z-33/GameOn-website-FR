

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




let modalClose = document.getElementById('fermer');
modalClose.addEventListener('click', function(){

  modalbg.style.display = "none";
  });







/******** Validation Email *********/

 const validEmail = function(inputEmail) {

  // Recuperation de la balisse  small
  let email = document.getElementById('email');
  let small = email.nextElementSibling;

  //Regex pour valider Email
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  let testEmail =  emailRegExp.test(inputEmail.value);
  // Test Regex
  if (testEmail) {
      small.innerHTML = 'L\'adresse électronique est valide.';
      small.classList.remove('text-failed');
      small.classList.add('text-success');
    } else {
    small.innerHTML ='L\'adresse électronique n \'est pas valide.';
    small.classList.remove('text-success');
    small.classList.add('text-failed');
  }
};

//  Ecoute de l'Email
let form = document.querySelector('#formReservation'); //Recuperer le formulaire pour pouvoir y ajouter des methodes et agir sur les inputs
 form.email.addEventListener('change', function(){
    validEmail(this);
    });







// button.addEventListener('click',function(){
//   let test = email.value;
//   alert(test)
// });     




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


