class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.recipesToCook = [];
  }


}

//fxn to generate random user, add name, add/create/update pantry ?, add recipes to cook/remove

module.exports = User;