class RecipeRepository {
  constructor(recipes) {
    this.recipeList = recipes;
    this.filteredRecipes = null;
    this.filters = []
    this.matchingRecipes = [];
  }
  // searchRecipes(input) {
  //   let userInput = input.split(' ');
  //   this.recipeList.forEach(recipes => {
  //     this.searchByIngredient(userInput, recipe);
  //   })
  // }
  filterByTag(mealType) {
   let filteredArray = this.recipeList.filter(recipe => (recipe.tags.includes(mealType)))
   this.filteredRecipes = filteredArray;
   return filteredArray;
  }
  filterByMultipleTags(mealType) {
    this.filters.push(mealType);
    let filteredArray = this.recipeList.filter(recipe => (recipe.tags.includes(this.filters)))
    this.filteredRecipes = filteredArray;
    return this.filteredRecipes;
  }
  filterByName(mealName) {
    let filteredNames = this.recipeList.filter(recipe => (recipe.name.includes(mealName)))
    this.filteredRecipeNames = filteredNames;
    return filteredNames;
   }
   searchRecipes(input) {
     let userInput = input.split(' ');
     this.recipeList.forEach(recipes => {
       this.searchByIngredient(userInput, recipe);
     })
   }
   searchByIngredient(input, recipes) {
     let userInput = input.split(' ');
     //Recipes ===  recipe array
     console.log(recipes)
     let recipe = recipes.map(recipe => {
         this.searchByIngredient(userInput, recipe);
       })

      let ingredientNames = recipe.ingredients.map(ingredient => {
        return ingredient.name});
     let filterName = ingredientNames.filter(name => {
       if (userInput.join(' ').includes(name)) {
         this.matchingRecipes.push(name)
       }
       return this.matchingRecipes
     })
   }
}

export default RecipeRepository;


// let filteredIngredient = this.recipeList.filter(recipe => (recipe.name.includes(ingredientName)))
// this.filteredIngredientNames = filteredIngredient;
// return filteredIngredient;
