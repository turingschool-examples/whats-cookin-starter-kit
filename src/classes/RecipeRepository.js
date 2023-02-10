import Recipe from './recipeClass';

class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData.map(recipe => new Recipe(recipe));
    this.filteredList; 
  };

  filterByTag(tag) {
    const findByTag = this.recipeList.filter(recipe => recipe.tags.includes(tag));
    this.filteredList = findByTag;
    return findByTag;
  };

  filterByName(foodName) {
    const findByName = this.recipeList.filter(recipe => recipe.name === foodName);
    this.filteredList = findByName;
    return findByName;
  };
};

export default RecipeRepository;