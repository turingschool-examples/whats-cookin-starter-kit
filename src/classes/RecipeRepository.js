// import Recipe from "./Recipe";

class RecipeRepository {
  constructor( recipeList ) {
    this.recipes = recipeList;
  };

  filterRecipeByTag( userInput ) {
     return this.recipes.filter( recipe => {
      if( recipe.tags.includes( userInput ) ) {
        return recipe
      }
    } );
  }

  filterRecipeByName( userInput ){
    return this.recipes.filter( recipe => {
      if( recipe.name.includes( userInput ) || recipe.name.toLowerCase( ).includes( userInput ) ) {
        return recipe
      }
    } );
  }
}

export default RecipeRepository;
