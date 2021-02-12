class User {
  constructor(userData, ingredientsData) {
    this.user = userData;
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.favorites = [];
    this.planned = [];
    this.ingredientsData = ingredientsData
  }
  addFavorite(recipe) {
    this.favorites.push(recipe);
  }
  removeFavorite(recipe) {
    if (this.favorites[0]) {
      const index = this.favorites.indexOf(recipe);
      this.favorites.splice(index, 1);
    }
  }
  getFavoritesByTags(tags) {
    let filteredFavorites = this.favorites.filter(recipe => {
      return tags.filter(tag => {
        return recipe.tags.includes(tag);
      });
    });
    return filteredFavorites;
  }

  getFavoritesByName(recipeName) {
    return this.favorites.filter(recipe => recipe.name === recipeName);
  }

  getFavoritesByIngredient(searchIngredientName) {
    const ingredientId = this.ingredientsData.find(ingredient => {
      return ingredient.name === searchIngredientName
    }).id;
    const filteredFavorites = this.favorites.filter(recipe => {
      return recipe.ingredients.find(({id}) => id === ingredientId);
    });
    return filteredFavorites;
  }

  addPlanned(recipe) {
    this.planned.push(recipe);
  }
}

module.exports = User;
