class User {
    constructor(user) {
        this.name = user.name
        this.id = user.id
        this.pantry = user.pantry
        this.favoriteRecipes = []
        this.recipesToCook = []
    }

    addRecipeToCook(recipe) {
        if(!this.recipesToCook.includes(recipe)) {
            this.recipesToCook.push(recipe)
        }
    }
}

export default User