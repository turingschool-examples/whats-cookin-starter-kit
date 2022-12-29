class RecipesContainer {
  constructor(testData) {
    this.data = testData;
  }

  tagRecipes(tag) {
    const taggedRecipes = this.data.filter(element => {
      return element.tags.includes(tag);
    }).map(element1 => element1.id);
    // console.log(taggedRecipes);
    return taggedRecipes;
  }

  findRecipeByName(foodName) {
    const foundRecipe = this.data.find(element => {
      // console.log("foodName: ", foodName);
      return element.name === foodName;
    });
    // console.log("foundRecipe: ", foundRecipe);
    return foundRecipe;
  }

  listRecipes() {
    const recipeList = this.data.map(element => {
      return element.name;
    })
    // console.log(recipeList);
      return recipeList;
  }

}

export default RecipesContainer;
