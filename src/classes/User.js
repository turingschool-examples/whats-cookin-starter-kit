class User {
    constructor(userData) {
        this.name = userData.name
        this.id = userData.id
        this.pantry = userData.pantry
        this.recipesToCook = []
    }
    //This method adds a recipe to the user's favorites/recipesToCook array.
    addRecipeToRecipesToCook(recipe) {
        if (this.recipesToCook.includes(recipe)) {
            console.log('Already in this users recipesToCookArray!')
            } else {
            this.recipesToCook.push(recipe)
        }
            return this.recipesToCook
    } 
    //This method removes a recipe from the user's favorites/recipesToCook array.
    removeRecipeFromRecipesToCook(recipe) {
        if (this.recipesToCook.includes(recipe)) {
            var index = this.recipesToCook.indexOf(recipe)
            this.recipesToCook.splice(index, 1)
        } 
    }
    //This method filters the user's favorites by recipe name. Expect an array of recipes with the specific name. 
    filterRecipesToCookByName(name) {
       let filteredRecipe = this.recipesToCook.filter((recipe) => {
            return recipe["name"] === name
        })
        return filteredRecipe
    }
    //This method filters the user's favorites by tag. Expected output is an array of recipes with the specific tag. 
    filterRecipesToCookByTag(tag) {
        let filteredTagsArray = []
        this.recipesToCook.forEach(recipe => {
                if (recipe.tags.includes(tag)) {
                    filteredTagsArray.push(recipe)
                }
            })
            return filteredTagsArray
    }// Perhaps use .filter in refactor

    //This method returns the username
    returnUserName() {
        return this.name
    }
    //This method returns the user id. May be an extra tool
    returnUserId() {
        return this.id
    }
}

export default User;