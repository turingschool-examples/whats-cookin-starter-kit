class RecipeRepository {
  constructor(recipes) {
    this.recipeList = recipes;
    this.filteredRecipes = [];
    this.matchingRecipes = [];
  }
  // searchRecipes(input) {
  //   let userInput = input.split(' ');
  //   console.log("RECIPES IN SEARCH FUNC", recipes);
  //
  //   this.recipeList.forEach(recipes => {
  //     this.searchByName(userInput, recipes)
  //     this.searchByIngredient(userInput, recipes);
  //   })
  // }
  filterByTag(mealType) {
    let recipesTypes = this.recipeList.filter(recipe => recipe.tags.includes(mealType));
    this.filteredRecipes.push(recipesTypes)
    //Use DOM manipulation to campture value on tags
  }
  searchByName(userInput) {
    const keyword = userInput.toLowerCase();
    return this.recipeList.filter(recipe =>
      recipe.name.toLowerCase().includes(keyword));
   }
   // searchByIngredient(userInput, recipes) {
   //   let keyword = userInput.join(' ').toLowerCase();
   //   console.log("Ingredient input", keyword)
   //    let ingredientNames = recipe.ingredients.map(ingredient => {
   //      return ingredient.name});
   //   let filterName = ingredientNames.filter(name => {
   //     if (userInput.join(' ').includes(name)) {
   //       this.matchingRecipes.push(name)
   //     }
   //     return this.matchingRecipes
   //   })
   // }
}

export default RecipeRepository;

//Old Filter Ingredient
// let filteredIngredient = this.recipeList.filter(recipe => (recipe.name.includes(ingredientName)))
// this.filteredIngredientNames = filteredIngredient;
// return filteredIngredient;
//Old Filtered name
// let filteredNames = this.recipeList.filter(recipe => (recipe.name.includes(mealName)))
// this.filteredRecipeNames = filteredNames;
// return filteredNames;
