class User {
    constructor(userData) {
        this.name = userData.name
        this.id = userData.id
        this.pantry = userData.pantry
        this.recipesToCook = []
        this.filteredTagsArray = []
    }
    addRecipe(recipe) {
        if(this.recipesToCook.includes(recipe)) {
        } else {
            this.recipesToCook.push(recipe)
        } 
        return this.recipesToCook
    } 
    removeRecipe(recipe) {
        if(this.recipesToCook.includes(recipe)) {
            var index = this.recipesToCook.indexOf(recipe)
            this.recipesToCook.splice(index, 1)
        }
    }
    filterByTag() {
        console.log(this.filteredTagsArray)
        this.recipe.forEach(recipe => {
            if(recipe.tags.includes(tag)) {
                this.filteredTagsArray.push(recipe)
                console.log(this.filteredTagsArray)
            }
        })
        return this.filteredTagsArray
    }
}

export default User;