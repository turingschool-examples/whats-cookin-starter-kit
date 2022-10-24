import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filteredByName(name) {
    const justNames = this.recipeData.filter((recipe) => {
      return recipe.name.includes(name);
    })
    return justNames;
  }
  filteredByTag(tag) {
    const justTags = this.recipeData.filter((recipe) => {
      return recipe.tags.includes(tag)
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
