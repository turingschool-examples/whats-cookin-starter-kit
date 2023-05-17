// Imports
import {recipeData} from './data/recipes'
import {recipeGrid} from './scripts'

// functions

const makeRecipeColumnData = (data) => {
  const mappedRecipe = data.map((recipe, index) => {
    return {
      column: index+1,
      id: recipe.id,
      image: recipe.image,
      name: recipe.name,
      tags: recipe.tags
    }
  });

  const leftColumn = mappedRecipe.filter(recipe => recipe.column % 3 === 1);
  const centreColumn = mappedRecipe.filter(recipe => recipe.column % 3 === 2);
  const rightColumn = mappedRecipe.filter(recipe => recipe.column % 3 === 0);
  return [leftColumn, centreColumn, rightColumn];
}

const createSingleRecipeHTML = singleRecipe => {
  let htmlCode = '';
  htmlCode += 
  `
  <article class="individual-recipe">
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

// Event listeners
window.addEventListener("load", renderGrid)

// Exports
export {
  renderGrid
}
