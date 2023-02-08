import recipeTestData from '../data/recipeTestData';
// import ingredient


class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
  }

  filterByTag(tag) {
    const findByTag = recipeTestData.filter(recipe => {
      if(recipe.tags.includes(tag)) {
        return recipe;
      }
    });
    return findByTag;
  };

  filterByName(nameId) {
    const findbyName = recipeTestData.filter(food => food.id === nameId);
    return findbyName;
  }
};

export default RecipeRepository;
