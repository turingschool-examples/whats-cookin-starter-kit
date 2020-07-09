const ingredientsData = require('../data/ingredients');

class User {
  constructor({name, id, pantry}) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.recipesToCook = [];
    this.favoriteRecipes = [];
  }

  addFavoriteRecipes(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFavoriteRecipes(recipe) {
    let removeRecipe = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(removeRecipe, 1);
  }

  // Filter my favoriteRecipes or recipesToCook by type

  filterFavoriteRecipes(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag)
    })
  }

  filterRecipesToCook(tag) {
    return this.recipesToCook.filter(recipe => {
      return recipe.tags.includes(tag)
    })
  }

  addRecipeToCook(recipe) {
    this.recipesToCook.push(recipe)
  }

  searchRecipes(input) {
    let allRecipes = this.favoriteRecipes.concat(this.recipesToCook);
    let searchedRecipes = allRecipes.filter(recipe => {
      if (recipe.name.includes(input)) {
        return true;
      };
      // if (recipe.ingredients.includes(input)) {
      //   return true;
      // }
    });
    return searchedRecipes;
  }
}

//in USer class first find all ingredients from the ingredient data where the name matches the string
//find all recipes where the id is in the ingredients list


    // Search any of my saved recipes by name or ingredient
    // This function is used for the search functionality--being able to search through the recipes that exist
    //Loop(using something besides a for loop) through our favoriteRecipes array to see if the input (which will be the parameter) includes recipe info
    //If so push into the searchRecipes array and return it
    //Uses showInputFinder function to accomplish this
    //make sure that what you are passing through a string



  // showInputFinder() {
  //   var input = searchbar.value;
  //   var foundRecipes = searchFavoriteRecipes(searchBarInput);
  //   updatePageHtml(foundRecipes);

    //DOM manipulation for later down the road



if (typeof module !== 'undefined') {
  module.exports = User;
}
