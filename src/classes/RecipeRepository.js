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
    let queryResult = this.recipes.filter((recipe) => {
      return userSearch == recipe.name
    })
      return queryResult
  };
}

export default RecipeRepository;




// It should have a parameter to take in recipe data.
// It should have methods to determine:
// A filtered list of recipes based on a tag. (Extension option: filtering by multiple tags)
// A filtered list of recipes based on its name. (Extension option: filtering by name or ingredients)
