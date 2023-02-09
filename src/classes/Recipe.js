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
    this.sum = 0;
  };

  retrieveIngredientInfo() {
    const currentIngredients = this.ingredients.map(i => {
      let newIng = new Ingredient(i);
      newIng.name = newIng.returnIngredientName(i.id);
      newIng.costInCents = newIng.returnIngredientCost(i.id);
      newIng.quantity = i.quantity;
      return newIng;
    });
    this.ingredients = currentIngredients;
    return this.ingredients;
  };

  returnCostOfIngredients() {
    const total = this.ingredients.reduce((total, cur) => {
      total += (cur.costInCents * cur.quantity.amount);
      return total;
    }, 0);
    this.sum = (total / 100).toFixed(2);
    console.log(this.sum)
    return this.sum;
  };
};

  // giveDirectionsForRecipe() {

  // };


export default Recipe;