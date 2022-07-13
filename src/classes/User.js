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

    filterFavoriteRecipesByTag( userInput ){
        let tagMatches = this.favoriteRecipes.filter((recipe) => {
            return recipe.tags.includes(userInput.toLowerCase())
        })
          return tagMatches[0].tags
      };
      
    filterFavoriteRecipesByName(userSearch){

        let nameMatches = this.favoriteRecipes.filter((recipe) => {
            return recipe.name.includes(userSearch)
        })
          return nameMatches[0].name
      };
  };
  
  export default User;

//   Allow a user to add/remove a recipe to their recipesToCook 
// list (add to my recipesToCook)

// Filter my recipesToCook by a tag. (Extension option: filter by multiple tags)
// Filter my recipesToCook by its name. (Extension option: filter by name or ingredients)