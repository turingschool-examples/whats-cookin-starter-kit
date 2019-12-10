const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');
const Ingredient = require('../src/ingredients.js');


describe('Recipe', function() {
  let ingredients, recipe;
  beforeEach(() => {
    recipe = new Recipe(595736,
      'Loaded Chocolate Chip Pudding Cookie Cups',
      'https://spoonacular.com/recipeImages/595736-556x370.jpg',
      ['antipasti', 'starter', 'snack'],
      ["In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."],
      [{
          "name": "all purpose flour",
          "id": 20081,
          "quanitity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "name": "baking soda",
          "id": 18372,
          "quanitity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ]);

      ingredient = new Ingredient(20081, "wheat flour", 142);
      ingredient2 = new Ingredient(18372, "baking soda", 582);

  });


    it('should be a function', function() {
      expect(Recipe).to.be.a('function');
    });

    it('should instantiate a new recipe', function() {
      expect(recipe).to.be.an.instanceof(Recipe);
    });


    describe('stored data', function() {
      it('should know the correct ID number', function() {
        expect(recipe.id).to.equal(595736);
      });

      it('should know the correct name', function() {
        expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
      });

      it('should know the correct image', function() {
        expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
      });

      it('should know the stored instructions', function() {
        expect(recipe.instructions).to.deep.equal(["In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."],
)
      });

      it('should know the stored tags', function() {
        expect(recipe.tags).to.deep.equal(['antipasti', 'starter', 'snack']);
      });

    });

    it.skip('should know the cost of the recipe per ingredient', function() {
      recipe.findCostPerRecipe(recipe);
      expect(recipe.findCostPerRecipe()).to.equal(142)
    });

    it('should hold the ingredientPerRecipe', function() {
      recipe.findIngredientPerRecipe(recipe);
      expect(recipe.ingredientPerRecipe).to.deep.equal([{
          "name": "all purpose flour",
          "id": 20081,
          "quanitity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "name": "baking soda",
          "id": 18372,
          "quanitity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ])
    });

    it('should retrieve instructions for recipe', function() {
      expect(recipe.retrieveInstructions(recipe)).to.deep.equal(["In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."])
    });
});
