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
    console.log('LABEL', dataPiece)
    var byName = this.data.filter((dataPiece) => {
      console.log('LABEL', dataPiece)
      name === 'Loaded Chocolate Chip Pudding Cookie Cups'
    })
    return byName
  }

  filterByTag() {
  }

}

export default RecipeRepository;
