import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import ingredientsData from '../src/data/ingredients'

describe('Recipe', function() {
    var recipe;
    beforeEach(() => {
    let recipeInfo = {
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
        },
        {
            "id": 19335,
            "quantity": {
            "amount": 0.5,
            "unit": "c"
            }
        },
        {
            "id": 19206,
            "quantity": {
            "amount": 3,
            "unit": "Tbsp"
            }
        },
        {
            "id": 19334,
            "quantity": {
            "amount": 0.5,
            "unit": "c"
            }
        },
        {
            "id": 2047,
            "quantity": {
            "amount": 0.5,
            "unit": "tsp"
            }
        },
        {
            "id": 1012047,
            "quantity": {
            "amount": 24,
            "unit": "servings"
            }
        },
        {
            "id": 10019903,
            "quantity": {
            "amount": 2,
            "unit": "c"
            }
        },
        {
            "id": 1145,
            "quantity": {
            "amount": 0.5,
            "unit": "c"
            }
        },
        {
            "id": 2050,
            "quantity": {
            "amount": 0.5,
            "unit": "tsp"
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
    }
    recipe = new Recipe(ingredientsData,recipeInfo)
})
    it('should be a function', function() {
      expect(Recipe).to.be.a('function');
    });
  
    it('should be an instance of Recipe', function() {
      expect(recipe).to.be.an.instanceof(Recipe);
    }); 
    
    it('should store a master list of ingredients', function() {
      expect(recipe.ingredientsMasterList).to.equal(ingredientsData);
    });
    
    it('should store a list of the ingredients needed for the specific recipe', function() {
      expect(recipe.recipeIngredients).to.deep.equal([
        { id: 20081, quantity: { amount: 1.5, unit: 'c' } },
        { id: 18372, quantity: { amount: 0.5, unit: 'tsp' } },
        { id: 1123, quantity: { amount: 1, unit: 'large' } },
        { id: 19335, quantity: { amount: 0.5, unit: 'c' } },
        { id: 19206, quantity: { amount: 3, unit: 'Tbsp' } },
        { id: 19334, quantity: { amount: 0.5, unit: 'c' } },
        { id: 2047, quantity: { amount: 0.5, unit: 'tsp' } },
        { id: 1012047, quantity: { amount: 24, unit: 'servings' } },
        { id: 10019903, quantity: { amount: 2, unit: 'c' } },
        { id: 1145, quantity: { amount: 0.5, unit: 'c' } },
        { id: 2050, quantity: { amount: 0.5, unit: 'tsp' } }
      ]);
    });

    it('should store a master list of ingredients', function() {
      expect(recipe.ingredientsMasterList).to.equal(ingredientsData);
    });

    it('should store a list of the combined ingredients for the recipe', function() {
        expect(recipe.modifiedData).to.deep.equal([
            {
              id: 20081,
              name: 'wheat flour',
              estimatedCostInCents: 142,
              quantity: { amount: 1.5, unit: 'c' }
            },
            {
              id: 18372,
              name: 'bicarbonate of soda',
              estimatedCostInCents: 582,
              quantity: { amount: 0.5, unit: 'tsp' }
            },
            {
              id: 1123,
              name: 'eggs',
              estimatedCostInCents: 472,
              quantity: { amount: 1, unit: 'large' }
            },
            {
              id: 19335,
              name: 'sucrose',
              estimatedCostInCents: 902,
              quantity: { amount: 0.5, unit: 'c' }
            },
            {
              id: 19206,
              name: 'instant vanilla pudding',
              estimatedCostInCents: 660,
              quantity: { amount: 3, unit: 'Tbsp' }
            },
            {
              id: 19334,
              name: 'brown sugar',
              estimatedCostInCents: 559,
              quantity: { amount: 0.5, unit: 'c' }
            },
            {
              id: 2047,
              name: 'salt',
              estimatedCostInCents: 280,
              quantity: { amount: 0.5, unit: 'tsp' }
            },
            {
              id: 1012047,
              name: 'fine sea salt',
              estimatedCostInCents: 528,
              quantity: { amount: 24, unit: 'servings' }
            },
            {
              id: 10019903,
              name: 'semi sweet chips',
              estimatedCostInCents: 253,
              quantity: { amount: 2, unit: 'c' }
            },
            {
              id: 1145,
              name: 'unsalted butter',
              estimatedCostInCents: 617,
              quantity: { amount: 0.5, unit: 'c' }
            },
            {
              id: 2050,
              name: 'vanilla',
              estimatedCostInCents: 926,
              quantity: { amount: 0.5, unit: 'tsp' }
            }
          ]);
    });

    it('should store an id for the recipe', function() {
      expect(recipe.id).to.equal(595736);
    });

    it('should store an image url', function() {
        expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
    });

    it('should store an instructions array storing objects', function() {
        expect(recipe.instructions).to.deep.equal([
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
            ]);
    });

    it('should store a recipe name', function() {
        expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    });

    it('should store an array of recipe tags', function() {
        expect(recipe.tags).to.deep.equal([
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
            ]);
    });

    it('should store a list of the ingredient names needed for the recipe', function() {
      expect(recipe.modifiedIngredients).to.deep.equal([
        'wheat flour',
        'bicarbonate of soda',
        'eggs',
        'sucrose',
        'instant vanilla pudding',
        'brown sugar',
        'salt',
        'fine sea salt',
        'semi sweet chips',
        'unsalted butter',
        'vanilla'
      ]);
    });

    it('should have a method that returns a list of the combined ingredients from the master list and the recipe', function() {
      expect(recipe.combinedIngredients()).to.deep.equal(recipe.modifiedData);
    });

    it('should have a method that gives a list of the names of ingredients needed', function() {
        expect(recipe.ingredientsNeeded()).to.deep.equal(["wheat flour","bicarbonate of soda","eggs","sucrose","instant vanilla pudding","brown sugar","salt","fine sea salt","semi sweet chips","unsalted butter","vanilla"]);
    });

    it('should have a method that returns the cost of the recipe', function() {
        expect(recipe.getIngredientsCost()).to.deep.equal(17776);
    });

    it('should have a method that returns the recipe instructions', function() {
        expect(recipe.getInstructions()).to.deep.equal([
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
          ]);
    });
  });