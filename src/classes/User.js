class User {
  constructor(userDetails) {
    this.name = userDetails.name;
    this.id = userDetails.id;
    this.pantry = userDetails.pantry;
    this.recipesToCook = [];

  }

  addRecipesToCook(recipeToAdd) {
    this.recipesToCook.push(recipeToAdd);
  }

  removeRecipesToCook(id) {
    this.recipesToCook.forEach((recipe, index) => {
      if(recipe.id === id) {
        this.recipesToCook.splice(index, 1);

      }

    });
  }

  filterRecipesToCookByTag(tag) {
    if (this.recipesToCook.filter(recipe => recipe.tags.includes(tag)).length) {
      return this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
    }
    return `Sorry, no recipe with ${tag}.`;
  }

  filterRecipesToCookByName(name) {
    if(this.recipesToCook.filter(recipe => recipe.name.includes(name)).length) {
      return this.recipesToCook.filter(recipe => recipe.name.includes(name));
    }
    return `Sorry, no recipe named ${name}.`
  }

}

export default User;
