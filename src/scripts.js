const recipeCardsSection = document.querySelector('.recipe-cards')

window.onload = setUpHomePage; 

function instantiateRecipes(recipeData) {
  return recipeData.map(recipe => new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags)); 
}

function setUpHomePage() {
  let recipes = instantiateRecipes(recipeData); 
  console.log(recipes);
  displayRecipes(recipes);
}

//iterate over instantiated recipes (recipes variable), adding HTML to the recipeCardsSection for each, using interpolation for the values 
function displayRecipes(recipes) {
  recipes.forEach((recipe, index) => {
    recipeCardsSection.insertAdjacentHTML('beforeend', `
      <article class="recipe-card" id="card${index}">
    <div class="recipe-img" style="background-image: url(${recipe.image})">
      <div class="heart-icon">
        <img src="assets/heart.png">
      </div>
      <div class="cook-icon">
        <img src="assets/recipe-book.png">
      </div>
    </div>
    <div class="recipe-name">
      <h5>${recipe.name}</h5>
    </div>
  </article>
    `)
  })
}









//function below needed to convert ingredient search term to an id so can then use recipe class to check if recipe ingredients have that id ;maybe move to recipe class 
// const convertSearchTermToId = searchTerm => {
//   ingredientsData.forEach(ingredient => {
//     if (ingredient.name === searchTerm) {
//       return ingredient.id;
//     } 
//   });
// }
