class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
