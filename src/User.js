/* eslint-disable */

const ingredientsData = require('../data/ingredients');

const userData = require('../data/users.js')
class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addFavoriteRecipe(id) {
    if (!this.favoriteRecipes.includes(id)) {
      this.favoriteRecipes.push(id)
    }
    // issue # 23
  }

  removeFavoriteRecipe(id) {
    let item = this.favoriteRecipes.indexOf(id);
    this.favoriteRecipes.splice(item, 1)
    // #19
  }

  addRecipesToCook(id) {
    if (!this.recipesToCook.includes(id)) {
      this.recipesToCook.push(id)
    }
    //#20
  }

  removeRecipesToCook(id) {
    let item = this.recipesToCook.indexOf(id);
    this.recipesToCook.splice(item, 1)
  }
  // #21

//search recipesToCook OR favoriteRecipes by type
findRecipesByType(savedRecipes, tagName) {
  return savedRecipes.filter( recipe => {
    return recipe.tags.includes(tagName);
  });
}

findRecipesByName(savedRecipes, name) {
  return savedRecipes.filter(recipe => {
    return recipe.name.includes(name)
  });
}

// findRecipesByIngredient(savedRecipes, ingredientName) {
//   let ingredientId;
//   ingredientsData.forEach(ingredient => {
//     if (ingredientName.includes(ingredient.name)) {
//       ingredientId = ingredient.id;
//     }
//   })
//     console.log(ingredientId);
//     let matchedRecipes = [];
//     savedRecipes.forEach(recipe => {
//       recipe.ingredients.forEach(ingred => {
//         if (ingred.id === ingredientId) {
//           matchedRecipes.push(recipe);
//         }
//       })
//     })
//     // console.log(matchedRecipes)
//     return matchedRecipes;
//     // search savedRecipes for ingredients id
//     }
//     }
findRecipesByIngredient(savedRecipes, ingredientName) {
  let ingredientId;
  ingredientsData.forEach(ingredient => {
    if (ingredientName.includes(ingredient.name)) {
      ingredientId = ingredient.id;
    }
  })
      const matchedRecipes = savedRecipes.reduce((acc, recipe) => {
        recipe.ingredients.forEach(currentIngredient => {
            if (currentIngredient.id === ingredientId) {
              acc.push(recipe)
            }
         })
      return acc;
    }, []);
        return matchedRecipes;
  }

}

// search recipesToCook by name OR ingredient
// ingredients in data only have id
// recipesToCook and favorites contain 
// ingredients in pantry
// ingredients in recipe
// ingredients class

// user.pantry.ingredients

// A User should be able to determine whether they have sufficient ingredients in their pantry to cook a recipe
// if they DO NOT: see pantry stories
// return a list of ingredients they need to buy and how much it will cost
// (note - User should be able to do this for at least one recipe)
// push into recipesToCook array

if (typeof module !== 'undefined') {
  module.exports = User;
}