import RecipeRepository from "./RecipeRepository";
import Recipe from "./recipeClass";

class User {
  constructor(userInfo){
    this.name = userInfo.name;
    this.id = userInfo.id;
    this.pantryItems = userInfo.pantry;
    this.recipesToCook = new RecipeRepository();
    this.totalRecipes;
  };

  makeRecipeList(array){
    this.totalRecipes = new RecipeRepository(array);
  };
  // need to make a test to test this method too

  addRecipeToCook(item) {
    // need the item that is passing through the be an instance of a new recipe in some way? maybe this happens in the recipe class too
    //  in the test file I could also have this check that they both have the new instance of recipe in there
    this.recipesToCook.recipeList.push(item);
    return this.recipesToCook.recipeList;  
  };

  removeRecipeFromCook(item) {
    this.recipesToCook.recipeList.splice(item, 1);
    return this.recipesToCook.recipeList;
  };

  findRecipeByTag(thing) {
    const findTag = this.recipesToCook.filterByTag(thing);
    return findTag;
  };

  findRecipeByTag(thing) {
    const findName = this.recipesToCook.filterByName(thing);
    return findName;
  };
};

export default User;