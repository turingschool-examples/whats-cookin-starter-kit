class User {
  constructor(userData = {}) {
    this.id = userData.id;
    this.name = userData.name;
    this.pantry = userData.pantry || [];
    this.recipesToCook = [];
    this.selectedInput = [];
    this.filteredResults = [];
    this.matchingIngredients = [];
    this.notMatchingIngredients = [];
    this.allIngredients = [];
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

  compareIngredientsNeeded(recipe) {
    recipe.portions.forEach((portion) => {
      let found = false;
      this.pantry.forEach((item) => {
        if (item.ingredient === portion.ingredientId) {
          this.matchingIngredients.push(item);
          found = true;
        }
      });
      if (found === false) {
        this.notMatchingIngredients.push(portion);
      }
    });
  }

  compareIngredientAmounts(recipe) {
    let wrongAmount = [];
    this.matchingIngredients.forEach((item) => {
      let isCorrectAmount = false;
      recipe.portions.forEach((portion) => {
        if (
          portion.ingredientId === item.ingredient &&
          item.amount >= portion.amount
        ) {
          isCorrectAmount = true;
        }
      });
      if (isCorrectAmount === false) {
        this.notMatchingIngredients.push(item);
      }
    });
    this.returnDifferences(recipe, wrongAmount);
  }

  returnDifferences(recipe) {
    recipe.portions.forEach((portion) => {
      this.notMatchingIngredients.forEach((item) => {
        if (item.ingredientId === portion.ingredientId) {
          item.amount = portion.amount - item.amount || portion.amount;
        }
      });
    });
  
  }

  cookRecipe(recipe) {
    let myRecipe = recipe;
    let myPantry = this.pantry;
    myRecipe.portions.forEach((ingredient) => {
      let updateAmount = myPantry.find((item) => {
        return item.name === ingredient.name;
      });
      updateAmount.amount -= ingredient.amount;
      if (updateAmount.amount < 1) {
        this.deleteFromPantry(updateAmount.ingredient);
      }
       myPantry.push(updateAmount);
    });
    this.removeRecipeToCook(myRecipe);
    this.matchingIngredients = [];
  }

  gatherAllIngredients(recipeData) {
    let gatherAllIngredients = recipeData.recipes.reduce((acc, cur) => {
      cur.portions.forEach((portion) => acc.push(portion));
      return acc;
    }, []);
    return gatherAllIngredients;
  }

  evaluatePantry(ingredientName, quantity, recipeData) {
    let allIngredients = this.gatherAllIngredients(recipeData);
    let ingredientToAdd = allIngredients.reduce((acc, cur) => {
      if (ingredientName === cur.name) {
        acc["ingredientId"] = cur.ingredientId;
        acc["amount"] = quantity;
        acc["name"] = cur.name;
        acc["ingredient"] = cur.ingredientId;
      }
      return acc;
    }, {});

    let found = this.pantry.find((item) => {
      return item.name === ingredientName;
    });

    if (found === undefined) {
      this.pantry.push(ingredientToAdd);
    } else {
      found.amount += quantity;
    }
  }

  removeFromPantryView() {
    this.pantry.forEach((item) => {
      if (item.amount < 1) {
        this.deleteFromPantry(item.ingredient);
      }
    });
  }

  deleteFromPantry(ingredientId) {
    let deleteItem = this.pantry.findIndex((item) => {
      return item.ingredient === ingredientId;
    });
    this.pantry.splice(deleteItem, 1);
  }

  removeRecipeToCook(recipe) {
    let indexOfRecipeToRemove = this.recipesToCook.indexOf(recipe);
    if (indexOfRecipeToRemove < 0) {
      return `There are no recipes to remove!`;
    }
    this.recipesToCook.splice(indexOfRecipeToRemove, 1);
    return this.recipesToCook;
  }

  clearData() {
    this.selectedInput = [];
    this.filteredResults = [];
  }
}

export default User;
