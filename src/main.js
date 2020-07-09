const cardDisplay = document.querySelector('.card-display');
const currentUser = new User(generateRandomUser());
const propagateCards = (recipeCards) => {
  recipeCards.forEach((recipe) => {
    cardDisplay.innerHTML += 
    `<div class="recipe-card" id="${recipe.id}" style="background-image: url(${recipe.image})">
    <div class="card-info">
    <img class="fav-icon" src="https://www.clipartmax.com/png/middle/175-1753277_free-image-on-pixabay-star-icon-png.png" />
    <div class="recipe-title">${recipe.name}</div>
    </div>
    </div>`
  })
}

function generateRandomUser() {
  return usersData[Math.round(Math.random() * usersData.length)];
}

const showUser = () => {
  userButton = document.getElementById('user-page-button');

  userButton.innerText = currentUser.name;
}

window.onload = propagateCards(recipeData);
window.onload = showUser();

