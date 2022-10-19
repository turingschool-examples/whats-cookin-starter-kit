class User {
    constructor(userData) {
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
}

export default User;