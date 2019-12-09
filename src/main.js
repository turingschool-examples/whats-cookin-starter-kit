let user = new User(users)
let currentUser = [];
currentUser = users.filter(card => card.id === Math.floor(users.length * Math.random()))

let cookbook = new Cookbook(recipeData)
let pantry = new Pantry()

let recipeName = document.querySelector('.recipe_title');
let cooksName = document.querySelector('.user_title');
let mainRecipeArea = document.querySelector('.main_recipe-area');
let jsFavoriteArea = document.querySelector('.js_favorite-area');
let searchValue = document.querySelector('.main_recipe-search')
let jsSavedArea = document.querySelector('.js_saved-area');
let addToSaved = document.querySelector('.add_to-saved');

let addFavoriteButton;
let favoriteButton;

mainRecipeArea.addEventListener("click", recipeCardEvent);
searchValue.addEventListener("keyup", (e) => filterSearch(e, cookbook));

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

const filterSearch = (e, src) => {
  const type = e.target.value;
  let allSearchResults = [];
  // may run into issues with
  allSearchResults = allSearchResults.concat(filterTags(type, src));
  console.log(allSearchResults);
  mainRecipeArea.innerHTML = '';
  allSearchResults.forEach(recipe => {
    mainRecipeArea.insertAdjacentHTML('afterbegin',
  		`<section class="recipe_info-box">
  					<img src="${recipe.image}">
  					<h1 class="recipe_title">${recipe.name}</h1>
  					<h4 id="ingredients_list">Ingredients:</h4>
  					<button class="add_to-favorites">Favorites</button>
  					<button class="add_to-cook">Save for later</button>
            <button class="display_ingredients">Ingredients</button>
  		 </section>`);

  })
  // for
// if type = '', src = original cookbook
// else if render based on those filter
// else display no results found, clear the search show all of it.
}

const filterTags = (type, src) => {
  return src.recipes.filter(recipe => {
  const foundTag = recipe.tags.find(tag => {
    return tag.includes(type)
  })
  if(foundTag) {
    return recipe
  }
})
}

function costOfRecipe() {
	return this.ingredients.reduce((acc, ingredient) => {
			ingredientsData.forEach((singleIngredient) => {
				console.log(ingredientsData);
				if (singleIngredient.id === ingredient.id) {
					acc += ingredient.costOfRecipe;
				}
			})
		return acc;
	}, 0) / 100;
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

function displayUserName() {
  if (currentUser.length !== 0) {
    cooksName.innerHTML = currentUser[0].name
  }
}


displayUserName()
displayRecipes()
