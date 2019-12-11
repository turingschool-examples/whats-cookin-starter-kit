// let user = new User(users) // currently passing arr through constructor X
let currentUser = [];
currentUser = users.filter(card => card.id === Math.floor(users.length * Math.random()))
  // fix any instances of currentUser => user
let user = new User(users[Math.floor(users.length * Math.random())])

let cookbook = new Cookbook(recipeData)
let pantry = new Pantry()

let recipeName = document.querySelector('.recipe_title');
let cooksName = document.querySelector('.user_title');
let mainRecipeArea = document.querySelector('.main_recipe-area');
let jsFavoriteArea = document.querySelector('.js_favorite-area');
let searchValue = document.querySelector('.main_recipe-search')
let jsSavedArea = document.querySelector('.js_saved-area');
let addToSaved = document.querySelector('.add_to-saved');
let showFavoritesBtn = document.querySelector('.favorite-filter');
let showSavedRecipesBtn = document.querySelector('.tocook-filter');
let clearSearchBtn = document.querySelector('.clear-filter');

// fix the buttons after new render
  // document.querySelectorAll(.add_to-favorites)
  // document.querySelectorAll(.add_to-save)
let addFavoriteButton;
let favoriteButton;
let src = cookbook.recipes;

mainRecipeArea.addEventListener("click", recipeCardEvent);
showFavoritesBtn.addEventListener("click", (e) => toggleFilters(e));
showSavedRecipesBtn.addEventListener("click", (e) => toggleFilters(e));
clearSearchBtn.addEventListener("click", (e) => toggleFilters(e));
searchValue.addEventListener("keyup", (e) => filterSearch(e));

function recipeCardEvent(e) {
  if (e.target.classList.contains("add_to-favorites")){
    user.addToFavorites(e.target.parentElement.children[1].innerHTML, cookbook)
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
            <h1 class="user_recipe-title">${recipe.name}</h1>
       </section>`);

  });
}

const toggleFilters = (e) => {
  const {name} = e.target;
  name === 'clear' ? src = cookbook.recipes : src = buildCookBook(name);
  renderSearchRecipes(src);
}

const buildCookBook = (name) => {
  let userRecipes = [];
  if(name === 'favorite') {
    userRecipes = user.favoriteRecipes;
  } else {
      userRecipes = user.recipesToCook;
  }

  return userRecipes.reduce((acc, recipe) => {
  const tempRecipe = cookbook.recipes.find((r) => {
      return r.name === recipe;
    })
    acc.push(tempRecipe);
    return acc
  }, [])
}

const filterSearch = (e) => {
  const {value} = e.target;
  let allSearchResults = [];
  // todo: searchByIngredients, searchByTitle
    // super similar to concat(filterTags(value))
  allSearchResults = allSearchResults.concat(filterTags(value));
  //allSearchResults
  renderSearchRecipes(allSearchResults);
}
  // for
// if type = '', src = original cookbook
// else if render based on those filter
// else display no results found, clear the search show all of it.


  const renderSearchRecipes = (allSearchResults) => {
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
}

const filterTags = (type) => {
  console.log(src);
  return src.filter(recipe => {
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
  } else {
    cooksName.innerHTML = users[0].name
  }
}


displayUserName()
displayRecipes()
