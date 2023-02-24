import RecipeRepository from "./RecipeRepository"

class User {
    constructor(user) {
        this.name = user.name
        this.id = user.id
        this.pantry = user.pantry
        this.recipesToCook = user.recipesToCook
    }

    addToSavedRecipes(recipeToAdd) {
        this.savedRecipes.addRecipe(recipeToAdd)
    }
    changeIdToRecipe(recipes) {
        if(this.recipesToCook.length) {
            let matchingRecipe = []
            this.recipesToCook.forEach(id => {
                recipes.recipes.forEach(element => {
                    if(element.id === id){
                        matchingRecipe.push(element)
                    }        
                })
            })
            return new RecipeRepository(matchingRecipe)
        } else {
            return new RecipeRepository([])
        }
    } 

    removeFromSavedRecipes(recipeToRemove) {
      this.savedRecipes.removeRecipe(recipeToRemove.id) 
    }
}

export default User;