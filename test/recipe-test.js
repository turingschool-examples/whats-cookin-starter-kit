const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredient');
const Recipe = require('../src/Recipe');

describe('Recipe', function() {

  let ingredient1, ingredient2, allIngredients, recipe1;

  beforeEach(function() {
    ingredient1 = new Ingredient({id: 20081,
      name: "wheat flour",
      estimatedCostInCents: 142});
    ingredient2 = new Ingredient({id: 18372,
      name: "bicarbonate of soda",
      estimatedCostInCents: 582});
    allIngredients = [ingredient1, ingredient2];
    recipe1 = new Recipe({
      id: 595736,
      image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      ingredients: [{id: 20081, quantity: {amount: 1.5, unit: "c"}},{id: 18372, quantity: {amount: 0.5, unit: "tsp"}}],
      instructions: [{
          instruction: "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          number: 1
        },
        {
          instruction: "Add egg and vanilla and mix until combined.",
          number: 2
        },
      ],
      name: "Loaded Chocolate Chip Pudding Cookie Cups",
      tags: [
        "antipasti",
        "starter",
        "snack"
      ]
    });
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of the Recipe class', function() {
    expect(recipe1).to.be.an.instanceof(Recipe);;
  });

  it('should calculate the cost of ingredients', function() {
    recipe1.calculateCostOfIngredients(allIngredients);

    expect(recipe1.calculateCostOfIngredients()).to.equal(504)
  });

  it('should return instructions', function() {
    recipe1.returnInstructions();
    expect(recipe1.returnInstructions()).to.equal(recipe1.printedInstructions);
  })

  it('should return true if the meal has been cooked', function() {
    recipe1.cookRecipe();
    expect(recipe1.hasBeenCooked).to.equal(true);
  })

});
