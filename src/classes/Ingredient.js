import ingredientTestData from "../data/ingredientTestData";


class Ingredient {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.costInCents = data['estimatedCostInCents'];
  }
}

export default Ingredient;