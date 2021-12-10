import Ingredient from './Ingredient';
import ingredientsData from '../data/ingredients.js';

class Recipe {
  constructor(recipeData, ingredientData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients.map(ingredient => {
      return new Ingredient({id: ingredient.id, name: ingredient.name, estimatedCostInCents: ingredient.estimatedCostInCents})
    });
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    // this.ingredientData = ingredientsData;
  }
  accessIngredientName() {
    let recipeIngredients = this.ingredients;
  }

  calculateTotalCost() {
    let allCosts = []
    let getCosts = this.ingredients.map(ingredient => {
      allCosts.push(ingredient.estimatedCostInCents)
    });
    let addCosts = allCosts.reduce((acc, num) => {
      acc += num;
      return acc
    }, 0)
    let totalPriceInDollars = addCosts/100;
    return "$" + totalPriceInDollars
  }

  //Output: Array ingredient names
  //Input: IngredientData with names and ids
  //Filter ingredientData against recipeIngredients
  //See if they match
  //If true, return the name
  //Going to end up needing 2-3 methods(filter/map)
  //Return array of ids that match recipe ids
  //Use new array to go back and pull names off of data




}
export default Recipe;
