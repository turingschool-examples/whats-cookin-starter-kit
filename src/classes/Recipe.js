import recipeTestData from '../data/recipeTestData'
import ingredientTestData from '../data/ingredientTestData';
import Ingredient from './Ingredient';

class Recipe {
  
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  };

  retrieveIngredientInfo() {
    const currentIngredients = this.ingredients.map(i => {
      let newIng = new Ingredient(i);
      newIng.name = newIng.returnIngredientName(i.id);
      newIng.costInCents = newIng.returnIngredientCost(i.id);
      newIng.quantity = i.quantity;
      return newIng
    });
    this.ingredients = currentIngredients;
    return this.ingredients;
  }

  nameIngredientsNeeded() {
  
    //iterate thru recipe Data and if id there matches ingredientTestData id
    //then return ingredientTestData.name 
  };

  // returnCostOfIngredients() {

  // };

  // giveDirectionsForRecipe() {

  // };

};

export default Recipe;