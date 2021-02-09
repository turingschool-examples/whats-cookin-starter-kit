
class Ingredient {
  constructor(id, quantity, ingredientsArray) {
    this.id = id ? id : 'unknown ingredient';
    this.name = ingredientsArray.find(item => item.id === id) ? ingredientsArray.find(item => item.id === id).name : 'unknown ingredient';
    this.estimatedCost = ingredientsArray.find(item => item.id === id) ? ingredientsArray.find(item => item.id === id).estimatedCostInCents : 'unknown ingredient';
    this.quantity = quantity ? quantity : 'unknown quantity';
  }
}

module.exports = Ingredient;