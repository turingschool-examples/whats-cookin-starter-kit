class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData || [];
  }
  filterByTag(tagName){
    const filteredRecipes = this.recipeData.filter((recipe) => {
      return recipe.tags.includes(tagName)
    })
    return filteredRecipes;
  }
  filterByName(recipeName){
    const filteredRecipes = this.recipeData.filter((recipe) => {
      return recipe.name.includes(recipeName)
    })
    return filteredRecipes;
  }
}
export default RecipeRepository;