import RecipeRepository from "./RecipeRepository"
import Recipe from "./Recipe"

class User {
    constructor(user) {
        this.name = user.name
        this.id = user.id
        this.pantry = user.pantry
        this.recipesToCook = new RecipeRepository([])
    }

    addToRecipesToCook(recipeToAdd) {
        this.recipesToCook.addRecipe(recipeToAdd)
    }

    removeFromRecipesToCook(recipeToRemove) {
      this.recipesToCook.removeRecipe(recipeToRemove.id) 
    }
}

export default User;