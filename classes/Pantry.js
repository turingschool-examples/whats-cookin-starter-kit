const data = require('../data/ingredients');
const allIngredients = data.ingredientsData;

class Pantry {
  constructor(user) {
    this.pantryId = user.id
    this.pantry = this.newPantry(user.pantry);
  }
  // METHODS THAT ARE USED FOR KEY:VALUE PAIRS
  newPantry(pantry) {
    let newPantry = pantry.reduce((acc, listItem1) => {
      allIngredients.forEach((listItem2) => {
        if (listItem2.id === listItem1.ingredient) {
          listItem1['name'] = listItem2.name
          listItem1['cost'] = listItem2.estimatedCostInCents
          acc.push(listItem1)
          return
        }
      })
      return acc
    }, [])
    return newPantry
  }

  // -START-- MethodHandler1: calls 3 methods --START-//
  verifyIngredients(recipe) {

    let recipeNames = this.findRecipeNames(recipe)
    let pantryIngredientNames = this.findPantryNames()
    let hasIngredients =
      this.checkUserHasIngredients(recipeNames, pantryIngredientNames)
    if (hasIngredients === false) {
      let missingIngredients =
        this.returnMissingNames(recipeNames, pantryIngredientNames);
      let neededIngredients = this.getNeededIngredients(missingIngredients, recipe);
      let amountOfNeededIngredients = this.getAmountsNeeded(neededIngredients, recipe);
      let totalCost = this.getTotalCost(amountOfNeededIngredients, recipe);
      let groceryList = this.createGroceryList(amountOfNeededIngredients, totalCost);
      return groceryList
    } else {
      
    }
  }

  // These are the function declorations for MethodHandler 1//
  findRecipeNames(recipe) {
    let recipeName = recipe.ingredients.map(ingredient => {
      return ingredient.name
    })
    return recipeName
  }

  findPantryNames() {
    let pantryIngredientNames = this.pantry.map(ingredient => {
      return ingredient.name
    })
    return pantryIngredientNames
  }

  checkUserHasIngredients(recipeNames, pantryIngredientNames) {
    return recipeNames.every(ingredient =>
      pantryIngredientNames.includes(ingredient))
  }

  returnMissingNames(recipeNames, pantryIngredientNames) {
    var missingNames = recipeNames.filter((name) => !pantryIngredientNames.includes(name));
    return missingNames
  }

  getNeededIngredients(missingIngredients, recipe) {
    let missing = recipe.ingredients.reduce((acc, ingredient) => {
      missingIngredients.forEach((name) => {
        if (name === ingredient.name) {
          acc.push(ingredient)
          return acc
        }
      })
      return acc
    }, [])
    return missing
  }

  getAmountsNeeded(neededIngredients, recipe) {

    let neededAmounts = neededIngredients.reduce((acc, ingredient) => {
      recipe.ingredients.forEach((item) => {
        let needed = {}
        if (item.name === ingredient.name) {
          let amounts = item.quantity.amount;
          let rounded = Math.ceil(amounts)
          needed.name = item.name;
          needed.amountNeeded = rounded
          acc.push(needed)
        }
      })
      return acc
    }, []);
    return neededAmounts
  }

  getTotalCost(amountOfNeededIngredients, allIngredients) {
    let cost = allIngredients.reduce((num, item) => {
      amountOfNeededIngredients.forEach((ingredient) => {
        if (item.name === ingredient.name) {
          num += (ingredient.amountNeeded * item.estimatedCostInCents)
        }
      })
      return num
    }, 0)
    return cost
  }

  createGroceryList(amountOfNeededIngredients, totalCost) {
    let groceryList = {}
    groceryList.ingredients = amountOfNeededIngredients
    groceryList.totalCost = totalCost
    return groceryList
  }
}
// -END-- handler1 -- handler1 --END- //


//   // -START-- MethodHandler2: calls ??? methods --START-//
//   handler2(recipeIds, pantryIngredients, recipe) {
//     let missingIds = returnMissingIds(recipeIds, pantryIngredients);
//     let names = turnIdsIntoNames(missingIds, recipe);
//   }



//   // These are the function declorations for MethodHandler 2//
//   getMissingIds(recipeIds, pantryIngredients) {
//     let missingIds = recipe
//   }

//   turnIdsIntoNames(missingIds, recipe) {
//     recipe.ingredients.filter()
//   }
//   // -END-- handler2 -- handler2 --END- //
module.exports = Pantry;