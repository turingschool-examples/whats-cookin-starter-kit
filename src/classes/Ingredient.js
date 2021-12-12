import ingredientsData from '../data/ingredients.js';


class Ingredient {
  constructor(ingredientsDataYeah) {
    this.id = ingredientsDataYeah.id;
    this.name = ingredientsData.find(ingredient => this.id === ingredient.id).name
    this.estimatedCostInCents = ingredientsData.find(ingredient => this.id === ingredient.id).estimatedCostInCents
  }
  // accessIngredientNameAndId() {
  //   let data = ingredientsData;
  //   return data.map(item => {
  //     return {id: item.id, name: item.name}
  //   })
  // }
}

export default Ingredient;
