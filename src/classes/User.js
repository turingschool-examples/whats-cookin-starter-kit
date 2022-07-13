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

    addRecipeToFavorites() {

    }

    removeRecipeFromRecipesToCook() {

    }

    removeRecipeFromFavorites() {

    }
  
  }
  
  export default User;

//   Allow a user to add/remove a recipe to their recipesToCook 
// list (add to my recipesToCook)

// Filter my recipesToCook by a tag. (Extension option: filter by multiple tags)
// Filter my recipesToCook by its name. (Extension option: filter by name or ingredients)