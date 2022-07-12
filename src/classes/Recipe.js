import  Ingredient  from './Ingredient'; 
// import { recipeData } from './Recipes';

class Recipe {
    constructor(recipe, ingredientList){
        this.id = recipe.id;
        this.image = recipe.image;
        this.ingredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        //this.name is in reference to the recipe name, not ingredient.

        this.tags = recipe.tags;
        this.ingredientList = ingredientList;           
            
    };

    getIngredientName( ingredientList, ingredient ){
        // console.log( 'ingredientList: ', ingredientList)
        // console.log( 'ingredient: ', ingredient)
        const data = ingredientList;
        const findName = data.filter( ( item ) => [ item.id ].includes( ingredient.id ) );
        return findName[ 0 ].name;
      };
    
    // getIngredientName( ingredientList, ingredient ){
    //     // console.log( 'ingredientList: ', ingredientList)
    //     // console.log( 'ingredient: ', ingredient)
    //     const data = ingredientList;
    //     const findName = data.filter( ( item ) => {
    //         return [ item.id ].includes( ingredient.ingredients[0].id );
    //     });
    //     return findName[0].name;
    //   };

    //Get the cost of its ingredients
    // Probably need to match the id's again and return

    getCostOfIngredients( ingredientList, recipeIngredient ){
        // console.log( 'ingredientList: ', ingredientList)
        // console.log( 'ingredient: ', recipeIngredient)
        const data = ingredientList;
        const findCost = data.filter( ( item ) => [ item.id ].includes( recipeIngredient.id ) );
        // console.log( 'FINDCOST: ', findCost[0].estimatedCostInCents )
        // console.log( 'RECIPEINGREDIENT: ', recipeIngredient.quantity.amount )
        return findCost[ 0 ].estimatedCostInCents * recipeIngredient.quantity.amount;
    };

    //Return its directions / instructions
    returnInstructions(){

    };
};

export default Recipe;