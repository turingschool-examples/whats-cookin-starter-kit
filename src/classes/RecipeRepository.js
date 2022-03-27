class RecipeRepository {
  constructor(recipeData) {
    this.recipeObjects = recipeData;
    // One class to get you started!
    //this is going to have methods to sort our data
  }
  filterByTag(tag){
   return this.recipeObjects.filter((recipeObject) => {
     return recipeObject.tags.includes(tag);
   });
  }
  filterByName(recipeName){
    return this.recipeObjects.filter((recipeObject) => {
      return recipeObject.name.includes(recipeName);
    });
  }
}

export default RecipeRepository;
