class Recipe {
    constructor(data,recipe) {
        this.ingredientsMasterList = data
        this.recipeIngredients = recipe.ingredients
        this.modifiedData = this.combinedIngredients()
        this.id = recipe.id;
        this.image = recipe.image;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
        this.modifiedIngredients = this.ingredientsNeeded()
    }

    combinedIngredients() {
        let ingredientsNeededInfo = [];
        this.recipeIngredients.forEach((ingredient) => {
            var info = this.ingredientsMasterList.find( ing => ingredient.id === ing.id)
            ingredientsNeededInfo.push({...info,...ingredient})
        })
        return ingredientsNeededInfo
    }

    ingredientsNeeded() {
        let ingredientsNeeded = [];
        this.modifiedData.forEach((ingredient) => {
                ingredientsNeeded.push(ingredient.name)
        })       
        return ingredientsNeeded
    }

    getIngredientsCost() {
        var totalIngredientCost = this.modifiedData.reduce(function(acc,item){
            let ingredientCost = item.estimatedCostInCents * item.quantity.amount
            return acc + ingredientCost
        }, 0)
       return totalIngredientCost
    }

    getInstructions() {
        return this.instructions
    }
};

export default Recipe;