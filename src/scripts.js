const body = document.querySelector('body');
const navBar = document.querySelector('nav');
const next = document.querySelector('button');
const welcomeBoxes = document.querySelectorAll('.menu-box');
const cardHolder = document.querySelector('.recipe-holder');
const allRecipes = document.querySelector('.all-recipes-box');

allRecipes.addEventListener("click", animateNavBar);

function animateNavBar (){
  for(i = 0; i < welcomeBoxes.length; i++){
    welcomeBoxes[i].classList.add('faded');
  }
  navBar.style.animationDuration = '1.5s';
  navBar.style.animationName = 'nav-animation';
  //insert new nav bar here and new divs for the 4 pages
  setTimeout(function(){
    console.log('hi');
    navBar.removeAttribute("style");
    navBar.classList.add("main-nav");
    for(i = 0; i < welcomeBoxes.length; i++){
      welcomeBoxes[i].classList.remove("welcome");
      welcomeBoxes[i].classList.remove("faded");
      welcomeBoxes[i].classList.add("nav-popup");
      welcomeBoxes[i].classList.add("popup-animate");
    }
    instantiateRecipes();
  }, 1500);
}

function animateButton(){

}
// Instantiating new cards???

function instantiateRecipes() {
  console.log(newRecipe);
  for(var i = 0; i < 50; i++){
  cardHolder.innerHTML += `
  <div class="recipes">
  <img src="${recipeData[i].image}" alt="">
  </div>
  `
  }
}
