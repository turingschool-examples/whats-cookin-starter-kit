import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filteredByName(name) {
    const justNames = this.recipeData.filter((recipe) => {
      let lowerCaseRecipe = recipe.name.toLowerCase()
      let lowerCaseName = name.toLowerCase()
      return lowerCaseRecipe.includes(lowerCaseName);
    })
    return justNames;
  }
  filteredByTag(tag) {
    let lowerCaseFilteredTagArray = []
    const justTags = this.recipeData.filter((recipe) => {
      let lowerCaseRecipe = recipe.tags
      let lowerCaseTag = tag.toLowerCase()
      lowerCaseRecipe.forEach(element => {

        lowerCaseFilteredTagArray.push(element.toLowerCase())
      })
      return lowerCaseRecipe.includes(lowerCaseTag)
    })
    return lowerCaseFilteredTagArray
  }
  returnAllRecipesObjectsArray() {
    let recipeArray = this.recipeData.map((recipe) => {
      return new Recipe(recipe);
    })
    return recipeArray;
  }
}

export default RecipeRepository;
