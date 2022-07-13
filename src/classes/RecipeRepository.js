import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipe, createAllRecipes) {
    this.recipe = recipe
    // this.recipe = createAllRecipes(recipeData)
  }
  createAllRecipes() {
    return 
  }
  filterByTag() {
    return this.recipe.filter(tag => {
      // const recipes = recipeData.filter(tag => {
      return tag.tags.includes(tag)
    })
    /* know we need to find whatever tag the user inputs and check if 
    it exists in the recipesData file*/
  }
}

export default RecipeRepository;
