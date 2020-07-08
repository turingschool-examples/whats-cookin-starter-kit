const cardDisplay = document.querySelector('.card-display');

window.onload = propagateCards(recipeData);

propagateCards = (recipeCards) => {
  recipeCards.forEach((recipe) => {
    cardDisplay.innerHTML += 
    `<div class="recipe-card" style="background-image: url(${recipe.image})">
    <div class="card-info">
    <img class="fav-icon" src="https://www.clipartmax.com/png/middle/175-1753277_free-image-on-pixabay-star-icon-png.png" />
    <div class="recipe-title">${recipe.name}</div>
    </div>
    </div>`
  })
}

