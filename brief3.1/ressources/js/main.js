// déclarations des var 
var counterContainer = document.querySelector(".compteur");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("vue-de-la-page");

// logique de calcul pour la connection à la page 

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("vue-de-la-page", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("vue-de-la-page", 1);
}
counterContainer.innerHTML = visitCount;

// event sur le bouton
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("vue-de-la-page", 1);
  counterContainer.innerHTML = visitCount;
});