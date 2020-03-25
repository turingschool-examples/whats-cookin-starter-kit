const ingredientsData = require('../data/ingredients');

class Recipe {
  constructor({id, image, name, ingredients, instructions, tags}) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  getIngredientsCost() {
    let allIngredients = this.matchIngredientsIds();
    return allIngredients.reduce((acc, ingredient) => {
      acc += ingredient.estimatedCostInCents;
      return acc;
    }, 0);
  }

  matchIngredientsIds() {
    return this.ingredients.map(ingredient => {
      return ingredientsData.filter(ingData => {
        return ingData.id === ingredient.id;
      });
    }).flat();
  }
  // matchIngredientsIds() {
  //   let rightIngredients = [];
  //   this.ingredients.map(ingredient => {
  //     ingredientsData.filter(ingData => {
  //       if (ingData.id === ingredient.id && !rightIngredients.includes(ingData.id)) {
  //         rightIngredients.push(ingData)
  //       }
  //     });
  //   });
  //   return rightIngredients;
  // }

  getInstructions() {
    return this.instructions;
  }
}

module.exports = Recipe;
