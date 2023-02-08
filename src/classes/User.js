class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favorites = [];
  };

  recipesToCook(recipe) {
    this.favorites.push(recipe);
  };

  removeRecipes(recipe) {
    this.favorites.splice(recipe, 1);
  };

  filterTag(tag) {
    const filteredRecipe = this.favorites.filter((recipe) => {
      return recipe.tags.includes(tag);
    });
    return filteredRecipe;
  };

  filterName(name) {
    const filteredName = this.favorites.filter((recipe) => {
      return recipe.name.includes(name);
    });
    return filteredName;
  };

};





export default User;