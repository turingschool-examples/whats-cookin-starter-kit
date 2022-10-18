import recipeData from '../data/recipes';
import {sampleIngredientsData} from '../data/sample-data';

class Recipe {
    constructor(data) {
        this.id = data.id;
        this.image = data.image;
        this.ingredients = data.ingredients;
        this.instructions = data.instructions;
        console.log('in', this.instructions)
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
        this.totalCost = ingredientInfo.reduce((acc, ingredient) => {
            this.ingredients.forEach((item) => {
                if (item.id === ingredient.id)
                  {let cost = (item.quantity.amount * ingredient.estimatedCostInCents)/100
                    return acc += cost
                };
              });
            return acc
          }, 0);
            return this.totalCost;
    }
    directMeGurlll(ingredientInfo) {
      return this.instructions.reduce((acc, directions) => {
            let number = directions.number
            let roadMap = {[number]: directions.instruction}
            console.log('hiiiii', roadMap)
            console.log('whattt', acc)
            return roadMap
        }, {})
    }
}

export default Recipe;

