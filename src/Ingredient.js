
class Ingredient {
  contstructor(ingredientInfo) {
    this.id = 999;
    this.name = ingredientInfo.name;
    this.estimatedCostInCents = ingredientInfo.estimatedCostInCents;

  }
}

module.exports = Ingredient;