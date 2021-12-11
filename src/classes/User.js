class User {
    constructor(user) {
      this.name = user.name;
      this.id = user.id;
      this.pantry = user.pantry;
      this.favoriteRecipeIds = [];
      this.savedForLaterRecipeIds = [];
    }
    addRecipeToFavorites(recipeId) {
      //dynamically grab recipe ID
      this.favoriteRecipeIds.push(recipeId);
    }
    addRecipeToSavedForLater(recipeId) {
      //dynamically grab recipe ID
      this.savedForLaterRecipeIds.push(recipeId);
    }
    removeRecipeToFavorites(recipeId) {
      //dynamically grab recipe ID
      const index = this.favoriteRecipeIds.indexOf(recipeId)
      if (index > -1) {
        this.favoriteRecipeIds.splice(index, 1)
      }
    }
    removeRecipeToSavedForLater(recipeId) {
      //dynamically grab recipe ID
      const index = this.savedForLaterRecipeIds.indexOf(recipeId)
      if (index > -1) {
        this.savedForLaterRecipeIds.splice(index, 1)
      }
    }
    filterFavoriteRecipes() {
      //on click, send array to DOM to populate recipe cards
    }
    searchFavoriteRecipes() {
      //on click, send array to DOM to populate recipe cards
    }
}
export default User;