const chai = require('chai');
const expect = chai.expect;

const User = require('../classes/User');
const Recipe = require('../classes/Recipe');
const Pantry = require('../classes/Pantry')

const data = require('../data/ingredients');
const allIngredients = data.ingredientsData;

describe('Pantry', function () {

  let user;
  let pantry;
  let recipe;


  this.beforeEach(function () {
    recipe = new Recipe({
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [{

          "name": "wheat flour",
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "name": "bicarbonate of soda",
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "name": "eggs",
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "name": "sucrose",
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "instant vanilla pudding",
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "name": "brown sugar",
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "salt",
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "name": "fine sea salt",
          "id": 1012047,
          "quantity": {
            "amount": .24,
            "unit": "servings"
          }
        },
        {
          "name": "semi sweet chips",
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "name": "unsalted butter",
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "vanilla",
          "id": 2050,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [{
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
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    })
    user = new User({
      "name": "Saige O'Kon",
      "id": 1,
      "pantry": [{
          "ingredient": 11477,
          "amount": 4
        },
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1082047,
          "amount": 10
        },
        {
          "ingredient": 20081,
          "amount": 5
        },
        {
          "ingredient": 11215,
          "amount": 5
        },
        {
          "ingredient": 2047,
          "amount": 6
        },
        {
          "ingredient": 1123,
          "amount": 8
        }
      ]
    })
    pantry = new Pantry(user);

  });
  it("Should be an instance of Pantry", function () {
    expect(pantry).to.be.an.instanceof(Pantry)
  });

  it("Should return this.pantry with updated object that have names and costs", function () {

    pantry.newPantry(user.pantry)

    expect(pantry.newPantry(user.pantry)).to.deep.equal([{
      "name": "zucchini squash",
      "cost": 742,
      "ingredient": 11477,
      "amount": 4
    }, {
      "name": "flat leaf parsley leaves",
      "cost": 1030,
      "ingredient": 11297,
      "amount": 4
    }, {
      "name": "kosher salt",
      "cost": 972,
      "ingredient": 1082047,
      "amount": 10
    }, {
      "name": "wheat flour",
      "cost": 142,
      "ingredient": 20081,
      "amount": 5
    }, {
      "name": "whole garlic clove",
      "cost": 220,
      "ingredient": 11215,
      "amount": 5
    }, {
      "name": "salt",
      "cost": 280,
      "ingredient": 2047,
      "amount": 6
    }, {
      "name": "eggs",
      "cost": 472,
      "ingredient": 1123,
      "amount": 8
    }])
  });

  it("Should return an array of recipe ingredient names", function () {
    expect(pantry.findRecipeNames(recipe)).to.deep.equal(["wheat flour",
      "bicarbonate of soda", "eggs", "sucrose", "instant vanilla pudding",
      "brown sugar", "salt", "fine sea salt", "semi sweet chips",
      "unsalted butter", "vanilla"
    ])
  });

  it("Should return an array of ingredient names in the pantry", function () {

    expect(pantry.findPantryNames()).to.deep.equal(['zucchini squash',
      'flat leaf parsley leaves', 'kosher salt', 'wheat flour',
      'whole garlic clove', "salt", "eggs"
    ])

  });

  it("Should compare the two arrays of ingredient names in the pantry", function () {
    let pantryNames = ['zucchini squash',
      'flat leaf parsley leaves', 'kosher salt', 'wheat flour',
      'whole garlic clove', "salt", "eggs"
    ]

    let recipeIngredientNames = ["wheat flour",
      "bicarbonate of soda", "eggs", "sucrose", "instant vanilla pudding",
      "brown sugar", "salt", "fine sea salt", "semi sweet chips",
      "unsalted butter", "vanilla"
    ]

    expect(pantry.checkUserHasIngredients(recipeIngredientNames, pantryNames)).to.equal(false)

  });

  it("Should return an array of ingredients that is needed to complete the recipe", function () {

    let pantryNames = ['zucchini squash',
      'flat leaf parsley leaves', 'kosher salt', 'wheat flour',
      'whole garlic clove', "salt", "eggs"
    ]

    let recipeIngredientNames = ["wheat flour",
      "bicarbonate of soda", "eggs", "sucrose", "instant vanilla pudding",
      "brown sugar", "salt", "fine sea salt", "semi sweet chips",
      "unsalted butter", "vanilla"
    ]

    expect(pantry.returnMissingNames(recipeIngredientNames,
      pantryNames)).to.deep.equal(["bicarbonate of soda", "sucrose",
      "instant vanilla pudding", "brown sugar", "fine sea salt",
      "semi sweet chips", "unsalted butter", "vanilla"
    ])

  });

  it("Should return an array of the names of missing ingredients", function () {

    let pantryNames = ['zucchini squash',
      'flat leaf parsley leaves', 'kosher salt', 'wheat flour',
      'whole garlic clove', "salt", "eggs"
    ]

    let recipeIngredientNames = ["wheat flour",
      "bicarbonate of soda", "eggs", "sucrose", "instant vanilla pudding",
      "brown sugar", "salt", "fine sea salt", "semi sweet chips",
      "unsalted butter", "vanilla"
    ]

    let needThisStuff = ["bicarbonate of soda", "sucrose",
      "instant vanilla pudding", "brown sugar", "fine sea salt",
      "semi sweet chips", "unsalted butter", "vanilla"
    ]

    expect(pantry.returnMissingNames(recipeIngredientNames, pantryNames)).to.deep.equal(needThisStuff)

  });

  it("Should return all missing ingredient objects", function () {

    let needThisStuff = ["bicarbonate of soda", "sucrose",
      "instant vanilla pudding", "brown sugar", "fine sea salt",
      "semi sweet chips", "unsalted butter", "vanilla"
    ]

    expect(pantry.getNeededIngredients(needThisStuff, recipe)).to.deep.equal([{
        name: 'bicarbonate of soda',
        id: 18372,
        quantity: {
          amount: 0.5,
          unit: 'tsp'
        }
      },
      {
        name: 'sucrose',
        id: 19335,
        quantity: {
          amount: 0.5,
          unit: 'c'
        }
      },
      {
        name: 'instant vanilla pudding',
        id: 19206,
        quantity: {
          amount: 3,
          unit: 'Tbsp'
        }
      },
      {
        name: 'brown sugar',
        id: 19334,
        quantity: {
          amount: 0.5,
          unit: 'c'
        }
      },
      {
        name: 'fine sea salt',
        id: 1012047,
        quantity: {
          amount: .24,
          unit: 'servings'
        }
      },
      {
        name: 'semi sweet chips',
        id: 10019903,
        quantity: {
          amount: 2,
          unit: 'c'
        }
      },
      {
        name: 'unsalted butter',
        id: 1145,
        quantity: {
          amount: 0.5,
          unit: 'c'
        }
      },
      {
        name: 'vanilla',
        id: 2050,
        quantity: {
          amount: 0.5,
          unit: 'tsp'
        }
      }
    ])
  });

  it("Should return an array of obects with a name and amount needed for recipe", function () {

    let needThisStuff = [{
        name: 'bicarbonate of soda',
        id: 18372,
        quantity: {
          amount: 0.5,
          unit: 'tsp'
        }
      },
      {
        name: 'sucrose',
        id: 19335,
        quantity: {
          amount: 0.5,
          unit: 'c'
        }
      },
      {
        name: 'instant vanilla pudding',
        id: 19206,
        quantity: {
          amount: 3,
          unit: 'Tbsp'
        }
      },
      {
        name: 'brown sugar',
        id: 19334,
        quantity: {
          amount: 0.5,
          unit: 'c'
        }
      },
      {
        name: 'fine sea salt',
        id: 1012047,
        quantity: {
          amount: 24,
          unit: 'servings'
        }
      },
      {
        name: 'semi sweet chips',
        id: 10019903,
        quantity: {
          amount: 2,
          unit: 'c'
        }
      },
      {
        name: 'unsalted butter',
        id: 1145,
        quantity: {
          amount: 0.5,
          unit: 'c'
        }
      },
      {
        name: 'vanilla',
        id: 2050,
        quantity: {
          amount: 0.5,
          unit: 'tsp'
        }
      }
    ]
    expect(pantry.getAmountsNeeded(needThisStuff, recipe)).to.deep.equal([{
        name: 'bicarbonate of soda',
        amountNeeded: 1
      },
      {
        name: 'sucrose',
        amountNeeded: 1
      },
      {
        name: 'instant vanilla pudding',
        amountNeeded: 3
      },
      {
        name: 'brown sugar',
        amountNeeded: 1
      },
      {
        name: 'fine sea salt',
        amountNeeded: 1
      },
      {
        name: 'semi sweet chips',
        amountNeeded: 2
      },
      {
        name: 'unsalted butter',
        amountNeeded: 1
      },
      {
        name: 'vanilla',
        amountNeeded: 1
      }
    ])
  });

  it("Should return total cost of all missing items", function () {

    let needThisStuff = [{
        name: 'bicarbonate of soda',
        amountNeeded: 1
      },
      {
        name: 'sucrose',
        amountNeeded: 1
      },
      {
        name: 'instant vanilla pudding',
        amountNeeded: 3
      },
      {
        name: 'brown sugar',
        amountNeeded: 1
      },
      {
        name: 'fine sea salt',
        amountNeeded: 1
      },
      {
        name: 'semi sweet chips',
        amountNeeded: 2
      },
      {
        name: 'unsalted butter',
        amountNeeded: 1
      },
      {
        name: 'vanilla',
        amountNeeded: 1
      }
    ]

    expect(pantry.getTotalCost(needThisStuff, allIngredients)).to.deep.equal(6600)
  });

  it("Should return total cost of all missing items", function () {

    let needThisStuff = [{
        name: 'bicarbonate of soda',
        amountNeeded: 1
      },
      {
        name: 'sucrose',
        amountNeeded: 1
      },
      {
        name: 'instant vanilla pudding',
        amountNeeded: 3
      },
      {
        name: 'brown sugar',
        amountNeeded: 1
      },
      {
        name: 'fine sea salt',
        amountNeeded: 1
      },
      {
        name: 'semi sweet chips',
        amountNeeded: 2
      },
      {
        name: 'unsalted butter',
        amountNeeded: 1
      },
      {
        name: 'vanilla',
        amountNeeded: 1
      }
    ]

    expect(pantry.createGroceryList(needThisStuff, 6600)).to.deep.equal({
      "ingredients": [{
          name: 'bicarbonate of soda',
          amountNeeded: 1
        },
        {
          name: 'sucrose',
          amountNeeded: 1
        },
        {
          name: 'instant vanilla pudding',
          amountNeeded: 3
        },
        {
          name: 'brown sugar',
          amountNeeded: 1
        },
        {
          name: 'fine sea salt',
          amountNeeded: 1
        },
        {
          name: 'semi sweet chips',
          amountNeeded: 2
        },
        {
          name: 'unsalted butter',
          amountNeeded: 1
        },
        {
          name: 'vanilla',
          amountNeeded: 1
        }
      ],
      "totalCost": 6600
    })
  });

})