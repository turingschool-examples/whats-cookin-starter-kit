class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
    // this.storedRecipes 
  }
  
  getRecipeByTag(tag) {
    const viewRecipeByTag = this.recipes.filter(recipe => recipe.tags.includes(tag));
   return viewRecipeByTag
}

    getRecipeByName(name){
    return this.recipes.filter(recipe => recipe.name.includes(name));
    
    }
}

export default RecipeRepository;
