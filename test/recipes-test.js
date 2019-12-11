const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipes');
const recipeInfo = require('../data/recipes')

let recipe;

// all Recipe methods are manipulating DOM, not required to test those
describe('Recipes', function() {

  beforeEach(() => {
    recipe = new Recipe({
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [{
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
      ],
      "instructions": [{
        "number": 1,
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
      }], "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    });
  });

  it('should be an instance of a Recipe', function() {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should have a name', function() {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')
  });

  it('should have an id', function() {
    expect(recipe.id).to.equal(595736)
  });

  it('should have a unique image', function() {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients")
  });

  it('should have instructions', function() {
    expect(recipe.instructions.length).to.equal(1)

  });
  it('should have a list of ingredients', function() {
    expect(recipe.ingredients.length).to.equal(2)
  });

  it('should have tags', function() {
    expect(recipe.tags.length).to.equal(6)
  });
});
