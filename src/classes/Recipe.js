import ingredientsData from '../data/ingredients';
import recipeData from '../data/recipes';
import Ingredient from '../classes/Ingredient'


class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
  }

  makeIngredients() {
    const ingredients = ingredientsData.map(ingredient => {
      return new Ingredient(ingredient);
    });
    // console.log(ingredients)
    return ingredients;
  }

  returnAllIngredientIDs() {
      let ingredients = this.makeIngredients();
      let allIngredientIDs = ingredients.map(ingredient => {
        return ingredient.id
      })
      return allIngredientIDs;
  }

  returnRecipeIngredientIDs() {
    const ingredientIDs = this.ingredients.map((ingredient) => {
      return ingredient.id;
    })

    return ingredientIDs;
  }

  returnIngredientNames() {
    // let names = [];
    let allIngredients = this.makeIngredients();
    let recipeIngredientIDs = this.returnRecipeIngredientIDs();
    let allIngredientIDs = this.returnAllIngredientIDs();;

    let newRecipeIngredients = allIngredients.filter(ingredient => {
      if (recipeIngredientIDs.includes(ingredient.id)) {
        return true;
        }
      })
        let names = newRecipeIngredients.map(ingredient => {
          return ingredient.name;
      })

        console.log(names);
        return names;
    //iterate through this.ingredients and then grab their IDs.
    //then we want to iterate through the ingredients array and
    //compare the this.ingredients ID's to the ID's of the
    //objects in the ingredients array. Then, if the ID's match, take the corresponding
    //ingredient name and store it in a new array, return that array.
  }

  returnIngredientCosts() {

  }

  returnRecipeInstructions() {
    let instructionsParagraph = this.instructions.reduce((wholeString, instruction) => {
      return wholeString += `
      ${instruction.number}) ${instruction.instruction}`
    }, '')
    return instructionsParagraph;
  }
};

export default Recipe;
