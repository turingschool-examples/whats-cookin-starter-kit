const navBar = document.querySelector('nav');
const next = document.querySelector('button');
const welcomeBoxes = document.querySelectorAll('.welcome')
next.addEventListener("click", animateNavBar)

function animateNavBar (){
  for(i = 0; i < welcomeBoxes.length; i++){
    welcomeBoxes[i].classList.add('faded')
  }
  navBar.style.animationDuration = '1.5s';
  navBar.style.animationName = 'slidein';
  navBar.style.animationFillMode = 'forwards';
}

