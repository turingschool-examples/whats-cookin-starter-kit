class User {
  constructor(userData = {}) {
    this.id = userData.id;
    this.name = userData.name;
    this.pantry = userData.pantry || [];
    this.recipesToCook = [];
    this.selectedInput = [];
    this.filteredResults = [];
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
  // filterRecipesByTag(tag) {
  //   let filteredRecipesByTag = this.recipesToCook.filter((recipe) => {
  //     if (recipe.tags.includes(tag)) {
  //       return true;
  //     }
  //   });
  //   return filteredRecipesByTag;
  // }
  addInputToSearch(keyword) {
    let lowerCaseInput = keyword.toLowerCase();
    if (!this.selectedInput.includes(lowerCaseInput)) {
      this.selectedInput.push(lowerCaseInput);
    }
    
  }

  filterByMultipleTags() {
    this.filteredResults = this.recipesToCook.filter((recipe) => {
      let containsOr = false;
      if (
        this.selectedInput.some((keyword) => {
          return recipe.tags.includes(keyword);
        })
      ) {
        containsOr = true;
      }
      return containsOr;
    });
    return this.filteredResults;
  }

  // filterRecipesByName(recipeName) {
  //   let filteredRecipesByName = this.recipesToCook.filter((recipe) => {
  //     let lowerCaseRecipeName = recipe.name.toLowerCase();
  //     let lowerCaseInput = recipeName.toLowerCase();
  //     if (lowerCaseRecipeName.includes(lowerCaseInput)) {
  //       return true;
  //     }
  //   });
  //   return filteredRecipesByName;
  // }
  filterByMultipleRecipeNames() {
   
    this.filteredResults = this.recipesToCook.filter((recipe) => {
     
      let lowerCaseRecipeName = recipe.name.toLowerCase();
      let containsOr = false;
      if (
        this.selectedInput.some((keyword) => {
          return lowerCaseRecipeName.includes(keyword);
        })
      ) {
        containsOr = true;
      }
      return containsOr;
    });
    return this.filteredResults;
  }

  clearImmediate() {
    this.selectedInput = [];
    this.filteredResults = [];
  }
}



export default User;
