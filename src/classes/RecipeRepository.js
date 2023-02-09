import Recipe from './recipeClass';

class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
    this.filteredList = null; 
    this.allRecipes = null;
  };

  createRecipeList() {
    const recipes = this.recipeList.map(recipe => new Recipe(recipe));
    this.allRecipes = recipes;
    return recipes;
  };

  filterByTag(tag) {
    const findByTag = this.allRecipes.filter(recipe => recipe.tags.includes(tag));
    if (findByTag === []) {
      return 'Recipe Not Found';
    } else {
      this.filteredList = findByTag;
      return findByTag;
    };
  };

  filterByName(foodName) {
    const findbyName = this.allRecipes.filter(recipe => recipe.name === foodName);
    if (findbyName === []) {
      return 'Recipe Not Found';
    } else {
      this.filteredList = findbyName;
      return findbyName;
    };
  };
};

export default RecipeRepository;