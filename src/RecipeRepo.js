// const Recipe = require('./Recipe');
// const User = require('./User');

class RecipeRepo {
  constructor(recipeData, userData, ingredientsData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe, ingredientsData));
    this.user = new User(userData, ingredientsData);
  }

  matchTags(tags) {
    return tags.reduce((acc, tag) => {
      acc.push(...(this.recipes.filter(recipe => recipe.tags.includes(tag))));
      return acc;
    }, []);
  }
    
    
  matchIngredient(ingredientId) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        console.log(ingredient.id === ingredientId);
        return ingredient.id === ingredientId
      });
    })
  }
      
  matchName(name) {
    return this.recipes.filter(recipe => recipe.name.includes(name));
  }
}
    

// module.exports = RecipeRepo;
//userData.sort((a, b) => 0.5 - Math.random())[0];
