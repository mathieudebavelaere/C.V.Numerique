/*--------------AnimationAccueil--------------*/
function fadeOutEffect() {
  var fadeTarget = document.getElementById("popup");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
}
cercle.addEventListener("click", () => {
  fadeOutEffect;
  overlay.classList.remove("blur-in")
  overlay.classList.add("blur-out")
  popup.classList.remove("shadow")
  popup.classList.add("lol")
  setTimeout(() => {
    popup.style.display = "none"
  }, 2000)
})
/*--------------FinD'AnimationAccueil--------------*/
/*-------------------BurgerMenu--------------------*/
let bouton = document.getElementById("boutonVolet");
let volet = document.getElementById("voletGauche");

// Fonction : ouvre / ferme le volet
function ouvreFermeVolet() {
  volet.classList.toggle("ouvert");
}

// Activation et programmation des clics
bouton.addEventListener('click', ouvreFermeVolet);
/*-------------------BurgerMenu--------------------*/
/*---------------------MonParcours------------------*/
/*---------------Boutons-------------*/
let date22 = document.getElementById('date22');
let date17 = document.getElementById('date17');
let date15 = document.getElementById('date15');
let date13 = document.getElementById('date13');
let date11 = document.getElementById('date11');
/*---------------Texts-------------*/
let emplois22 = document.getElementById('emplois22');
let emplois17 = document.getElementById('emplois17');
let emplois15 = document.getElementById('emplois15');
let emplois13 = document.getElementById('emplois13');
let emplois11 = document.getElementById('emplois11');
/*------------------Option taille------------------*/
let gestionTaille = document.getElementById('gestionTaille');




date22.addEventListener('click', () => {
  emplois22.classList.remove('text22');
  emplois22.classList.add('text22N');
  /*---------------------------------*/
  date22.classList.remove('button');
  date22.classList.add('buttonValide');
  /*---------------------------------*/
  date17.classList.remove('buttonValide');
  date17.classList.add('button');
  date15.classList.remove('buttonValide');
  date15.classList.add('button');
  date13.classList.remove('buttonValide');
  date13.classList.add('button');
  date11.classList.remove('buttonValide');
  date11.classList.add('button');
  /*---------------------------------*/
  emplois17.classList.remove('text17N');
  emplois17.classList.add('text17');
  emplois15.classList.remove('text15N');
  emplois15.classList.add('text15');
  emplois13.classList.remove('text13N');
  emplois13.classList.add('text13');
  emplois11.classList.remove('text11N');
  emplois11.classList.add('text11');
  /*---------------------------------*/
  gestionTaille.classList.remove('boiteParcour2');
  gestionTaille.classList.add('boiteParcour');


});
date17.addEventListener('click', () => {
  emplois17.classList.remove('text17');
  emplois17.classList.add('text17N');
  /*---------------------------------*/
  date17.classList.remove('button');
  date17.classList.add('buttonValide');
  /*---------------------------------*/
  date22.classList.remove('buttonValide');
  date22.classList.add('button');
  date15.classList.remove('buttonValide');
  date15.classList.add('button');
  date13.classList.remove('buttonValide');
  date13.classList.add('button');
  date11.classList.remove('buttonValide');
  date11.classList.add('button');
  /*---------------------------------*/
  emplois22.classList.remove('text22N');
  emplois22.classList.add('text22');
  emplois15.classList.remove('text15N');
  emplois15.classList.add('text15');
  emplois13.classList.remove('text13N');
  emplois13.classList.add('text13');
  emplois11.classList.remove('text11N');
  emplois11.classList.add('text11');
  /*---------------------------------*/
  gestionTaille.classList.remove('boiteParcour2');
  gestionTaille.classList.add('boiteParcour');


});
date15.addEventListener('click', () => {
  emplois15.classList.remove('text15');
  emplois15.classList.add('text15N');
  /*---------------------------------*/
  date15.classList.remove('button');
  date15.classList.add('buttonValide');
  /*---------------------------------*/
  date22.classList.remove('buttonValide');
  date22.classList.add('button');
  date17.classList.remove('buttonValide');
  date17.classList.add('button');
  date13.classList.remove('buttonValide');
  date13.classList.add('button');
  date11.classList.remove('buttonValide');
  date11.classList.add('button');
  /*---------------------------------*/
  emplois22.classList.remove('text22N');
  emplois22.classList.add('text22');
  emplois17.classList.remove('text17N');
  emplois17.classList.add('text17');
  emplois13.classList.remove('text13N');
  emplois13.classList.add('text13');
  emplois11.classList.remove('text11N');
  emplois11.classList.add('text11');
  /*---------------------------------*/
  gestionTaille.classList.remove('boiteParcour2');
  gestionTaille.classList.add('boiteParcour');


})
date13.addEventListener('click', () => {
  emplois13.classList.remove('text13');
  emplois13.classList.add('text13N');
  /*---------------------------------*/
  date13.classList.remove('button');
  date13.classList.add('buttonValide');
  /*---------------------------------*/
  date22.classList.remove('buttonValide');
  date22.classList.add('button');
  date17.classList.remove('buttonValide');
  date17.classList.add('button');
  date15.classList.remove('buttonValide');
  date15.classList.add('button');
  date11.classList.remove('buttonValide');
  date11.classList.add('button');
  /*---------------------------------*/
  emplois22.classList.remove('text22N');
  emplois22.classList.add('text22');
  emplois17.classList.remove('text17N');
  emplois17.classList.add('text17');
  emplois15.classList.remove('text15N');
  emplois15.classList.add('text15');
  emplois11.classList.remove('text11N');
  emplois11.classList.add('text11');
  /*---------------------------------*/
  gestionTaille.classList.remove('boiteParcour2');
  gestionTaille.classList.add('boiteParcour');
})


date11.addEventListener('click', () => {
  emplois11.classList.remove('text11');
  emplois11.classList.add('text11N');
  /*---------------------------------*/
  date11.classList.remove('button');
  date11.classList.add('buttonValide');
  /*---------------------------------*/
  date22.classList.remove('buttonValide');
  date22.classList.add('button');
  date17.classList.remove('buttonValide');
  date17.classList.add('button');
  date15.classList.remove('buttonValide');
  date15.classList.add('button');
  date13.classList.remove('buttonValide');
  date13.classList.add('button');
  /*---------------------------------*/
  emplois22.classList.remove('text22N');
  emplois22.classList.add('text22');
  emplois17.classList.remove('text17N');
  emplois17.classList.add('text17');
  emplois15.classList.remove('text15N');
  emplois15.classList.add('text15');
  emplois13.classList.remove('text13N');
  emplois13.classList.add('text13');
  /*---------------------------------*/
  gestionTaille.classList.remove('boiteParcour');
  gestionTaille.classList.add('boiteParcour2');
})
