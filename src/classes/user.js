class User{
    constructor(userObj){
        this.name = userObj.name
        this.id = userObj.id
        this.pantry = userObj.pantry
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
    filterRecipeByTag(){

    }
    filterRecipeByName(){

    }
};


export default User