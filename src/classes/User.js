import RecipeRepository from "./RecipeRepository";

class User {
    constructor(user) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.recipesToCook = new RecipeRepository();
    };

    saveRecipe(recipe) {
        this.recipesToCook.recipes.push(recipe);
    };

    removeSaved(recipeId) {
        this.recipesToCook.recipes = this.recipesToCook.recipes.filter(recipe => recipe.id !== recipeId);
    };

    filterSavedByTag(tag) {
        this.recipesToCook.filterRecipesByTag(tag);
        return this.recipesToCook.recipesByTag;
    };

    filterSavedByName(name) {
        this.recipesToCook.filterRecipesByName(name);
        return this.recipesToCook.recipesByName.length;
    };
}

export default User;