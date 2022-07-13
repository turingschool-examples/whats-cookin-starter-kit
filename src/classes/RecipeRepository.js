class RecipeRepository {
  constructor( recipeList ) {
    this.recipes = recipeList 
  };

  filterRecipeByTag(userInput){
    let tagMatches = this.recipes.tags.filter((tag) => {
      return userInput.toLowerCase() == tag
    })
      return tagMatches[0]
  };
  
  filterRecipeByName(userSearch){

    let recipeMatch = []
    if(this.recipes.name == userSearch){
      recipeMatch.push(this.recipes.name)
    }
    return recipeMatch[0]
  };
}

export default RecipeRepository;
