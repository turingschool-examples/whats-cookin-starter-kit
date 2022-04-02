const {ingredientsData} = require('../data/ingredients');
const {recipeData} = require('../data/recipes');
import Ingredient from './Ingredient';
import Recipe from './Recipe';

class User {
  constructor(userInfo){
    this.name = userInfo.name;
    this.id = userInfo.id;
    this.pantry = userInfo.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  favoriteARecipe(recipe){
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  removeFavoriteRecipe(recipe){
    this.favoriteRecipes.forEach((favoriteRecipe, i) => {
      if(favoriteRecipe === recipe){
        this.favoriteRecipes.splice(i, 1);
      }
    })
  }

  addRecipeToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  filterFavsByTag(tag){
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
