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

  filterByName(mealName) {
    let filteredNames = this.recipeList.filter(recipe => (recipe.name.includes(mealName)))
    this.filteredRecipeNames = filteredNames;
    return filteredNames;
   }

   filterByIngredient(ingredientName) {
    let filteredIngredient = this.recipeList.filter(recipe => (recipe.name.includes(ingredientName)))
    this.filteredIngredientNames = filteredIngredient;
    return filteredIngredient;
   }
}

export default RecipeRepository;
