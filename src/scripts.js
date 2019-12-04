//add event listener on recipe button
//when clicked, reassign pantry.selectedRecipe to recipe that was clicked.


//appending in the iterator
// ** make recipe cards generate in random order on each load **
const instantiateRecipeCards = () => {
  recipeData.forEach(recipe => {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin',`
    <div class="recipe-container">
      <div class="image-container">
         <img src="https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg" class="image-container">
       </div>
       <div class="recipe-text">
         <h2>${recipe.name}</h2>
       </div>
       <div class="card-button-containter">
         <button type="button" class="card-buttons view-recipe">View Recipe</button>
         <button type="button" class="card-buttons add-to-menu">Add to Menu</button>
         <button type="button" class="card-buttons add-to-favorites">Add to Favorites</button>
       </div>
     </div>`);
  })
}

instantiateRecipeCards();
