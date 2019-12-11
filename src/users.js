class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.searchedRecipes = [];
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
      <button class="un-cook-star">Remove from Menu</button>
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
        <button class="un-fav-star">Remove Favorite</button>
        <button class="cook-star">Add to Menu</button>
      </div>`;
    }
  }
  searchRecipes(input) {
    this.searchedRecipes = [];
    for (var i = 0; i < recipeData.length; i++) {
      let name = recipeData[i].name.toLowerCase();
      if (name.includes(input.toLowerCase())) {
        this.searchedRecipes.unshift(recipeData[i]);
      } else {
        // display "No Match Found" message
      }
    }
    this.displaySearched();
  }
  displaySearched() {
    homeRecipes.innerHTML = "";
    for (var i = 0; i < this.searchedRecipes.length; i++) {
      homeRecipes.innerHTML += `<div class="card" id="${this.searchedRecipes[i].id}">
      <img class="food-pic" src="${this.searchedRecipes[i].image}">
        <button class="recipe-title meal-name">${this.searchedRecipes[i].name}</button>
        <button class="fav-star">Add Favorite</button>
        <button class="cook-star">Add to Menu</button>
      </div>`;
    }
  }
  filterRecipes() {
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
