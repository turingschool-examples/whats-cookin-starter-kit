class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }

  filterTags(tag) {
    let filteredByTag = this.recipes.filter(recipe => {
      if (recipe.tags.includes(tag)) {
      return recipe
    }
    });
      return filteredByTag
  }

  filterNames(name) {
    let filteredByName = this.recipes.filter(recipe => {
      if (recipe.name.includes(name)) {
      return recipe
    }
    });
      return filteredByName
  }
}

export default RecipeRepository;
