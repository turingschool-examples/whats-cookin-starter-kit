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
    this.recipesToCook.forEach(recipe => {
      homeRecipes.innerHTML += `<div class="card" id="${recipe.id}">
       <img class="food-pic" src="${recipe.image}">
         <button class="recipe-title meal-name">${recipe.name}</button>
         <button class="un-cook-star">Remove from Menu</button>
       </div>`
    })
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
    this.favoriteRecipes.forEach(recipe => {
      homeRecipes.innerHTML += `<div class="card" id="${recipe.id}">
       <img class="food-pic" src="${recipe.image}">
         <button class="recipe-title meal-name">${recipe.name}</button>
         <button class="un-fav-star">Remove Favorite</button>
         <button class="cook-star">Add to Menu</button>
       </div>`
    })
  }
  searchRecipes(input, tags) {
    this.searchedRecipes = [];
    for (var i = 0; i < recipeData.length; i++) {
      let name = recipeData[i].name.toLowerCase();
      if (name.includes(input.toLowerCase()) || recipeData[i].tags.includes(input.toLowerCase())) {
        this.searchedRecipes.unshift(recipeData[i]);
      } else {
        // display "No Match Found" message
      }
    }
    this.displaySearched();
  }
  displaySearched() {
    homeRecipes.innerHTML = "";

    this.searchedRecipes.forEach(recipe => {
      homeRecipes.innerHTML += `<div class="card" id="${recipe.id}">
      <img class="food-pic" src="${recipe.image}">
      <button class="recipe-title meal-name">${recipe.name}</button>
       <button class="fav-star">Add Favorite</button>
       <button class="cook-star">Add to Menu</button>
      </div>`;
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
