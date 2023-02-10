class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favorites = [];
  }

  recipesToCook(recipe) {
    if (!this.favorites.includes(recipe)) {
      this.favorites.push(recipe);
    }
  }

  removeRecipes(recipe) {
    this.favorites.splice(recipe, 1);
  }

  filterFavTag(tag) {
    const filteredRecipe = this.favorites.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
    return filteredRecipe;
  }

  filterFavName(name) {
    const filteredName = this.favorites.filter((recipe) => {
      return recipe.name.toLowerCase().includes(name);
    });
    return filteredName;
  }
}

export default User;
