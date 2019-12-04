//add event listener on recipe button
//when clicked, reassign pantry.selectedRecipe to recipe that was clicked.

let recipe = document.querySelector('.recipe-container');

recipe.addEventListener('click', pantry.moveToSelectedRecipes)

