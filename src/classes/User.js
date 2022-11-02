
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
        //id, quantity{amount, unit}. <<NO NAME GIVEN!!
        this.pantry.push(ingredient);
    };

    checkPantry(recipe) {
        let pantryStatus = [];
        let pantryIdsArray = this.pantry.reduce((acc, ing) => {
            acc.push(ing.ingredient);
            return acc;
        }, []);

        recipe.ingredients.forEach(rIng => {
            if(!pantryIdsArray.includes(rIng.id)) {
                let obj = {};
                obj['id'] = rIng.id;
                obj['stockStatus'] = 'empty';
                obj['recipeQ'] = rIng.quantity.amount;
                obj['pantryQ'] = 0;
                pantryStatus.push(obj);
                }
            return this.pantry.forEach(pIng => {
                if(pantryIdsArray.includes(rIng.id)) {
                    if(pIng.ingredient === rIng.id && pIng.amount >= rIng.quantity.amount) {
                        let obj = {};
                        obj['id'] = rIng.id;
                        obj['stockStatus'] = 'sufficient';
                        obj['recipeQ'] = rIng.quantity.amount;
                        obj['pantryQ'] = pIng.amount;
                        pantryStatus.push(obj);
                    }
                    if(pIng.ingredient === rIng.id && pIng.amount < rIng.quantity.amount) {
                        let obj = {};
                        obj['id'] = rIng.id;
                        obj['stockStatus'] = 'not enough';
                        obj['recipeQ'] = rIng.quantity.amount;
                        obj['pantryQ'] = pIng.amount;
                        pantryStatus.push(obj);
                    };
                } ;
            });
        });
        return pantryStatus;
    };
};

export default User