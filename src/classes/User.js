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

  lowerCaseIngredients() {
    this.recipesToCook.forEach((recipe) => {
      recipe.portions = recipe.portions.reduce((newPortions, portion) => {
        newPortions.push({
          ingredientId: portion.ingredientId,
          name: portion.name.toLowerCase(),
          amount: portion.amount,
          cost: portion.cost,
          unit: portion.unit,
        });
        return newPortions;
      }, []);
    });
  }

  //  lowerCaseIngredients() {
  //     this.recipesToCook.portions = this.recipesToCook.portions.reduce((newPortions, recipe) => {
  //       newPortions.push({
  //         ingredientId: recipes
  //         name: "Pork Chop",
  //         amount: 1,
  //         cost: 300,
  //         unit: "serving",
  //       });
  //       }, [])
  //     return this.recipesToCook.portions
  //     };

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

  filterByMultipleIngredients() {
    this.filteredResults = this.recipesToCook.filter((recipe) => {
       let containsOr = false;
      recipe.portions.forEach((portion) => {
      if(this.selectedInput.some((keyword) => {
          return portion.name.includes(keyword);
        })
      ) {
        containsOr = true;
      }
    });
    return containsOr;
  })
   return this.filteredResults;
}

  clearImmediate() {
    this.selectedInput = [];
    this.filteredResults = [];
  }
}

export default User;
