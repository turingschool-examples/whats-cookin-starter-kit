class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.recipesToCook = [];
  }
  generateRandomUser(usersList) {
    const totalUsers = usersList.length

    function createRandomIndex(totalUsers) {
      return Math.floor(Math.random() * totalUsers);
    }
    
    let randomIndex = createRandomIndex(totalUsers);

    this.name = usersList[randomIndex]["name"];
    this.id = usersList[randomIndex]["id"];
    this.pantry = usersList[randomIndex]["pantry"];
  }

}

//fxn to generate random user, add name, add/create/update pantry ?, add recipes to cook/remove

module.exports = User;