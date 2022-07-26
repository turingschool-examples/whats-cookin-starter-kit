
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

  listRecipeTags(tags) {
    const toUpper = tags.toUpperCase();
    const filteredByTag = this.recipeData.filter(recipe => {
      let tagToUpper;
      let capTags = []
      recipe.tags.forEach(tag => {
        tagToUpper = tag.toUpperCase();
        capTags.push(tagToUpper);
      })
      if (capTags.includes(toUpper)) {
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
