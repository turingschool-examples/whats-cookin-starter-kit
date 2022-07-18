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
    const filterRecipeByTag = this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
      return filterRecipeByTag;
    }

  listRecipebyToCookName(name) {
    const filterRecipeByName = this.recipesToCook.filter(recipe => recipe.name.includes(name));
      return filterRecipeByName;
    }
};

module.exports = User;
