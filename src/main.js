
const generateRandomIndex = (source) => {
	return Math.floor(source.length * Math.random())
}

let user = new User(users[generateRandomIndex(users)])

let currentUser = users.filter(card => card.id === Math.floor(users.length * Math.random()))

let cookbook = new Cookbook(recipeData)
let pantry = new Pantry()

let recipeName = document.querySelector('.recipe_title');
let cooksName = document.querySelector('.user_title');
let mainRecipeArea = document.querySelector('.main_recipe-area');
let addFavoriteButton;
let favoriteButton;

mainRecipeArea.addEventListener("click", addtoFavoriteRecipes);

function addtoFavoriteRecipes(e) {
  // console.log("add 2 favorites");
  // console.log(e);
  if (e.target.classList.contains("add_to-favorites")){
    console.log(e.target.classList)
  }
}

function kickOff() {
	// console.log(users.name);
	cooksName.innerHTML = user.name;
}

function displayName() {
	recipeName.innerHTML = user.displayName(recipeData)
	user.displayName(users);
}

function insertRecipeTitle(recipeData) {
	// recipeName.innerHTML = user.displayRecipeName(recipeData)
}

// function addFavoritesArray(e) {
// 	console.log(e)
// }

function displayRecipes() {
	cookbook.recipes.forEach(recipe => {
    mainRecipeArea.insertAdjacentHTML('beforeend',
      `<section class="recipe_info-box">
            <img src="${recipe.image}">
            <h1 class="recipe_title">${recipe.name}</h1>
            <section id="ingredients_display-area"></section>
            <button class="add_to-favorites">Favorites</button>
            <button class="add_to-cook">Save for later</button>
            <button class="display_ingredients">Ingredients</button>
       </section>`);
  });
}

cooksName.innerHTML = currentUser[0].name

displayRecipes()
kickOff()
