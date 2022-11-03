import Recipe from "./Recipe"

class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipeList = this.instantiateRecipes(recipeData, ingredientsData)
    this.featuredRecipe = this.getFeaturedRecipe()
  }

  getFeaturedRecipe() {
    let randomNum = Math.floor(Math.random() * this.recipeList.length)
    return this.recipeList[randomNum]
  }

  instantiateRecipes(recipeData, ingredientsData) {
    return recipeData.map(recipe => new Recipe(recipe, ingredientsData))
  }
}

export default RecipeRepository
