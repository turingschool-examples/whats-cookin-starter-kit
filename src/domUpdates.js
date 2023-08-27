const recipeArea = document.querySelector('.recipe-area');

const createRecipeCards = recipes => {
  recipeArea.innerHTML = '';
  recipes.forEach(recipe => {
    let recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.setAttribute('id', recipe.id);
    let recipeTitle = document.createElement('h2');
    recipeTitle.classList.add('recipe-title');
    recipeCard.appendChild(recipeTitle);
    recipeTitle.innerText = recipe.name;
    let recipeImage = document.createElement('img');
    recipeImage.classList.add('recipe-image');
    recipeImage.setAttribute('src', recipe.image);
    recipeCard.appendChild(recipeImage);
    recipeArea.appendChild(recipeCard);
  });
};

export { createRecipeCards };
