class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
    // One class to get you started!
  }

  filterTags(tag) {
    let filteredByTag = this.recipes.filter(recipe => {
      return recipe.tags === tag;
    });
      return filteredByTag
  }

  filterNames(name) {
    let filteredByName = this.recipes.filter(recipe => {
      return recipe.name === name;
    });
      return filteredByName
  }

}

export default RecipeRepository;
