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

//~~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const recipeSection = document.getElementById('recipesSection');
var recipePreview = document.querySelector('.recipe-preview');
let popUp = document.querySelector('.popup-div');
const popUpShadow = document.getElementById('shadow');
const filterBreakfast = document.getElementById("breakfast")
const filterLunch = document.getElementById("lunch")
const filterDinner = document.getElementById("dinner")
const filterSnack = document.getElementById("snack")
const filterDip = document.getElementById("dip")
const searchBar = document.getElementById("searchBar")
// const buttonAddCookPopup = document.getElementById("popupAddCook")
const buttonAddSavedPopup = document.getElementById("popupAddSaved")
let savedRecipes = document.getElementById('saveRecipes')
let allRecipesBar = document.querySelector('.underline-box-all')
let savedRecipesBar = document.querySelector('.underline-box-saved')
//~~~~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~
var recipeRepository = new RecipeRepository();

recipeRepository.addRecipes();
var recipesFull = recipeRepository.recipeObjects;
const user = new User(usersData[Math.floor(Math.random() * usersData.length)])
//~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', () => {
  initiatePage()
});
popUp.addEventListener('click', (e) => {
  hidePopUp(e)
  if(user.viewingSavedRecipe) {
    createRecipePreview(user.favoriteRecipes, e)
    } else {
      createRecipePreview(recipesFull, e)
    }
})

recipeSection.addEventListener('click', (e) => {
  displayRecipeDetail(e)
  // saveRecipeToCook(e)
  if(e.target.dataset.saveid) {
    identifyRecipe(e)
  }
  // callFavoriteRecipeFunction(e)
  // if(e.target.dataset.cookid) {
  //   toggleSaveIcon(e)
  // }
  })

  filterBreakfast.addEventListener("click", () => {
  displayFilteredTags("breakfast")})

    filterLunch.addEventListener("click", () => {
  displayFilteredTags("lunch")})

  filterDinner.addEventListener("click", () => {
    displayFilteredTags("dinner")})

  filterSnack.addEventListener("click", () => {
      displayFilteredTags("snack")})

  filterDip.addEventListener("click", () => {
     displayFilteredTags("dip")})

  searchBar.addEventListener("input", () => {
    displayRecipesByName(searchBar.value)
  })

  // buttonAddCookPopup.addEventListener("click", (e) => {
  //  saveRecipeToCook(e)
  // })
  
  buttonAddSavedPopup.addEventListener("click", (e) => {
    identifyRecipe(e)
  })

  savedRecipes.addEventListener('click', (e) => {
    if(!user.viewingSavedRecipe) {
      toggleHidden(savedRecipesBar)
      toggleHidden(allRecipesBar)
      createRecipePreview(user.favoriteRecipes, e)
    }
    user.viewingSavedRecipe = true
  })

  allRecipes.addEventListener('click', (e) => {
    if(user.viewingSavedRecipe) {
      toggleHidden(allRecipesBar)
      toggleHidden(savedRecipesBar)
      createRecipePreview(recipesFull)
    }
    user.viewingSavedRecipe = false
  })

  //~~~~~~~~~~~~~~~~~~~~ EVENT HANDLERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  let identifyRecipe = (e) => {
    let recipe = recipesFull.find((recipe) => {
      return `${recipe.id}` ===  e.target.dataset.saveid
    })
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
   } 

  // let favoriteRecipe = (e) => {
  //   if(e.target.dataset.saveid && !e.target.checked) {
  //     let recipe = recipesFull.find((recipe) => {
  //       return `${recipe.id}` ===  e.target.dataset.saveid
  //     })
  //     recipe.saved = true
  //     user.favoriteARecipe(recipe)
  //     toggleSaveIcon(e)
  //   } 
  // }


  let removeFavoriteRecipe = (e) => {
    let output = recipesFull.find((recipe) => {
      return `${recipe.id}` ===  e.target.dataset.saveid
    })
     user.removeFavoriteRecipe(output)
  }
  

  // let saveRecipeToCook = (e) => {
  //   if(e.target.dataset.cookid) {
  //     console.log(e.target.dataset.cookid)
  //   }
  // }

  let hidePopUp = (e) => {
    if(e.target.id === 'specificRecipe') {
      toggleHidden(popUp)
      toggleHidden(popUpShadow)
    }
  }

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

var initiatePage = () => {
  createRecipePreview(recipesFull);
}

var createRecipePreview = (recipes, e) => {
  recipeSection.innerHTML = "";
  recipes.forEach((recipe) => {
    recipe.showDisplayTag()
    recipe.collectIngredients();
    recipe.giveInstructions();
    recipe.nameIngredients();
    let srcSave = findSaveIcon(recipe)
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
            <img class="icon add-to-cook" src="./images/icon_fire_symbol_unlit.png" data-cookId="${recipe.id}">
              <img class="icon add-to-saved" id="saveIcon" src='${srcSave}' data-saveId="${recipe.id}">
          </div>
        </section>
      </section>
    </section>
    `
  })
}

let findSaveIcon = (recipe) => {
  if (recipe.saved) {
    return './images/icon_banner_remove.png'
  } else {
    return './images/icon_banner_add.png'
  }
}


const displayFilteredTags = (tagToFilter) => {
  const tempRecipeArr = recipeRepository.filterByTag(tagToFilter);
  createRecipePreview(tempRecipeArr)
}

const displayRecipesByName = (inputName) => {
  const tempRecipeArr = recipeRepository.filterByName(inputName);
  createRecipePreview(tempRecipeArr)
}

const displayPopUp = (recipe) => {
  let popUpName = document.getElementById('popupName')
  let popUpImage = document.getElementById('popupImage')
  let popupInstructions = document.getElementById('popupInstructions')
  let popupIngredients = document.getElementById('popupIngredients')
  let popupSaveIcon = document.getElementById('popupAddSaved')
  // buttonAddCookPopup.setAttribute('data-cookid', `${recipe.id}`)
  buttonAddSavedPopup.setAttribute('data-saveid', `${recipe.id}`)

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
  popUpImage.src = recipe.img
  popUpName.innerHTML = recipe.name
  if(recipe.saved) {
    popupSaveIcon.src = './images/icon_banner_remove.png'
  }
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

//As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.

//As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)

//As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
