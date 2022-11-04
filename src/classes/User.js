import Pantry from "./Pantry";

class User {
    constructor(userData) {
        this.name = userData.name;
        this.id = userData.id;
        this.pantry = userData.pantry;
        this.recipesToCook = [];
    }

    addRecipeToRecipesToCook(recipe) {
        if (this.recipesToCook.includes(recipe)) {
        } else {
            this.recipesToCook.push(recipe)
        }
        return this.recipesToCook
    }

    removeRecipeFromRecipesToCook(recipe) {
        if (this.recipesToCook.includes(recipe)) {
            var index = this.recipesToCook.indexOf(recipe)
            this.recipesToCook.splice(index, 1)
        }
    }

    filterRecipesToCookByName(name) {
        let filteredRecipe = this.recipesToCook.filter((recipe) => {
            return recipe.name.includes(name);
        })
        return filteredRecipe
    }

    filterRecipesToCookByTag(tag) {
        let filteredTagsArray = []
        this.recipesToCook.forEach(recipe => {
            if (recipe.tags.includes(tag)) {
                filteredTagsArray.push(recipe)
            }
        })
        return filteredTagsArray
    }

    returnUserName() {
        return this.name
    }

    returnUserId() {
        return this.id
    }

    addIngredientToPantry(addedIngredient, amount, unit) {
        let pantryIndex;
        let searchedIngredient = this.pantry.pantry.find((ingredient, index) => {
            pantryIndex = index;
            return ingredient.ingredient === addedIngredient.id;
        });
    
        if (!searchedIngredient) {
            this.pantry.pantry.push({ingredient: addedIngredient.id, amount: amount});
        } else {
            this.pantry.pantry[pantryIndex].amount += amount;
        };
    };
}

export default User;