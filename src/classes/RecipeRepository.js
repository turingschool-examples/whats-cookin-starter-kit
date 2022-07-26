
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
    const filteredByTag = this.recipeData.filter(recipe => {
      const toUpper = tag.toUpperCase();
      let tagToUpper;
      recipe.tags.forEach(tag => {
        tagToUpper = tag.toUpperCase();
      })
      if (toUpper === tagToUpper) {
        return true;
        }
      });
      return filteredByTag;
  }

  listRecipeNames(name) {
  const filteredByName = this.recipeData.filter(recipe => {
    const toUpper = name.toUpperCase();
    const nameToUpper = recipe.name.toUpperCase();
      if (toUpper === nameToUpper) {
        return true;
      }
  });
    return filteredByName;
  }
}

export default RecipeRepository;
