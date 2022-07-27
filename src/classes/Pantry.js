// import usersData from '../data/users'
import ingredientsData from '../data/ingredients'

class Pantry {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.recipesToCook = user.recipesToCook;
  }

  returnIngredientNamesAndAmounts() {
  // A method that takes in pantry data and ingredient data, 
// and returns an array of strings, where the strings are the 
// ingredient names and amounts on hand.
const test = this.pantry.reduce((acc, item) => {
  let currentIngredient = item.ingredient;
  ingredientsData.forEach(ingredient => {
    if (ingredient.id === currentIngredient) {
      acc.push(`
  ${ingredient.name}: ${item.amount}`) 
    }
  })
  return acc;
  }, [])
  return test.join();
  }

  // checkIngredients() {
  //   // Do stuff
  // }
}

//check pantry/how many items user has in their pantry
//determine name of item/missing ingredient




// module.exports = Pantry;
export default Pantry;
