const {recipeTestData} = require('../data/recipeTestData');
// import ingredient


class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData
  }
  filterByTag(tag) {
    // console.log(this.recipeList)
    // console.log(recipeTestData)
    const food = recipeTestData.filter(recipe => recipe.tags.includes(tag));
    // console.log(food)
    return food
  };
};

export default RecipeRepository;
