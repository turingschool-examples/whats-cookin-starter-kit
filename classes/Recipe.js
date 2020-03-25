class Recipe {
  constructor(dish) {
    this.id = dish.id;
    this.image = dish.image;
    this.name = dish.name;
    this.ingredients = dish.ingredients;
    this.instructions = dish.instructions;
    this.tags = dish.tags;
  }

  calculateCost() {
  
  }

  returnCookingDirections() {

  }
}
module.exports = Recipe;