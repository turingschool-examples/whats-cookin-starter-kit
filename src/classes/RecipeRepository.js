import recipeTestData from '../data/recipeTestData';
// import ingredient


class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
    this.filteredList = null; 
  };

  filterByTag(tag) {
    const findByTag = recipeTestData.filter(recipe => recipe.tags.includes(tag));
    if (findByTag === []) {
      return 'Recipe Not Found';
    } else {
      this.filteredList = findByTag;
      return findByTag;
    }
  };

  filterByName(foodName) {
    const findbyName = recipeTestData.filter(recipe => recipe.name === foodName);
    if (findbyName === []) {
      return 'Recipe Not Found';
    } else {
      this.filteredList = findbyName;
      return findbyName;
    }
  };
};

export default RecipeRepository;
