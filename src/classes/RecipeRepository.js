import Recipe from '../classes/Recipe'

class RecipeRepository {
  constructor(ingredientData,data) {
    this.ingredientData = ingredientData
    this.data = data
    this.recipesList = this.createRecipesClassArray()
  }

  createRecipesClassArray() {
    let recipesClassArray = []
    this.data.forEach((recipe) => {
      let modifiedRecipeClass = new Recipe(this.ingredientData, recipe)
      recipesClassArray.push(modifiedRecipeClass)
    })
    return recipesClassArray
  }
  
  filterByTag(tag) {
    let tagFilterResults = this.recipesList.filter(recipe => recipe.tags.includes(tag))
    return tagFilterResults
  }

  filterByName(name) {
    let nameFilterResults = this.recipesList.filter(recipe => recipe.name.includes(name))
    return nameFilterResults
  }
}

export default RecipeRepository;
