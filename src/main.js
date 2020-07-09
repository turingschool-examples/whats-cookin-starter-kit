const cardDisplay = document.querySelector('.card-display');
const nav = document.querySelector('nav');
const currentUser = new User(generateRandomUser());
//event listening
cardDisplay.addEventListener('click', cardEventHandler);
nav.addEventListener('click', navEventHandler);

function cardEventHandler(event) {
  if (event.target.classList.contains('star-icon')) {
    console.log(`Oh you think recipe ${event.path[2].id} looks good?`)
  } else {
    console.log(`I see recipe ${event.target.id}`)
  }
}

function navEventHandler(event) {
  if(event.target.id === "recipe-page-button" ) {
    console.log('You\'re already looking at the recipe page dangus');
    goToAllRecipes();
  } else if (event.target.id === "user-page-button") {
    console.log(`Oh, typical ${currentUser.name}, always clicking on their self.`)
    goToUser();
  }
}
// page manipulation
const propagateCards = (recipeCards) => {
  recipeCards.forEach((recipe) => {
    cardDisplay.innerHTML += 
    `<div class="recipe-card" id="${recipe.id}" style="background-image: url(${recipe.image})">
    <div class="card-info">
    <img class="star-icon id="${recipe.id}"" src="https://www.clipartmax.com/png/middle/175-1753277_free-image-on-pixabay-star-icon-png.png" />
    <div class="recipe-title" id="${recipe.id}">${recipe.name}</div>
    </div>
    </div>`
  })
}

const goToUser = () => {
  cardDisplay.classList.add('hidden');
}

const goToAllRecipes = () => {
  cardDisplay.classList.remove('hidden');
}
// user functions
function generateRandomUser() {
  return usersData[Math.round(Math.random() * usersData.length)];
}

const showUser = () => {
  userButton = document.getElementById('user-page-button');

  userButton.innerText = currentUser.name.toUpperCase();
}

window.onload = propagateCards(recipeData);
window.onload = showUser();

