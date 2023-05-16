//NOTE: Your DOM manipulation will occur in this file
import {recipeData} from './recipes'

const recipeGrid = document.querySelector('.recipe-grid')

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
function exampleFunction1(person) {
  console.log(`oh hi there ${person}`)
}

function exampleFunction2(person) {
  console.log(`bye now ${person}`)
}

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
  <div class="individual-recipe">
      <div class="recipe-image">
        <img src="${singleRecipe.image}">
        <div class="hover-card"> 
          <h3>Read more...</h3>
        </div>               
      </div>
    <h2>${singleRecipe.name}</h2>
  </div>
  `;
}

const createColumnHTML = column => {
  let htmlCode = '';
  htmlCode += '<div class = col>'
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
  recipeGrid.innerHTML += createGridHTML();
}

export {
  exampleFunction1,
  exampleFunction2,
}