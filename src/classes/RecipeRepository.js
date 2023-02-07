class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
    // One class to get you started!
  }
  getRecipeByTag(tag) {
    const recipeTag = this.recipes.filter(recipe => recipe === tag);
    console.log(recipeTag)
    }

    getRecipeByName(name){
      const recipeName = this.recipes.filter(recipe => recipe === name);
      console.log(recipeName)
    }
}

export default RecipeRepository;
