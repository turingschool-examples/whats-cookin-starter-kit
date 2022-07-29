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
    const neededIngredients = [];
    const neededIngredientNames = [];

    const isCookable = recipe.ingredients.reduce((arr, ingredient) => {
      this.pantry.forEach(item => {
        if (ingredient.id === item.ingredient && ingredient.quantity.amount <= item.amount) {
          arr.push(ingredient);
        }

      })
      return arr
    }, [])

    recipe.ingredients.forEach(ingredient => {
      if (!isCookable.includes(ingredient)) {
        neededIngredients.push(ingredient)
      }
    })

    const sumNeededIngredients = neededIngredients.reduce((arr, ingredient) => {
      let sumNeeded = 0
      if (!this.pantry.includes(ingredient)) {
        arr.push(ingredient.quantity.amount)
      }
      this.pantry.forEach((item, index) => {
        if (ingredient.id === item.ingredient) {
          sumNeeded = ingredient.quantity.amount - item.amount;
          arr.push(sumNeeded)
        }
      })
      return arr
    }, [])

    neededIngredients.forEach(ingredient => {
      ingredientsData.forEach(item => {
        if (item.id === ingredient.id) {
          neededIngredientNames.push(item.name)
        }
      })
    })

    let formattedNameAndSum = neededIngredientNames.map((name, index) => {
      return `${name}: ${sumNeededIngredients[index]}`
    })


    if (isCookable.length === recipe.ingredients.length) {
      return "Yes! You can cook this recipe";
    } else {
      return `Sorry! You don't have enough ingredients to cook ${recipe.name}. you need: ${formattedNameAndSum.join("\n")}.`;
    }
  }



}

export default Pantry;
