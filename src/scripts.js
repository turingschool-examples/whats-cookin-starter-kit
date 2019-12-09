/* eslint-disable max-len */
let allRecipes = [];
let personalPantry = [];
let randomNum = genRanNum();
let user;

const instantiateRecipeCards = () => {
  recipeData.forEach(recipe => {
    let singleRecipe = new Recipe (
      recipeData.name,
      recipeData.id,
      recipeData.image,
      recipeData.ingredients,
      recipeData.instructions,
      recipeData.tags)
    allRecipes.push(recipe);
  })
  buildRecipeCards(allRecipes);
}

//create new array of objects upon new user instantiation.
//build it off of []users.pantry and []ingredientsData.
//each object in array has two keys: name & quantity.

//get into user.pantry.ingredient
//store that ingredientId in a var?
//get into ingredientsData if the ingredientId matches, display ingredientsData.name
//use the id number from ^^ to filter through array of recipes
//when we find a match, push into new personalPantry array.



const pullIngredientNames = () => {
  user.pantry.forEach(item => {
    ingredientsData.filter(ingredient => {
      if (item.ingredient === ingredient.id) {
        personalPantry.push({name: ingredient.name, amount: item.amount, id: item.ingredient})
      }
    })
  })
}


const instantiateUsersPantry = () => {
  personalPantry.forEach(item => {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin', `
  <div class="ingredient-card">
    <p>Name: <span class="ingredient-name">${item.name}</span></p>

    <p>Quantity: <span class="ingredient-quantity">${item.amount}</span></p>
  </div>`);
  });
}

const buildRecipeCards = (recipesToBuild) => {
  recipesToBuild.forEach(recipe => {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin', `
  <div class="recipe-container">
    <div class="image-container">
      <img src="${recipe.image}" class="image-container">
    </div>
    <div class="recipe-text">
      <h2 aria-label="${recipe.name}">${recipe.name}</h2>
    </div>
    <div class="card-button-containter">
      <button type="button" class="card-buttons view-recipe" id=${recipe.id}>View Recipe</button>
      <button type="button" class="card-buttons add-to-menu" id=${recipe.id}>Add to Menu</button>
      <button type="button" class="card-buttons add-to-favorites" id=${recipe.id}>Add to Favorites</button>
    </div>
  </div>`);
  });
}

// var thingy = document.querySelector('.search-input')
//
// document.querySelector('.search-input').addEventListener('keyup', searchCards);
//
// function searchCards() {
//   var search = thingy.value.toUpperCase();
//   var filter = allRecipes.filter(function(idea){
//   var titleSearch = idea.name;
//     return titleSearch.toUpperCase().includes(search)
//   });
//   document.querySelector('.recipe-card-area').innerText = '';
//   filter.forEach(function(filterInstance){
//     buildRecipeCards(filterInstance);
//   });
// }

function genRanNum() {
  return Math.floor(Math.random() * 50);
}

const instantiateUser = () => {
  var selectedUser = users.find(person => {
    return person.id === randomNum;
  })
  user = new User (
    selectedUser.id,
    selectedUser.name,
    selectedUser.pantry)
  document.querySelector('.user-name').innerText = selectedUser.name;
  document.querySelector('.nav-user-name').innerText = selectedUser.name;
}

const addToFavoritesOrMenu = e => {
  if (e.target.classList.contains('add-to-favorites')) {
    let selectedRecipe = allRecipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    let doubleCheck = user.favoriteRecipes.includes(selectedRecipe)
    if (!doubleCheck) {
      user.addToFavorites(selectedRecipe);
    } else {
      return;
    }
  }
  if (e.target.classList.contains('add-to-menu')) {
    let selectedRecipe = allRecipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    let doubleCheck = user.myMenu.includes(selectedRecipe)
    if (!doubleCheck) {
      user.addToMyMenu(selectedRecipe);
    } else {
      return;
    }
  }
}

const turnNavBtnsWhite = () => {
  let navHeadings = ['.display-fav-button', '.all-recipes','.my-menu','.my-pantry']
  navHeadings.forEach(heading => {
    document.querySelector(`${heading}`).style.color = '#FFFFFF';
  })
}

const highlightNavBtn = (navItem) => {
  document.querySelector(`${navItem}`).style.color = '#00feff';
}

const clearRecipeCardArea = () => {
  document.querySelector('.recipe-card-area').innerText = '';
}

const emptyFavAreaErrorMessage = (message) => {
  if (user.favoriteRecipes.length === 0) {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin', `
    <div class="fav-recipe-error-message-container">
      <p class="error-message">You don't have any ${message} at this time</p>
    </div>`);
  } else {
    return;
  }
};

const emptyMenuAreaErrorMessage = (message) => {
  if (user.myMenu.length === 0) {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin', `
    <div class="fav-recipe-error-message-container">
      <p class="error-message">You don't have any ${message} at this time</p>
    </div>`);
  } else {
    return;
  }
};

const navBtnClickHandler = e => {
  if (e.target.classList.contains('display-fav-button')) {
    turnNavBtnsWhite();
    highlightNavBtn(`.display-fav-button`)
    clearRecipeCardArea();
    emptyFavAreaErrorMessage('favorite recipes');
    buildRecipeCards(user.favoriteRecipes);
  };
  if (e.target.classList.contains('all-recipes')) {
    turnNavBtnsWhite();
    highlightNavBtn(`.all-recipes`)
    clearRecipeCardArea();
    buildRecipeCards(allRecipes);
  };
  if (e.target.classList.contains('my-menu')) {
    turnNavBtnsWhite();
    highlightNavBtn(`.my-menu`)
    clearRecipeCardArea();
    emptyMenuAreaErrorMessage('saved menu items');
    buildRecipeCards(user.myMenu);
  };
  if (e.target.classList.contains('my-pantry')) {
    turnNavBtnsWhite();
    highlightNavBtn(`.my-pantry`)
    clearRecipeCardArea();
    instantiateUsersPantry();
  };
};

const loadDashboard = () => {
  document.querySelector('.splash-container').classList.add('hidden');
  document.querySelector('.nav-bar').classList.remove('hidden');
  document.querySelector('.recipe-card-area').classList.remove('hidden');
  instantiateRecipeCards();
}

// On Page Load
instantiateUser();
pullIngredientNames()


// Event Listeners
document.querySelector('.enter-button').addEventListener('click', loadDashboard);
document.querySelector('.recipe-card-area').addEventListener('click', addToFavoritesOrMenu);
document.querySelector('nav').addEventListener('click', navBtnClickHandler);
