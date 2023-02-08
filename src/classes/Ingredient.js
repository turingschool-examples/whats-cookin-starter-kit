import ingredientsData from "../data/ingredients";

class Ingredient {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.costInCents = data.estimatedCostInCents;
  };

  returnIngredientName(num) {
    const findName = ingredientsData.find(ingredient => ingredient.id === num);
    if (findName === undefined) {
      return 'Error';
    } else {
      return findName.name;
    }
  };

  returnIngredientCost(num) {
    const findCost = ingredientsData.find(ingredient => ingredient.id === num);
    if (findCost === undefined) {
      return 'Error';
    } else {
      return findCost.estimatedCostInCents;
    };
  };
};
export default Ingredient;