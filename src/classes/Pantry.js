import ingredientsData from '../data/ingredients'
import recipeData from '../data/recipes'

class Pantry {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.recipesToCook = user.recipesToCook;
  }

  returnIngredientNamesAndAmounts() {
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

  returnIfRecipeIsCookable(recipe) {
    const isCookable = recipe.ingredients.reduce((arr, ingredient) => {
      this.pantry.forEach(item => {
        if (ingredient.id === item.ingredient && ingredient.quantity.amount <= item.amount) {
          arr.push(ingredient)
        }
      })
      return arr
    }, [])
    if (isCookable.length === recipe.ingredients.length) {
      return "Yes! You can cook this recipe";
    } else {
      return "Sorry! You don't have enough to cook this recipe";
    }
  }

}

export default Pantry;
