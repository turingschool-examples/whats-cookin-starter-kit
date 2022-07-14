import Recipe from './Recipe';

class Users {
    constructor(user) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.recipeToCook = [];
        this.favRecipes = [];
    }
    addRecipesToCook(recipe) {
        recipe.toBeCooked = true;
        if (!this.recipeToCook.includes(recipe)) {
        this.recipeToCook.push(recipe);
        }
    }
    removeRecipesToCook(recipe) {
        recipe.toBeCooked = false;
        if (this.recipeToCook.includes(recipe)) {
        this.recipeToCook.splice(0, 1);
        }
    }
    filterByTagUser(tag) {
        const grabbedTag = this.recipesToCook.filter(saveRecipe => saveRecipe.tags.includes(tag))
        return grabbedTag
    }
    filterByNameUser(name) {
        const grabbedName = this.recipesToCook.filter(saveRecipe => saveRecipe.name.includes(name))
        return grabbedName
    }
}

export default Users;