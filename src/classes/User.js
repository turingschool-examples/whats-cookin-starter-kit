import RecipeRepository from "./RecipeRepository"

class User {
    constructor(user) {
        this.name = user.name
        this.id = user.id
        this.pantry = user.pantry
        this.savedRecipes = new RecipeRepository([])
    }

    addToSavedRecipes(recipeToAdd) {
        this.savedRecipes.addRecipe(recipeToAdd)
    }

    removeFromSavedRecipes(recipeToRemove) {
      this.savedRecipes.removeRecipe(recipeToRemove.id) 
    }
}

export default User;