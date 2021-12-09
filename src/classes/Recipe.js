import Ingredient from './Ingredient';
import ingredientsData from '../data/ingredients.js';

class Recipe {
  constructor(recipeData, ingredientData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    this.ingredientData = ingredientsData;
  }
  accessIngredientName() {
    let recipeIngredients = this.ingredients;
    let appleCider = new Ingredient({id: 1009016, name: "apple cider", estimatedCostInCents: 468})
    let ingredientData = appleCider.accessIngredientNameAndId()
    console.log(recipeIngredients)
    let recipeIds = []
    let getRecipeIds = recipeIngredients.map(id => {
        recipeIds.push(recipeIngredients.id)
    })
    console.log(recipeIds)
    // let getItems = dataId.maps(ingredient => {
    //   if (ingredient.id === recipeIngredients.id) {
    //     console.log("YO")
    //   }
    // })
    //accessIngredientId() => returns ALL data set ids
    //Filter through through data set to find ids that match
      //recipe ingredients
  }
      // let hellion = this.ingredientsData.filter(ingredient => {
      // ingredient.filter(id => {
      //   if(id === dataId.id)
      // })})
  //Output: Array ingredient names
  //Input: IngredientData with names and ids
  //Filter ingredientData against recipeIngredients
  //See if they match
  //If true, return the name
  //Going to end up needing 2-3 methods(filter/map)
  //Return array of ids that match recipe ids
  //Use new array to go back and pull names off of data





  // accessIngredientName(recipeIngredients) {
  //   let recipeIngredients = this.ingredients;
  //   recipeIngredients.find(ingredient => {
  //     if (ingredient.id === this.ingredientData.id) {
  //       return this.ingredientData.name
  //     }
  //   })
    // recipeIngredients.forEach((ingredient) => {
    //   console.log(ingredient.id)
    // });

    //Get recipe.ingredients[i].id
    //Get ingredient.id
    //Return ingredient.name
    // let bellies = this.ingredients;
    // let belliesIds = bellies.forEach((belly) => {
    //   // console.log(belly.id)
    //   bellies.filter((id) => {
    //     if(id === ingredient.id) {
    //       return ingredient.name
    //     }
    //   })
    // })



// belliesIds.find(id => {
//   if (id === ingredient.id) {
//     console.log("YASS BITCH")
//   }
// })

}
export default Recipe;



// accessIngredientName() {
//   return "HIIIIII"
//   let randomIn = this.ingredients;
//   console.log(ingredient)
//   console.log(randomIn)
//   randomIn.filter(() => {
//     if (randomIn.includes(ingredient.id)) {
//       console.log(ingredient.name)
//       return ingredient.name
//     }
//   })
//
// }





// let bellies = this.ingredients;
// let ingredient = new Ingredient ({id: 9003, name: "apple", estimatedCostInCents: 207});
// let belliesIds = bellies.forEach((belly) => {
//   // console.log(belly.id)
//   bellies.filter((id) => {
//     if(id === ingredient.id) {
//       return ingredient.name
//     }
//   })
// })
