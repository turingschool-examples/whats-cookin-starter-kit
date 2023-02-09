import RecipeRepository from "./RecipeRepository";

class User {
    constructor(user, allRecipes) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.recipesToCook = new RecipeRepository();
    };

    saveRecipe(index) {
        this.recipesToCook.recipes.push(this.allRecipes.recipes[index]);
    };

    filterSavedByTag(tag) {
        this.recipesToCook.filterRecipesByTag(tag);
        return this.recipesToCook.recipesByTag;
    };

    filterSavedByName(name) {
        this.recipesToCook.filterRecipesByName(name);
        return this.recipesToCook.recipesByName.length;
    };
};

export default User;