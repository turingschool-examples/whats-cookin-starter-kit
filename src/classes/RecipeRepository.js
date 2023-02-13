import Recipe from "./Recipe";

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
  }

  addRecipe(recipeToAdd) {
    if (!this.recipes.find(recipe => recipe.id === recipeToAdd.id)) {
      this.recipes.push(new Recipe(recipeToAdd));
    }
  }
  removeRecipe(recipeId) {
    this.recipes = this.recipes.filter(recipe => recipeId !== recipe.id);

  }
  filterByTag(tag) {

    //Goal: filter by tag.
    //Input: Object
    //Output: Array of objects
    //Steps: First we need to loop through the tags array. For each tag we want to look through the recipes and see if the tags match. If so push it into the filtered recipes.
    if (Array.isArray(tag)) {
      this.filteredRecipes = [];
      this.recipes.forEach((recipe) => {
        tag.forEach((tag) => {
          if (recipe.tags.includes(tag) && !this.filteredRecipes.includes(recipe)) {
            this.filteredRecipes.push(recipe)
          }
        })
      })
    } else {
      this.filteredRecipes = this.recipes.filter((recipe) =>
        recipe.tags.includes(tag)
      );
    }
    if (this.filteredRecipes.length === 0) {
      this.filteredRecipes = null;
      return
    } else {
      return this.filteredRecipes;
    }

  }

  filterByName(name) {
    if (!name) {
      return;
    }
    this.filteredRecipes = this.recipes.filter(recipe => (recipe.name.toUpperCase().includes(name.toUpperCase())));
    if (this.filteredRecipes.length === 0) {
      this.filteredRecipes = null;
      return
    }
    return this.filteredRecipes
  }
}
export default RecipeRepository;