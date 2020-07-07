class Recipe {
  constructor() {

  }
}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
// A user should be able to filter recipes by type / tag.
// Create properties:

// []id, image, ingredients, instructions, name, tags all passed into constructor

// Possible need categoryToTagMap property: object that links categories to tags: key will be category, values will be an array of the tags included in that category(e.g.antipasti, starter, snack, appetizer, antipasto, hor d'oeuvre are always listed together; could correspond to just "Appetizer" category)

//  Method: checkRecipe(category): given a category, call helper method below to get back the array of tags associated with that category; then return true or false based on whether the recipe contains those tags

// Helper method: mapCategoryToTag(category): Takes in category, uses categoryToTagMap property to return the array of tags associated with that category

// Write tests for properties & method above