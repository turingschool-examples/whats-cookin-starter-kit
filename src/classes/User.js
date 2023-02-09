import RecipeRepository from "./RecipeRepository";

class User {
    constructor(user, allRecipes) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.allRecipes = allRecipes;
        this.recipesToCook = new RecipeRepository();
        this.allRecipesByName;
        this.allRecipesByTag;
    };

    saveRecipe(index) {
        this.recipesToCook.recipes.push(this.allRecipes.recipes[index]);
    };

    filterAllByTag(tag) {
        this.allRecipesByTag = this.allRecipes.recipes.filter(recipe => recipe.tags.includes(tag));
    };

    filterAllByName(name) {
        this.allRecipesByName = this.allRecipes.recipes.filter(recipe => recipe.name.toUpperCase().includes(name));
        return this.allRecipesByName.length;
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