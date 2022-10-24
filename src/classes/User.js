class User {
  constructor(name, id, pantry) {
    // May need to refactor parameter(s) based on whether we make a user login page in the future
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.recipesToCook = [];
  }

  generateRandomUser(usersList) {
    const totalUsers = usersList.length;

    function createRandomIndex(totalUsers) {
      return Math.floor(Math.random() * totalUsers);
    }

    let randomIndex = createRandomIndex(totalUsers);

    this.name = usersList[randomIndex]["name"];
    this.id = usersList[randomIndex]["id"];
    this.pantry = usersList[randomIndex]["pantry"];
  }

  addRecipe(recipeID, allRecipes) {
    this.recipesToCook.push(
      allRecipes.listOfAllRecipes.find((recipe) => recipe["id"] === recipeID)
    );
  }

  removeRecipe(recipeID) {
    const index = this.recipesToCook.findIndex(
      (recipe) => recipe["id"] === recipeID
    );
    this.recipesToCook.splice(index, 1);
  }

  filterByTag(tag) {
    return this.recipesToCook.filter((recipe) => recipe["tags"].includes(tag));
  }

  filterByName(name) {
    return this.recipesToCook.filter((recipe) => recipe["name"].toLowerCase() === name.toLowerCase());
  }
}

export default User;

// ❓Do we need something that can create or manipulate the pantry
//   property? Should this be based on the recipesToCook in some way?
