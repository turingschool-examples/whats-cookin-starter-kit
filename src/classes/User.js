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

  addInputToSearch(keyword) {
    let lowerCaseInput = keyword.toLowerCase();
    if (!this.selectedInput.includes(lowerCaseInput)) {
      this.selectedInput.push(lowerCaseInput);
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

  removeRecipeToCook(recipe) {
    let indexOfRecipeToRemove = this.recipesToCook.indexOf(recipe);
    if (indexOfRecipeToRemove < 0) {
      return `There are no recipes to remove!`;
    }
    this.recipesToCook.splice(indexOfRecipeToRemove, 1);
    return this.recipesToCook;
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
        if (
          this.selectedInput.some((keyword) => {
            return portion.name.includes(keyword);
          })
        ) {
          containsOr = true;
        }
      });
      return containsOr;
    });
    return this.filteredResults;
  }

  // cookRecipe(recipe) {
  //   //let matchingIngredients = []
  //   let isMatching = this.pantry.forEach((item) => {
  //     recipe.portions.forEach((portion) => {
  //       if (recipe.portion.includes(item.ingredient)) {
  //         return true
  //       } else {
  //         return false
  //       }
  //     });

  //   });
  //     console.log(isMatching);

  collectMatchingIngredients(recipe) {
    var matchingIngredients = [];
    this.pantry.forEach((item) => {
      recipe.portions.forEach((portion) => {
        if (item.ingredient === portion.ingredientId) {
          matchingIngredients.push(item);
        }
      });
    });
    if (matchingIngredients.length !== recipe.portions.length) {
      return false;
    } else {
    return matchingIngredients;
    }
  }

  compareAmounts(recipe) {
    let matching = this.collectMatchingIngredients(recipe);
    matching.forEach((item) => {
      recipe.portions.forEach((portion) => {
        if (item.ingredient === portion.ingredientId && item.amount >= portion.amount) {
          return true
        } else {
         return false
        }
      });
    });
  }

  clearData() {
    this.selectedInput = [];
    this.filteredResults = [];
  }
}

export default User;
