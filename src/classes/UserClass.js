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
    filterByTag(recipe) {
        let filteredTag = recipe.tags.filter(recipe.tags => recipe.tags === recipe.tags)
        return filteredTag
    }
}

export default User;

"tags": [
    "antipasti",
    "starter",
    "snack",
    "appetizer",
    "antipasto",
    "hor d'oeuvre",
    "lunch",
    "main course",
    "main dish",
    "dinner",
  ]