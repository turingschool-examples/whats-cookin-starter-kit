
import Recipe from './Recipe';
class Users {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.pantry = data.pantry;
        this.recipesToCook = [];
        // console.log(this.pantry);
    }
    addRecipesToCook(recipe) {
        if (!this.recipesToCook.includes(recipe)) {
            this.recipesToCook.push(recipe);
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