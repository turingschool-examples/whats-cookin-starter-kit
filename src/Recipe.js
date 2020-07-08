// might need ingredient class
const ingredientsData = require('../data/ingredients.js');
const newRecipe = require('../data/recipes.js');
class Recipe {
  constructor({id, image, ingredients, instructions, name, tags}) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients; //update with names from recipe data file
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  getIngredientName(ingredient) { //look into .find or .map
    // console.log(ingredient.id);
    // console.log(ingredientsData[0].id);
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

  getIngredientCost(ingredient) { //look into .find or .map
    let cost = 0;
    ingredientsData.forEach(ingredientData => {
      if (ingredient.id === ingredientData.id) {
        cost = ingredientData.estimatedCostInCents;
      }
    })
    return (cost / 100);
    // basically same as above
  }

  calculateTotalCost() {
    let costs = [];
    this.ingredients.forEach(ingredient => {
      costs.push(this.getIngredientCost(ingredient));
    });
    //console.log(costs);
    let totalCost = costs.reduce((sum, num) => sum += num, 0);
    //console.log(totalCost/100); // dollar amount
    return totalCost; //changes to dollar amount
    // access ingredients for total of each ingredient
    // access recipes.js for cost of ingredient using id. .find(id === id) return cost
    // multiply these two
    // combine all ingredients in array
    // return cost of all combined ingredients
  }

  returnInstructions() {
    return this.instructions;
    //  return this.ingredients
    // maybe only return
  }

  returnIngredients() {
    return this.ingredients
  }

  checkForIngredient(ingredient) {
    let test = this.ingredients.find(ingredientData => ingredientData.id === ingredient.id);
    return (test !== undefined);
    }
    // return true or false if recipe includes ingredient input

  // checkForTag(tag) {
  //   console.log(this.tags.includes(tag));
  //   // let test = this.tags.find(tagData => tag === ingredient.id);
  //   // return (test !== undefined);
  //   // return true or false if recipe inlcudes tag input
  // }
}


module.exports = Recipe;
