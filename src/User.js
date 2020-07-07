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
		const foundRecipes = this.favoriteRecipes.filter(recipe => {
			return recipe.tags[0] === tag;
		});
		return foundRecipes.map(recipe => {
			return recipe.id;
		});
	};

};

module.exports = User;