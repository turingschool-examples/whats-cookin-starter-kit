class User {
    constructor(user) {
        this.name = user.name
        this.id = user.id
        this.pantry = user.pantry
        this.favoriteRecipes = []
        this.recipesToCook = []
    }

    addToRecipesToCook(recipeToAdd) {
        if(!this.recipesToCook.includes(recipeToAdd)) {
            this.recipesToCook.push(recipeToAdd)
        }
    }

    removeFromRecipesToCook(recipeToRemove) {
      this.recipesToCook = this.recipesToCook.filter(recipe => !(recipeToRemove === recipe))  
    }
}

export default User;