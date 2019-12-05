// const Recipes = require('../data/recipes')

const navBar = document.querySelector('nav');
const next = document.querySelector('button');
const welcomeBoxes = document.querySelectorAll('.menu-box');
const cardHolder = document.querySelector('.recipe-holder');

next.addEventListener("click", animateNavBar);

function animateNavBar (){
  for(i = 0; i < welcomeBoxes.length; i++){
    welcomeBoxes[i].classList.add('faded');
  }
  navBar.style.animationDuration = '1.5s';
  navBar.style.animationName = 'slidein';
  navBar.style.animationFillMode = 'forwards';
  //insert new nav bar here and new divs for the 4 pages
  setTimeout(function(){
    console.log('hi');
    navBar.removeAttribute("style");
    navBar.classList.add("main-nav");
    welcomeBoxes.classList.remove("welcome");
    welcomeBoxes.classList.add("nav-popup");
  }, 1500);
}

// Instantiating new cards???

// for(var i = 0; i < recipeData; i++){
//   let recipe = new Recipes(recipeData[i]);
//   cardHolder.innerHTML += `
//   <div class ="recipes">${recipe}</div>
//   `
// }
