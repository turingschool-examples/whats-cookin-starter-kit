class RecipesContainer {
  constructor(testData) {
    this.data = testData;
  }

  tagRecipes(tag) {
    const taggedRecipes = this.data.filter(element => {
      return element.tags.includes(tag);
    }).map(element1 => element1.id);
    console.log(taggedRecipes);
    return taggedRecipes;
  }

}

export default RecipesContainer;
