const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe-class');
const Ingredient = require('../src/Ingredients-class');

describe('Recipe', function() {

  let recipe;
  let ingredient;

  beforeEach(function() {

    recipe1 = new Recipe({
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
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
            {
                "id": 1123,
                "quantity": {
                    "amount": 1,
                    "unit": "large"
                }
            }
        ],
      "instructions": [
            {
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
            }
        ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
            "antipasti",
            "starter",
            "snack",
        ]
    });

    ingredient1 = new Ingredient(20081, "wheat flour", 142);
    ingredient2 = new Ingredient(18372, "bicarbonate of soda", 582);
    ingredient3 = new Ingredient(1123, "eggs", 472);
  });

  it('should be an instance of Recipe', function() {
    expect(recipe1).to.be.an.instanceOf(Recipe);
  });

  it('should have an id', function() {
    expect(recipe1.id).to.equal(595736);
  });

  it('should have an image', function() {
    expect(recipe1.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should have a list of ingredients needed to make the recipe', function() {
    expect(recipe1.ingredients).to.deep.equal([{
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
    {
        "id": 1123,
        "quantity": {
            "amount": 1,
            "unit": "large"
        }
    }]);
  });

  it('should have a list of corresponding instructions', function() {
    expect(recipe1.instructions).to.deep.equal([
          {
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
          }
      ]);
  });

  it('should have a name', function() {
    expect(recipe1.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  });

  it('should have a list of tags', function() {
    expect(recipe1.tags).to.deep.equal([
          "antipasti",
          "starter",
          "snack",
      ]);
  });

  it('should be able to get the correct ingredients id\'s', function() {
    recipe1.matchIngredientsIds();
    expect(recipe1.matchIngredientsIds()).to.deep.equal([{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    }]);
  })

  it('should be able to get the total cost of ingredients needed to make recipe', function() {
    recipe1.getIngredientsCost();
    expect(recipe1.getIngredientsCost()).to.equal(1196);
  });

  it('should return the instructions to make the recipe', function() {
    recipe1.getInstructions();
    expect(recipe1.getInstructions()).to.deep.equal([
          {
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
          }
      ]);
  });
  // it should have a quantity - just in the recipe?
      // which holds the amount and the meassuring unit
});
