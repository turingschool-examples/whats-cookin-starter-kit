class Recipes {
  constructor(name, id, image, ingredients, instructions, tags) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
    this.isFavorite = false;
  }
  checkPantry = () => {

    //return the difference of user.pantry vs required ingredients via id & run getMissingIngredientCost();
  }
}

module.exports = Recipes