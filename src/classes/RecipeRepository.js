import recipeTestData from '../data/recipeTestData';
// import ingredient


class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
    this.filteredList = null; 
  }

  filterByTag(tag) {
    const findByTag = recipeTestData.filter(recipe => recipe.tags.includes(tag));
    this.filteredList = findByTag;
    return findByTag;
  };

  filterByName(foodName) {
    const findbyName = recipeTestData.filter(food => food.name === foodName);
    this.filteredList = findbyName;
    return findbyName;
  }
};

export default RecipeRepository;
