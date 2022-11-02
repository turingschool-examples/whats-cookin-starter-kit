import chai from 'chai';
const expect = chai.expect;
import Pantry from '../src/classes/Pantry';
import userData from '../src/test-data/Pantry-test-data';
import User from '../src/classes/User';
import recipe from '../src/test-data/Recipe-data';
import dummy from '../src/test-data/ingredient-test-data';

describe('Pantry describe block', () => {
 let user;
 let fancyPantry;

  beforeEach(() => {
  user = new User(userData);
  fancyPantry = new Pantry(user);
  user.pantry = fancyPantry;

  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should have a pantry', function() {
    expect(fancyPantry.pantry).to.deep.equal(userData.pantry);
  });

  it('should push missing ingredients to missingIngredients array', function() {
    recipe.ingredients[4].quantity.amount = 2;
    expect(fancyPantry.checkIngredients(recipe)).to.deep.equal([
        { id: 19334, quantity: { amount: 0.5, unit: 'c' } },
        { id: 1012047, quantity: { amount: 24, unit: 'servings' } },
        { id: 10019903, quantity: { amount: 2, unit: 'c' } }
      ]);
  });

  it('should push insufficient amount ingredients to missingIngredients array', function() {
    recipe.ingredients[4].quantity.amount = 3;
    expect(fancyPantry.checkIngredients(recipe)).to.deep.equal([
        { id: 19206, quantity: { amount: 1, unit: 'Tbsp'} },
        { id: 19334, quantity: { amount: 0.5, unit: 'c' } },
        { id: 1012047, quantity: { amount: 24, unit: 'servings' } },
        { id: 10019903, quantity: { amount: 2, unit: 'c' } }
      ]);
  });

    it.only('should add a name property to the objects in the missingIngredients array', function() {
      let checkedIngredients = fancyPantry.checkIngredients(recipe);
      expect(fancyPantry.getIngredientNames(checkedIngredients, dummy)).to.deep.equal([
        {
          id: 19206,
          quantity: { amount: 1, unit: 'Tbsp' },
          name: 'instant vanilla pudding'
        },
        {
          id: 19334,
          quantity: { amount: 0.5, unit: 'c' },
          name: 'brown sugar'
        },
        {
          id: 1012047,
          quantity: { amount: 24, unit: 'servings' },
          name: 'fine sea salt'
        },
        {
          id: 10019903,
          quantity: { amount: 2, unit: 'c' },
          name: 'semi sweet chips'
        }
      ])
    });




});
