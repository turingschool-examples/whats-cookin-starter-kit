
import recipeData from '../data/recipes'
import Recipe from '../classes/Recipe'

class RecipeRepository {
 constructor(recipes) {
   this.recipeData = null || recipes;
 }

  convertRecipeObjects() {
    const recipeObjs = recipeData.map(recipe => new Recipe(recipe));
    return recipeObjs;
  }

  listRecipeTags(tag) {
    const filteredByTag = this.recipeData.filter(recipe => recipe.tags.includes(tag));
      return filteredByTag;
  }

  listRecipeNames(name) {
  const filteredByName = this.recipeData.filter(recipe => recipe.name.includes(name));
    return filteredByName;
  }
}

export default RecipeRepository;
