// const recipes = require('../test/Data');
// const ingredients = require('../test/Data');
// const allRecipes = recipes.dummyRecipeData;
// const allIngredients = ingredients.dummyIngredientData;
// const Recipe = require('./Recipe');

class RecipeRepository {
  constructor(recipeArray) {
    this.recipes = recipeArray;
  }

  filterRecipeByTag(tag1, tag2, tag3) {
    return this.recipes.filter(recipe => recipe.tags.includes(tag1) || recipe.tags.includes(tag2) || recipe.tags.includes(tag3))
  }

  filterRecipeByName(name) {
    return this.recipes.filter(recipe => recipe.name.includes(name));
  }

  filterRecipeByIngredients(ingredientName) {
  // let inputedObject = allIngredients.filter(ingredients => ingredients.name === ingredient);
  // return inputedObject[0];
  const id = []
  let ingredientId = allIngredients.filter(ingredient => {
    if(ingredient.name === ingredientName){
      id.push(ingredient.id);
    };
  });

  const finalRecipe = [];
  let recipeByIngredient = allRecipes.filter(recipes => {
    recipes.ingredients.filter(ingredientsByRecipe => {
      if(ingredientsByRecipe.id === id[0]){
        finalRecipe.push(recipes)
      }
    })
  })

  return finalRecipe;
  //return this.recipes.filter(recipe => console.log(recipe))
  // return this.recipes.filter(recipe => recipe.ingredients.id === ingredient)
  // let returnedId = inputedObject.filter(ingredient => ingredient.id)
  // let id =
  // return inputedObject
  // return this.recipes.filter(recipe => recipe.name.includes(id))
  // return allRecipes.filter(recipe => recipe.ingredients.includes(returnedId))
  }

}

if (typeof module !== 'undefined'){
  module.exports = RecipeRepository;
}


//this.recipes.map(ingredient =>
