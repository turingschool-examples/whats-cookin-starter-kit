import ingredientsData from '../data/ingredients.js';

class Ingredient {
  constructor(ingredientsData) {
    this.id = ingredientsData.id;
    this.name = ingredientsData.name;
    this.estimatedCostInCents = ingredientsData.estimatedCostInCents
  }
  accessIngredientNameAndId() {
    let data = ingredientsData;
    return data.map(item => {
      return {id: item.id, name: item.name}
    })
  }
}

export default Ingredient;
