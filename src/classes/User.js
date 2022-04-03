import Ingredient from './Ingredient';
import Recipe from './Recipe';

class User {
  constructor(userData) {
    this.currentUser = this.generateRandomUser(userData)
    this.name = this.currentUser.name;
    this.id = this.currentUser.id;
    this.pantry = this.currentUser.pantry;
    this.viewingSavedRecipe = false
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  generateRandomUser(userData) {
    return new User(userData[Math.floor(Math.random() * userData.length)])
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
