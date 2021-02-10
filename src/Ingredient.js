
class Ingredient {
  constructor(id, quantity, ingredientsArray) {
    this.id = id ? id : 'unknown ingredient';
    this.name = ingredientsArray.find(item => item.id === id) ? ingredientsArray.find(item => item.id === id).name : 'unknown ingredient';
    this.estimatedCost = ingredientsArray.find(item => item.id === id) ? ingredientsArray.find(item => item.id === id).estimatedCostInCents : 'unknown ingredient';
    this.quantity = quantity ? {amount: quantity.amount.toFixed(2), unit: quantity.unit} : 'unknown quantity';
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}