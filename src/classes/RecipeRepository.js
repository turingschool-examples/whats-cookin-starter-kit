class RecipeRepository {
  constructor(recipeData) {
      this.listOfRecipes = recipeData
  };

  filterByTag(tag) {

return this.listOfRecipes.filter(recipe => recipe.tags.find(aTag => aTag === tag))

  };

  filterByName(name) {
return this.listOfRecipes.filter(recipe => recipe.name === name)
  };
}

export default RecipeRepository;
