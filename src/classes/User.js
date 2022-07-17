import Recipe from './Recipe';

class User{
    constructor(userData) {
      this.name = userData.name;
      this.id = userData.id;
      this.pantry = userData.pantry;
      this.recipesToCook = [];  
    }

   addRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
     this.recipesToCook.push(recipe)
    }
   }

   removeRecipesToCook(recipeId) {
    this.recipesToCook.forEach((recipe, index) => {
      if (recipe.id === recipeId) {
        this.recipesToCook.splice(index, 1)
      } 
    })
   }

    filterSavedRecipesByTag(tag) {
      let filteredRecipes = this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
      return this.recipesToCook = filteredRecipes;
    }

    filterSavedRecipesByName(name) {
      let filteredRecipes = this.recipesToCook.filter(recipe => recipe.name === name);
      return this.recipesToCook = filteredRecipes;
    }
};


export default User;