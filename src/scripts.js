/* eslint-disable max-len */
let allRecipes = [];
let searchPool = allRecipes;
let personalPantry = [];
let searchResults = [];
let currentPage = 'All Recipes'
let user;
let searchInput = document.querySelector('.search-input');

const instantiateRecipeCards = () => {
  recipeData.forEach(recipe => {
    let singleRecipe = new Recipe(
      recipeData.name,
      recipeData.id,
      recipeData.image,
      recipeData.ingredients,
      recipeData.instructions,
      recipeData.tags);
    allRecipes.push(recipe);
  })
  buildRecipeCards(allRecipes);
}

const pullIngredientNames = () => {
  user.pantry.forEach(item => {
    ingredientsData.filter(ingredient => {
      if (item.ingredient === ingredient.id) {
        personalPantry.push({
          name: ingredient.name,
          amount: item.amount
        });
      }
    });
  });
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
      <button type="button" class="card-buttons add-to-menu" id=${recipe.id}>+/- My Menu</button>
      <button type="button" class="card-buttons add-to-favorites" id=${recipe.id}>+/- My Favorites</button>
    </div>
  </div>`);
  });
}

const searchCards = () => {
  searchResults = [];
  var search = searchInput.value.toUpperCase();
  searchPool.filter(meal => {
    if (meal.name.toUpperCase().includes(search) ||
      meal.tags.includes(search.toLowerCase()) ||
      meal.ingredients.some(ingredient => {
        return ingredient.name.includes(search.toLowerCase())
      })) {
      clearRecipeCardArea();
      searchResults.push(meal);
      buildRecipeCards(searchResults);
    }
  });
}

const genRanNum = () => {
  return Math.floor(Math.random() * 50);
}

const instantiateUser = () => {
  var selectedUser = users.find(person => {
    return person.id === randomNum;
  })
  user = new User(
    selectedUser.id,
    selectedUser.name,
    selectedUser.pantry);
  document.querySelector('.user-name').innerText = selectedUser.name;
  document.querySelector('.nav-user-name').innerText = selectedUser.name;
}

const buildIngredientsList = () => {
  for (var i = 0; i < user.recipeToBuild[0].ingredients.length; i++) {
    user.recipeToBuild.forEach(recipe => {
      document.querySelector('.full-recipe-ingredient-name-container').innerHTML += `
    <li>${recipe.ingredients[i].quantity.amount}
    ${recipe.ingredients[i].quantity.unit} ${recipe.ingredients[i].name} </li> `
  });
  }
  buildRecipeSteps();
}

const buildRecipeSteps = () => {
  for (var i = 0; i < user.recipeToBuild[0].instructions.length; i++) {
    user.recipeToBuild.forEach(recipe => {
      document.querySelector('.full-recipe-right-section').innerHTML += `
    <ol>${i + 1}. ${recipe.instructions[i].instruction}</ol>`
    });
  }
}

const buildFullRecipeCard = (recipeToBuild) => {
  user.recipeToBuild.forEach(recipe => {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin', `
    <section class="full-recipe-container">
      <div class="full-recipe-title-container">
        <div class="full-recipe-title-and-tags">
          <h1 class="full-recipe-title">${recipe.name}</h1>
          <p class="full-recipe-tags">${recipe.tags}</p>
        </div>
        <button type="button" class="cook-this-recipe-button">Cook This Recipe</button>
      </div>
      <div class="full-recipe-left-section">
        <img class="full-recipe-image" src="${recipe.image}" alt="">
        <div class="full-recipe-ingredient-name-container"></div>
      </div>
      <div class="full-recipe-right-section"></div>
    </section>`);
  })
  buildIngredientsList();
}

const addToFavoritesOrMenu = e => {
  if (e.target.classList.contains('add-to-favorites')) {
    let selectedRecipe = allRecipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    });
    let doubleCheck = user.favoriteRecipes.includes(selectedRecipe);
    if (!doubleCheck) {
      user.addToFavorites(selectedRecipe);
    } else {
      let id = selectedRecipe.id;
      user.favoriteRecipes = user.favoriteRecipes.filter(fav => id !== fav.id);
      if (currentPage === 'My Favorites') {
        clearRecipeCardArea();
        buildRecipeCards(user.favoriteRecipes);
      }
      return;
    }
  }
  if (e.target.classList.contains('add-to-menu')) {
    let selectedRecipe = allRecipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    let doubleCheck = user.myMenu.includes(selectedRecipe);
    if (!doubleCheck) {
      user.addToMyMenu(selectedRecipe);
    } else {
      let id = selectedRecipe.id;
      user.myMenu = user.myMenu.filter(sel => id !== sel.id);
      if (currentPage === 'My Menu') {
        clearRecipeCardArea();
        buildRecipeCards(user.myMenu);
      }
      return;
    }
  }
  if (e.target.classList.contains('view-recipe')) {
    clearRecipeCardArea();
    let selectedRecipe = allRecipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    });
    user.addToRecipeToBuild(selectedRecipe);
    buildFullRecipeCard(selectedRecipe);
  }
}

const turnNavBtnsWhite = () => {
  let navHeadings = ['.display-fav-button', '.all-recipes',
  '.my-menu', '.my-pantry'];
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

const emptyAreaErrorMessage = (emptyArea, message) => {
  if (user[emptyArea].length === 0) {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin',
     `<div class="fav-recipe-error-message-container">
      <p class="error-message">You don't have any ${message} at this time</p>
    </div>`);
  } else {
    return;
  }
};

const clearCardAreaAndResetTabs = () => {
  turnNavBtnsWhite();
  clearRecipeCardArea();
}

const onFavTabClick = () => {
  currentPage = 'My Favorites';
  searchPool = user.favoriteRecipes;
  clearCardAreaAndResetTabs();
  highlightNavBtn(`.display-fav-button`);
  emptyAreaErrorMessage('favoriteRecipes', 'favorite recipes');
  buildRecipeCards(user.favoriteRecipes);
}

const onMyMenuTabClick = () => {
  currentPage = 'My Menu';
  searchPool = user.myMenu;
  clearCardAreaAndResetTabs();
  highlightNavBtn(`.my-menu`);
  emptyAreaErrorMessage('myMenu', 'saved menu items');
  buildRecipeCards(user.myMenu);
}

const onAllRecipesTabClick = () => {
  currentPage = 'All Recipes';
  searchPool = allRecipes;
  clearCardAreaAndResetTabs();
  highlightNavBtn(`.all-recipes`);
  buildRecipeCards(allRecipes);
}

const onMyPantryTabClick = () => {
  turnNavBtnsWhite();
  highlightNavBtn(`.my-pantry`);
  clearRecipeCardArea();
  instantiateUsersPantry();
}

const navBtnClickHandler = e => {
  if (e.target.classList.contains('display-fav-button')) {
    onFavTabClick();
  };
  if (e.target.classList.contains('all-recipes')) {
    onAllRecipesTabClick();
  };
  if (e.target.classList.contains('my-menu')) {
    onMyMenuTabClick();
  };
  if (e.target.classList.contains('my-pantry')) {
    onMyPantryTabClick();
  }
};

const loadDashboard = () => {
  document.querySelector('.splash-container').classList.add('hidden');
  document.querySelector('.nav-bar').classList.remove('hidden');
  document.querySelector('.recipe-card-area').classList.remove('hidden');
  instantiateRecipeCards();
}

// On Page Load
let randomNum = genRanNum();
instantiateUser();
pullIngredientNames();

// Event Listeners
document.querySelector('.enter-button').addEventListener('click', loadDashboard);
document.querySelector('.recipe-card-area').addEventListener('click', addToFavoritesOrMenu);
document.querySelector('nav').addEventListener('click', navBtnClickHandler);
searchInput.addEventListener('keyup', searchCards);
