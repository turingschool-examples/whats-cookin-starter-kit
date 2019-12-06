class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    // this.recipe = recipe;
    this.favorites = [];
    this.pantryItemsId = [];
    this.recipeIngId = [];
  }

  saveToFavorites(recipe) {
    this.favorites.push(recipe);
    return this.favorites;
  }

  condenseUserIngredientId() {
    this.pantry.forEach((item) => {
      this.pantryItemsId.push(item.ingredient);
      // console.log('recipe >>>', recipe);
      // console.log('pantry >>>', this.pantry);

    });
    return this.pantryItemsId;
  }

  condenseRecipeIngredientId(cookBook) {
    // console.log(cookBook);
    cookBook.forEach((recipe) => {

      // console.log(recipe.ingredients);
      recipe.ingredients.forEach((ingredient) => {
        if(!this.recipeIngId.includes(ingredient.id)) {
          this.recipeIngId.push(ingredient.id);
          // console.log(this.recipeIngId);
        }

      })

    });
    //forEach ingredient in the array, push in the id of that ingredient
    return this.recipeIngId;

  }

  recipesToCook(cookBook) {
    this.condenseUserIngredientId();
    this.condenseRecipeIngredientId(cookBook);
    // .spread >> check it out
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
    this.recipeIngId.forEach((ingredient) => {
      // console.log(this.pantryItemsId);

      // if(this.pantryItemsId.includes(ingredient)) {
      //   let recipeRequiredIng = [];
      //   recipeRequiredIng.push(ingredient);
      // };
      //[12, 5, 8, 130, 44].every(x => x >= 10); // false
      //[12, 54, 18, 130, 44].every(x => x >= 10); // true​

      this.pantryItemsId.every((ingredient) => {
        availableRecipes.push(cookBook);
        // return availableRecipes;
      });
      // console.log(this.recipeIngId);

    });
    return availableRecipes[0];
  }

  searchByTags() {

  }

}

module.exports = User;
