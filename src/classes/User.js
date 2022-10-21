class User {
    constructor(userData) {
        this.name = userData.name
        this.id = userData.id
        this.pantry = userData.pantry
        this.recipesToCook = []
    }
    addRecipeToRecipesToCook(recipe) {
        if (this.recipesToCook.includes(recipe)) {
            console.log('Already in this users recipesToCookArray!')
            } else {
            this.recipesToCook.push(recipe)
        }
            return this.recipesToCook
    } 

    removeRecipeFromRecipesToCook(recipe) {
        if (this.recipesToCook.includes(recipe)) {
            var index = this.recipesToCook.indexOf(recipe)
            this.recipesToCook.splice(index, 1)
        } 
    }
    
    filterRecipesToCookByTag(tag) {
        let filteredTagsArray = []
        this.recipesToCook.forEach(recipe => {
                if (recipe.tags.includes(tag)) {
                    filteredTagsArray.push(recipe)
                }
            })
            return filteredTagsArray
    }

    returnUserName() {
        console.log(this.name)
        return this.name
    }

    returnUserId() {
        return this.id
    }
}

export default User;