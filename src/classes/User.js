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

  listRecipeToCookByTag(tags) {
    const toUpper = tags.toUpperCase();
    const filterRecipeByTag = this.recipesToCook.filter(recipe => {
      let tagToUpper;
      let capTags = []
      recipe.tags.forEach(tag => {
        tagToUpper = tag.toUpperCase();
        capTags.push(tagToUpper)
      })
      if (capTags.includes(toUpper)) {
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
