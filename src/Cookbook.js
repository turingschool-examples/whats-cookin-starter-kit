const ingredientInfo = require('../data/ingredients').ingredientsData;

class Cookbook {
  constructor(allRecipes) {
    this.allRecipes = allRecipes;
  };

  filterAllRecipesByTag(tag) {
    return this.allRecipes.reduce((foundRecipes, recipe) => {
			if (recipe.tags.includes(tag)) {
				foundRecipes.push(recipe);
			};
			return foundRecipes;
		}, []);
  };

  filterAllRecipesByIngredient(item) {
    const inputtedItemID = (ingredientInfo.find(ingredient => ingredient.name.includes(item))).id;
		return this.allRecipes.reduce((foundRecipes, recipe) => {
			recipe.ingredients.filter(ingredient => {
				if (ingredient.id === inputtedItemID) {
          foundRecipes.push(recipe);
				}});
			return foundRecipes;
    }, []);
  };
};

module.exports = Cookbook;