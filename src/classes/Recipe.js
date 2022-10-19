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

returnCostOfIngredients() {
    
  let ingredCosts = newRecipeIngredients.map(ingredient => ingredient.estimatedCostInCents);
  let ingredQuantitiesNeeded = this.ingredients.map(ingredient => ingredient.quantity.amount);
  let multiplyCostByAmmount = ingredCosts.map((cost, index) => {
        let quantity = ingredQuantitiesNeeded[index];
        return cost * quantity
    })
    let total = multiplyCostByAmmount.reduce((sum, cost) => {
          return sum + cost;
    }, 0)
    let finalTotal = parseFloat((sumTotalCost / 100).toFixed(2));
    return finalTotal
}





};



export default Recipe;