class User {
    constructor( user ) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.recipesToCook = [ ];
        this.favoriteRecipes = [ ];
    };

    addRecipeToRecipesToCook( recipe ) {
        this.recipesToCook.push( recipe )
    }

    addRecipeToFavorites( recipe ) {
        this.favoriteRecipes.push( recipe )
    }

    removeRecipeFromRecipesToCook() {

    }

    removeRecipeFromFavorites() {

    }

    filterFavoriteRecipesByTag(userInput){
        let tagMatches = this.favoriteRecipes.filter((tag) => {
          return userInput.toLowerCase() == tag
        })
          return tagMatches[0]
      };
      
    // filterFavoriteRecipesByName(userSearch){
    
    //     let recipeMatch = []
    //     if(this.recipes.name == userSearch){
    //       recipeMatch.push(this.recipes.name)
    //     }
    //     return recipeMatch[0]
    //   };
  
  }
  
  export default User;

//   Allow a user to add/remove a recipe to their recipesToCook 
// list (add to my recipesToCook)

// Filter my recipesToCook by a tag. (Extension option: filter by multiple tags)
// Filter my recipesToCook by its name. (Extension option: filter by name or ingredients)