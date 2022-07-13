import Recipe from "./Recipe";

class RecipeRepository {
  constructor() {
    this.recipes = [];
    this.allTags = [];
  }
  addRecipe(recipe) {
    this.recipes.push(recipe);
    this.addTags(recipe.tags);
  }

  addTags(newTags) {
    newTags.forEach((tag) => {
      if (!this.allTags.includes(tag)) {
        this.allTags.push(tag);
      }
    });
  }

  filterRecipesByTag(tag) {
    let matchingRecipes = this.recipes.filter((recipe) => {
      if (recipe.tags.includes(tag)) {
        return true;
      }
    });
    return matchingRecipes;
  }

  filterRecipesByName(input) {
    let matchingRecipes = this.recipes.filter((recipe) => {
      let lowerCaseRecipeName = recipe.name.toLowerCase();
      let lowerCaseInput = input.toLowerCase();
      if (lowerCaseRecipeName.includes(lowerCaseInput)) {
        return true;
      }
    });
    return matchingRecipes;
  }
}

export default RecipeRepository;
