class User{
    constructor(userObj){
        this.name = userObj.name
        this.id = userObj.id
        this.pantry = userObj.pantry
        this.recipe = userObj.recipe
        this.recipesToCook = []

    }
    addRecipeToCook(recipe){
       this.recipesToCook.push(recipe)
    }
    removeRecipeToCook(id){
        const recipeId = this.recipesToCook.map((recipe) => recipe.id)

        const recipeIndex = recipeId.indexOf(id)

        this.recipesToCook.splice(recipeIndex, 1)
    }

    filterRecipesByTag(tag){
        const recipesByTag = this.recipesToCook.filter((recipe) => recipe.tags.includes(tag))
        return recipesByTag
    }
    
    filterRecipesByName(name){
        const recipesByName = this.recipesToCook.filter((recipe) => recipe.name.includes(name))
        // console.log(this.recipesToCook[1])
        return recipesByName
    }
};



export default User