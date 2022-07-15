class Ingredient {
    constructor(ingredient) {
        this.name = ''
        this.id = ingredient.id;
        this.quantityAmount = ingredient.quantity.amount;
        this.quantityUnit = ingredient.quantity.unit;
        this.costPerUnitInCents = 0;
    }

    findIngredientInfo(ingredientsData) {
      const ingredient = ingredientsData.find(ingredient => ingredient.id === this.id);
      this.name = ingredient.name
      this.costPerUnitInCents = ingredient.estimatedCostInCents;
    }

    calculateCost() {
        return this.quantityAmount * this.costPerUnitInCents / 100
    }

    // updateProperties(recipeData) {
    //     let allIngredients = [];
    //     recipeData.forEach((recipe) => {
    //       recipe.ingredients.forEach((ingredient) => {
    //         allIngredients.push(ingredient);
    //       })
    //     })
    //     let ingredientObj = allIngredients.find((ingredient) => ingredient.id === this.id)
    //     this.quantityAmount = ingredientObj.quantity.amount;
    //     this.quantityUnit = ingredientObj.quantity.unit;
    // }




};


export default Ingredient;
