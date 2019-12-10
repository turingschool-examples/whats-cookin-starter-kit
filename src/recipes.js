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

  showExpandedRecipe() {
    // need each ingredient (name + quanitity:amount) and each instruction (number and step)
    // console.log(this.ingredients);

    let ingredients = [];
    for (var i = 0; i < this.ingredients.length; i++) {
      let ingredientName = this.ingredients[i].name;
      let ingredientAmount = this.ingredients[i].quanitity.amount
      let ingredientUnit = this.ingredients[i].quanitity.unit;

      ingredients.unshift({
        amount: ingredientAmount,
        unit: ingredientUnit,
        name: ingredientName
      });


    }



    // need to manipulate ingredients array so that it displays amount, unit, name in that order as plain ish text.

    homeRecipes.innerHTML = `
    <section id="expanded-recipe-page" class="">
      <h1 class="title" id="${this.id}">${this.name}</h1>
      <img src="${this.image}">

      <ul class="">${ingredients[0].amount} ${ingredients[0].unit} ${ingredients[0].name}</ul>
      <li class="">${this.instructions}</li>
      <p class="">${this.tags}</p>
   </section>
   `;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
