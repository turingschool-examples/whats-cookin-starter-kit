import Recipe from "./Recipe";

class RecipeRepository {
  constructor( recipeList ) {
    this.recipes = recipeList;
    // this.ingredientList = ingredientList;
    // this.repository = this.recipes.map(recipe => new Recipe( recipeList, ingredientList))
    // console.log(this.recipes)
  };

  filterRecipeByTag(userInput) {
     return this.recipes.filter((recipe) => {
      if( recipe.tags.includes(userInput) ) {
        // console.log({recipe})
        return recipe
      }
    });
  }

  filterRecipeByName(userInput){
    return this.recipes.filter((recipe) => {
      if( recipe.name.includes(userInput) || recipe.name.toLowerCase().includes(userInput) ) {
        // console.log({recipe})
        return recipe
      }
    });
  }
}

export default RecipeRepository;
