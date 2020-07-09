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
  }
};

module.exports = Cookbook;