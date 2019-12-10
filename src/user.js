class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favorites = [];
    this.pantryItemsId = [];
    this.recipeIngId = [];
  }

  searchByTags(userInput, cookBook) {
    let availableRecipes = [];
    cookBook.forEach(recipe => {
      if(recipe.tags.includes(userInput)) {
        availableRecipes.push(recipe);
      }
    });
    return availableRecipes;
  }

  saveToFavorites(recipe) {
    this.favorites.push(recipe);
    console.log(this.favorites);
    return this.favorites;
  }

  condenseUserIngredientById() {
    this.pantry.forEach((item) => {
      this.pantryItemsId.push(item.ingredient);
    });
    return this.pantryItemsId;
  }

  condenseRecipeIngredientById(cookBook) {
    cookBook.forEach((recipe) => {
      return recipe.ingredients.forEach((ingredient) => {
        if(!this.recipeIngId.includes(ingredient.id)) {
          this.recipeIngId.push(ingredient.id);
        }
      })
    });
    return this.recipeIngId
  }


  recipesToCook(cookBook) {
    // console.log(cookBook);
    let availableRecipes = [];
    this.condenseUserIngredientById();
    console.log('pantry: ', this.pantryItemsId);
    this.condenseRecipeIngredientById(cookBook);
    console.log('recipe: ', this.recipeIngId);
      cookBook.forEach(recipe => {
        if (this.pantryItemsId.every(id => this.recipeIngId.includes(id))) {
          // console.log(recipe);
          availableRecipes.push(recipe);
        }
      });
      cookBook.shift();
      console.log(availableRecipes);
      return availableRecipes;
    }
}

// module.exports = User;
// export default User;
if (typeof module !== 'undefined'){
  module.exports = User;
}
