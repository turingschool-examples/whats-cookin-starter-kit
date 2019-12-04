class User {

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.pantry = [];

  }

  addToFavorites(users) {
    // return "Add to yo favorites"
    console.log("Add to yo favorites")
    console.log(users[0].name)
    return users[0].name

  }

  addToCook() {

  }

  filterRecipesBy() {

  }

};


if (typeof module !== 'undefined') {
  module.exports = User;
} else {
  window.User = User;
}

// module.export = User;