

class Recipe {
  constructor(id, name, image, tags, instructions, ingredients ) {
    this.id = id;
    this.tags = tags;
    this.name = name;
    this.image = image;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.costPerRecipe = 0;
    // this.ingredientPerRecipe = [];
  }



  filterByIngredients() {
  }

  findIngredientPerRecipe(recipe) {
    return this.ingredients.forEach((ingredient) => {
        this.ingredientPerRecipe.push(ingredient)
        // console.log(ingredient);
        // console.log(this.ingredientPerRecipe);
    });
  }

  findCostPerRecipe(recipe) {
    // console.log(this.ingredients, ingredient.estimatedCostInCents)
    // console.log(ingredient.estimatedCostInCents)
    // for each recipe get all the ingredients
    // store all the ingredients
    // fore each ingredient get the costPerRecipe
    // console.log(recipe.ingredients[0].id); // for each recipe ingredients id
    // console.log(ingredient);
    return this.ingredientPerRecipe.map((ingredient) => {
      console.log(ingredient.quanitity)
      let ingredientQuanitity = ingredient.quanitity;
      return ingredientQuanitity.map(item => item.amount);
    })
    // console.log(total);
    return this.costPerRecipe = total;
  }

  retrieveInstructions(recipe) {
    return recipe.instructions;
  }
}

// module.exports = Recipe;

if (typeof module !== 'undefined'){
  module.exports = Recipe;
}
