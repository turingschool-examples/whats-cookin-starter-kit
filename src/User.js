class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  };

  addFavoriteRecipe(id) {
    if (this.favoriteRecipes.includes(id) === false) {
        this.favoriteRecipes.push(id);  
    };
  };

  removeFavoriteRecipe(id) {
    let index = this.favoriteRecipes.indexOf(id);
    this.favoriteRecipes.splice(index, 1);
  };

  addRecipeToCook(id) {
    if (this.recipesToCook.includes(id) === false) {
        this.recipesToCook.push(id);       
    };
  };

  removeRecipeToCook(id) {
    let index = this.recipesToCook.indexOf(id);
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