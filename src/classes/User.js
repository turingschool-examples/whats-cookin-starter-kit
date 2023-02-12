class User {
    constructor(user) {
        this.name = user.name
        this.id = user.id
        this.pantry = user.pantry
        this.recipesToCook = []
        this.filteredRecipes
    }

    addToRecipesToCook(recipeToAdd) {
        if(!this.recipesToCook.includes(recipeToAdd)) {
            this.recipesToCook.push(recipeToAdd)
        }
    }

    removeFromRecipesToCook(recipeToRemove) {
      this.recipesToCook = this.recipesToCook.filter(recipe => recipeToRemove !== recipe)  
    }

    filterRecipesToCook(tag, name) {
        if (tag) {
            this.filteredRecipes = this.recipesToCook.filter(recipe => recipe.tags.includes(tag));

        } else if(name) {
            this.filteredRecipes = this.recipesToCook.filter(recipe => (recipe.name.toUpperCase().includes(name.toUpperCase())));
        }
    }
}

export default User;