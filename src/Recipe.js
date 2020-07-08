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

  //when filtering recipes by category, need to call 2 methods below together (return value from mapCategoryToTag (tags array) gets passed into checkRecipeCategory)
  mapCategoryToTag = category => this.categoryToTagMap[category];

  checkRecipeCategory = categoryTags => this.tags.some(tag => categoryTags.includes(tag)); 

  checkRecipeIngredients = ingredientSearchedId => this.ingredients.some(ingredient => ingredient.id === ingredientSearchedId); 

  calculateIngredientsCost = ingredientsData => {
    return this.ingredients.reduce((totalIngredientsCost, ingredient) => {
      let matchingIngredient = ingredientsData.find(ingredientCost => ingredientCost.id === ingredient.id) || {estimatedCostInCents: 100};
      let ingredientCost = matchingIngredient.estimatedCostInCents
      return totalIngredientsCost + ingredientCost; 
    }, 0);
  }

  retrieveRecipeInstructions = () => this.instructions;
}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}