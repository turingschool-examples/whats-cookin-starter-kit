import ingredientsData from '../data/ingredients.js';

class Ingredient {
  constructor(ingredientsData) {
    this.ingredients = [] || ingredientsData;
    this.id = ingredientsData.id;
    this.name = ingredientsData.name;
  }
}

export default Ingredient;
