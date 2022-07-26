class User {
  constructor(usersData) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry;
    this.recipesToCook = []
  }

  addRecipeToCook(recipe) {
    this.recipesToCook.push(recipe)
  }

  removeRecipeToCook(recipeToRemove) {
    this.recipesToCook.filter((recipe) => {
      if (recipe.id === recipeToRemove.id) {
        this.recipesToCook.splice(recipeToRemove, 1)
      }
    })
  }

  listRecipeToCookByTag(tag) {
    return this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
    }

  listRecipebyToCookName(name) {
    return this.recipesToCook.filter(recipe => recipe.name.includes(name));
    }
};

module.exports = User;
