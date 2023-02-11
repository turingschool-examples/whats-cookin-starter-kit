class User{
    constructor(userObj){
        this.name = userObj.name
        this.id = userObj.id
        this.pantry = userObj.pantry
        this.recipe = userObj.recipe
      
        // console.log(userObj)
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
    
        const recipeTag = this.recipesToCook.filter((recipe) => this.recipe.tags)
    }
};


export default User