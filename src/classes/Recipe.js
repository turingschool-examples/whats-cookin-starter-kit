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

    // getIngredientName( ingredientList, recipeIngredient ){
    //     const data = ingredientList;
    //     const findName = data.filter( ( item ) => [ item.id ].includes( recipeIngredient.id ) );
    //     return findName[ 0 ].name;
    //   };

    getCostOfIngredients( ingredientList, recipeIngredient ){
        const data = ingredientList;
        const findCost = data.filter( ( item ) => [ item.id ].includes( recipeIngredient.id ) );
        return findCost[ 0 ].estimatedCostInCents * recipeIngredient.quantity.amount;
    };

    returnInstructions(){
        return this.instructions;
    };

    getIngredientList(){
        const listOfIngredients = this.recipeIngredients.map( ( ingredient ) => {
            const ingredientName = this.getIngredientName( this.ingredientList, ingredient );
            const ingredientCost = this.getCostOfIngredients( this.ingredientList, ingredient );
            return new Ingredient( ingredient.id, ingredientName,  ingredientCost );
        })
        return listOfIngredients;
    };
    
    getTotalCostOfRecipe(){
        const price = this.getIngredientList().reduce( ( acc, ingredient ) => {
            return acc += ingredient.estimatedCostInCents
        },0 );
        return price;
    };
};

export default Recipe;
