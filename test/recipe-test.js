const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Ingredient = require('../src/Ingredient');
const Recipe = require('../src/Recipe');

describe('Recipe', function() {

  let user1, ingredient1, ingredient2, allIngredients, recipe1;

  beforeEach(function() {
    user1 = new User({name: "Saige O'Kon", id: 1, pantry: [{ingredient: 20081, amount: 4}, {ingredient: 18372, amount: 4}]})
    ingredient1 = new Ingredient({id: 20081,
      name: "wheat flour",
      estimatedCostInCents: 142});
    ingredient2 = new Ingredient({id: 18372,
      name: "bicarbonate of soda",
      estimatedCostInCents: 582});
    ingredient3 = new Ingredient({id: 18367,
      name: "chocolate chips",
      estimatedCostInCents: 600});
    allIngredients = [ingredient1, ingredient2, ingredient3];
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
    ingredient11 = new Ingredient({id: 2048,
      name: "apple cider vinegar",
      estimatedCostInCents: 532});
    ingredient22 = new Ingredient({id: 18371,
      name: "baking powder",
      estimatedCostInCents: 346});
    ingredient33 = new Ingredient({id: 20090,
      name: "brown rice flour",
      estimatedCostInCents: 667});
    ingredient44 = new Ingredient({id: 12345,
      name: "chocolate chips",
      estimatedCostInCents: 600});
    allIngredients2 = [ingredient11, ingredient22, ingredient33, ingredient44];
    recipe2 = new Recipe({
      id: 562334,
      image: "https://spoonacular.com/recipeImages/562334-556x370.jpg",
      ingredients: [
        {
          "id": 2048,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "teaspoon"
          }
        },
        {
          "id": 20090,
          "quantity": {
            "amount": 1.125,
            "unit": "cup"
          }
        }],
      instructions: [
        {
          "instruction": "Grease or spray oil a 9\u00d75 inch loaf pan.Preheat oven to 170 \u2013 200\u00b0F (lowest possible).",
          "number": 1
        },
        {
          "instruction": "Mix warm water with brown rice syrup, molasses, and yeast in a cup larger than 8 oz., as it may bubble over; set aside until foamy on the top, no more than 5 minutes.In the bowl of your mixer, beat the eggs at high speed in a large mixing bowl until large bubbles form, about 20 seconds.",
          "number": 2
        }],
      name: "Mock Udi\u2019s Gluten Free Whole Grain Bread",
      tags: []
    })
    expect(recipe2.calculateCostOfIngredients(allIngredients2)).to.equal(1929.71)
    expect(recipe1.calculateCostOfIngredients(allIngredients)).to.equal(504)
  });

  it('should return instructions', function() {
    expect(recipe1.returnInstructions()).to.equal(recipe1.printedInstructions);
  })

  it('should return true if the meal has been cooked', function() {
    recipe1.cookRecipe(user1, recipe1);
    expect(recipe1.hasBeenCooked).to.equal(true);
  })

});
