class RecipeRepository {
  constructor(recipeData) {
      this.listOfAllRecipes = recipeData
  };

  filterByTag(tag) {
return this.listOfAllRecipes.filter(recipe => recipe['tags'].includes(tag));
  };

  filterByName(name) {
return this.listOfAllRecipes.filter(recipe => recipe.name === name);
  };
};

export default RecipeRepository;

//when instantiating recipeRepository talked with Brett and will be a global variable named allRecipes
