class User {
  constructor(name, id, pantry) { 
    // 🚨 May need to refactor parameter to be object, will be determined by DOM needs (TBD)
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
  addRecipe(recipeID, recipeRepo) { 
    // 1️⃣ Important to set up dom/HTML/CSS to have IDs so we can use to match here below
    // 2️⃣ Is the recipe repository going to be a global var/object? Need to be a parameter here?
    // 3️⃣ Confirm the actual key name in the RecipeRepository
    this.recipesToCook.push(recipeRepo.listOfRecipes.find(recipe => recipe["id"] === recipeID));
  }
  removeRecipe(recipeID) {
    const index = this.recipesToCook.findIndex(recipe => recipe["id"] === recipeID)
    this.recipesToCook.splice(index, 1)
  }
  filterByTag(tag) {
    return this.recipesToCook.filter(recipe => recipe["tags"].includes(tag));
  }
  filterByName(name) {
    return this.recipesToCook.filter(recipe => recipe["name"] === name);
  }
}


module.exports = User;

// ❓Do we need something that can create or manipulate the pantry
//   property? Should this be based on the recipesToCook in some way?
