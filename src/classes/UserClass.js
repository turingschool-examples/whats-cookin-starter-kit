class User {
    constructor(userData) {
        this.name = userData.name
        this.id = userData.id
        this.pantry = userData.pantry
        this.recipesToCook = []
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
    filterByTag(word) {
        let filteredTagsArray = []
        console.log(word)
        console.log(filteredTagsArray)
        this.recipesToCook.forEach(recipe => {
            if(recipe.tags.includes(word)) {
                console.log(word)
                filteredTagsArray.push(recipe)
                console.log(filteredTagsArray)
            }
        })
        return filteredTagsArray
    }
}

export default User;