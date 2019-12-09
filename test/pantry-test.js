const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/pantry.js');
const User = require('../src/user.js');
const Recipe = require('../src/recipe.js');


describe('Pantry', function() {

  let pantry, user, recipe;

  beforeEach(() => {
    recipe = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack'], ['Add egg and vanilla and mix until combined.'],
    [{
      "name": "all purpose flour",
      "id": 20081,
      "quanitity": {
        "amount": 1,
        "unit": "cup"
      }
    }, {
      "name": "baking soda",
      "id": 18372,
      "quanitity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }]);
    user = new User(1,'Saige O\'Kon', [{'ingredient': 20081, 'amount': 2}, {'ingredient': 18372, 'amount': 2}], recipe);
    pantry = new Pantry();
  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should instantiate a new pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it.skip('should store the pantry/ingredients', function() {
    expect(pantry.stockedIngredients).to.deep.equal([{'ingredient': 20081, 'amount': 2}, {'ingredient': 18372, 'amount': 2}]);
  });

  describe('canCookMeals', function() {

    it('should have method canCookMeals return true if user CAN make meal', function() {
      expect(pantry.canCookMeals(user)).to.equal(true)
    });

    it.skip('should have method canCookMeals return false if user CANNOT make meal', function() {
      let user2 = new User(2,'Sam Smith', []);
      expect(pantry.canCookMeals(user2)).to.equal(false)
    });

  });

  it('should have a method findIngredients in the pantry', function() {
    expect(pantry.findIngredients(user)).to.deep.equal([{ ingredient: 20081, amount: 2 }, { ingredient: 18372, amount: 2 }]);
  });

  it('should have a method removeAfterCooking ingredients removed from pantry', function() {
    pantry.canCookMeals(user);
    expect(pantry.removeAfterCooking(user)).to.deep.equal([{'ingredient': 20081, 'amount': 1}, {'ingredient': 18372, 'amount': 1}]);
  });

});
