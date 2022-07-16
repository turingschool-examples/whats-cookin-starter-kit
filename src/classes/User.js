class User {
  constructor(userData = {}) {
    this.id = userData.id;
    this.name = userData.name;
    this.pantry = userData.pantry || [];
    this.recipesToCook = [];
  }

  addRecipeToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    }
  }

  removeRecipeToCook(recipe) {
    let indexOfRecipeToRemove = this.recipesToCook.indexOf(recipe);
    if (indexOfRecipeToRemove < 0) {
      return `There are no recipes to remove!`;
    }
    this.recipesToCook.splice(indexOfRecipeToRemove, 1);
    return this.recipesToCook;
  }
  filterRecipesByTag(tag) {
    let filteredRecipesByTag = this.recipesToCook.filter((recipe) => {
      if (recipe.tags.includes(tag)) {
        return true;
      }
    });
    return filteredRecipesByTag;
  }
  filterRecipesByName(recipeName) {
    let filteredRecipesByName = this.recipesToCook.filter((recipe) => {
      let lowerCaseRecipeName = recipe.name.toLowerCase();
      let lowerCaseInput = recipeName.toLowerCase();
      if (lowerCaseRecipeName.includes(lowerCaseInput)) {
        return true;
      }
    });
    return filteredRecipesByName;
  }

  filterByMultipleTags(keywords) {
    let filtered = this.recipesToCook.filter((recipe) => {
      let containsOr = false
      if (
        keywords.some((keyword) => {
          return recipe.tags.includes(keyword);
        })
      ) {
        containsOr = true;
      }
      return containsOr;
    });
    return filtered;
  }
}

export default User;
