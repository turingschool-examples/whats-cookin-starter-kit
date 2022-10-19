import ingredientsData from '../data/ingredients';
import ingredientsClass from '../classes/ingredientsClass'
class Recipe{
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
        console.log('hey', string)
        return string += `${instruction.number}) ${instruction.instruction}`
    }, '')
    return instructionsParagraph;
  }


};



export default Recipe;