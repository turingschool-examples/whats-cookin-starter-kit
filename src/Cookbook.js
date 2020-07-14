class Cookbook {
  constructor(recipeData, ingredientsData) {
    this.allRecipes = recipeData;
    this.allIngredients = ingredientsData;
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
    const inputtedItemID = (this.allIngredients.find(ingredient => ingredient.name.includes(item))).id;
		return this.allRecipes.reduce((foundRecipes, recipe) => {
			recipe.ingredients.filter(ingredient => {
				if (ingredient.id === inputtedItemID) {
          foundRecipes.push(recipe);
				}});
			return foundRecipes;
    }, []);
  };
};

if (typeof module !== 'undefined') {
  module.exports = Cookbook;
};