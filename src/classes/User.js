import RecipeRepository from "./RecipeRepository";

class User {
    constructor(user, allRecipes) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.allRecipes = allRecipes;
        this.recipesToCook = new RecipeRepository();
        this.allRecipesByTag;
        this.allRecipesByName;
    };

    saveRecipe(recipe) {
        this.recipesToCook.recipes.push(recipe);
    };

    filterAllByTag(tag) {

    };

    filterAllByName(name) {
        this.allRecipesByName = this.allRecipes.recipes.filter(recipe => name === recipe.name.toUpperCase());
        return this.allRecipesByName.length;
    };

    filterSavedByTag(tag) {
        this.recipesToCook.filterRecipesByTag(tag);
        return this.recipesToCook.recipesByTag;
    };

    filterSavedByName(name) {
        this.recipesToCook.filterRecipesByName(name);
        return this.recipesToCook.recipesByName;
    };
};

export default User;