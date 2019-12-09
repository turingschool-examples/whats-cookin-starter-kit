class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.image = recipe.image;
    this.id = recipe.id;
    this.instructions = recipe.instructions;
    this.ingredients = recipe.ingredients;
    this.tags = recipe.tags;
  }
  calculateDollars() {
    // take each ingredient price through ingredients data and divide by 100
  }

  addCards() {
    homeRecipes.innerHTML += `
    <div class="card" id="${this.id}">
      <img class="food-pic" src="${this.image}">
      <button class="recipe-title meal-name">${this.name}</button>
      <img class="fav-star" src="../assets/star copy.svg">
    </div>
    `;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
