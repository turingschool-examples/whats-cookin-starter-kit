import ingredientsData from '../data/ingredients';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  };

  getIngredients() {
    const ingredientsListIDs = this.ingredients.map((ingredient) => {
      return ingredient.id;
    })
    const ingredientNames = ingredientsData.filter((ingredient) => {
      return ingredientsListIDs.includes(ingredient.id)
    }).map((ingredient) => {
      return ingredient.name;
    });
    return ingredientNames;
  };

  getIngredientsCost() {

  };

  getInstructions() {

  };
};

export default Recipe;