class User {
    constructor(user) {
      this.name = user.name;
      this.id = user.id;
      this.pantry = user.pantry;
      this.recipesToCook = [];
      this.favoriteRecipeIds = [];
      this.savedForLaterRecipeIds = [];
    }
    addRecipeToFavorites(recipeId) {
      if(!this.favoriteRecipeIds.includes(recipeId)) {
      this.favoriteRecipeIds.push(recipeId)
      }
    }
    addRecipeToSavedForLater(recipeId) {
      if(!this.savedForLaterRecipeIds.includes(recipeId)) {
      this.savedForLaterRecipeIds.push(recipeId);
      }
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
    filterFavoriteRecipes(mealType) {
      return this.favoriteRecipeIds.filter(recipe => recipe.tags.includes(mealType));
    }
    searchFavoriteRecipes(userInput) {
      //on click, send array to DOM to populate recipe cards
    const keyword = userInput.toLowerCase();
    this.favoriteRecipeIds.forEach(recipe => {
      this.searchFavoriteRecipesByName(keyword)
      this.searchFavoriteRecipesByIngredient(keyword)
      })
    }
    searchFavoriteRecipesByName(keyword) {
      return this.recipeList.filter(recipe => {
        return recipe.name.toLowerCase().includes(keyword)
      })
    }
    searchFavoriteRecipesByIngredient(keyword) {
      const matchyMatchy = ingredient => ingredient.name.includes(keyword);
      let filteredRecipesByIngredient = this.recipeList.filter((recipe => recipe.ingredients.some(matchyMatchy)))
      this.matchingRecipes.push(filteredRecipesByIngredient)
    }
}
export default User;
