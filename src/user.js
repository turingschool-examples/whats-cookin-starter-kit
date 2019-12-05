class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favorites = [];
    this.pantryItemsId = [];
    this.recipeIngId = [];
  }

  saveToFavorites() {
    this.favorites.push(recipe);
    return this.favorites;
  }

  condenseUserIngredientId() {
    this.pantryItemsId.push(this.pantry[0].ingredient);
    return this.pantryItemsId;
  }

  condenseRecipeIngredientId() {
    this.recipeIngId.push(recipe.ingredients.id);
    return this.recipeIngId;

  }

  recipesToCook() {
    this.condenseUserIngredientId();
    this.condenseRecipeIngredientId();
    //filter through recipes
    //conditional if the user has the ingredients
    //return a new array of the available recipes
    // console.log(this.pantry[0].ingredient);
    // console.log(recipe.ingredients.id);

    //filter for all id's in recipe needed
    //filter users pantry id's into a single array
    //recipes contained within the users data returns true

    let availableRecipes = [];
    // if(recipe.ingredients.id === this.pantry[0].ingredient) {
    //   availableRecipes.push(recipe);
    // }
    this.recipeIngId.forEach(ingredient => {

      // if(this.pantryItemsId.includes(ingredient)) {
      //   let recipeRequiredIng = [];
      //   recipeRequiredIng.push(ingredient);
      // };
      //[12, 5, 8, 130, 44].every(x => x >= 10); // false
      //[12, 54, 18, 130, 44].every(x => x >= 10); // true​

      this.pantryItemsId.every((ingredient) => {
        availableRecipes.push(recipe);
        // return availableRecipes;
        console.log(availableRecipes);
      });


    });
    return availableRecipes;
  }

  searchByTags() {

  }

}

module.exports = User;
