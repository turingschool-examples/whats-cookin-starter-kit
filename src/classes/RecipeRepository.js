class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
    // this.storedRecipes 
  }
  
  getRecipeByTag(tag) {
   return this.recipes.filter(recipe => recipe.tags.includes(tag));
   
}

    getRecipeByName(name){
    return this.recipes.filter(recipe => recipe.name.includes(name));
    
    }
}

export default RecipeRepository;
