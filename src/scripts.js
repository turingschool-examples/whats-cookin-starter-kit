//~~~~~~~~~~~~~~~~~~~~ IMPORTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png';
import './images/icon_banner_add.png';
import './images/icon_banner_remove.png';
import './images/icon_fire_symbol_lit.png';
import './images/icon_fire_symbol_unlit.png';
import RecipeRepository from '../src/classes/RecipeRepository';
import User from '../src/classes/User';
const { usersData } = require('../src/data/users')



const instantiateClasses = (userData, recipeData, ingredientData) => {
  let recipeRepositoryApi = new RecipeRepository(recipeData, ingredientData)
  let userApi = new User(userData)
  console.log(recipeRepositoryApi.allRecipes)


}

apiCalls.then(data => {
  let userData = data[0].usersData
  let recipeData = data[1].recipeData
  let ingredientData = data[2].ingredientsData
  instantiateClasses(userData, recipeData, ingredientData)
})


//~~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const recipeSection = document.getElementById('recipesSection');
var recipePreview = document.querySelector('.recipe-preview');
let popUp = document.querySelector('.popup-div');
const popUpShadow = document.getElementById('shadow');
const filterBreakfast = document.getElementById('breakfast')
const filterLunch = document.getElementById('lunch')
const filterDinner = document.getElementById('dinner')
const filterSnack = document.getElementById('snack')
const filterDip = document.getElementById('dip')
const searchBar = document.getElementById('searchBar')
const resetFilters = document.getElementById('clear')
const popupToCookIcon = document.getElementById('popupAddCook')
const popupSaveIcon = document.getElementById('popupAddSaved')
let savedRecipes = document.getElementById('saveRecipes')
let allRecipesBar = document.querySelector('.underline-box-all')
let savedRecipesBar = document.querySelector('.underline-box-saved')
//~~~~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~
// var recipeRepository = new RecipeRepository();
// recipeRepository.addRecipes();
// var recipesFull = recipeRepository.recipeObjects;

//~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', () => {
  initiatePage()
});

popUp.addEventListener('click', (e) => {
  hidePopUp(e)
  //refactor to a handler function
  if(user.viewingSavedRecipe) {
    createRecipePreview(user.favoriteRecipes, e)
  } else {
      createRecipePreview(recipesFull, e)
    }
})

recipeSection.addEventListener('click', (e) => {
  displayRecipeDetail(e)
  if(e.target.dataset.cookid){
    saveRecipeToCook(e)
  }
  if(e.target.dataset.saveid) {
    identifyRecipe(e)
  }
  })

//Maybe implement event bubbling 🛁 here
  filterBreakfast.addEventListener('click', () => {
    displayFilteredTags('breakfast')
  });

  filterLunch.addEventListener('click', () => {
    displayFilteredTags('lunch')
  });

  filterDinner.addEventListener('click', () => {
    displayFilteredTags('dinner')
  });

  filterSnack.addEventListener('click', () => {
    displayFilteredTags('snack')
  });

  filterDip.addEventListener('click', () => {
    displayFilteredTags('dip')
  });

  resetFilters.addEventListener('click', () => {
    resetPageRender()
  });

  searchBar.addEventListener('input', () => {
    displayRecipesByName(searchBar.value)
  });

  popupToCookIcon.addEventListener('click', (e) => {
    saveRecipeToCook(e)
  });

  popupSaveIcon.addEventListener('click', (e) => {
    identifyRecipe(e)
  });

  savedRecipes.addEventListener('click', (e) => {
    if(!user.viewingSavedRecipe) {
      toggleHidden(savedRecipesBar)
      toggleHidden(allRecipesBar)
      createRecipePreview(user.favoriteRecipes, e)
    }
    user.viewingSavedRecipe = true
  });

  allRecipes.addEventListener('click', (e) => {
    if(user.viewingSavedRecipe) {
      toggleHidden(allRecipesBar)
      toggleHidden(savedRecipesBar)
      createRecipePreview(recipesFull)
    }
    user.viewingSavedRecipe = false
  });

  //~~~~~~~~~~~~~~~~~~~~ EVENT HANDLERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //🌎 GLOBAL VARIABLE REQUIRED
  let saveRecipeToCook = (e) => {
    let recipe = recipesFull.find((recipe) => {
      return `${recipe.id}` ===  e.target.dataset.cookid
    })
    user.addRecipeToCook(recipe)
    toggleToCookIcon(e, recipe)
  }

  //🌎 GLOBAL VARIABLE REQUIRED
  let resetPageRender = () => {
    if(user.viewingSavedRecipe) {
      createRecipePreview(user.favoriteRecipes)
    } else {
      createRecipePreview(recipesFull)
    }
  }

  //🌎 GLOBAL VARIABLE REQUIRED
  let identifyRecipe = (e) => {
    let recipe = recipesFull.find((recipe) => {
      return `${recipe.id}` ===  e.target.dataset.saveid
    })
    //refactor ↓ to handleSavingRecipes later
    if(recipe.saved && user.viewingSavedRecipe) {
      toggleSaveIcon(e, recipe)
      user.removeFavoriteRecipe(recipe)
      recipe.saved = false
      createRecipePreview(user.favoriteRecipes)
    } else if(recipe.saved && !user.viewingSavedRecipe) {
      user.removeFavoriteRecipe(recipe)
      recipe.saved = false
      toggleSaveIcon(e, recipe)
    } else if(!recipe.saved && !user.viewingSavedRecipe) {
      recipe.saved = true
      user.favoriteARecipe(recipe)
      toggleSaveIcon(e, recipe)
    }
  }

  let toggleSaveIcon = (e, recipe) => {
    if(recipe.saved) {
      e.target.src = './images/icon_banner_remove.png'
      return
    }
    e.target.src = './images/icon_banner_add.png'
  };

  let toggleToCookIcon = (e, recipe) => {
    if(recipe.wantToCook) {
      e.target.src = './images/icon_fire_symbol_lit.png'
      return
    }
    e.target.src = './images/icon_fire_symbol_unlit.png'
  };

  //🌎 GLOBAL VARIABLE REQUIRED
  let removeFavoriteRecipe = (e) => {
    let output = recipesFull.find((recipe) => {
      return `${recipe.id}` ===  e.target.dataset.saveid
    })
     user.removeFavoriteRecipe(output)
  };

  let hidePopUp = (e) => {
    if(e.target.id === 'specificRecipe') {
      toggleHidden(popUp)
      toggleHidden(popUpShadow)
    }
  };

  //🌎 GLOBAL VARIABLE REQUIRED
  const displayRecipeDetail = (e) => {
    if(e.target.dataset.id) {
      var foundRecipe = recipesFull.find((recipe) => {
        return `${recipe.id}` ===  e.target.dataset.id
      });
      displayPopUp(foundRecipe);
      toggleHidden(popUpShadow);
      toggleHidden(popUp);
    }
  };

//🌎 GLOBAL VARIABLE REQUIRED
//Re-evaluate whether we need initiate page↓
var initiatePage = () => {
  createRecipePreview(recipesFull);
};

var createRecipePreview = (recipes, e) => {
  recipeSection.innerHTML = '';
  recipes.forEach((recipe) => {
    // recipe.collectIngredients();
    // recipe.nameIngredients();
    let srcCook = findCookIcon(recipe);
    let srcSave = findSaveIcon(recipe);
    recipeSection.innerHTML += `
      <section class="recipe-preview" data-id="${recipe.id}">
        <section class="recipe-heading" data-id="${recipe.id}">
          <h3 data-id="${recipe.id}">${recipe.name}</h3>
        </section>
        <div data-id="${recipe.id}" class="recipe-img">
          <img data-id="${recipe.id}" src="${recipe.img}">
        </div>
        <section class="recipe-info" data-id="${recipe.id}">
          <section class="tag-icon-section" data-id="${recipe.id}">
            <div class="icons-section" data-id="${recipe.id}">
              <img class="icon add-to-cook" src="${srcCook}" data-cookId="${recipe.id}">
                <img class="icon add-to-saved" id="saveIcon" src="${srcSave}" data-saveId="${recipe.id}">
            </div>
          </section>
        </section>
      </section>
    `
  })
}

let findCookIcon = (recipe) => {
  if (recipe.wantToCook) {
    return './images/icon_fire_symbol_lit.png'
  } else {
    return './images/icon_fire_symbol_unlit.png'
  }
}

let findSaveIcon = (recipe) => {
  if (recipe.saved) {
    return './images/icon_banner_remove.png'
  } else {
    return './images/icon_banner_add.png'
  }
}

//🌎 GLOBAL VARIABLE REQUIRED -recipeRepository
const displayFilteredTags = (tagToFilter) => {
  if(user.viewingSavedRecipe) {
    let userFilteredSavedRecipes = user.filterFavsByTag(tagToFilter);
    createRecipePreview(userFilteredSavedRecipes)
    return
  }
  const tempRecipeArr = recipeRepository.filterByTag(tagToFilter);
  createRecipePreview(tempRecipeArr)
}

//🌎 GLOBAL VARIABLE REQUIRED -recipeRepository
const displayRecipesByName = (inputName) => {
  if(user.viewingSavedRecipe) {
    const filterSavedRecipesByName = user.filterFavsByName(inputName);
    createRecipePreview(filterSavedRecipesByName)
    return
  }
  const tempRecipesArray = recipeRepository.filterByName(inputName);
  createRecipePreview(tempRecipesArray)
}
//😬
const displayPopUp = (recipe) => {
  let popupName = document.getElementById('popupName');
  let popupImage = document.getElementById('popupImage');
  let popupInstructions = document.getElementById('popupInstructions');
  let popupIngredients = document.getElementById('popupIngredients');
  popupToCookIcon.setAttribute('data-cookid', `${recipe.id}`)
  popupSaveIcon.setAttribute('data-saveid', `${recipe.id}`);
  popupIngredients.innerHTML = '';
  popupInstructions.innerHTML = '';
  recipe.instructions.forEach((instruction) => {
    let newListInstruction = document.createElement('li')
    newListInstruction.classList.add('instructions-list')
    newListInstruction.innerHTML = `Step ${instruction.number}: ${instruction.instruction}`
    popupInstructions.appendChild(newListInstruction)
  })
  recipe.ingredients.forEach((ingredient, i) => {
    let newListIngredient = document.createElement('li')
    newListIngredient.classList.add('ingredients-list')
    newListIngredient.innerHTML = `${ingredient.name}:  ${(recipe.ingredientsInfo[i].quantity.amount).toFixed(2)}${recipe.ingredientsInfo[i].quantity.unit}`
    popupIngredients.appendChild(newListIngredient)
  })
  popupImage.src = recipe.img
  popupName.innerHTML = recipe.name

  if(recipe.saved) {
    popupSaveIcon.src = './images/icon_banner_remove.png'
  } else {
    popupSaveIcon.src = './images/icon_banner_add.png'
  };

  if(recipe.wantToCook) {
    popupToCookIcon.src = './images/icon_fire_symbol_lit.png'
  } else {
    popupToCookIcon.src = './images/icon_fire_symbol_unlit.png'
  };
  displayTotalCost(recipe);
}

const displayTotalCost = (recipe) => {
  let ingredientsBlock = document.getElementById('popupIngredients')
  let totalCost = document.createElement('p')
  totalCost.classList.add('total-cost-popup')
  totalCost.innerHTML = `Total Cost: $${(recipe.calculateCost()/100).toFixed(2)}`
  ingredientsBlock.appendChild(totalCost)
}

const toggleHidden = (element) => {
  let classes = element.classList
  classes.toggle('hidden')
}


//~~~~~~~~~~~~~~~~~~~~ CODE/PSUEDOCODE DUMP ~~~~~~~~~~~~~~~~~~~~~~~~~~
