// import { ingredientsData } from './Ingredients'; 
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
        //A Recipe represents one recipe object.
        //It should hold on to all its information (provided in the data file).
        //It should have methods to:
            //Determine the names of ingredients needed
            //Get the cost of its ingredients
            //Return its directions / instructions
    };

    // getIngredientName( ingredientList, ingredient ){

    //     match id# to the name of the item in ingredients data with
    //     matching id#. 
    //     const ingredientData = ingredientList;
    //     console.log(ingredientData);
    //     const findName = ingredientData.filter( ( item ) => {
    //         console.log(item);
    //       return [ item.id ].includes( ingredient.id );
    //     });
    //     console.log(findName);
    //     return findName[ 0 ].name;
    //   };

    sumCost(){

    };

    returnInstructions(){

    };
};

export default Recipe;