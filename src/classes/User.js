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
    console.log("Hey", this.recipesToCook)
  }

  removeRecipeToCook(recipe) {

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
