// Imports
import { pageData, currentUser, updateCurrentUser } from './apiCalls';
import {
  recipeGrid,
  spinner,
  clickedRecipe,
  tagArea,
  allRecipes,
  ingredientsList,
  searchBar,
  ourViewBtn,
  yourViewBtn,
  modalAddBtn, 
  modalRemoveBtn,
  getPageRecipes, 
  getRecipeCard,
  body
} from './scripts'
import { searchRecipes, findRecipe, checkSavedStatus, filterRecipesByTag, splitTagsInRows, filterTagsByTagName  } from './recipes';
import { updateRecipesToCook } from './users';
import { copyItem, toggleViewBtns } from './helper-functions';

// functions

const makeRecipeColumnData = (data) => {
  const mappedRecipe = data.map((recipe, index) => {
    let thisPitch = "Click to read more...";
    if (recipe.pitch) {
      thisPitch = `${recipe.pitch} ${thisPitch}`;
    }

    return {
      column: (index+1) % 3,
      id: recipe.id,
      image: recipe.image,
      name: recipe.name,
      pitch: thisPitch,
      tags: recipe.tags
    }
  });

  const leftColumn = mappedRecipe.filter(recipe => recipe.column === 1);
  const centreColumn = mappedRecipe.filter(recipe => recipe.column === 2);
  const rightColumn = mappedRecipe.filter(recipe => recipe.column === 0);
  const allColumns = [leftColumn, centreColumn, rightColumn];
  const filteredColumns = allColumns.filter(column => column.length);
  return filteredColumns;
}

const createSingleRecipeHTML = singleRecipe => {
  let htmlCode = '';
  let addStatus = ''; 
  let removeStatus = 'hidden';
  if(currentUser?.recipesToCook){
    if(checkSavedStatus(currentUser, singleRecipe.id)) {
      addStatus = 'hidden';
      removeStatus = '';
    }
  }
  htmlCode += `
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
        <p class="grid-feedback"> Saved! </p>
        <div class="recipe-image-div">
          <img class="recipe-image"src="${singleRecipe.image}" alt="${singleRecipe.name}">
          <div class="hover-card">
            <h4>${singleRecipe.pitch}</h4>
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
  const gridData = makeRecipeColumnData(data);
  recipeGrid.innerHTML = '';
  recipeGrid.innerHTML = createGridHTML(gridData);
}

const createModalTagHTML = tag => {
  return `
    <section class = "tag-card" id = "${tag.name}">
        <div class="tag-image-bg active-bg">
            <img class = "tag-image" src = "${tag.path}" alt="${tag.name}">
        </div>
        <p class="tag-text">${tag.name}</p>
    </section>
  `;
}


const createTagCardHTML = tag => {
  let htmlCode = '';
  let bgClass = "tag-image-bg";
  if (tag.isActive) {
    bgClass = "tag-image-bg active-bg"
  }

  htmlCode += `
    <section class = "tag-card" id = "${tag.name}">
        <div class="${bgClass}">
            <img class = "tag-image" src = "${tag.path}" alt="${tag.name}">
        </div>
        <p class="tag-text">${tag.name}</p>
    </section>
  `;
  return htmlCode;
}

const createTagRowHTML = row => {
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
    htmlCode += createTagRowHTML(row);
  });

  htmlCode += '</div>';
  return htmlCode;
};

const renderTagArea = () => {
  const tagRows = splitTagsInRows(pageData.allTags);
  const htmlCode = createTagAreaHTML(tagRows);
  tagArea.innerHTML = htmlCode;
};

const checkIfActive = event => event.target.closest(".tag-card")?.querySelector(".tag-image-bg").classList.contains("active-bg");
const removeActiveFromTag = event => event.target.closest(".tag-card").querySelector(".tag-image-bg").classList.remove("active-bg");
const addActiveToTag = event => event.target.closest(".tag-card").querySelector(".tag-image-bg").classList.add("active-bg");

const renderActiveTag = (event) => {  
  if (checkIfActive(event)) {
    removeActiveFromTag(event);
  } else {
    addActiveToTag(event);
  }
};

const toggleTagData = (tagID) => {
  pageData.allTags.find(tag => tag.name === tagID).isActive = !pageData.allTags.find(tag => tag.name === tagID).isActive
}

const pageLoadRenders = (data) => {
  renderGrid(data);
  renderTagArea();
};

const getInstructionHTML = (recipe) => {
  return recipe.instructions.map((instruction, i) => {
    if (recipe.instructions.length > 1) {
      return `
        <section class='single-instruction-step'>
          <p class='step'>STEP ${i+1}</p>
          <p class='instruction'>${instruction}</p>
        </section>
      `;
    } else {
      return `<p>${instruction}</p>`;
    }
  })
}

const addScrollBar = (element) => {
    document.querySelector(element).classList.add('scrollbar');
}

const populateInstructions = (recipe) => {
  const instructions = getInstructionHTML(recipe);
  const instructionSection= document.querySelector('#recipeInstructions')
  instructionSection.innerHTML = `
    <p>Directions</p>
    <section class='instruction-steps'>
      ${instructions.join('')}
    </section>
  `;
  addScrollBar('.instruction-steps');
}

const updateCurrentRecipe = recipeCard => {
  const recipeCardID = recipeCard.closest("article")?.id;
  const thisRecipe = findRecipe(pageData.allRecipes, recipeCardID);
  pageData.currentRecipeCard = getRecipeCard(thisRecipe);
  pageData.currentRecipeCard.outerAddBtn = recipeCard.closest('.individual-recipe-container').querySelector('.add-panel');
  pageData.currentRecipeCard.outerRemoveBtn = recipeCard.closest('.individual-recipe-container').querySelector('.remove-panel');
}

const updateSaveButtons = (recipeID, addButton, removeButton, user) => {
  const recipe = document.getElementById(recipeID);
  const feedback = recipe.querySelector('.grid-feedback');

  if(checkSavedStatus(user, recipeID)){
    addButton.classList.add('hidden');
    removeButton.classList.remove('hidden');
    feedback.innerText = "Saved";
    feedback.classList.add('show-feedback')
    setTimeout(() => {feedback.classList.remove('show-feedback')}, 1600)
  } else {
    addButton.classList.remove('hidden');
    removeButton.classList.add('hidden');
    feedback.innerText = "Removed";
    feedback.classList.add('show-feedback')
    setTimeout(() => {feedback.classList.remove('show-feedback')}, 1600)
  }
}

const populateRecipeHeader = currentRecipe => {
  let filteredTags = filterTagsByTagName(pageData.allTags, currentRecipe.tags);
  let recipeTagsHTML = filteredTags.map((tag) => {
    return createModalTagHTML(tag);
  });

  document.querySelector('#recipeName').innerHTML = `
    <div id="individualRecipeTags">${recipeTagsHTML.join('')}</div>
    <h1>${currentRecipe.name}</h1>
    <div class="individual-recipe-image">
      <img src="${currentRecipe.image}"></img>
    </div>
  `
}

const openRecipeCard = () => {
  allRecipes.classList.add('blur')
  body.classList.add('no-scroll')
  clickedRecipe.classList.toggle("hidden");
  clickedRecipe.classList.toggle("flex");
  clickedRecipe.classList.toggle("fade-in");
}

const showRecipe = (recipeCard) => {
  updateCurrentRecipe(recipeCard);
  populateRecipeHeader(pageData.currentRecipeCard);
  populateInstructions(pageData.currentRecipeCard);
  populateIngredients(pageData.currentRecipeCard);
  updateSaveButtons(pageData.currentRecipeCard.id, modalAddBtn, modalRemoveBtn, currentUser);
  openRecipeCard();
};

const closeRecipe = () => {
  allRecipes.classList.remove('blur')
  body.classList.remove('no-scroll')
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

const renderRecipesOfInterest = () => {
  pageData.recipesOfInterest = copyItem(getPageRecipes());
  renderGrid(pageData.recipesOfInterest);
}

const setAllTagsInactive = () => {
  pageData.allTags.forEach(tag => {
    tag.isActive = false
  })
}

const switchView = (clickedViewID) => {
  setAllTagsInactive();
  renderTagArea();
  if (clickedViewID !== pageData.currentView) {
    toggleViewBtns([ourViewBtn, yourViewBtn]);
    pageData.currentView = clickedViewID;
  }
  renderRecipesOfInterest();
}

const setBaseData = () => {
  let baseData = getPageRecipes();
  if (searchBar.value) {
    searchForRecipes();
    baseData = pageData.recipesOfInterest;
  }

  return baseData;
}

const setupFilterData = (activeTags, baseData) => {
  if (activeTags.length) {
    return filterRecipesByTag(baseData, activeTags);
  } else {
    return copyItem(getPageRecipes());
  }
}

const displayTaggedRecipes = () => {
  const activeTags = pageData.allTags.filter(tag => tag.isActive).map(tag => tag.name);
  const baseData = setBaseData();
  const filteredRecipes = setupFilterData(activeTags, baseData);
  if (filteredRecipes.length) {
    pageData.recipesOfInterest = filteredRecipes;
    renderGrid(pageData.recipesOfInterest)
  } else {
    recipeGrid.innerHTML = `<p>Sorry, no recipes to display.</p>`
  }
}

const searchForRecipes = () => {
  const activeTags = pageData.allTags.filter(tag => tag.isActive).map(tag => tag.name);
  let searchedRecipes = searchRecipes(setupFilterData(activeTags, getPageRecipes()), pageData.allIngredients, searchBar.value);
  if(searchedRecipes) {
    if (searchedRecipes.length) {
      pageData.recipesOfInterest = searchedRecipes;
      renderGrid(searchedRecipes);
    } else {
      recipeGrid.innerHTML = `<p>Sorry, we couldn't find any recipes for your search of "${searchBar.value}"</p>`;
    }
  }
}

const returnHome = () => {
  searchBar.value = '';
  switchView(pageData.currentView);
}

const renderTagsAfterFetch = () => {
  const activeTags = pageData.allTags.filter(tag => tag.isActive)
  if(activeTags.length) {
    displayTaggedRecipes();
  } else if(pageData.currentView === 'your-recipes') {
    renderRecipesOfInterest();
  }
}

const updateRecipesFromGrid = (e) => {
  if (e.target.classList.contains('save-option')) {
    const recipeID = e.target.closest('.individual-recipe-container')?.querySelector('.individual-recipe').id;
    const recipe = findRecipe(pageData.allRecipes, recipeID);
    if (!checkSavedStatus(currentUser, recipeID)) {
      updateRecipesToCook(e, recipe, 'add');
    } else if (checkSavedStatus(currentUser, recipeID)) {
      updateRecipesToCook(e, recipe, 'remove');
    }
    renderTagsAfterFetch();
  } 
}

const updateRecipesFromModal = (e) => {
  const change = e.target.id
  const recipeID = pageData.currentRecipeCard.id;
  const recipe = findRecipe(pageData.allRecipes, recipeID);
  updateRecipesToCook(e, recipe, change);
  renderTagsAfterFetch();
}

const checkIfModalOpen = () => allRecipes.classList.contains('blur')

const toggleSavedButtons = (e, recipeID, user) => {
  if (checkIfModalOpen()) {
    const outerAdd = pageData.currentRecipeCard.outerAddBtn;
    const outerRemove = pageData.currentRecipeCard.outerAddBtn;
    updateSaveButtons(recipeID, outerAdd, outerRemove, user);
    updateSaveButtons(recipeID, modalAddBtn, modalRemoveBtn, user);
  } else {
    const addBtn = e.target.closest('.individual-recipe-container')?.querySelector('.add-panel');
    const removeBtn = e.target.closest('.individual-recipe-container')?.querySelector('.remove-panel');
    updateSaveButtons(recipeID, addBtn, removeBtn, user);
  }
}

const enableScrollPitchText = (pitchTextElement) => {
  pitchTextElement.classList.remove("pitch-text-scroll");
  void pitchTextElement.offsetWidth;
  pitchTextElement.classList.add("pitch-text-scroll");
}

const hideSpinner = () => {
  spinner.classList.add('hidden');
}

// Exports
export {
  renderGrid,
  hideSpinner,
  toggleTagData,
  pageLoadRenders,
  showRecipe,
  closeRecipe,
  switchView,
  searchForRecipes,
  returnHome,
  updateRecipesFromGrid,
  findRecipe,
  updateSaveButtons,
  updateRecipesFromModal,
  renderTagArea,
  renderActiveTag,
  displayTaggedRecipes,
  renderRecipesOfInterest,
  enableScrollPitchText,
  toggleSavedButtons,
  checkIfModalOpen
}
