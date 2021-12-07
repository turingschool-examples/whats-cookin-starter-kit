class RecipeRepository {
  constructor(recipes) {
    this.recipeList = recipes;
    this.filteredRecipes = null;
  }

  filterByTag(mealType) {
   let filteredArray = this.recipeList.filter(recipe => (recipe.tags.includes(mealType))) 
   this.filteredRecipes = filteredArray;
   return filteredArray;
  }
}

export default RecipeRepository;
