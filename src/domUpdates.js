import recipeData from '../src/data/recipes.js'
import { filterRecipeByTag } from '../src/tags';

//Here is an example function just to demonstrate one way you can export/import between the two js files. You'll want to delete this once you get your own code going.
const displayRecipes = () => {
  console.log(`Displaying recipes now`)
}

function filteredDomRecipes(recipeData) {
  const mainElement = document.getElementById('directory-page');
  mainElement.innerHTML = '';

  recipeData.forEach((recipe) => {
    const article = document.createElement('article');
    article.classList.add('recipe-card');

    const ingredientsList = recipe.ingredients.map((ingredients) => {
      return ingredients.name || `${ingredients.id}`
    }).join(', ');

    article.innerHTML = `
      <div class="recipe-image">
        <img src="${recipe.image}" alt="${recipe.name}">
      </div>
      <div class="recipe-info">
        <div class="tags-and-heart">
          <h3 class="recipe-tags">${recipe.tags.join(', ')}</h3>
          <svg
          class="heart"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style="
            fill: rgba(157, 150, 139, 1);
            transform: scaleX(-1);
            msfilter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
          "
        >
        </div>
        <h2 class="recipe-name">${recipe.name}</h2>
        <h3 class="recipe-ingredients">
        <span class="label"> ingredients </span>
        antipasti, starter, snack, appetizer, antipasto, hor d'oeuvre
      </h3>
      </div>
    `;

    mainElement.appendChild(article);
  });
};

// document.querySelector('.tags-container').addEventListener('click', function(event) {
//   const target = event.target;

//   if (target.classList.contains('tag')) {
//     target.classList.toggle('tag-active');

//     const activeTags = Array.from(this.querySelectorAll('.tag-active'))
//     .map((button) => button.textContent);

//     const filteredRecipes = filterRecipeByTag(activeTags);
    
//     filteredDomRecipes(filteredRecipes);
//   }
// });

document.querySelector('.tags-container').addEventListener('click', function(event) {
  const target = event.target;

  if (target.classList.contains('tag')) {
    target.classList.toggle('tag-active');

    const activeTags = Array.from(this.querySelectorAll('.tag-active'))
      .map((button) => button.dataset.tag);

    const filteredRecipes = filterRecipeByTag(activeTags);
    
    filteredDomRecipes(filteredRecipes);
  }
});


export {
  displayRecipes,
}