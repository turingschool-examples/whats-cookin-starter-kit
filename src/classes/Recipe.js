import Ingredient from './Ingredient';

class Recipe {
  constructor(recipeData, ingredientData) {
    this.id = recipeData.id
    this.image = recipeData.image
    this.ingredients = recipeData.ingredients
    this.instructions = recipeData.instructions
    this.name = recipeData.name
    this.tags = recipeData.tags
    this.ingredientData = ingredientData
  }

    getIngredientNames() {
    const matchedIngredientNames = this.ingredients.map(ingredient => {
      const foundIngredient = this.ingredientData.find(
        data => data.id === ingredient.id
      );
      //console.log('foundIngredient:', foundIngredient)
      //console.log('ingredient:', ingredient)
      const newObject = Object.assign(foundIngredient, ingredient);
      //console.log('new obj:', newObject)
      const newIngredient = new Ingredient(newObject);
      return newIngredient.name
    });
    return matchedIngredientNames
   }

  getCostofIngredients() {
    //get id from recipe, go to ingredients find ID, get costs in cents * recipeAmt
  }
  returnRecipeInstructions() {

  }
}

export default Recipe;
