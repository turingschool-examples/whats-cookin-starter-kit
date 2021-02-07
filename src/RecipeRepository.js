const Recipe = require("./Recipe")

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe))
  }

  filterByTag(search) {
    return this.findByWord(search, "tags");
  };

  filterByName(search) {
    const keyWords = search.split(' ');
    const matchingRecipes = [];
    keyWords.forEach(word => {
      this.recipes.filter(recipe => {
        const keys = recipe.name
        if(keys.includes(word) && !matchingRecipes.includes(recipe)) {
           matchingRecipes.push(recipe);
        };
      });
    });
    return matchingRecipes
  }

  findByWord(search, key) {
    const keyWords = search.split(' ');
    const matchingRecipes = [];
    keyWords.forEach(word => {
      this.recipes.filter(recipe => {
        if(this.changeToString(recipe, key).includes(word) && !matchingRecipes.includes(recipe)) {
           matchingRecipes.push(recipe);
        };
      });
    });
    return matchingRecipes
  };

  filterByIngredient(search, ingredientsArray) {
    const keyWords = search.split(' ');
    const matchingRecipes = [];
    keyWords.forEach(word => {
      this.recipes.filter(recipe => {
        const keys = recipe.findIngredientNames(ingredientsArray).join(' ')
        if(keys.includes(word) && !matchingRecipes.includes(recipe)) {
           matchingRecipes.push(recipe);
        };
      });
    });
    return matchingRecipes
  }

  changeToString(element, key) {
    if(typeof element[key] !== "string"){
          return element[key].join(' ')
        } else {
          return element[key]
        }
  }
};

module.exports = RecipeRepository