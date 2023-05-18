// Imports
import {recipeData} from './data/recipes'
import {recipeGrid, clickedRecipe, tagArea, getRecipeCard} from './scripts'
let currentRecipeCard = require('./scripts');

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
  <article class="individual-recipe" id="${singleRecipe.id}">
      <div class="recipe-image-div">
        <img class="recipe-image"src="${singleRecipe.image}">
        <div class="hover-card"> 
          <h3>Read more...</h3>
        </div>               
      </div>
    <h2>${singleRecipe.name}</h2>
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

const renderGrid = () => {
  const gridData = makeRecipeColumnData(recipeData)
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
  renderGrid();
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

const addScrollBar = (recipe, element) => {
  if (recipe.instructions.length > 1) {
    document.querySelector(element).classList.add('scrollbar')
  }
}

const populateInstructions = (recipe) => {
  const instructions = getInstructionHTML(recipe)
  const instructionSection= document.querySelector('#recipeInstructions')
  instructionSection.innerHTML = `<p>Method</p>
                                  <section class='instruction-steps'> 
                                    ${instructions.join('')} 
                                  </section>`
  addScrollBar(recipe, '.instruction-steps')
}

const updateCurrentRecipe = recipeCard => {
  const recipeCardId = recipeCard.closest("article").id;
  const thisRecipe = recipeData.find(recipe => recipe.id.toString() === recipeCardId);
  currentRecipeCard = getRecipeCard(thisRecipe);
}

const openRecipeCard = () => {
  clickedRecipe.classList.toggle("hidden");
  clickedRecipe.classList.toggle("flex");
  clickedRecipe.classList.toggle("fade-in");
}

const showRecipe = (recipeCard) => {
  updateCurrentRecipe(recipeCard);
  populateInstructions(currentRecipeCard);
  openRecipeCard();
};


const closeRecipe = () => {
  clickedRecipe.classList.add("hidden");
  clickedRecipe.classList.remove("flex");
  clickedRecipe.classList.remove("fade-in");
};

// Exports
export {
  renderGrid,
  makeTagActive,
  pageLoadRenders,
  showRecipe,
  closeRecipe
}
