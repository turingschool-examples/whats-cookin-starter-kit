class Pantry {
  constructor(users) {
    this.ingredients = users.pantry;
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
*/
