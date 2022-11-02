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
        let hoorayArray = [];
        let needMoreArray = [];
        let noneArray = [];
        let pantryIdsArray = this.pantry.reduce((acc, ing) => {
            acc.push(ing.ingredient);
            return acc;
        }, []);

        const checker = recipe.ingredients.forEach(rIng => {
            if(!pantryIdsArray.includes(rIng.id)) {
                let obj = {};
                obj['id'] = rIng.id;
                obj['recAmount'] = rIng.quantity.amount;
                obj['panAmount'] = 0;
                obj['amountNeeded'] = rIng.quantity.amount;
                noneArray.push(obj)
                }
            return this.pantry.forEach(pIng => {
                if(pantryIdsArray.includes(rIng.id)) {
                    if(pIng.ingredient === rIng.id && pIng.amount >= rIng.quantity.amount) {
                        let obj = {};
                        obj['id'] = rIng.id;
                        obj['recAmount'] = rIng.quantity.amount;
                        obj['panAmount'] = pIng.amount;
                        obj['amountLeft'] = pIng.amount - rIng.quantity.amount ;
                        hoorayArray.push(obj)
                    }
                    if(pIng.ingredient === rIng.id && pIng.amount < rIng.quantity.amount) {
                        let obj = {};
                        obj['id'] = rIng.id;
                        obj['recAmount'] = rIng.quantity.amount;
                        obj['panAmount'] = pIng.amount;
                        obj['amountNeeded'] = rIng.quantity.amount - pIng.amount;
                        needMoreArray.push(obj)
                    }
                } 
            });
        });
        console.log('hoorayArray: ', hoorayArray)
        console.log('needMoreArray: ', needMoreArray)
        console.log('noneArray: ', noneArray)
        return checker;
    }
};

export default User