const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe');
const Pantry = require('../src/pantry');
const User = require('../src/user');

let recipeDataTest = require('../tests/Recipe-test-data');
let userTestData = require('../tests/user-test-data');
let ingredientsData = require('../data/ingredients.js');

describe('Pantry', function() {
  let recipe1, pantry, user;

  beforeEach(function() {
    recipe1 = new Recipe(recipeDataTest[0]);
    user = new User(userTestData)
    pantry = user.pantry
    pantry.getIngredientDetails(ingredientsData);
  });

  it('should be a function', function () {
    expect(Pantry).to.be.a('function');
  });

  it('should instantiate pantry', function() {
    expect(user.pantry).to.be.an.instanceOf(Pantry);
  });

  it('should have all users ingredients', function() {
    expect(user.pantry).to.equal(pantry)
  });

  it('it should be able to gain the properties of ingredients', function() {
    expect(pantry.pantry[0]).to.have.property('name')
  });

  it('should return the items of the recipie not in the pantry', function() {
    const neededItems = pantry.requiredForMeal(recipe1)
    expect(neededItems).to.deep.equal([ { id: 19206, quantity: { amount: 3, unit: 'Tbsp' } } ])
  });

  it('should remove items and quantities when a meal is cooked', function() {
    pantry.cookMeal(recipe1);
    expect(pantry.pantry).to.deep.equal(
      [{
        ingredient: 11477,
        amount: 4,
        id: 11477,
        name: 'zucchini squash',
        estimatedCostInCents: 742
      },
      {
        ingredient: 11297,
        amount: 4,
        id: 11297,
        name: 'flat leaf parsley leaves',
        estimatedCostInCents: 1030
      },
      {
        ingredient: 1082047,
        amount: 10,
        id: 1082047,
        name: 'kosher salt',
        estimatedCostInCents: 972
      },
      {
        ingredient: 20081,
        amount: 3.5,
        id: 20081,
        name: 'wheat flour',
        estimatedCostInCents: 142
      },
      {
        ingredient: 11215,
        amount: 5,
        id: 11215,
        name: 'whole garlic clove',
        estimatedCostInCents: 220
      },
      {
        ingredient: 2047,
        amount: 5.5,
        id: 2047,
        name: 'salt',
        estimatedCostInCents: 280
      },
      {
        ingredient: 1123,
        amount: 7,
        id: 1123,
        name: 'eggs',
        estimatedCostInCents: 472
      },
      {
        ingredient: 11282,
        amount: 4,
        id: 11282,
        name: 'onions',
        estimatedCostInCents: 439
      },
      {
        ingredient: 6172,
        amount: 2,
        id: 6172,
        name: 'chicken stock',
        estimatedCostInCents: 454
      },
      {
        ingredient: 2044,
        amount: 2,
        id: 2044,
        name: 'basil',
        estimatedCostInCents: 203
      },
      {
        ingredient: 2050,
        amount: 3.5,
        id: 2050,
        name: 'vanilla',
        estimatedCostInCents: 926
      },
      {
        ingredient: 1032009,
        amount: 3,
        id: 1032009,
        name: 'dried red chili',
        estimatedCostInCents: 1015
      },
      {
        ingredient: 5114,
        amount: 3,
        id: 5114,
        name: 'roasted chicken',
        estimatedCostInCents: 708
      },
      {
        ingredient: 1017,
        amount: 2,
        id: 1017,
        name: 'cream cheese',
        estimatedCostInCents: 955
      },
      {
        ingredient: 18371,
        amount: 7,
        id: 18371,
        name: 'baking powder',
        estimatedCostInCents: 346
      },
      {
        ingredient: 1001,
        amount: 6,
        id: 1001,
        name: 'butter',
        estimatedCostInCents: 618
      },
      {
        ingredient: 99223,
        amount: 2,
        id: 99223,
        name: 'canned chipotle chilies in adobo',
        estimatedCostInCents: 299
      },
      {
        ingredient: 1230,
        amount: 2,
        id: 1230,
        name: 'buttermilk',
        estimatedCostInCents: 773
      },
      {
        ingredient: 9152,
        amount: 4,
        id: 9152,
        name: 'lemon juice',
        estimatedCostInCents: 274
      },
      {
        ingredient: 10611282,
        amount: 2,
        id: 10611282,
        name: 'white onions',
        estimatedCostInCents: 449
      },
      {
        ingredient: 93607,
        amount: 2,
        id: 93607,
        name: 'almondmilk',
        estimatedCostInCents: 787
      },
      {
        ingredient: 14106,
        amount: 4,
        id: 14106,
        name: 'white wine',
        estimatedCostInCents: 675
      },
      {
        ingredient: 1077,
        amount: 4,
        id: 1077,
        name: 'full-fat milk',
        estimatedCostInCents: 276
      },
      {
        ingredient: 6150,
        amount: 2,
        id: 6150,
        name: 'bar b que sauce',
        estimatedCostInCents: 966
      },
      {
        ingredient: 1124,
        amount: 2,
        id: 1124,
        name: 'egg albumen',
        estimatedCostInCents: 304
      },
      {
        ingredient: 10011693,
        amount: 4,
        id: 10011693,
        name: 'canned tomato',
        estimatedCostInCents: 171
      },
      {
        ingredient: 1102047,
        amount: 2,
        id: 1102047,
        name: 's&p',
        estimatedCostInCents: 524
      },
      {
        ingredient: 19206,
        amount: -1,
        id: 19206,
        name: 'instant vanilla pudding',
        estimatedCostInCents: 660
      },
      {
        ingredient: 1145,
        amount: 3.5,
        id: 1145,
        name: 'unsalted butter',
        estimatedCostInCents: 617
      },
      {
        ingredient: 1002030,
        amount: 4,
        id: 1002030,
        name: 'black pepper',
        estimatedCostInCents: 441
      },
      {
        ingredient: 12061,
        amount: 2,
        id: 12061,
        name: 'whole almonds',
        estimatedCostInCents: 1029
      },
      {
        ingredient: 19335,
        amount: 3.5,
        id: 19335,
        name: 'sucrose',
        estimatedCostInCents: 902
      },
      {
        ingredient: 15152,
        amount: 3,
        id: 15152,
        name: 'jumbo shrimp',
        estimatedCostInCents: 804
      },
      {
        ingredient: 9003,
        amount: 2,
        id: 9003,
        name: 'apple',
        estimatedCostInCents: 207
      },
      {
        ingredient: 18372,
        amount: 2.5,
        id: 18372,
        name: 'bicarbonate of soda',
        estimatedCostInCents: 582
      },
      {
        ingredient: 2027,
        amount: 2,
        id: 2027,
        name: 'oregano',
        estimatedCostInCents: 835
      }
    ])
  });

});
