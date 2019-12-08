let user = new User(users)
let currentUser = [];
currentUser = users.filter(card => card.id === Math.floor(users.length * Math.random()))

let cookbook = new Cookbook(recipeData)
let pantry = new Pantry()

let recipeName = document.querySelector('.recipe_title');
let cooksName = document.querySelector('.user_title');
let mainRecipeArea = document.querySelector('.main_recipe-area');
let jsFavoriteArea = document.querySelector('.js_favorite-area');
let jsSavedArea = document.querySelector('.js_saved-area');
let addToSaved = document.querySelector('.add_to-saved');
let addFavoriteButton;
let favoriteButton;

mainRecipeArea.addEventListener("click", recipeCardEvent);

function recipeCardEvent(e) {
  if (e.target.classList.contains("add_to-favorites")){
    user.addToFavorites(e.target.parentElement.children[1].innerHTML)
    displayFavoriteRecipes()
  } else if (e.target.classList.contains("add_to-saved")){
    user.addToSaved(e.target.parentElement.children[1].innerHTML)
    displaySavedRecipes()
  }

}

function displayRecipes() {
	cookbook.recipes.forEach(recipe => {
    mainRecipeArea.insertAdjacentHTML('beforeend',
      `<section class="recipe_info-box">
            <img src="${recipe.image}">
            <h1 class="recipe_title">${recipe.name}</h1>
            <section id="ingredients_display-area"></section>
            <button class="add_to-favorites">Favorites</button>
            <button class="add_to-saved">Save for later</button>
            <button class="display_ingredients">Ingredients</button>
       </section>`);
  });
}

function displayFavoriteRecipes() {
  jsFavoriteArea.innerHTML = ''
  let sum = user.displayFavorites()
  sum.forEach(recipe => {
    jsFavoriteArea.insertAdjacentHTML('beforeend',
      `<section class="user_favorite-container">
            <h1 class="user_recipe-title">${recipe}</h1>
       </section>`);
  });
}

function displaySavedRecipes() {
  jsSavedArea.innerHTML = ''
  let sum = user.displaySavedRecipes()
  sum.forEach(recipe => {
    jsSavedArea.insertAdjacentHTML('beforeend',
      `<section class="user_saved-container">
            <h1 class="user_saved-title">${recipe}</h1>
       </section>`);
  });
}

cooksName.innerHTML = currentUser[0].name

displayRecipes()
