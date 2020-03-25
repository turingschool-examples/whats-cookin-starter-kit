const data = require('../data/ingredients');
const allIngredients = data.ingredientsData;

class Recipe {
  constructor(dish) {
    this.id = dish.id;
    this.image = dish.image;
    this.name = dish.name;
    this.ingredients = this.addProperties(dish.ingredients);
    this.instructions = dish.instructions;
    this.tags = dish.tags;
    this.cost = this.totalCost();
  }

  totalCost() {
    let cost = this.ingredients.reduce((acc, ingredient) => {
      let sumOfIngredients = acc += ingredient.totalCostOfIngredient;
      return sumOfIngredients;
    }, 0);
    this.cost = cost;
    return this.cost
  }

  addProperties(ingredients) {
    let totalCost = ingredients.reduce((acc, ingredient) => {
      allIngredients.forEach(item => {
        if (ingredient.id === item.id) {
          ingredient['name'] = item.name;
          ingredient['totalCostOfIngredient'] = item.estimatedCostInCents * ingredient.quantity.amount;
          acc.push(ingredient);
          return
        };
      });
      return acc;
    }, []);
    this.ingredients = totalCost;
    return this.ingredients
  }

  returnDirections() {
    return this.instructions
  }

  returnNeededIngredients(userIngredients) {

  }
}
module.exports = Recipe;
