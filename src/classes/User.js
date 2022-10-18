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
  addRecipe(recipeID, recipeRepo) { //important to set up dom/HTML/CSS to have IDs so we can use to match here below
    // is the recipe repository a global var/object? Need to be a parameter here?
    // what is the actual key name in the repo, "recipes"? below...
    this.recipesToCook.push(recipeRepo.recipes.find(recipe => recipe["id"] === recipeID));
  }

}

//fxn to generate random user, add name, add/create/update pantry ?, add recipes to cook/remove

module.exports = User;