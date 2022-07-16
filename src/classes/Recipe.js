import  Ingredient  from './Ingredient'; 
// import { recipeData } from './Recipes';

class Recipe {
    constructor(recipe, ingredientList){
        // console.log('RECIPE: ', recipe)
        // console.log({ingredientList})
        this.id = recipe.id;
        // console.log('THIS.ID: ', this.id)
        this.image = recipe.image;
        this.recipeIngredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
        this.ingredientList = ingredientList;
        // this.totalCost = this.getTotalCostOfRecipe()    
        // console.log('INGREDIENTLIST: ', this.ingredientList)     
            
    };

    getIngredientsWithNames( recipe , ingredientList ){
        return recipe.map(ingredient => { 
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
        },0 )
    };

    returnInstructions(){
        return this.instructions;
    };
    
    // getIngredientNamesForRecipe( recipe , ingredientList ){
    //     return recipe.reduce( ( acc, recipeIngredient ) => {
    //         // console.log('INGREDIENTLIST: ', ingredientList)
    //         ingredientList.forEach( ingredient => {
    //             console.log('RECIPEINGREDIENT: ', recipeIngredient)
    //             console.log('INGREDIENT: ', ingredient)
    //             if( recipeIngredient.id === ingredient.id ) {
    //                 recipeIngredient.name = ingredient.name
    //                 acc.push( recipeIngredient )
    //                 console.log('ACC: ', acc)
    //             }
    //         } )
    //         return acc
    //     }, [ ] )
    // }
};

export default Recipe;
