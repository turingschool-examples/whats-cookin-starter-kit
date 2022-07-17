
import Recipe from './Recipe';
class Users {
    constructor(user) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry;
        this.recipesToCook = [];
    }
    addRecipesToCook(recipe) {
        if (!this.recipesToCook.includes(recipe)) {
            console.log('adding');
            this.recipesToCook.push(recipe);
            console.log({ cooking: this.recipesToCook });
        }
    }
    removeRecipesToCook(recipe) {
        if (this.recipesToCook.includes(recipe)) {
            this.recipesToCook = this.recipesToCook.filter(rec => rec !== recipe);
        }
    }
    filterByTagUser(tag) {
        const taggedRecipes = this.recipesToCook.filter(saveRecipe => saveRecipe.tags.includes(tag))
        return taggedRecipes
    }
    filterByNameUser(name) {
        const recipesByName = this.recipesToCook.filter(saveRecipe => saveRecipe.name.includes(name))
        return recipesByName
    }
}
export default Users;