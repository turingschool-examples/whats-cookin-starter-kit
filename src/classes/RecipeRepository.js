class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filteredByName(name) {
    // Recipe array > recipe object > name > string
      const justNames = this.recipeData.filter((recipe) => {
      console.log('Recipe dot name: ', recipe.name)
      return recipe.name === name;
    })

    return justNames;
  }
}

export default RecipeRepository;
