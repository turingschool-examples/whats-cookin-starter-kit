const pantryIngredients = [
  {
    "ingredient": 1017,
    "amount": 2
  },
  {
    "ingredient": 18371,
    "amount": 7
  },
  {
    "ingredient": 1001,
    "amount": 6
  },
  {
    "ingredient": 99223,
    "amount": 2
  },
  {
    "ingredient": 1230,
    "amount": 2
  },
  {
    "ingredient": 9152,
    "amount": 4
  },
  {
    "ingredient": 20081,
    "amount": 10
  },
  {
    "ingredient": 18372,
    "amount": 3
  },
];

class Pantry {
  constructor(ingredients) {
    this.ingredients = ingredients || [];
  }

  getQuantity(ingredient) {
    let amount;
    pantryIngredients.map((ingred) => {
      if (ingred.ingredient === ingredient.id) {
      amount = ingred.amount;
      }
    });
    return amount
  }

  measureIngredients(recipe) {
    
  }

  removeIngredients() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}

/*Pantries
Every User should have a pantry.
A Pantry holds on to all the ingredients
its owner has stocked, and the amount
of each ingredient they have. As a user,
I should be able to:

Determine whether my pantry has enough
ingredients to cook a given meal
Determine the amount of ingredients still
needed to cook a given meal, based on
what’s in my pantry
Remove the ingredients used for a given meal
from my pantry, once that meal has been cooked
(only applicable if users have a list of mealsToCook;
can be considered a stretch goal)
A Note:
When you test a JavaScript class file, you need to use module.exports in your class file so the test can use the code - just like Mythical Creatures. However, in this project when you call that same class in the browser, the browser has no idea what module is. So your code crashes. The module object is something your tests know how to use, but the browser has no idea what it is. To fix this, you’ll want to include something like this in your class file (for each class file that you create):*/
