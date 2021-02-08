const Recipe = require("./Recipe")

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe))
  }

  filterByTag(search) {
    return this.findByWord(search, "tags");
  };

  filterByName(search) {
    return this.findByWord(search, 'name');
  }

  findByWord(search, key) {
    const keyWords = search.split(' ');
    //split the search into an array so we can iterate over each individual name.
    const matchingRecipes = [];
    // matching recipes go here
    keyWords.forEach(word => {
      //iterate over search words
      this.recipes.filter(recipe => {
        //check each recipe for specific word. using to string allows for just one 
        //word to trigger true, eg. searching cheese will trigger a recipe that 
        //contains cheddar cheese. 
        if(recipe[key].toString().includes(word)) {
           matchingRecipes.push(recipe);
        };
      });
    });
    return Array.from(new Set(matchingRecipes))
    //new array that removes duplicates.
  };

  filterByIngredient(search, ingredientsArray) {
    const keyWords = search.split(' ');
    const matchingRecipes = [];
    keyWords.forEach(word => {
      this.recipes.filter(recipe => {
        const keys = recipe.findIngredientNames(ingredientsArray).join(' ')
        if(keys.includes(word)) {
           matchingRecipes.push(recipe);
        };
      });
    });
    return Array.from(new Set(matchingRecipes))
  }
};

module.exports = RecipeRepository