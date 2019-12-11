/* eslint-disable max-len */
let allRecipes = [];
let searchPool = [];
let personalPantry = [];
let searchResults = [];
let randomNum = genRanNum();
let currentPage = 'All Recipes'
let user;
let searchInput = document.querySelector('.search-input')

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

const pullIngredientNames = () => {
  user.pantry.forEach(item => {
    ingredientsData.filter(ingredient => {
      if (item.ingredient === ingredient.id) {
        personalPantry.push({name: ingredient.name, amount: item.amount});
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
      <button type="button" class="card-buttons add-to-menu" id=${recipe.id}>Add to Menu</button>
      <button type="button" class="card-buttons add-to-favorites" id=${recipe.id}>Add to Favorites</button>
    </div>
  </div>`);
  });
}

const searchCards = () => {
  searchResults = [];


  var search = searchInput.value.toUpperCase();
  searchPool.filter(meal => {
    if (meal.name.toUpperCase().includes(search) || meal.tags.includes(search.toLowerCase())) {
      clearRecipeCardArea();
      searchResults.push(meal)
      buildRecipeCards(searchResults)
    }
  })
}

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

const buildIngredientsList = () => {
  for (var i = 0; i < user.recipeToBuild[0].ingredients.length; i++) {
    user.recipeToBuild.forEach(recipe => {
      document.querySelector('.full-recipe-ingredient-name-container').innerHTML += `
    <li>${recipe.ingredients[i].quantity.amount} ${recipe.ingredients[i].quantity.unit} ${recipe.ingredients[i].name} </li> `
    })
  }
  buildRecipeSteps()
}

const buildRecipeSteps = () => {
  for (var i = 0; i < user.recipeToBuild[0].instructions.length; i++) {
    user.recipeToBuild.forEach(recipe => {
      document.querySelector('.full-recipe-right-section').innerHTML += `
    <ol> ${i + 1}. ${recipe.instructions[i].instruction} </li> </ol>`
    })
  }
}

const buildFullRecipeCard = (recipeToBuild) => {
  user.recipeToBuild.forEach(recipe => {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin',`
    <section class="full-recipe-container">
      <div class="full-recipe-title-container">
        <div class="full-recipe-title-and-tags">
          <h1 class="full-recipe-title">${recipe.name}</h1>
          <p class="full-recipe-tags">${recipe.tags}</p>
        </div>
        <button type="button" class="cook-this-recipe-button">COOK THIS RECIPE</button>
      </div>
  
      <div class="full-recipe-left-section">
  
        <img class="full-recipe-image" src="${recipe.image}" alt="">
        <div class="full-recipe-ingredinets-list">
          <div class="full-recipe-ingredient-name-container">
          </div>
        </div>
      </div>
  
      <div class="full-recipe-right-section">
      <p class="instructions"></
      

      </div>
  
    </section>`);
  })
  buildIngredientsList()
}

const addToFavoritesOrMenu = e => {
  if (e.target.classList.contains('cook-this-recipe-button')) {
    cookRecipe()
  }
  if (e.target.classList.contains('add-to-favorites')) {
    let selectedRecipe = allRecipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    let doubleCheck = user.favoriteRecipes.includes()
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
  if (e.target.classList.contains('view-recipe')) {
    clearRecipeCardArea();
    let selectedRecipe = allRecipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    let doubleCheck = user.recipeToBuild.includes(selectedRecipe)
    if (!doubleCheck) {
      user.addToRecipeToBuild(selectedRecipe);
      buildFullRecipeCard(selectedRecipe);
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
    searchPool = user.favoriteRecipes;
    turnNavBtnsWhite();
    highlightNavBtn(`.display-fav-button`)
    clearRecipeCardArea();
    emptyFavAreaErrorMessage('favorite recipes');
    buildRecipeCards(user.favoriteRecipes);
  };
  if (e.target.classList.contains('all-recipes')) {
    searchPool = allRecipes;
    turnNavBtnsWhite();
    highlightNavBtn(`.all-recipes`)
    clearRecipeCardArea();
    buildRecipeCards(allRecipes);
  };
  if (e.target.classList.contains('my-menu')) {
    searchPool = user.myMenu;
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
  }
};

const cookRecipe = e => {
  if (e.target.classList.contains('.cook-this-recipe-button')) {
    console.log('hiii')
  }
}

const loadDashboard = () => {
  document.querySelector('.splash-container').classList.add('hidden');
  document.querySelector('.nav-bar').classList.remove('hidden');
  document.querySelector('.recipe-card-area').classList.remove('hidden');
  instantiateRecipeCards();
}

// On Page Load
instantiateUser();
pullIngredientNames();



// Event Listeners
document.querySelector('.enter-button').addEventListener('click', loadDashboard);
document.querySelector('.recipe-card-area').addEventListener('click', addToFavoritesOrMenu);
document.querySelector('nav').addEventListener('click', navBtnClickHandler);
searchInput.addEventListener('keyup', searchCards);
