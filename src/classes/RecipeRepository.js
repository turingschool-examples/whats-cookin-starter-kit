class RecipeRepository {
  constructor(recipes) {
    this.recipeList = recipes;
    this.filteredRecipes = null;
    this.filters = []
  }

  filterByTag(mealType) {
   let filteredArray = this.recipeList.filter(recipe => (recipe.tags.includes(mealType)))
   this.filteredRecipes = filteredArray;
   return filteredArray;
  }
  filterByMultipleTags(mealType) {
    this.filters.push(mealType);
    console.log(this.filters)
    let filteredArray = this.recipeList.filter(recipe => (recipe.tags.includes(this.filters)))
    this.filteredRecipes = filteredArray;
    return filteredArray;

  }
}

export default RecipeRepository;
