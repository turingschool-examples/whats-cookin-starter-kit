import recipeTestData from '../data/recipeTestData';
// import ingredient


class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
  }

  filterByTag(tag) {
    const food = recipeTestData.filter(recipe => {
      if(recipe.tags.includes(tag)) {
        return recipe;
      }
    });
    return food;
  };
};

export default RecipeRepository;
