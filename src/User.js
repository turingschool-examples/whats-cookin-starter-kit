class User {

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.pantry = [];

  }

  addToFavorites() {
    return "Add to yo favorites"
  }

  addToCook() {

  }

  filterRecipesBy() {

  }

};


if (typeof module !== 'undefined') {
  module.exports = User;
}

// module.exports = User;
// module.exports = User;