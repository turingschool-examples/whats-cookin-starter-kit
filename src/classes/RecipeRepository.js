import Recipe from "./Recipe";

class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
    this.recipeList = [];
  }

  listRecipes() {
    this.recipeData.forEach(recipe => {
      this.recipeList.push(new Recipe(recipe));
    });
  }

  findRecipeByTag(tag) {
    if (this.recipeList.filter(recipe => recipe.tags.includes(tag)).length) {
      return this.recipeList.filter(recipe => recipe.tags.includes(tag));
    } 
    
    return `Sorry, no recipe with ${tag}.`;
  }

  findRecipeByName(name) {
    if (this.recipeList.filter(recipe => recipe.name.includes(name)).length) {
      return this.recipeList.filter(recipe => recipe.name.includes(name));
    } 
    
    return `Sorry, no recipe named ${name}.`;
  }
}

export default RecipeRepository;
