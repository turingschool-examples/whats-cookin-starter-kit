import { filterRecipeByTag, getAvailableTags } from '../src/tags';
import recipeData from './data/recipes';

//Here is an example function just to demonstrate one way you can export/import between the two js files. You'll want to delete this once you get your own code going.
const displayRecipes = () => {
  console.log(`Displaying recipes now`)
}

const setRecipe = (recipe) => {
  const titleElement = document.querySelector('.recipe-title h1');
  const imageElement = document.querySelector('.recipe-title .image-container img');
  const instructionsElement = document.querySelector('.instructions ol');
  const ingredientsElement = document.querySelector('.ingredients ul');


  titleElement.textContent = recipe.name; 
  imageElement.src = recipe.image; 
  imageElement.alt = recipe.name; 

  instructionsElement.innerHTML = '';
  ingredientsElement.innerHTML = '';

  recipe.instructions.forEach((instruction) => {
    const instructionItem = document.createElement('li');
    instructionItem.textContent = `${instruction}`; 
    instructionsElement.appendChild(instructionItem);
  });


  recipe.ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement('li');

    const ingredientName = document.createElement('div');
    ingredientName.className = 'ingredient-name';
    ingredientName.textContent = ingredient.name;

    const ingredientAmount = document.createElement('div');
    ingredientAmount.className = 'ingredient-amount';
    ingredientAmount.textContent = `${ingredient.quantity.amount} ${ingredient.quantity.unit}`; // Assuming `ingredient.quantity` contains `amount` and `unit`

    ingredientItem.appendChild(ingredientName);
    ingredientItem.appendChild(ingredientAmount);

    ingredientsElement.appendChild(ingredientItem);
  });
};

document.getElementById('directory-page').addEventListener('click', (event) => {
  const recipeCard = event.target.closest('.recipe-card');

  if (recipeCard) {
    const recipeId = recipeCard.getAttribute('data-id');
    console.log('Recipe ID:', recipeId);
        const recipe = getRecipeById(recipeId);
    
    if (recipe) {
      setRecipe(recipe);
    }
  }
});


function getRecipeById(recipeId) {
  const id = recipeId;
  return recipeData.find((recipe) => recipe.id === id);
}

const filteredDomRecipes = (recipeData) => {
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

const updateTagsToDOM = () => {
  const currentlyDisplayedRecipes = [];
  const recipeTags = getAvailableTags(currentlyDisplayedRecipes);
  const tagsContainer = document.querySelector('.tags-container');

  Object.keys(recipeTags).forEach((tag) => {
    const button = document.createElement('button');
    button.className = 'tag';
    button.dataset.tag = tag;
    button.textContent = `${tag} (${recipeTags[tag]})`;
    tagsContainer.appendChild(button);
  })
}

updateTagsToDOM()

export {
  displayRecipes,
}