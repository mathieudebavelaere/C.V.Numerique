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
cercle.addEventListener("click",()=>{
  fadeOutEffect;
  overlay.classList.remove("blur-in")
  overlay.classList.add("blur-out")
  popup.classList.remove("shadow")
  popup.classList.add("lol")
setTimeout(()=>{
  popup.style.display="none"},2000)
})
/*--------------FinD'AnimationAccueil--------------*/
/*-------------------BurgerMenu--------------------*/
let bouton = document.getElementById("boutonVolet");
let volet = document.getElementById("voletGauche");

// Fonction : ouvre / ferme le volet
function ouvreFermeVolet(){
  volet.classList.toggle("ouvert");
}

// Activation et programmation des clics
bouton.addEventListener('click', ouvreFermeVolet);
/*-------------------BurgerMenu--------------------*/
