class User {
  constructor({name, id, pantry}) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.recipesToCook = [];
    this.favoriteRecipes = [];
  }

  addFavoriteRecipes(recipe) {
    //add to / remove from the user's favoriteRecipes (an array)
    this.favoriteRecipes.push(recipe);
  }

  removeFavoriteRecipes(recipe) {
    let removeRecipe = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(removeRecipe, 1);
    //possibly use indexOf to return an array that doesn't include recipe
    //The indexOf() method returns the first index at which a given element can be found in the array
    //This method returns -1 if the value to search for never occurs.
    //Identifying using indexOf()
    //Returns the removed items---the removedRecipe and how many as arguments

  }

  addRecipeToCook(recipe) {
    this.recipesToCook.push(recipe)
  }

  searchFavoriteRecipes() {
    // This function is used for the search functionality--being able to search through the recipes that exist
    //Loop(using something besides a for loop) through our favoriteRecipes array to see if the input (which will be the parameter) includes recipe info
    //If so push into the searchRecipes array and return it
    //Uses showInputFinder function to accomplish this
  }

  // showInputFinder() {
  //   var searchBarInput = searchbar.value;
  //   var foundRecipes = searchFavoriteRecipes(searchBarInput);
  //   updatePageHtml(foundRecipes);

    //DOM manipulation for later down the road
}


module.exports = User;
