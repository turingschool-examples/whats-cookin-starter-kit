const matchRecipe = (id, recipeData) => {
    return recipeData.find((recipe) => {
       return recipe.id === parseInt(id);
     });
};

const recipesToCook = (eventId, currentUser, recipeData) => {
  currentUser.recipesToCook.push(matchRecipe(eventId, recipeData));
}

const removeRecipes = (eventId, currentUser) => {
  const index = currentUser.recipesToCook.indexOf(eventId)
    currentUser.recipesToCook.splice(index, 1);
}

export { recipesToCook, removeRecipes }
// on page load we need to select a random user then push whatever
//recipes they choose into their array
//add event listener to the bookmark and then grab id
//then push it into the userrecipes array 
//event.target.classList.contains('bookmark-icon')
//grab event.target of the recipe match that recipe id
//just push id's into users recipestocook array
//create a separate function that will match recipe id to the recipe data