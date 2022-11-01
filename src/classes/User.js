import { prototype } from "mocha";

class User {
    constructor(user) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry || [];
        this.recipesToCook = [];
    };

    addToCookList(recipe) {
        this.recipesToCook.push(recipe);
    };

    filterByTag(tag) {
        return this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
    };

    filterByName(name) {
        return this.recipesToCook.filter(recipe => recipe.name.includes(name));
    };

    addToPantry(ingredient) {
        //NOTICE! this.pantry stores the ingredients in this format:
        //id, quantity, amount, unit. <<NO NAME GIVEN!!
        this.pantry.push(ingredient);
    };

    // checkPantry(recipe) {
    //     //iterate thru... we need to check if each ingredient+amount for a given recipe
    //     //is in the user's pantry
    //     //for each RecIngredient, does the User have it? Does the User have enough of it?
    //     recipe.ingredients.forEach(ingredient => {
    //         if(this.pantry[i].id.includes(ingredient.id)) {
    //             if(this.pantry[i].id === ingredient.id) {
    //                 //check if it has enough of it. If not, report back how much is missing.
    //             }
    //         })
    //     })
    // }

};

export default User