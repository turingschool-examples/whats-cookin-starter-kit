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
    console.log("Hello")
    homeRecipes.innerHTML += `

    `;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
