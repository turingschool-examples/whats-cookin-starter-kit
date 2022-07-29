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
    if (this.notMatchingIngredients.length === 0) {
      return this.matchingIngredients;
    } else {
      return this.notMatchingIngredients;
    }
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
        wrongAmount.push(item);
      }
    });
    return wrongAmount;
  }

  returnDifferences(recipe) {
    let wrongAmount = this.compareIngredientAmounts(recipe);
    let differences = recipe.portions.reduce((acc, portion) => {
      wrongAmount.forEach((item) => {
        if (item.ingredient === portion.ingredientId) {
          acc.push({
            name: item.name,
            difference: portion.amount - item.amount,
          });
        }
      });
      return acc;
    }, []);
    return differences;
  }

  gatherAllIngredients(recipeData) {
    let gatherAllIngredients = recipeData.recipes.reduce((acc, cur) => {
      cur.portions.forEach((portion) => acc.push(portion));
      return acc;
    }, []);
    return gatherAllIngredients;
  }

  updatePantryAmount(ingredientId, quantity, recipeData) {
  
    this.pantry.forEach((ingredient) => {
      if (this.pantry.includes(ingredientId)) {
        ingredient.amount += quantity;
      } else {
        this.addIngredientsToPantry(ingredientId, quantity, recipeData);
      }
    });
  }
  addIngredientsToPantry(ingredientId, quantity, recipeData) {
    let allIngredients = this.gatherAllIngredients(recipeData);
    let ingredientToAdd = allIngredients.reduce((acc, cur) => {
      if (ingredientId === cur.ingredientId) {
        acc["ingredient"] = ingredientId;
        acc["amount"] = quantity;
        acc["name"] = cur.name;
      }
      return acc;
    }, {});
     this.pantry.forEach(ingredient => {
      console.log(11, ingredient)
    //   if (ingredient) {
  })
    this.pantry.push(ingredientToAdd);
  }

  //We will have to cross reference the id with the recipe repository portion IDs

  // Once we find() the ID --> This may need to be a stand alone function that takes in an ID and returns the ingredient that matches.

  // We will push that ingredient to the users pantry
  // We will need to interpolate the amount based on what the 2nd param is passed.
  // We will need a conditional
  // if( this ingredient does exist in pantry)
  // then we will have to add ONLY the 2nd params amount to that users existing amount for that ingredient

  clearData() {
    this.selectedInput = [];
    this.filteredResults = [];
  }
}

export default User;
