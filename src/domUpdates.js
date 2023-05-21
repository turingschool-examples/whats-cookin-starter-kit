// Imports
import { pageData, currentUser, updateCurrentUser, getRecipeCard } from './apiCalls';
import { ingredientsData } from './data/ingredients';
import {
  recipeGrid,
  clickedRecipe,
  tagArea,
  allRecipes,
  ingredientsList,
  searchBar,
  ourViewBtn,
  yourViewBtn,
  modalAddBtn, 
  modalRemoveBtn
} from './scripts'
import { searchRecipes } from './recipes';
import { updateRecipesToCook } from './users';
import { copyItem, toggleViewBtns } from './helper-functions';

// functions

const makeRecipeColumnData = (data) => {
  const mappedRecipe = data.map((recipe, index) => {
    return {
      column: (index+1) % 3,
      id: recipe.id,
      image: recipe.image,
      name: recipe.name,
      tags: recipe.tags
    }
  });

  const leftColumn = mappedRecipe.filter(recipe => recipe.column === 1);
  const centreColumn = mappedRecipe.filter(recipe => recipe.column === 2);
  const rightColumn = mappedRecipe.filter(recipe => recipe.column === 0);
  return [leftColumn, centreColumn, rightColumn];
}

const createSingleRecipeHTML = singleRecipe => {
  let htmlCode = '';
  let addStatus = ''; 
  let removeStatus = 'hidden';
  if(currentUser?.recipesToCook){
    if(checkSavedStatus(singleRecipe.id)) {
      addStatus = 'hidden';
      removeStatus = '';
    }
  }
  htmlCode += 
  `
  <article class="individual-recipe-container">
    <section class="add-panel panel save-option ${addStatus}">
      <div class="plus-symbol symbol save-option">+</div>
      <h4 class="save-option"> Add to recipes to cook</h4>
    </section>
    <section class="remove-panel panel save-option ${removeStatus}">
      <div class="minus-symbol synmbol save-option ">-</div>
      <h4 class="save-option"> Remove from recipes to cook</h4>
    </section>
    <article class="individual-recipe" id="${singleRecipe.id}">
      <div class="recipe-image-div">
        <img class="recipe-image"src="${singleRecipe.image}">
        <div class="hover-card"> 
          <h3>Read more...</h3>
        </div>               
      </div>
      <h2>${singleRecipe.name}</h2>
    </article>
  </article>
  `;
  return htmlCode
}

const createColumnHTML = column => {
  let htmlCode = '';
  htmlCode += '<div class = "col">'
  column.forEach(recipe => {
    htmlCode += createSingleRecipeHTML(recipe);
  });
  htmlCode += '</div>';
  return htmlCode;
}

const createGridHTML = allColumns => {
  let htmlCode = '';
  allColumns.forEach(column => {
    htmlCode += createColumnHTML(column); 
  });
  return htmlCode;
}

const renderGrid = (data) => {
  const gridData = makeRecipeColumnData(data)
  recipeGrid.innerHTML = ''
  recipeGrid.innerHTML = createGridHTML(gridData);
}

const getTagsFromRecipes = recipes => {
  const uniqueTags = [];
  const allTags = recipes.flatMap(recipe => recipe.tags)
  allTags.forEach(tag => {
    if (!uniqueTags.includes(tag)) {
      uniqueTags.push(tag);
    }
  })
  return uniqueTags;
}

const clubTagsAndIcons = tags => {
  const tagsAndIcons = tags.map((tag, index) => {
    return {
      name: tag,
      path: `./images/${tag}.png`,
      row: (index + 1) % 2
    };
  });

  return tagsAndIcons;
}

const splitTagsInRows = tagsAndIcons => {
  const topRow = tagsAndIcons.filter(tag => tag.row === 1);
  const bottomRow = tagsAndIcons.filter(tag => tag.row === 0);
  return [topRow, bottomRow];
}

const createTagCardHTML = tag => {
  let htmlCode = '';
  htmlCode += `
  <section class = "tag-card">
      <div class="tag-image-bg">
          <img class = "tag-image" src = "${tag.path}">
      </div>
      <p class="tag-text">${tag.name}</p>
  </section>
  `;
  return htmlCode;
}

const createRowHTML = row => {
  let rowNumber;

  if (row.length === 10) {
    rowNumber = "row-one";
  } else {
    rowNumber = "row-two";
  };

  let htmlCode = '';
  htmlCode += `<div class="tag-row ${rowNumber}">`;
  row.forEach(tag => {
    htmlCode += createTagCardHTML(tag);
  });
  htmlCode += `</div>`;
  return htmlCode;
};

const createTagAreaHTML = rows => {
  let htmlCode = '';
  htmlCode += '<div class="tag-rows">';

  rows.forEach(row => {
    htmlCode += createRowHTML(row);
  });

  htmlCode += '</div>';
  return htmlCode;
};

const renderTagArea = (data) => {
  const tagData = getTagsFromRecipes(data);
  const tagsAndIcons = clubTagsAndIcons(tagData);
  const tagRows = splitTagsInRows(tagsAndIcons);
  const htmlCode = createTagAreaHTML(tagRows);
  tagArea.innerHTML = htmlCode;
};

const isTagActive = event => event.target.closest(".tag-card")?.querySelector(".tag-image-bg").classList.contains("active-bg");
const removeActiveFromTag = event => event.target.closest(".tag-card").querySelector(".tag-image-bg").classList.remove("active-bg");
const addActiveToTag = event => event.target.closest(".tag-card").querySelector(".tag-image-bg").classList.add("active-bg")

const makeTagActive = (event) => {  
  if (isTagActive(event)) {
    removeActiveFromTag(event);
  } else {
    addActiveToTag(event);
  }
};

const pageLoadRenders = (data) => {
  renderGrid(data);
  renderTagArea(data);
};

const getInstructionHTML = (recipe) => {
  return recipe.instructions.map((instruction, i) => {
    if(recipe.instructions.length > 1) {
      return `<section class='single-instruction-step'> 
                <p class='step'>STEP ${i+1}</p> 
                <p class='instruction'>${instruction}</p> 
              </section>`
    } else {
      return `<p>${instruction}</p>`
    }
  })
}

const addScrollBar = (element) => {
    document.querySelector(element).classList.add('scrollbar')
}

const populateInstructions = (recipe) => {
  const instructions = getInstructionHTML(recipe)
  const instructionSection= document.querySelector('#recipeInstructions')
  instructionSection.innerHTML = `<p>Directions</p>
                                  <section class='instruction-steps'> 
                                    ${instructions.join('')} 
                                  </section>`
  addScrollBar('.instruction-steps')
}

const findRecipe = (allRecipes, ID) => {
  return allRecipes.find(recipe => recipe.id.toString() === ID.toString());
}

const updateCurrentRecipe = recipeCard => {
  const recipeCardID = recipeCard.closest("article")?.id;
  const thisRecipe = findRecipe(pageData.allRecipes, recipeCardID);
  pageData.currentRecipeCard = getRecipeCard(thisRecipe);
  pageData.currentRecipeCard.outerAddBtn = recipeCard.closest('.individual-recipe-container').querySelector('.add-panel')
  pageData.currentRecipeCard.outerRemoveBtn = recipeCard.closest('.individual-recipe-container').querySelector('.remove-panel')
}

const checkSavedStatus = (ID) => {
  return currentUser.recipesToCook.some(recipe => recipe.id.toString() === ID.toString());
}

const updateSaveButtons = (ID, addButton, removeButton) => {
  if(checkSavedStatus(ID)){
    addButton.classList.add('hidden')
    removeButton.classList.remove('hidden')
  } else {
    addButton.classList.remove('hidden')
    removeButton.classList.add('hidden')
  }
}

const populateRecipeHeader = currentRecipe => {
  document.querySelector('#recipeName').innerHTML = `
  <h1>${currentRecipe.name}</h1>
  <div class="individual-recipe-image">
    <img src="${currentRecipe.image}"></img>
  </div>
  `
}

const openRecipeCard = () => {
  allRecipes.classList.add('blur')
  clickedRecipe.classList.toggle("hidden");
  clickedRecipe.classList.toggle("flex");
  clickedRecipe.classList.toggle("fade-in");
}

const showRecipe = (recipeCard) => {
  updateCurrentRecipe(recipeCard);
  populateRecipeHeader(pageData.currentRecipeCard);
  populateInstructions(pageData.currentRecipeCard);
  populateIngredients(pageData.currentRecipeCard);
  updateSaveButtons(pageData.currentRecipeCard.id, modalAddBtn, modalRemoveBtn);
  openRecipeCard();
};


const closeRecipe = () => {
  allRecipes.classList.remove('blur')
  clickedRecipe.classList.add("hidden");
  clickedRecipe.classList.remove("flex");
  clickedRecipe.classList.remove("fade-in");
};

const populateIngredients = currentRecipeCard => {
  ingredientsList.innerHTML = `
    <h4>total ingredient cost: ${currentRecipeCard.price}</h4>
  `;
  createIngredientsHTML(currentRecipeCard.ingredients);
};

const createIngredientsHTML = ingredients => {
  ingredients.forEach((ingredient, i) => {
    let ingredientLabelName = `ingredient${i}`
    ingredientsList.innerHTML += `
    <label class="ingredient-label" for="${ingredientLabelName}">
      <input class="ingredient-input" id="${ingredientLabelName}" type="checkbox" name="${ingredientLabelName}" />
      ${ingredient.amount} ${ingredient.unit} ${ingredient.name}
    </label>
    `;
  });
};

const switchView = (clickedViewID) => {
  if (clickedViewID === "our-recipes") {
    pageData.recipesOfInterest = copyItem(pageData.allRecipes);
  } else {
    pageData.recipesOfInterest = copyItem(currentUser.recipesToCook);
  }
  pageData.currentView = clickedViewID
  renderGrid(pageData.recipesOfInterest)
  toggleViewBtns([ourViewBtn, yourViewBtn])
}

const searchForRecipes = () => {
  const data = {
    'our-recipes': pageData.allRecipes,
    'your-recipes': currentUser.recipesToCook
  }
  let searchedRecipes = searchRecipes(data[pageData.currentView], ingredientsData, searchBar.value)
  if(searchedRecipes) {
    if(searchedRecipes.length) {
      pageData.recipesOfInterest = searchedRecipes;
      renderGrid(searchedRecipes)
    }else {
      recipeGrid.innerHTML = `<p>Sorry, we couldn't find any recipes for your search of "${searchBar.value}"</p>`
    }
  }
}

const updateUserRecipes = (e) => {
  if(e.target.classList.contains('save-option')) {
    const recipeID = e.target.closest('.individual-recipe-container')?.querySelector('.individual-recipe').id
    const recipe = findRecipe(pageData.allRecipes, recipeID)
    if (!checkSavedStatus(recipeID)) {
      updateCurrentUser(updateRecipesToCook(currentUser, recipe, 'add'))
    } else if (checkSavedStatus(recipeID)) {
      updateCurrentUser(updateRecipesToCook(currentUser, recipe, 'remove'))
    }
    const addBtn = e.target.closest('.individual-recipe-container')?.querySelector('.add-panel')
    const removeBtn = e.target.closest('.individual-recipe-container')?.querySelector('.remove-panel')
    updateSaveButtons(recipeID, addBtn, removeBtn);
    if (pageData.currentView === 'your-recipes') pageData.recipesOfInterest = copyItem(currentUser.recipesToCook)
    renderGrid(pageData.recipesOfInterest);
  }
}

const updateRecipesFromModal = (targetID) => {
  const recipe = findRecipe(pageData.allRecipes, pageData.currentRecipeCard.id)
  updateCurrentUser(updateRecipesToCook(currentUser, recipe, targetID))
  updateSaveButtons(recipe.id, modalAddBtn, modalRemoveBtn)
  updateSaveButtons(recipe.id, pageData.currentRecipeCard.outerAddBtn, pageData.currentRecipeCard.outerRemoveBtn) 
  if (pageData.currentView === 'your-recipes') pageData.recipesOfInterest = copyItem(currentUser.recipesToCook)
  renderGrid(pageData.recipesOfInterest)
}

// Exports
export {
  renderGrid,
  makeTagActive,
  pageLoadRenders,
  showRecipe,
  closeRecipe,
  switchView,
  searchForRecipes,
  updateUserRecipes,
  findRecipe,
  updateSaveButtons,
  updateRecipesFromModal
}
