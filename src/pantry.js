class Pantry {
  constructor(users) {
    this.ingredients = users.pantry;
  }
}

if (typeof module !== 'undefined') {
    module.exports = Pantry;
}
