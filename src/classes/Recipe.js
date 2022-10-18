import recipeData from '../data/recipes';
import {sampleIngredientsData} from '../data/sample-data';

class Recipe {
    constructor(data) {
        this.id = data.id;
        this.image = data.image;
        this.ingredients = data.ingredients;
        this.instructions = data.instructions;
        this.name = data.name;
        this.tags = data.tags;
        this.ingredientsList = [];
    }
    determineIngredients() {
        this.ingredientsList = sampleIngredientsData.reduce((acc, ingredient) => {
            this.ingredients.forEach((id) => {
                if (id.id === ingredient.id)
                  {acc.push(ingredient.name)};
              });
              return this.ingredientsList = acc;
          }, []);
            return this.ingredientsList;
          }
        }
export default Recipe;
