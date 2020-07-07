class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image; 
    this.ingredients = ingredients; 
    this.instructions = instructions;
    this.name = name;
    if (tags === undefined || (Array.isArray(tags) && tags.length === 0)) {
      this.tags = ['other'];
    } else {
      this.tags = tags;
    };
    this.categoryToTagMap = {
      AppetizersSnacks: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', 'hor d\'oeuvre'],
      Entree: ['lunch', 'main course', 'main dish', 'dinner'],
      SaucesDips: ['sauce', 'condiment', 'dip', 'spread'],
      SideDish: ['side dish'], 
      Breakfast: ['morning meal', 'brunch', 'breakfast'],
      Salad: ['salad'],
      Other: ['other']
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}

//**If pass in a tag that isn't mapped to a category, default the category to Other

//A user should be able to filter recipes by type / tag.

//  Method: checkRecipe(category): given a category, call helper method below to get back the array of tags associated with that category; then return true or false based on whether the recipe contains those tags

// Helper method: mapCategoryToTag(category): Takes in category, uses categoryToTagMap property to return the array of tags associated with that category

// Write tests for properties & method above