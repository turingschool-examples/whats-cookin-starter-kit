//

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients; //update with names from recipe data file
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  getIngredientName(ingredientId) {
    ingredientsData.forEach(ingredient => {

    })
    // sort through ingredient data file
    // if id of ingredient equals id in data filled
    // return name of ingredient
  }

  calculateCost() {
    // access ingredients for total of each ingredient
    // access recipes.js for cost of ingredient using id. .find(id === id) return cost
    // multiply these two
    // combine all ingredients in array
    // return cost of all combined ingredients
  }

  returnInstructions() {
    //  return this.ingredients
    // maybe only return
  }

  checkIngredients() {
    // return true or false if recipe includes ingredient input
  }

  checkTags() {
    // return true or false if recipe inlcudes tag input
  }
}


module.exports = Recipe;
