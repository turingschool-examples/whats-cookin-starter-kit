const chai = require('chai');
const expect = chai.expect;

const User = require('../classes/User');
const Recipe = require('../classes/Recipe');
const Pantry = require('../classes/Pantry')

describe('Pantry', function() {

  let user;
  let pantry;
  let recipe;

  this.beforeEach(function() {
    recipe = new Recipe({
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [{
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
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

  it("should be an instance of Recipe", function() {
    expect(recipe).to.be.an.instanceof(Recipe)
  });

  it.only('should add totalcostOfIngredient and name property each ingredient in the recipe', function() {
    expect(recipe.addProperties(recipe.ingredients)).to.deep.equal(
      [{
          id: 1123,
          quantity: {
            amount: 1,
            unit: 'large'
          },
          name: 'eggs',
          totalCostOfIngredient: 472
        },
        {
          id: 20081,
          quantity: {
            amount: 1.5,
            unit: 'c'
          },
          name: 'wheat flour',
          totalCostOfIngredient: 213
        },
        {
          id: 18372,
          quantity: {
            amount: 0.5,
            unit: 'tsp'
          },
          name: 'bicarbonate of soda',
          totalCostOfIngredient: 291
        }
      ]
    )
  });

  it.only('should calculate total cost to cost a recipe', function() {
    expect(recipe.cost).to.equal(976);
  });

  it.only('should return an array of instructions', function() {
    expect(recipe.returnDirections()).to.deep.equal([{
        instruction: 'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
        number: 1
      },
      {
        instruction: 'Add egg and vanilla and mix until combined.',
        number: 2
      },
      {
        instruction: 'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
        number: 3
      },
      {
        instruction: 'Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.',
        number: 4
      },
      {
        instruction: 'Bake for 9 to 10 minutes, or until you see the edges start to brown.',
        number: 5
      },
      {
        instruction: 'Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.',
        number: 6
      }
    ]);
  });



});
