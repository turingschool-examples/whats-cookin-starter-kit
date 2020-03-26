const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/recipe');
const testRecipes = require('../data/test-recipes.js');
const testIngredients = require('../data/test-ingredients.js');

describe('Recipe', () => {
  beforeEach(() => {
    recipe = new Recipe(testRecipes[0], testIngredients, testRecipes);
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have an id', function() {
    expect(recipe.id).to.equal(595736);
  });

  it('should have an image', function() {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should have ingredients', function() {
    expect(recipe.ingredients).to.deep.equal([{
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    }, {
      "id": 18372,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }, {
      "id": 1123,
      "quantity": {
        "amount": 1,
        "unit": "large"
      }
    }, {
      "id": 19335,
      "quantity": {
        "amount": 0.5,
        "unit": "c"
      }
    }, {
      "id": 19206,
      "quantity": {
        "amount": 3,
        "unit": "Tbsp"
      }
    }, {
      "id": 19334,
      "quantity": {
        "amount": 0.5,
        "unit": "c"
      }
    }, {
      "id": 2047,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }, {
      "id": 1012047,
      "quantity": {
        "amount": 24,
        "unit": "servings"
      }
    }, {
      "id": 10019903,
      "quantity": {
        "amount": 2,
        "unit": "c"
      }
    }, {
      "id": 1145,
      "quantity": {
        "amount": 0.5,
        "unit": "c"
      }
    }, {
      "id": 2050,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }]);
  });

  it('should show recipe instructions', function() {
    expect(recipe.instructions).to.deep.equal([{
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      },
      {
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      },
      {
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        "number": 4
      },
      {
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        "number": 5
      },
      {
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
        "number": 6
      }
    ], );
  });

  it('should have a name', function() {
    expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  });

  it('should have tags', function() {
    expect(recipe.tags).to.deep.equal([
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]);
  });

  it('should calculate the cost of its ingredients', function() {
    //I think I can reduce the required decimal places uses the toFixed(2) method to keep it just to 177.76
    expect(recipe.calculateCost()).to.equal(177.76000000000002);
  });


  it('should filter recipes by tag', function() {
    let filteredRecipes = recipe.filterByTag('starter');
    expect(filteredRecipes.length).to.equal(1);
  });

  it('should filter recipes by ingredient', function() {
    let filteredRecipes = recipe.filterByIngredient('instant vanilla pudding');
// Work on this later, still a little buggy
    expect(filteredRecipes.length).to.equal(0);
  })

});
