import Recipe from "./Recipe"

class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipeList = this.instantiateRecipes(recipeData, ingredientsData)
    this.featuredRecipe = this.getFeaturedRecipe()
    this.allIngredients = this.buildAllIngredientsList(this.recipeList)
  }

  getFeaturedRecipe() {
    let randomNum = Math.floor(Math.random() * this.recipeList.length)
    return this.recipeList[randomNum]
  }

  instantiateRecipes(recipeData, ingredientsData) {
    return recipeData.map(recipe => new Recipe(recipe, ingredientsData))
  }

  buildAllIngredientsList() {
    let allIDs = []
    return this.recipeList.reduce((ingredients, recipe) => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.unit.slice(-1) === 's') {
          let length = ingredient.unit.length
          ingredient.unit = ingredient.unit.slice(0, length - 1)
        }
        if (!allIDs.includes(ingredient.id)) {
          ingredients.push({ id: ingredient.id, name: ingredient.name, unit: ingredient.unit })
        }
        allIDs.push(ingredient.id)
      })
      return ingredients
    }, [])
  }
}

export default RecipeRepository
