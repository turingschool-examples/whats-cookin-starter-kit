class User {
  constructor(userData) {
    this.name = this.convertToString(userData.name);
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  convertToString(data) {
    return typeof data === 'string' ? data : JSON.stringify(data);
  }
}

module.exports = User;