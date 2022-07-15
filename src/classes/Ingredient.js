class Ingredient {
    constructor(ingredient) {
        this.name = ingredient.name;
        this.id = ingredient.id;
        this.quantityAmount = 0;
        this.quantityUnit = '';
        this.costPerUnitInCents = ingredient.estimatedCostInCents;
    }

    calculateCost() {
        return this.quantityAmount * this.costPerUnitInCents / 100
    }

    updateProperties(recipeData) {
        let allIngredients = [];
        recipeData.forEach((recipe) => {
          recipe.ingredients.forEach((ingredient) => {
            allIngredients.push(ingredient);
          })
        })
        let ingredientObj = allIngredients.find((ingredient) => ingredient.id === this.id)
        this.quantityAmount = ingredientObj.quantity.amount;
        this.quantityUnit = ingredientObj.quantity.unit;
    }




};


export default Ingredient;
