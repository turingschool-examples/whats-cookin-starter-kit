class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  };

  addFavoriteRecipe(recipe) {
    if (this.favoriteRecipes.includes(recipe) === false) {
        this.favoriteRecipes.push(recipe);  
    };
  };

  removeFavoriteRecipe(recipe) {
    let index = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(index, 1);
  };

  addRecipeToCook(recipe) {
    if (this.recipesToCook.includes(recipe) === false) {
        this.recipesToCook.push(recipe);       
    };
  };

  removeRecipeToCook(recipe) {
    let index = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(index, 1); 
	};

	filterFavoriteRecipeByTag(tag) {
		return this.favoriteRecipes.reduce((foundRecipes, recipe) => {
			if (recipe.tags.includes(tag)) {
				foundRecipes.push(recipe.id);
			};
			return foundRecipes;
		}, []);
	};

	filterRecipeToCookByTag(tag) {
		return this.recipesToCook.reduce((foundRecipes, recipe) => {
			if (recipe.tags.includes(tag)) {
				foundRecipes.push(recipe.id);
			};
			return foundRecipes;
		}, []); 
	};

};

module.exports = User;