class Users {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favorite = [];
    this.toCook = [];
  }

  toFilterRecipes() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = users;
}
