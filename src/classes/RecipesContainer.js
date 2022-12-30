class RecipesContainer {
  constructor(testData) {
    this.data = testData;
  }

  tagRecipes(tag) {
    const taggedRecipes = this.data.filter(element => {
      return element.tags.includes(tag);
    }).map(element1 => element1.id);
    return taggedRecipes;
  }

  findRecipeByName(foodName) {
    const foundRecipe = this.data.find(element => {
      return element.name === foodName;
    });
    return foundRecipe;
  }

  listRecipes() {
    const recipeList = this.data.map(element => {
      return element.name;
    }).sort();
      return recipeList;
  }

}

export default RecipesContainer;
