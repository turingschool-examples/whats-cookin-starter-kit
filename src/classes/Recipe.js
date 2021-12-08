import Ingredient from './Ingredient';
class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }
  accessIngredientName() {
    //Get recipe.ingredients[i].id
    //Get ingredient.id
    //Return ingredient.name
    let bellies = this.ingredients;
    let ingredient = new Ingredient ({id: 9003, name: "apple", estimatedCostInCents: 207});
    let belliesIds = bellies.forEach((belly) => {
      // console.log(belly.id)
      bellies.filter((id) => {
        if(id === ingredient.id) {
          return ingredient.name
        }
      })
    })

  }
}


// belliesIds.find(id => {
//   if (id === ingredient.id) {
//     console.log("YASS BITCH")
//   }
// })


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
