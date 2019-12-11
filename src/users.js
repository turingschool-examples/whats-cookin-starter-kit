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
removeFromFavorites(recipe) {
   for (var i = 0; i < this.favoriteRecipes.length; i++) {
     if (this.favoriteRecipes.includes(recipe))
    this.favoriteRecipes.splice(i,1)
  }

  }

  displayFavorites() {

    // see un-fav-star class. use this for unstarring (remove element from this.recipesToCook when clicked again)
    for (var i = 0; i < this.favoriteRecipes.length; i++) {
      homeRecipes.innerHTML += `<div class="card" id="${this.favoriteRecipes[i].id}">
      <img class="food-pic" src="${this.favoriteRecipes[i].image}">
        <button class="recipe-title meal-name">${this.favoriteRecipes[i].name}</button>
        <img class="un-fav-star" src="../assets/star copy.svg">
      </div>`;
    }




    // let matchedId = recipeData.find(recipe => {
    //   return recipe.id === this.favoriteRecipes[0];
    // });
    //
    // console.log(matchedId);

  }
  addRecipeToCook() {
    this.recipesToCook.push(recipe);
  }
  displayToCook() {
    return this.recipesToCook;
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
