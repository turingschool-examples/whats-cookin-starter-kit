class RecipeRepository {
  constructor(data) {
    this.recipeArray = this.createNewRecipe()
    this.data = data
  }

  createNewRecipe() {
    var newArray = []
    var newRecipe = this.data.forEach((recipe) => {
      new Recipe (recipe)
    })
    newArray.push(newRecipe)
    return newArray
  }

  filterByName() {
    this.data.filter((data) => {})
  }

  filterByTag() {
  }

}

export default RecipeRepository;
