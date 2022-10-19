// import recipeData from '../data/recipes';
// import {sampleIngredientsData} from '../data/sample-data';

class Recipe {
    constructor(data) {
        this.id = data.id;
        this.image = data.image;
        this.ingredients = data.ingredients;
        this.instructions = data.instructions;
        this.name = data.name;
        this.tags = data.tags;
        this.ingredientsList = [];
        this.totalCost;
    }
    determineIngredients(ingredientInfo) {
        this.ingredientsList = ingredientInfo.reduce((acc, ingredient) => {
            this.ingredients.forEach((item) => {
                if (item.id === ingredient.id)
                  {acc.push(ingredient.name)};
              });
              return this.ingredientsList = acc;
          }, []);
            return this.ingredientsList;
    }
    calculateCost(ingredientInfo) {
        this.totalCost = ingredientInfo.reduce((total, ingredient) => {
            this.ingredients.forEach((item) => {
                if (item.id === ingredient.id)
                  {let cost = (item.quantity.amount * ingredient.estimatedCostInCents)/100
                    return total += cost
                };
              });
            return total
          }, 0);
            return this.totalCost;
    }
    getInstructions() {
      return this.instructions.reduce((instructionArray, direction) => {
       instructionArray.push(`${direction.number}. ${direction.instruction}`)
       return instructionArray
        }, [])
    }
}

export default Recipe;

