import RecipeRepository from "./RecipeRepository"

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
    filterRecipeByTag(tag) {
        const filteredRecipes = user.recipeRepository.filter(recipe => recipe.tags && recipe.tags.includes(tag));
        return filteredRecipes;
    }
    
    filterRecipeByName(name){
    
        const recipeTag = user.RecipeRepository.filter((recipe) => this.recipe.tags);
        return recipeTag
    }
};



export default User