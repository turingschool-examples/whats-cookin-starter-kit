// Imports
import { pageData, currentUser, patchHits } from './apiCalls';
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
  body,
  nav,
  graphPanel,
  leftArrow,
  rightArrow
} from './scripts'
import { searchRecipes, findRecipe, checkSavedStatus, filterRecipesByTag, filterTagsByTagName  } from './recipes';
import { updateRecipesToCook } from './users';
import { makeRecipeClickChart } from './clickChart';
import { copyItem, toggleViewBtns } from './helper-functions';

// functions

const makeRecipeColumnData = (data) => {
  const mappedRecipe = data.map((recipe, index) => {
    let thisPitch = "Click to read more...";
    if (recipe.pitch) {
      thisPitch = `${recipe.pitch} ${thisPitch}`;
    }
    let columns = 3; 
    if(window.innerWidth < 1000) {
      columns = 1; 
    } else if (window.innerWidth < 1300) {
      columns = 2;
    } 

    return {
      column: (index+1) % columns,
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
      <h3 class="save-option"> Add to recipes to cook</h4>
    </section>
    <section class="remove-panel panel save-option ${removeStatus}">
      <div class="minus-symbol symbol save-option">-</div>
      <h3 class="save-option"> Remove from recipes to cook</h4>
    </section>
    <article tabindex="0" class="individual-recipe" id="${singleRecipe.id}">
      <p class="grid-feedback"> Saved! </p>
      <div class="recipe-image-div">
        <img class="recipe-image"src="${singleRecipe.image}" alt="${singleRecipe.name}">
        <div class="hover-card">
          <h3>${singleRecipe.pitch}</h3>
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

const updateIngredientLayout = () => {
  if(window.innerWidth < 1000) {
    addScrollBar('.ingredients-list')
  } else {
    ingredientsList.classList.remove('scrollbar')
  }
}

const renderGrid = (data) => {
  const gridData = makeRecipeColumnData(data);
  recipeGrid.innerHTML = '';
  recipeGrid.innerHTML = createGridHTML(gridData);
  updateIngredientLayout();
}

const createModalTagHTML = tag => {
  return `
    <section class="tag-card" id="${tag.name}">
        <div class="tag-image-bg active-bg">
            <img class="tag-image" src="${tag.path}" alt="${tag.name}">
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
    <section tabindex="0" class="tag-card" id="${tag.name}">
        <div class="${bgClass}">
            <img class="tag-image" src="${tag.path}" alt="${tag.name}">
        </div>
        <p class="tag-text">${tag.name}</p>
    </section>
  `;
  return htmlCode;
}

const renderTagArea = () => {
  let htmlCode = '';
  pageData.allTags.forEach(tag => {
    htmlCode += createTagCardHTML(tag)
  })
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
  [leftArrow, rightArrow].forEach(arrow => arrow.classList.remove('hidden'))
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
    <p class="instructions-header">Directions</p>
    <section tabindex="0" class='instruction-steps'>
      ${instructions.join('')}
    </section>
  `;
  addScrollBar('.instruction-steps');
}

const updateCurrentRecipe = recipeCard => {
  const recipeCardID = recipeCard?.closest("article")?.id;
  const thisRecipe = findRecipe(pageData.allRecipes, recipeCardID);
  pageData.currentRecipeCard = getRecipeCard(thisRecipe);
  pageData.currentRecipeCard.outerAddBtn = recipeCard?.closest('.individual-recipe-container').querySelector('.add-panel');
  pageData.currentRecipeCard.outerRemoveBtn = recipeCard?.closest('.individual-recipe-container').querySelector('.remove-panel');
}

const showGridFeedback = (recipeID, feedback) => {
  const recipe = document.getElementById(recipeID);
  if (recipe) {
    const gridFeedback = recipe.querySelector('.grid-feedback');
    gridFeedback.innerText = feedback;
    gridFeedback.classList.add('show-feedback');
    setTimeout(() => {gridFeedback.classList.remove('show-feedback')}, 751);
  }
}


const showModalFeedback = (feedback) => {
  let modalFeedback = document.querySelector('.modal-feedback');
  if (modalFeedback) {
    modalFeedback.innerText = feedback
    modalFeedback.classList.add('show-feedback');
    setTimeout(() => {modalFeedback.classList.remove('show-feedback')}, 751)
  }
}

const showFeedback = (user, recipeID) => {
    let view;
    let feedback; 
    
    if (checkSavedStatus(user, recipeID)) {
      feedback = "Saved"
    } else {
      feedback = "Removed"
    }
    
    const feedbacks = {
      modal: () => showModalFeedback(feedback),
      grid: () => showGridFeedback(recipeID, feedback)
    }
  
    if (checkIfModalOpen()) {
      view = "modal";
    } else {
      view = "grid";
    }

    feedbacks[view]();
}

const updateSaveButtons = (recipeID, addButton, removeButton, user) => {
 
  if(checkSavedStatus(user, recipeID)){
    addButton.classList.add('hidden');
    removeButton.classList.remove('hidden');
  } else {
    addButton.classList.remove('hidden');
    removeButton.classList.add('hidden');
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
      <img src="${currentRecipe.image}" alt="${currentRecipe.name}"></img>
    </div>
  `
}

const showRecipe = (recipeCard) => {
  updateCurrentRecipe(recipeCard);
  populateRecipeHeader(pageData.currentRecipeCard);
  populateInstructions(pageData.currentRecipeCard);
  populateIngredients(pageData.currentRecipeCard);
  updateSaveButtons(pageData.currentRecipeCard.id, modalAddBtn, modalRemoveBtn, currentUser);
  openInfoPanel(recipeCard);
  patchHits(pageData.currentRecipeCard)
};

const openInfoPanel = (infoType) => {
  let thisPanel;
  if (infoType.id === 'graphButton') {
    thisPanel = graphPanel;
    thisPanel.classList.toggle('hidden');
    makeRecipeClickChart();
    document.querySelector('#closeGraphBtn').focus()
  } else {
    thisPanel = clickedRecipe;
    thisPanel.classList.toggle('hidden');
    thisPanel.querySelectorAll('.modal-recipe-btn').forEach(btn => {
      if(!btn.classList.contains('hidden')) {
        btn.focus()
      }
    })
  }
  thisPanel.classList.toggle("flex");
  thisPanel.classList.toggle("fade-in");
  allRecipes.classList.add('blur');
  nav.classList.add('blur', 'no-click');
  body.classList.add('no-scroll');
}

const closePanel = (e) => {
  const thisInfoPanel = e.target.closest('.info-panel');
  allRecipes.classList.remove('blur')
  nav.classList.remove('blur', 'no-click');
  body.classList.remove('no-scroll')
  thisInfoPanel.classList.toggle("hidden");
  thisInfoPanel.classList.toggle("flex");
  thisInfoPanel.classList.toggle("fade-in");
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

const resetSearch = () => {
  searchBar.value = '';
  switchView(pageData.currentView);
}

const renderTagsAfterFetch = () => {
  const activeTags = pageData.allTags.filter(tag => tag.isActive);
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
  } 
}

const updateRecipesFromModal = (e) => {
  const change = e.target.id
  const recipeID = pageData.currentRecipeCard.id;
  const recipe = findRecipe(pageData.allRecipes, recipeID);
  updateRecipesToCook(e, recipe, change);
}

const checkIfModalOpen = () => allRecipes.classList.contains('blur')

const showError = (recipeID) => {
  if (checkIfModalOpen()){
    showModalFeedback("Something went wrong")
  } else {
    showGridFeedback(recipeID, "Something went wrong")
  }
}

const toggleSavedButtons = (e, recipeID, user) => {
  if (checkIfModalOpen()) {
    const outerAdd = pageData.currentRecipeCard.outerAddBtn;
    const outerRemove = pageData.currentRecipeCard.outerRemoveBtn;
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
  closePanel,
  switchView,
  searchForRecipes,
  resetSearch,
  updateRecipesFromGrid,
  findRecipe,
  updateSaveButtons,
  updateRecipesFromModal,
  renderTagArea,
  renderActiveTag,
  renderTagsAfterFetch,
  displayTaggedRecipes,
  renderRecipesOfInterest,
  enableScrollPitchText,
  openInfoPanel,
  toggleSavedButtons,
  checkIfModalOpen,
  showError,
  showFeedback
}
