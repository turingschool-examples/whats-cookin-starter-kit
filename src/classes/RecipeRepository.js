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

  filterRecipeByName(userSearch){
    let recipeMatch = []
    if(this.recipes.name == userSearch){
      recipeMatch.push(this.recipes.name)
    }
    return recipeMatch[0]
  };
}

export default RecipeRepository;
