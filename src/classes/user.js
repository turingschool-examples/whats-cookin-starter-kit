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
    removeRecipeToCook(){

    }
    filterRecipeByTag(){

    }
    filterRecipeByName(){

    }
};


export default User