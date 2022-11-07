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
    const justTags = this.recipeData.filter((recipe) => {
      let lowerCaseTag = tag.toLowerCase()
      return recipe.tags.includes(lowerCaseTag)
    })
    return justTags
  }

  returnAllRecipesObjectsArray() {
    let recipeArray = this.recipeData.map((recipe) => {
      return new Recipe(recipe);
    })
    return recipeArray;
  }
}

export default RecipeRepository;
