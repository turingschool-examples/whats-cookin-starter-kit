class User {
  constructor(userData = {}) {
    this.id = userData.id;
    this.name = userData.name;
    this.pantry = userData.pantry;
    this.recipesToCook = [];
  }

  addRecipesToCook(recipe) {
    this.recipesToCook.push(recipe);
  }
  
  removeRecipesToCook(recipe) {
    let recipeToRemove = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(recipeToRemove, 1);
    return this.recipesToCook;
  }
  filterRecipeByTag(tag) {
    let filteredRecipesByTag = this.recipesToCook.filter((recipe) => {
      if (recipe.tags.includes(tag)) {
        return true;
      }
    });
    console.log(filteredRecipesByTag)
    return filteredRecipesByTag;
  }

 
}


export default User;
