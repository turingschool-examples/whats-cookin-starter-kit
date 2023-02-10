class User{
    constructor(userObj){
        this.name = userObj.name
        this.id = userObj.id
        this.pantry = userObj.pantry
        this.recipe = userObj.recipe
        console.log(userObj)
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
    filterRecipeByTag(tag){
        const recipeTag = this.recipe.filter((recipe) => this.recipe.tag)
    
    }
    filterRecipeByName(name){
    
        const recipeTag = this.recipe.filter((recipe) => this.recipe.tag)
    }
};


export default User