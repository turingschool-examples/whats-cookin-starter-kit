import ingredientsData from '../data/ingredients';
import recipeData from '../data/recipes';
import Ingredient from '../classes/Ingredient'


class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
  }

  makeIngredients() {
    const ingredients = ingredientsData.map(ingredient => {
      return new Ingredient(ingredient);
    });

    return ingredients;
  }

  returnIngredientNames() {
    let ingredients = this.makeIngredients();
    const ingredientIDs = this.ingredients.map((ingredient) => {
      return ingredient.id;
    })

    const ingredientNames = ingredientIDs.map(id => {
      if(ingredients.includes(id)) =

    });

    //iterate through this.ingredients and then grab their IDs.
    //then we want to iterate through the ingredients array and
    //compare the this.ingredients ID's to the ID's of the
    //objects in the ingredients array. Then, if the ID's match, take the corresponding
    //ingredient name and store it in a new array, return that array.
  }

  returnIngredientCosts() {

  }

  returnRecipeInstructions() {

  }
};

export default Recipe;
