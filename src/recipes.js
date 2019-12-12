class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.image = recipe.image;
    this.id = recipe.id;
    this.instructions = recipe.instructions;
    this.ingredients = recipe.ingredients;
    this.tags = recipe.tags;

  }
  addCards() {
    homeRecipes.innerHTML += `
    <div class="card" id="${this.id}">
      <img class="food-pic" src="${this.image}">
      <button class="recipe-title meal-name">${this.name}</button>
      <button class="fav-star">Add to favorites</button>
      <button class="cook-star">Add to Menu</button>
    </div>
    `;
  }

  showExpandedRecipe() {
    homeRecipes.innerHTML = `
    <section id="expanded-recipe-page" class="">
      <h1 class="title" id="${this.id}">${this.name}</h1>
      <img class="recipe-pic" src="${this.image}">
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

    this.ingredients.forEach(ingredient => {
      ingredientSection.innerHTML += `<li> ${ingredient.quanitity.amount} ${ingredient.quanitity.unit} ${ingredient.name} </li>`;
    })
  }
  showListedInstructions() {
    const instructionsSection = document.querySelector(".instructions-section");

    this.instructions.forEach(instruction => {
      instructionsSection.innerHTML += `<li> ${instruction.instruction}  </li>`
    })
  }
  showTags() {
    const tagSection = document.querySelector(".recipe-tags");

    this.tags.forEach(tag => {
      tagSection.innerHTML += `<li> #${tag}</li>`
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
