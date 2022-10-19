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

returnRecipeIngredientsIds() {
   let ingredientIDs = this.ingredients.map(ingredient => ingredient.id);
     return ingredientIDs  
}

returnAllIngredientsIds() {
    let ingredientIDs = ingredientsData.map(ingredient => ingredient.id);
        return ingredientIDs
}

returnIngredientById(id) {
    let allIngred = this.returnAllIngredientsArray()
  let singleIngred = allIngred.find((element) => {
            return element.id === id
        })
        return singleIngred
    }

returnRecipeInstructions() {
    let instructionsParagraph = this.instructions.reduce((string, instruction) => {
        return string += `${instruction.number}) ${instruction.instruction}`
    }, '')
    return instructionsParagraph;
  }

returnRecipieIngredientsArray() {
    let recipeIngredients = this.ingredients
}

returnAllIngredientsArray() {     
  let ingredientsArray = ingredientsData.map((ingredient) => {
        return  new Ingredients(ingredient)
   });
  return ingredientsArray;
}

returnRecipeIngredientsNames() {
    console.log('yayaya', this.ingredients)
    let emptyArray = []
   let recipeIngred = this.ingredients.forEach((ingred) => {
       emptyArray.push(this.returnIngredientById(ingred))
   })
    return emptyArray 
}

returnAllIngredientsNames() {
  let ingredientsNamesArray = ingredientsData.map((ingredient) => {
      return ingredient.name
    });
  return ingredientsNamesArray;
}

returnCostOfIngredients() {
  let allIngredients = this.returnAllIngredientsArray()
  let recipeIngredientIDs = this.returnRecipeIngredientsIds();
  let newRecipeIngredients = allIngredients.filter(ingredient => (recipeIngredientIDs.includes(ingredient.id)));  
  let ingredCosts = newRecipeIngredients.map(ingredient => ingredient.estimatedCostInCents);
  let ingredQuantitiesNeeded = this.ingredients.map(ingredient => ingredient.quantity.amount);
  let multiplyCostByAmmount = ingredCosts.map((cost, index) => {
        let quantity = ingredQuantitiesNeeded[index];
        return cost * quantity
    })
    let total = multiplyCostByAmmount.reduce((sum, cost) => {
          return sum + cost;
    }, 0)
    let finalTotal = parseFloat(( total / 100).toFixed(2));
        if(finalTotal >= 1) {
            return `$ ${finalTotal}`
        } else {
            return finalTotal
        }
}





};



export default Recipe;