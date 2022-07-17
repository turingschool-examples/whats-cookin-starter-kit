class Recipe {
    constructor( recipe, ingredientList ){
        this.id = recipe.id;
        this.image = recipe.image;
        this.recipeIngredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
        this.ingredientList = ingredientList;            
    };

    getIngredientsWithNames( recipe , ingredientList ){
        return recipe.map( ingredient => { 
            ingredient.name = ingredientList.find( ing => ing.id == ingredient.id ).name;
            return ingredient.name;
        });       
    };

    getCostOfIngredients( recipe , ingredientList ){
        return recipe.reduce( ( acc, item ) => {
            ingredientList.forEach( ingredient => {
                if( item.id === ingredient.id ) {
                    let total = item.quantity.amount * ingredient.estimatedCostInCents
                    acc = total
                }
            } )
            return acc
        }, 0 )
    };

    returnInstructions( ){
        return this.instructions;
    };
   
};

export default Recipe;
