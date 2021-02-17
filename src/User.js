class User {
  constructor(userObject) {
    this.name = userObject.name;
    this.id = userObject.id;
    this.pantry = userObject.pantry;
    this.favoriteRecipesArray = [];
    this.recipesToCookArray = [];
  }

  favoriteRecipes(recipe) {
    if (!this.favoriteRecipesArray.includes(recipe)) {
      this.favoriteRecipesArray.push(recipe);
    }
  }

  recipesToCook(recipe) {
    if (!this.recipesToCookArray.includes(recipe)) {
      this.recipesToCookArray.push(recipe);
    }
  }

}


if (typeof module !== 'undefined') {
  module.exports = User;
}