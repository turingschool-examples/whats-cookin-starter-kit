class User {
    constructor( user ) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.recipesToCook = [ ];
        // this.favoriteRecipes = [ ];
    };

    addRecipeToRecipesToCook( recipe ) {
        this.recipesToCook.push( recipe )
    }
    removeRecipeFromRecipesToCook( recipe ) {
        this.recipesToCook.forEach((favoriteRecipe) => {
            if (favoriteRecipe.id === recipe.id) {
              this.recipesToCook.splice(this.recipesToCook.indexOf(recipe), 1) 
            }
            return this.recipesToCook.indexOf(recipe)
        })
    }

    // removeRecipeFromFavorites(recipe) {
    //     this.favoriteRecipes.forEach((favoriteRecipe) => {
    //         if (favoriteRecipe.id === recipe.id) {
    //           this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(recipe), 1) 
    //         }
    //         return this.favoriteRecipes
    //     })
    // };
    // filterFavoriteRecipesByTag( userInput ){
    //     let tagMatches = this.favoriteRecipes.filter((recipe) => {
    //         return recipe.tags.includes(userInput.toLowerCase())
    //     });
    //       return tagMatches[0].tags;
    //   };
      
    // filterFavoriteRecipesByName(userSearch){

    //     let nameMatches = this.favoriteRecipes.filter((recipe) => {
    //         return recipe.name.includes(userSearch)
    //     })
    //       return nameMatches[0].name
    //   };

      // Need to add tests if we intend on using this.
    filterRecipesToCookByTag( userInput ){
    let tagMatches = this.recipesToCook.filter((recipe) => {
        return recipe.tags.includes(userInput.toLowerCase())
    });
        return tagMatches[0].tags;
    };
      
    filterRecipesToCookByName(userSearch){

        let nameMatches = this.recipesToCook.filter((recipe) => {
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