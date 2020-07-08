const ingredientsData = require('../data/ingredients.js');

class Recipe {
  constructor({id, image, ingredients, instructions, name, tags}) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients; //update with names from recipe data file
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  getIngredientName(ingredient) { //returns name of ingredient
    let name = '';
    ingredientsData.forEach(ingredientData => {
      if (ingredient.id === ingredientData.id) {
        name = ingredientData.name;
      }
    })
    return name;
    // sort through ingredient data file
    // if id of ingredient equals id in data filled
    // return name of ingredient
  }

  getIngredientCost(ingredient) { //returns cost of ingredient in dollar amount
    let cost = 0;
    ingredientsData.forEach(ingredientData => {
      if (ingredient.id === ingredientData.id) {
        cost = ingredientData.estimatedCostInCents;
      }
    })
    return (cost / 100);
  }

  calculateTotalCost() { //returns total cost of recipe's ingredients in dollar amount
    let costs = [];
    this.ingredients.forEach(ingredient => {
      costs.push(this.getIngredientCost(ingredient));
    });
    let totalCost = costs.reduce((sum, num) => sum += num, 0);
    return totalCost; //changes to dollar amount
    // access ingredients for total of each ingredient
    // access recipes.js for cost of ingredient using id. .find(id === id) return cost
    // multiply these two
    // combine all ingredients in array
    // return cost of all combined ingredients
  }

  returnInstructions() { //returns recipe's instructions as an array of objects
    console.log(this.instructions);
    return this.instructions;
    //  return this.ingredients
    // maybe only return
  }

  returnIngredients() { //returns recipe's ingredients as an array of objects 
    console.log(this.ingredients);
    return this.ingredients
  }

  checkForIngredient(ingredient) { //returns true if recipe contains ingredient
    let test = this.ingredients.find(ingredientData => ingredientData.id === ingredient.id);
    return (test !== undefined); //allows for both types of ingredient objects to be compared
    // return this.ingredients.includes(ingredient); //simpler but may be limited to what's passed in
    }

  checkForTag(tag) { //returns true if recipe contains tag, pass tag in as string
    return this.tags.includes(tag)
  }
}

module.exports = Recipe;
