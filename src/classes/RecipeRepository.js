import recipeTestData from '../data/recipeTestData';
// import ingredient


class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
    this.filteredList = null; 
  };

  filterByTag(tag) {
    const findByTag = recipeTestData.filter(recipe => {
      if (recipe.tags.includes(tag)) {
        return recipe;
      } else if (!recipe.tags.includes(tag)) {
        return 'Recipe Not Found';
      }
    });
    
    this.filteredList = findByTag;
    return findByTag;
  };

  filterByName(foodName) {
    const findbyName = recipeTestData.filter(recipe => {
      if (recipe.name === foodName) {
        return recipe;
      } else if (recipe.name !== foodName) {
        return 'Recipe Not Found';
      }
    });
    this.filteredList = findbyName;
    return findbyName;
  };
};

export default RecipeRepository;
