class Pantry {
    constructor(pantry) {
        this.ingredientsInPantry = pantry || [];
    };
    getIngredientDetails(ingredientData) {
        const pantryIngredients = this.ingredientsInPantry.map(ingredient => {
            const foundIngredient = ingredientData.find(
              data => data.id === ingredient.id
            );
            console.log('found:', foundIngredient)
            console.log('ingredient', ingredient)
            console.log('this:', this.ingredientsInPantry)
            return {
                'id': ingredient.id,
                'name': foundIngredient.name,
                'amount': ingredient.amount
            }
          });
          return pantryIngredients
         }
    };

    // getMissingIngredients(recipeData, ingredientData) {

    // }




export default Pantry;
