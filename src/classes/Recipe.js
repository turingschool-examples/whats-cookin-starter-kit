import IngredientsLibrary from './ingredientsRepository';

class Recipe {
  constructor(recipe, ingredientsInfo) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredientsData = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientsLibrary = new IngredientsLibrary(ingredientsInfo);
  }

  //gatherIngredients()
  
}
// let newRecipe = new Recipe();

export default Recipe;