import Ingredient from './Ingredient';
import Recipe from './Recipe';

class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.viewingSavedRecipe = false
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }


  favoriteARecipe(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  removeFavoriteRecipe(recipe) {
    this.favoriteRecipes.forEach((favoriteRecipe, i) => {
      if(favoriteRecipe === recipe){
        this.favoriteRecipes.splice(i, 1);
      }
    })
  }

  addRecipeToCook(recipe) {
    if(!this.recipesToCook.includes(recipe)){
      recipe.wantToCook = true;
      this.recipesToCook.push(recipe);
    }
  }

  filterFavsByTag(tag) {
   return this.favoriteRecipes.filter((favoriteRecipe) => {
     return favoriteRecipe.tags.includes(tag);
   });
  }

  filterFavsByName(recipeName){
    return this.favoriteRecipes.filter((favoriteRecipe) => {
      return favoriteRecipe.name.includes(recipeName);
    });
  }
};


export default User;
