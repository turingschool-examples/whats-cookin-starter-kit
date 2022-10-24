import Recipe from "./Recipe"

class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipeList = this.instantiateRecipes(recipeData, ingredientsData)
    this.featuredRecipe = this.getFeaturedRecipe()
  }

  filterByNameOrIngredient(input) {
    let filteredRecipes = []
    input = input.toLowerCase()
    this.recipeList.forEach(recipe => {
      if (recipe.name.toLowerCase().includes(input)) {
        filteredRecipes.push(recipe)
      } else {
        recipe.ingredients.forEach(ingredient => {
          if (ingredient.name.toLowerCase().includes(input)) {
            if (!filteredRecipes.includes(recipe)) {
              filteredRecipes.push(recipe)
            }
          }
        })
      }
    })
    return filteredRecipes
  }

  filterByTag(tag) {
    return this.recipeList.filter(recipe => recipe.tags.includes(tag))
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
