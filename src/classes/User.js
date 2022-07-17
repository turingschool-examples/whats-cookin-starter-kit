class User {
    constructor( user ) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.recipesToCook = [ ];
    };

    addRecipeToRecipesToCook( recipe ) {
        this.recipesToCook.push( recipe )
    }

    removeRecipeFromRecipesToCook( recipe ) {
        return this.recipesToCook.splice( this.recipesToCook.indexOf( recipe.id ), 1 ) 
    }

    filterRecipesToCookByTag( userInput ){
        let tagMatches = this.recipesToCook.filter( recipe => {
            return recipe.tags.includes(userInput.toLowerCase())
        });
            return tagMatches[ 0 ].tags;
    };
      
    filterRecipesToCookByName( userSearch ){
        let nameMatches = this.recipesToCook.filter( recipe => {
            return recipe.name.includes( userSearch )
        })
            return nameMatches[ 0 ].name
      };
  };

  
  
  export default User;