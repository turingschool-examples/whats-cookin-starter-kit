class User {
  constructor(usersData) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry;
    this.recipesToCook = []
    // this.favoriteRecipes =[]
  }

  addRecipeToCook(recipe) {
    this.recipesToCook.push(recipe)
  }

  removeRecipeToCook(recipeToRemove) {
    this.recipesToCook.filter((recipe) => {
      if (recipe.id === recipeToRemove.id){
        this.recipesToCook.splice(recipeToRemove, 1)
      }
    })
  }

  listRecipeTags(tag) {
    const filterRecipeByTag = this.recipesToCook.filter(recipe => 
      recipe.tags.includes(tag)
      );
      return filterRecipeByTag;
    }
};




// //  listRecipeTags(tag) {
//   const filteredByTag = this.recipeData.filter(recipe => 
//     recipe.tags.includes(tag)
//     );
//     return filteredByTag;
// }

//way of filtering the recipesToCook array by:
//name
//tag

//copy the structure of the listRecipeTags method
//because 

module.exports = User;
