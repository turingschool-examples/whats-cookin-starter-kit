import  ingredientsData  from '../data/ingredients';
import Ingredients from '../classes/ingredientsClass'
class Recipe {
    constructor(recipeData) {
        this.id = recipeData.id
        this.image = recipeData.image
        this.ingredients = recipeData.ingredients
        this.instructions = recipeData.instructions
        this.name = recipeData.name
        this.tags = recipeData.tags
    }

returnRecipeInstructions() {
    let instructionsParagraph = this.instructions.reduce((string, instruction) => {
        return string += `${instruction.number}) ${instruction.instruction}`
    }, '')
    return instructionsParagraph;
  }

returnRecipeIngredientsArray() {     
  let ingredientsArray = ingredientsData.map((ingredient) => {
        return  new Ingredients(ingredient)
   });
  return ingredientsArray;
}

returnRecipeIngredientsNames() {
  let ingredientsNamesArray = ingredientsData.map((ingredient) => {
      return ingredient.name
    });
  return ingredientsNamesArray;
}





};



export default Recipe;