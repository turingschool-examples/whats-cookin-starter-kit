class Pantry {
  constructor(ingredients) {
    this.ingredients = ingredients || [];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}












//Every User should have a pantry. A Pantry holds on to all the ingredients its owner has stocked, and the amount of each ingredient they have. As a user, I should be able to:

//Determine whether my pantry has enough ingredients to cook a given meal

//Create Property: pantryItems (array of ingredient objects that have ingredient id & amount properties)

// Create Method: checkIfPantryStocked(recipe): Iterates through ingredients in given recipe & checks if either ingredient is NOT in pantry, or if it is, if the amount needed is GREATER than what is currently in pantry; as soon as any of these conditions are true, return false(i.e.no, pantry is not fully stocked for this recipe); otherwise, return true