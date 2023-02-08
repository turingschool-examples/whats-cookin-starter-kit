import recipeTestData from '../data/recipeTestData'
import ingredientTestData from '../data/ingredientTestData';

class Recipe {
  
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  };

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