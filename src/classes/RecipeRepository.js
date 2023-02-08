class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
    this.storedRecipes 
  }

  getRecipeByTag(tag) {
    this.storedRecipes = this.recipes.filter(recipe => recipe.tags.includes(tag));
    console.log(this.storedRecipes);
    return this.storedRecipes;
}

    getRecipeByName(name){
      this.storedRecipes = this.recipes.filter(recipe => recipe.name.includes(name));
      console.log(this.storedRecipes)
      return this.storedRecipes
    }
}

export default RecipeRepository;
