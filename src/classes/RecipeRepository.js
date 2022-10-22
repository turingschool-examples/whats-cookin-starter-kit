class RecipeRepository {
  constructor(newRecipes) {
    this.newRecipes = newRecipes;
  }
  filterByTag(tagName) {
    const tagFilter = this.newRecipes.filter((recipe) => {
      if (recipe.tags.includes(tagName)) {
        return recipe;
      }
    });
    return tagFilter;
  }
  filterByName(recipeName) {
    const nameFilter = this.newRecipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(recipeName.toLowerCase());
    });
    return nameFilter;
  }
}

export default RecipeRepository;
