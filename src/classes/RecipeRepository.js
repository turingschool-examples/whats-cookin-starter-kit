class RecipeRepository {
  constructor( recipeList ) {
    this.recipes = recipeList;
    
  };

  filterRecipeByTag(userInput) {
     return this.recipes.filter((recipe) => {
      if( recipe.tags.includes(userInput) ) {
        console.log({recipe})
        return recipe
      }
    });
  }

  filterRecipeByName(userInput){
    return this.recipes.filter((recipe) => {
      if( recipe.name.includes(userInput) ) {
        console.log({recipe})
        return recipe
      }
    });
  }
}

export default RecipeRepository;
