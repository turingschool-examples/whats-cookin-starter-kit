const Ingredient = require('./Ingredient');
const ingredientsData = require('../data/ingredients.js')
const ingredients = ingredientsData.ingredientsData;

class Recipe {
  constructor(recipe) {  //original data
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients.map(ingredient => new Ingredient(ingredient));
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }
  getIngredientsNeeded() {

    const ingredientIds = this.ingredients.map(ingredient => ingredient.id);
    console.log(ingredientIds)
    const ingredientNames = ingredients.reduce((ings,ing) => {
      console.log(ing);
      if (ingredientIds.includes(ing.id)) {
        ings.push(ing.name);
      } else {
        return;
      }
      console.log(ings);
        //  ing === [ingredientIds.indexOf(ing.id)]
        //console.log(ingredientIds[ings.length]);

        return ings;
      }, []);
      console.log(ingredientNames);
      //ingredientNames.push(ingredients.find(ing => Object.keys(ing.id) === id).name);
    //});
    //console.log(ingredientNames)
    return ingredientNames;
  }
  getCost() {
    let total = 0;
    this.ingredients.forEach(listedIngredient => {
      ingredients.forEach(ingredient => {
        if (listedIngredient.id === ingredient.id) {
          total += (ingredient.estimatedCostInCents * ingredient.quantity.amount) / 100
        }
      });
    });
    return total;
  }
  getInstructions() {
    return this.instructions;
  }
}

module.exports = Recipe;
