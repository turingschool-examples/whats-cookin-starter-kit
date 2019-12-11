class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.namel
    this.pantry = [];
    this.favoriteRecipes = [];
    this.recipesToCook = [];

  }
  addToFavorites(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      return;
    } else {
      this.favoriteRecipes.push(recipe);
    }
  }
  addToCook(recipe) {
    if (this.recipesToCook.includes(recipe)) {
      return;
    } else {
      this.recipesToCook.push(recipe);
    }
  }
  displayToCook() {
    for (var i = 0; i < this.recipesToCook.length; i++) {
      homeRecipes.innerHTML += `<div class="card" id="${this.recipesToCook[i].id}">
    <img class="food-pic" src="${this.recipesToCook[i].image}">
      <button class="recipe-title meal-name">${this.recipesToCook[i].name}</button>
      <img class="un-fav-star" src="../assets/star copy.svg">
      <img class="un-cook-star" src="../assets/star copy.svg">
    </div>`;
    }
  }
  removeFromFavorites(recipe) {
    for (var i = this.favoriteRecipes.length - 1; i >= 0; i--) {
      if (this.favoriteRecipes[i] === recipe) {
        this.favoriteRecipes.splice(i, 1);
        runDisplayFavorites();
      }
    }
  }
  removeFromToCook(recipe) {
    for (var i = this.recipesToCook.length - 1; i >= 0; i--) {
      if (this.recipesToCook[i] === recipe) {
        this.recipesToCook.splice(i, 1);
        runDisplayToCook();
      }
    }
  }
  displayFavorites() {
    for (var i = 0; i < this.favoriteRecipes.length; i++) {
      homeRecipes.innerHTML += `<div class="card" id="${this.favoriteRecipes[i].id}">
      <img class="food-pic" src="${this.favoriteRecipes[i].image}">
        <button class="recipe-title meal-name">${this.favoriteRecipes[i].name}</button>
        <img class="un-fav-star" src="../assets/star copy.svg">
        <img class="cook-star" src="../assets/star copy.svg">
      </div>`;
    }
  }
  searchFavorites() {
    // search the recipes contained with favoriteRecipes
  }
  filterRecipes() {

  }

}

if (typeof module !== 'undefined') {
  module.exports = Users;
}
