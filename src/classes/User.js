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
    const filterRecipeByTag = this.recipesToCook.filter(recipe => {
      const toUpper = tag.toUpperCase();
      let tagToUpper;
      recipe.tags.forEach(tag => {
        tagToUpper = tag.toUpperCase();
      })
      if (toUpper === tagToUpper) {
        return true;
        }
      });
      return filterRecipeByTag;
    }
      
  listRecipebyToCookName(name) {
    const filterRecipeByName = this.recipesToCook.filter(recipe => {
      const toUpper = name.toUpperCase();
      const nameToUpper = recipe.name.toUpperCase();
        if (toUpper === nameToUpper) {
          return true;
        }
    });
    return filterRecipeByName;
  }
};

module.exports = User;
