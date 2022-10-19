import Recipe from '../classes/Recipe'

class RecipeRepository {
  constructor(data) {
    this.recipesList = this.createRecipesClassArray()
    this.data = data
    
  }

  createRecipesClassArray() {
    console.log('LABEL', this)
    let recipesClassArray = []
    this.data.forEach((recipe) => {
      let modifiedRecipeClass = new Recipe(recipe)
      recipesClassArray.push(modifiedRecipeClass)
    })
    console.log(recipesClassArray)
    return recipesClassArray
  }
  

  filterByTag() {
    this.recipesList.filter(() => {

    })

  }

}

export default RecipeRepository;
