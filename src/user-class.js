class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.favoriteRecipes = [];
  }
}

module.exports = User;