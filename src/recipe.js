

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
  }



  filterByIngredients() {
  }
  findIngredientPerRecipe(ingredient) {
    return this.ingredients.forEach((ingredient) => {
        this.ingredientPerRecipe.push(ingredient)
        console.log(this.ingredientPerRecipe)
    });
  }

  findCostPerRecipe(ingredient) {
    // console.log(this.ingredients, ingredient.estimatedCostInCents)
    // console.log(ingredient.estimatedCostInCents)
    // for each recipe get all the ingredients
    // store all the ingredients
    // fore each ingredient get the costPerRecipe

    return this.ingredientPerRecipe.map((ingredient) => {
      // console.log(ingredient.quanitity)
      let ingredientQuanitity = ingredient.quanitity;
      console.log(ingredientQuanitity);
      return ingredientQuanitity.map(item => item.amount);
    })
    console.log(total)
    return this.costPerRecipe = total;


  findCostPerRecipe() {
  }

  retrieveInstructions() {
  }
}

module.exports = Recipe;
