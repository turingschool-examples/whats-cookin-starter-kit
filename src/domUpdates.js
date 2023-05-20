// Imports
import { pageData, currentUser } from './apiCalls';
import {recipeData} from './data/recipes'
import { ingredientsData } from './data/ingredients';
import {
  recipeGrid, 
  clickedRecipe, 
  tagArea, 
  getRecipeCard,
  landingPage,
  ingredientsList,
  searchBar,
  ourViewBtn,
  yourViewBtn,
} from './scripts'
import { searchRecipes } from './recipes';

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
  htmlCode += 
  `
  <article class="individual-recipe-container">
    <section class="add-panel">
      <div class="plus-symbol">+</div>
      <h4> Add to recipes to cook</h4>
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

const renderTagArea = () => {
  const tagData = getTagsFromRecipes(recipeData);
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

const pageLoadRenders = () => {
  renderGrid(recipeData);
  renderTagArea();
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

const updateCurrentRecipe = recipeCard => {
  const recipeCardID = recipeCard.closest("article")?.id;
  const thisRecipe = recipeData.find(recipe => recipe.id.toString() === recipeCardID);
  pageData.currentRecipeCard = getRecipeCard(thisRecipe);
}

const populateRecipeName = currentRecipe => {
  document.querySelector('#recipeName').innerHTML = `  <h1>${currentRecipe.name}</h1>  `
}

const populateAddBtn = () => {
  // const recipeSaved = user.recipesToCook.some(recipe => recipe.id === currentRecipe.id);
  // let buttonText;
  // let buttonStatus;
  // if (!recipeSaved) { 
  //   buttonText = "Add to Save to Cook Recipes";
  //   buttonStatus = "add-recipe modal-recipe-btn";
  // } else {
  //   buttonText = "Remove from Save to Cook Recipes";
  //   buttonStatus = "remove-recipe modal-recipe-btn";
  // };
//saving to use once currentUser is accessible
  const buttonStatus = "add-recipe modal-recipe-btn";
  const buttonText = "Add to Saved Recipes";
  document.querySelector('.modal-add-recipe').innerHTML = 
  `
  <div class= "${buttonStatus}">
    <h4>${buttonText}</h4>
  </div>
  `;
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
  landingPage.classList.add('blur')
  clickedRecipe.classList.toggle("hidden");
  clickedRecipe.classList.toggle("flex");
  clickedRecipe.classList.toggle("fade-in");
}

const showRecipe = (recipeCard, currentUser) => {
  updateCurrentRecipe(recipeCard);
  populateRecipeHeader(pageData.currentRecipeCard);
  populateInstructions(pageData.currentRecipeCard);
  populateIngredients(pageData.currentRecipeCard);
  populateAddBtn(pageData.currentRecipeCard);
  openRecipeCard();
};


const closeRecipe = () => {
  landingPage.classList.remove('blur')
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
    // allUserRecipes.classList.add("hidden");
    recipeGrid.classList.remove("hidden");
    ourViewBtn.classList.add("selected-view");
    yourViewBtn.classList.remove("selected-view");
    yourViewBtn.classList.add("unselected-view");  
    ourViewBtn.classList.remove("unselected-view");
  } else {
    // allUserRecipes.classList.remove("hidden");
    recipeGrid.classList.add("hidden");
    ourViewBtn.classList.remove("selected-view");
    yourViewBtn.classList.add("selected-view");
    yourViewBtn.classList.remove("unselected-view");  
    ourViewBtn.classList.add("unselected-view");
  }
}

const searchForRecipes = () => {
  const data = {
    ourRecipes: recipeData,
    yourRecipes: currentUser.recipesToCook
  }
  let searchedRecipes = searchRecipes(data[pageData.currentView], ingredientsData, searchBar.value)
  if(searchedRecipes) {
    searchedRecipes.length  
    ? renderGrid(searchedRecipes)
    : recipeGrid.innerHTML = `<p>Sorry, we couldn't find any recipes for your search of "${searchBar.value}"</p>`
  }
}

// Exports
export {
  renderGrid,
  makeTagActive,
  pageLoadRenders,
  showRecipe,
  closeRecipe,
  switchView,
  searchForRecipes
}
