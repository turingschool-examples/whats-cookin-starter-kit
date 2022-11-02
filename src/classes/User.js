//import { prototype } from "mocha";

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

//for each RecipeIngredient, does the user.pantry have it? Does the user.pantry have enough of it?
//if they don't have it OR don't have enough of it, we need to tell them to get a specified amount of the ingredient.
//if they have the ingredient AND the proper amount, that ingredient gets the 'green light.'
//this method should act as the 'gatekeeper' if they have enough of ALL the ingredients. If they do not have everything, the cooking process should NOT be allowed to start.
//don't worry about USING the ingredients in a recipe yet; that step comes later.


    checkPantry(recipe) {
        const pantryIdsArray = this.pantry.reduce((acc, ing) => {
            acc.push(ing.ingredient);
            return acc;
        }, []);

        const yeah = recipe.ingredients.forEach(rIng => {
            const checker = this.pantry.forEach(pIng => {
                if(pantryIdsArray.includes(rIng.id) && pIng.ingredient === rIng.id && pIng.amount >= rIng.quantity.amount) {
                    return 1;
                };
                if(pantryIdsArray.includes(rIng.id) && pIng.ingredient === rIng.id && pIng.amount < rIng.quantity.amount) {
                    return 2;
                };
                if(!pantryIdsArray.includes(rIng.id)) {
                    console.log(3)
                    return 3;
                };
            })
            console.log(checker)
            return checker;
        });
        console.log(pantryIdsArray)
        console.log(yeah)
    };
//If pantry includes (filter then see if it is more than one????)
};

export default User