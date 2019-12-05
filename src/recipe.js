
const Ingredient = require('../src/ingredients.js');
// ingredients = new Ingredient(20081, 'wheat flour', 142);


class Recipe {
  constructor(id, name, image, tags, instructions, ingredients ) {
    this.id = id;
    this.tags = tags;
    this.name = name;
    this.image = image;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.costPerRecipe = 0;
    this.ingredientPerRecipe = [];
    // console.log(this.ingredients);
  }



  filterByIngredients() {
  }

  findCostPerRecipe(ingredient) {
    // console.log(this.ingredients, ingredient.estimatedCostInCents)
    // console.log(ingredient.estimatedCostInCents)
    // for each recipe get all the ingredients
    // store all the ingredients
    // fore each ingredient get the costPerRecipe
    this.ingredients.forEach((ingredient) => {
        this.ingredientPerRecipe.push(ingredient)
        console.log(this.ingredientPerRecipe)
    })
    return this.ingredientPerRecipe.reduce((acc, val) => {
      console.log(val)
     acc += (val.estimatedCostInCents / 100);
    return acc;
    }, 0)

    //

  }

  retrieveInstructions() {
  }
}

module.exports = Recipe;
