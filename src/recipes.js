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
    homeRecipes.innerHTML = `
    <section id="expanded-recipe-page" class="">
      <h1 class="title" id="${this.id}">${this.name}</h1>
      <img src="${this.image}">
      <ul class="ingredients-section">
      </ul>
      <ol class="instructions-section">
      </ol>
      <ul class="recipe-tags"></ul>
   </section>`;

    this.showListedIngredients();
    this.showListedInstructions();
    this.showTags();
  }
  showListedIngredients() {
    const ingredientSection = document.querySelector(".ingredients-section");

    for (var i = 0; i < this.ingredients.length; i++) {
      ingredientSection.innerHTML += `<li> ${this.ingredients[i].quanitity.amount} ${this.ingredients[i].quanitity.unit} ${this.ingredients[i].name} </li>`;
    }
  }
  showListedInstructions() {
    const instructionsSection = document.querySelector('.instructions-section');

    for (var i = 0; i < this.instructions.length; i++) {
      instructionsSection.innerHTML += `<li> ${this.instructions[i].instruction}  </li>`;
    }
  }
  showTags() {
    const tagSection = document.querySelector('.recipe-tags');

    for (var i = 0; i < this.tags.length; i++) {
      tagSection.innerHTML += `<li> #${this.tags[i]}</li>`
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
